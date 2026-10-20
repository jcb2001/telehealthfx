/**
 * Katalys / RevOffers Unified Portfolio Postback Receiver
 * Endpoint: https://telehealthfx.com/api/katalys-postback
 *
 * Receives real-time conversion, partial-attribution, and funnel progress notifications
 * from Katalys across all 4 portfolio Traffic Sources:
 *   - 12322: Telehealth FX
 *   - 12648: Losing Weight US / Losing Weight RX
 *   - 14011: Get Skinny Online
 *   - 12417: Deals Direct Daily
 */

interface Env {
  CRM_WEBHOOK_URL?: string;
  META_PIXEL_ID?: string;
  META_CAPI_TOKEN?: string;
}

const BRAND_MAP: Record<string, string> = {
  '12322': 'Telehealth FX',
  '12648': 'Losing Weight RX',
  '14011': 'Get Skinny Online',
  '12417': 'Deals Direct Daily',
};

const OFFER_MAP: Record<string, string> = {
  '1548': 'Embody GLP-1 ($69 Promo)',
  '1344': 'Peter MD TRT ($89 Promo)',
  '1701': 'Musely Clinical Skincare',
  '1576': 'Gala Health GLP-1',
  '1632': 'CoreAge Rx GLP-1',
  '1630': 'HealthRX GLP-1',
};

const STATUS_MAP: Record<string, string> = {
  '0': 'Pending',
  '1': 'Approved (Payable)',
  '2': 'Rejected',
  '3': 'Pending Review',
  '4': 'Info / Tracked Event',
  '5': 'Partial Attribution (Touched)',
  '9': 'Deleted / Invalid',
};

async function parseIncomingData(request: Request): Promise<Record<string, any>> {
  const url = new URL(request.url);
  const queryParams = Object.fromEntries(url.searchParams.entries());
  let bodyParams: Record<string, any> = {};

  if (request.method === 'POST') {
    const contentType = (request.headers.get('content-type') || '').toLowerCase();
    const rawBody = await request.text();
    if (rawBody) {
      if (contentType.includes('application/json') || rawBody.trim().startsWith('{')) {
        try {
          bodyParams = JSON.parse(rawBody);
        } catch {
          bodyParams = { raw_body: rawBody };
        }
      } else {
        try {
          bodyParams = Object.fromEntries(new URLSearchParams(rawBody).entries());
        } catch {
          bodyParams = { raw_body: rawBody };
        }
      }
    }
  }

  return { ...queryParams, ...bodyParams };
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const params = await parseIncomingData(context.request);

    const affId = String(params.aff_id || params.affId || '');
    const offerId = String(params.offer_id || params.offerId || '');
    const transactionId = String(params.transaction_id || params.txid || '');
    const seq = String(params.seq || '');
    const payoutNum = parseFloat(String(params.payout ?? params.value ?? '0')) || 0;
    const convStatus = String(params.conversion_status ?? params.convStatus ?? params.status ?? '1');
    const actionType = String(params.action_type || 'conversion');
    const operation = String(params.postback_operation || 'create');

    const enrichedEvent = {
      type: 'katalys_postback',
      received_at: new Date().toISOString(),
      operation,
      action_type: actionType,
      aff_id: affId,
      brand_name: BRAND_MAP[affId] || `Partner (${affId || 'Unknown'})`,
      offer_id: offerId,
      offer_name: OFFER_MAP[offerId] || `Offer #${offerId || 'Unknown'}`,
      transaction_id: transactionId,
      seq,
      payout: payoutNum,
      is_payable: convStatus === '1' && payoutNum > 0,
      conversion_status: convStatus,
      status_label: STATUS_MAP[convStatus] || `Status ${convStatus}`,
      order_time: params.order_time || null,
      click_time: params.click_time || null,
      sub1: params.aff_sub1 || params.sub1 || '',
      sub2: params.aff_sub2 || params.sub2 || '',
      sub3: params.aff_sub3 || params.sub3 || '',
      sub4: params.aff_sub4 || params.sub4 || '',
      sub5: params.aff_sub5 || params.sub5 || '',
      source: params.aff_source || params.source || '',
    };

    console.log('[Katalys Postback]', JSON.stringify(enrichedEvent));

    const downstreamTasks: Promise<any>[] = [];

    // 1. Forward to CRM / Webhook if configured
    if (context.env.CRM_WEBHOOK_URL) {
      downstreamTasks.push(
        fetch(context.env.CRM_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(enrichedEvent),
        }).catch((err) => console.error('[Katalys Postback] CRM webhook error:', err))
      );
    }

    // 2. Forward payable conversions to Meta Conversions API (CAPI) if configured
    if (context.env.META_PIXEL_ID && context.env.META_CAPI_TOKEN && enrichedEvent.is_payable) {
      const eventTime = Math.floor(Date.now() / 1000);
      downstreamTasks.push(
        fetch(
          `https://graph.facebook.com/v21.0/${context.env.META_PIXEL_ID}/events?access_token=${context.env.META_CAPI_TOKEN}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              data: [
                {
                  event_name: 'Purchase',
                  event_time: eventTime,
                  event_id: seq || transactionId || `kat_${eventTime}`,
                  action_source: 'website',
                  custom_data: {
                    currency: 'USD',
                    value: payoutNum,
                    content_name: enrichedEvent.offer_name,
                    content_category: enrichedEvent.brand_name,
                    order_id: seq || transactionId,
                  },
                },
              ],
            }),
          }
        ).catch((err) => console.error('[Katalys Postback] Meta CAPI error:', err))
      );
    }

    if (downstreamTasks.length > 0) {
      await Promise.allSettled(downstreamTasks);
    }

    // Always return 200 OK so Katalys marks delivery successful
    return new Response(
      JSON.stringify({
        ok: true,
        status: 'received',
        event: enrichedEvent,
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err: any) {
    console.error('[Katalys Postback] Fatal error:', err);
    return new Response(
      JSON.stringify({
        ok: true,
        status: 'handled_error',
        message: err?.message || 'Processed with fallback',
      }),
      { status: 200, headers: corsHeaders }
    );
  }
};
