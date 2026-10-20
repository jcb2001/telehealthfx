/**
 * ZoomReferral Unified Google Analytics 4 (GA4) & Webinar Funnel Event Bridge
 * Measurement ID: G-3EYHD6QB47
 */
(function () {
  var GA4_MEASUREMENT_ID = "G-3EYHD6QB47";

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  // Ensure gtag.js is loaded if a page only includes /assets/js/analytics.js
  if (!document.querySelector('script[src*="googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID + '"]')) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_MEASUREMENT_ID;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA4_MEASUREMENT_ID);
  }

  /**
   * Helper called automatically by the Webinar Registration, Waiting Room, and Broadcast Room
   */
  window.zrTrackEvent = function (eventName, params) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, params || {});
      }
    } catch (_) {}
  };
})();
