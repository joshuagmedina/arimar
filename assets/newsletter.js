const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xppzvbkq';

(function () {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  const status = document.getElementById('newsletter-status');
  const submitBtn = form.querySelector('.newsletter-submit');

  function setStatus(message, state) {
    status.textContent = message;
    status.dataset.state = state || '';
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    submitBtn.disabled = true;
    setStatus('Sending…', '');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('You’re subscribed — welcome aboard!', 'success');
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        const message =
          data && Array.isArray(data.errors) && data.errors.length
            ? data.errors.map((e) => e.message).join(', ')
            : 'Something went wrong. Please try again.';
        setStatus(message, 'error');
      }
    } catch (err) {
      setStatus('Something went wrong. Please try again.', 'error');
    } finally {
      submitBtn.disabled = false;
    }
  });
})();
