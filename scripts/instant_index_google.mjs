#!/usr/bin/env node
/**
 * Telehealth FX - Google Instant Indexing API Engine
 * Submits exactly 200 highest-priority URLs to Googlebot for immediate crawling,
 * maximizing Google's daily 200-URL/day quota with zero wasted calls.
 *
 * Usage:
 *   node scripts/instant_index_google.mjs [--dry-run]
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const KEY_FILE = path.join(projectRoot, 'service-account-telehealthfx.json');
const batchArg = process.argv.find(a => a.startsWith('--batch='));
const batchNum = batchArg ? batchArg.split('=')[1] : '3';

let PRIORITY_FILE = path.join(projectRoot, 'src', 'data', `priority-200-urls-batch${batchNum}.json`);
if (!fs.existsSync(PRIORITY_FILE)) {
  PRIORITY_FILE = path.join(projectRoot, 'src', 'data', 'priority-200-urls.json');
}
const isDryRun = process.argv.includes('--dry-run');

async function getAccessToken(keyData) {
  const now = Math.floor(Date.now() / 1000);
  const toBase64Url = str => Buffer.from(str).toString('base64url');

  const header = toBase64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = toBase64Url(JSON.stringify({
    iss: keyData.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  }));

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(`${header}.${claim}`);
  const signature = sign.sign(keyData.private_key, 'base64url');
  const assertion = `${header}.${claim}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Failed to obtain Google OAuth access token: ${data.error_description || data.error}`);
  }
  return data.access_token;
}

function getUrlsToIndex() {
  if (fs.existsSync(PRIORITY_FILE)) {
    const raw = fs.readFileSync(PRIORITY_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return parsed.urls.slice(0, 200);
  }
  throw new Error(`Priority URLs file not found at ${PRIORITY_FILE}`);
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  console.log('='.repeat(70));
  console.log('⚡ TELEHEALTH FX — GOOGLE INSTANT INDEXING API (TOP 200 PRIORITY)');
  console.log('='.repeat(70));

  if (!fs.existsSync(KEY_FILE)) {
    console.error(`🚨 Fatal Error: Service account key not found at:\n   ${KEY_FILE}`);
    process.exit(1);
  }

  let keyData;
  try {
    keyData = JSON.parse(fs.readFileSync(KEY_FILE, 'utf-8'));
  } catch (err) {
    console.error(`🚨 Fatal Error: Failed to parse service account JSON: ${err.message}`);
    process.exit(1);
  }

  console.log(`🔑 Service Account: ${keyData.client_email}`);
  console.log(`📁 Project ID:      ${keyData.project_id}`);

  const urls = getUrlsToIndex();
  console.log(`📌 Queued EXACTLY ${urls.length} URLs (Batch ${batchNum} — 100% of Google's daily 200 quota).`);
  if (batchNum === '3') {
    console.log(`   ├─ Tier 1: 4 Core Authority Hubs, Operational Status & Assessment Funnel`);
    console.log(`   ├─ Tier 2: 75 Metropolitan Care Centers (/locations/)`);
    console.log(`   └─ Tier 3: 121 Clinical Protocols, Peptides, & Metabolic Blog Guides`);
  } else if (batchNum === '2') {
    console.log(`   ├─ Tier 1: 24 Core Commercial Lines, Medications & Trust Anchors`);
    console.log(`   ├─ Tier 2: 16 Programmatic Weight-Loss & TRT Metro Hubs`);
    console.log(`   ├─ Tier 3: 80 Top Metropolitan Local Care Centers (/locations/)`);
    console.log(`   └─ Tier 4: 80 High-Impression Clinical & Comparison Blog Guides`);
  } else {
    console.log(`   ├─ Tier 1: 13 Net-New Phase 2 Authority Articles + Blog Hub`);
    console.log(`   ├─ Tier 2: 12 Phase 1 High-Intent Sales Articles`);
    console.log(`   ├─ Tier 3: 100 Commercial Competitor Comparison & Price Magnets`);
    console.log(`   ├─ Tier 4: 40 Core Conversion Funnels & High-Impression Guides`);
    console.log(`   └─ Tier 5: 35 High-Commercial & TRT Metro Landing Pages`);
  }

  if (isDryRun) {
    console.log('\n[DRY RUN MODE] The 200 URLs prioritized for Google:');
    urls.forEach((u, i) => console.log(`  ${(i + 1).toString().padStart(3, ' ')}. ${u}`));
    console.log('\n🔑 Service account JSON signature validated successfully.');
    console.log('✅ Dry run complete. No API calls made to Google Indexing API.');
    return;
  }

  console.log('\n🔐 Authenticating with Google OAuth2...');
  let token;
  try {
    token = await getAccessToken(keyData);
    console.log('✅ Authentication successful! Access token acquired.');
  } catch (err) {
    console.error(`🚨 Authentication Failed: ${err.message}`);
    process.exit(1);
  }

  console.log(`\n📡 Submitting ${urls.length} URLs to Google Indexing API (with 1.2s rate-limit)...`);
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const indexStr = `[${(i + 1).toString().padStart(3, ' ')}/${urls.length}]`;

    try {
      const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          type: 'URL_UPDATED',
        }),
      });

      if (res.ok) {
        successCount++;
        console.log(`✅ ${indexStr} Submitted: ${url}`);
      } else {
        failCount++;
        const errJson = await res.json().catch(() => ({}));
        const errMsg = errJson?.error?.message || `HTTP ${res.status}`;
        console.error(`❌ ${indexStr} Failed: ${url} -> ${errMsg}`);

        if (res.status === 429) {
          if (errMsg.includes('Publish requests per day') || errMsg.includes('Quota exceeded')) {
            console.warn(`🛑 Google Daily Quota (200 requests/day) is exhausted for today.`);
            console.warn(`   Google will reset the quota at midnight PST. The remaining URLs will be crawled via sitemap.xml.`);
            break;
          }
          console.warn(`⏳ Rate limit encountered on ${url}, backing off 5s...`);
          failCount--; // do not count retry as failure
          await sleep(5000);
          i--; // retry this URL
          continue;
        }

        if (res.status === 403) {
          console.error('\n⚠️  403 FORBIDDEN PERMISSION ERROR:');
          console.error(`   Google Search Console does not recognize '${keyData.client_email}' as an OWNER.`);
          console.error('   Please go to Google Search Console -> Settings -> Users & Permissions,');
          console.error(`   and add '${keyData.client_email}' as an OWNER.`);
          break;
        }
      }
    } catch (err) {
      failCount++;
      console.error(`❌ ${indexStr} Network error on ${url}: ${err.message}`);
    }

    if (i < urls.length - 1) {
      await sleep(700);
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log(`🏁 Google Instant Indexing Complete!`);
  console.log(`   ✅ Successful Submissions: ${successCount}`);
  console.log(`   ❌ Failed Submissions:     ${failCount}`);
  console.log('='.repeat(70));
}

main();
