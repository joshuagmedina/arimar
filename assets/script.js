// TODO: fill in once the Listmonk instance is set up.
// Get these from the Listmonk admin: Lists -> target list -> "Public page" / embed snippet.
const LISTMONK_ENDPOINT = ''; // e.g. 'https://newsletter.example.com/subscription/form'

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

    if (!LISTMONK_ENDPOINT) {
      setStatus('Newsletter signup isn’t connected yet — check back soon.', 'error');
      return;
    }

    submitBtn.disabled = true;
    setStatus('Sending…', '');

    try {
      const response = await fetch(LISTMONK_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('You’re subscribed — welcome aboard!', 'success');
        form.reset();
      } else {
        setStatus('Something went wrong. Please try again.', 'error');
      }
    } catch (err) {
      setStatus('Something went wrong. Please try again.', 'error');
    } finally {
      submitBtn.disabled = false;
    }
  });
})();
