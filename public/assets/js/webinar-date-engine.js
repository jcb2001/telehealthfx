/**
 * ZoomReferral Webinar Dynamic Date & Key Moment Hydration Engine
 * - Hydrates EducationEvent and BroadcastEvent schema with upcoming session windows (2:00 PM & 6:00 PM)
 * - Updates WebPage.dateModified to keep Google Search rich results evergreen
 * - Handles Google Video Key Moments deep-linking (?t={seconds}) and VIP passes (?vip=1)
 */
(function(d) {
  if (!d) return;

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function getNextSession() {
    var now = new Date();
    var currentHour = now.getHours();
    var start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var end = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    if (currentHour < 14) {
      // Slot 1: Today at 2:00 PM local time
      start.setHours(14, 0, 0, 0);
      end.setHours(15, 30, 0, 0);
    } else if (currentHour < 18) {
      // Slot 2: Today at 6:00 PM local time
      start.setHours(18, 0, 0, 0);
      end.setHours(19, 30, 0, 0);
    } else {
      // Slot 3: Tomorrow at 2:00 PM local time
      start.setDate(start.getDate() + 1);
      start.setHours(14, 0, 0, 0);
      end.setDate(end.getDate() + 1);
      end.setHours(15, 30, 0, 0);
    }
    return { start: start, end: end };
  }

  function formatISOWithTz(date) {
    var tzOffset = -date.getTimezoneOffset();
    var sign = tzOffset >= 0 ? '+' : '-';
    var absOffset = Math.abs(tzOffset);
    var hours = pad(Math.floor(absOffset / 60));
    var mins = pad(absOffset % 60);
    return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      sign + hours + ':' + mins;
  }

  function hydrateSchema() {
    var session = getNextSession();
    var startISO = formatISOWithTz(session.start);
    var endISO = formatISOWithTz(session.end);
    var nowISO = formatISOWithTz(new Date());

    var scripts = d.querySelectorAll('script[type="application/ld+json"]');
    for (var s = 0; s < scripts.length; s++) {
      try {
        var raw = scripts[s].textContent;
        if (!raw || (raw.indexOf('EducationEvent') === -1 && raw.indexOf('BroadcastEvent') === -1)) continue;
        var data = JSON.parse(raw);
        var changed = false;

        function walk(node) {
          if (!node || typeof node !== 'object') return;
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) walk(node[i]);
            return;
          }
          if (node['@type'] === 'EducationEvent' || node['@type'] === 'BroadcastEvent') {
            node.startDate = startISO;
            node.endDate = endISO;
            changed = true;
          }
          if (node['@type'] === 'WebPage') {
            node.dateModified = nowISO;
            changed = true;
          }
          if (node['@graph']) walk(node['@graph']);
        }

        walk(data);
        if (changed) {
          scripts[s].textContent = JSON.stringify(data, null, 2);
        }
      } catch (e) {}
    }

    // Hydrate any visible session chips
    var chips = d.querySelectorAll('[data-session-badge], #wj-session-date');
    if (chips.length > 0) {
      var isToday = session.start.getDate() === (new Date()).getDate();
      var timeStr = session.start.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      var badgeText = (isToday ? 'Today at ' : 'Tomorrow at ') + timeStr;
      for (var c = 0; c < chips.length; c++) {
        chips[c].textContent = badgeText;
      }
    }
  }

  function handleDeepLinkSeek() {
    var urlParams = new URLSearchParams(window.location.search);
    var hasT = urlParams.has('t') || urlParams.has('seek');
    var hasVip = urlParams.get('vip') === '1' || urlParams.get('room') === '1' || window.location.hash === '#watch';

    if (hasT || hasVip) {
      var seekSec = parseFloat(urlParams.get('t') || urlParams.get('seek') || '0');
      var urlName = urlParams.get('name') || 'Guest';
      var urlRegId = urlParams.get('regId') || null;

      // Enter watch room if enterWatchRoom is defined on window
      if (typeof window.enterWatchRoom === 'function') {
        window.enterWatchRoom(urlName, false, urlRegId);
      }

      if (seekSec > 0) {
        var attempts = 0;
        var seekInterval = setInterval(function() {
          attempts++;
          var vid = d.getElementById('wj-broadcast-video');
          if (vid && vid.readyState >= 1) {
            vid.currentTime = seekSec;
            if (typeof window.lastValidWatchTime !== 'undefined') {
              window.lastValidWatchTime = seekSec;
            }
            clearInterval(seekInterval);
          }
          if (attempts > 30) clearInterval(seekInterval);
        }, 200);
      }
    }
  }

  if (d.readyState === 'loading') {
    d.addEventListener('DOMContentLoaded', function() {
      hydrateSchema();
      handleDeepLinkSeek();
    });
  } else {
    hydrateSchema();
    handleDeepLinkSeek();
  }
})(typeof document !== 'undefined' ? document : null);
