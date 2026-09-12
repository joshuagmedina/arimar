(function () {
  var STORAGE_KEY = 'ga-consent';

  function getStoredConsent() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return null;
    }
  }

  function setStoredConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (err) {
      /* storage unavailable (private mode, etc.) — consent still applies for this page view */
    }
  }

  function updateConsent(granted) {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    }
  }

  var stored = getStoredConsent();

  if (stored === 'granted') {
    updateConsent(true);
  } else if (stored !== 'denied') {
    var banner = document.getElementById('consent-banner');
    if (banner) {
      banner.hidden = false;

      document.getElementById('consent-accept').addEventListener('click', function () {
        setStoredConsent('granted');
        updateConsent(true);
        banner.hidden = true;
      });

      document.getElementById('consent-decline').addEventListener('click', function () {
        setStoredConsent('denied');
        banner.hidden = true;
      });
    }
  }
})();
