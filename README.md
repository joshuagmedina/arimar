# arimar_web

Ariana Del Mar's link-in-bio page. Plain static HTML/CSS/JS, deployed via GitHub Pages — no build step.

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

## Deploying

GitHub Pages is served straight from this repo (Settings → Pages → Deploy from a branch → `main` / `/ (root)`). Any push to `main` updates the live site at [arimar.me](https://arimar.me) (custom domain via the `CNAME` file at the repo root; DNS is on GoDaddy).

## Outstanding stubs before launch

See inline `TODO` comments in `index.html`:

1. Active Promotion row — currently commented out in `index.html`; uncomment and fill in when a promo goes live
2. Follower/like counts are static text in `index.html` — update manually, or wire to a live data source later

This branch (`main`) is the stripped-down version for a quick launch — no newsletter signup or "Latest TikToks" section. That fuller version lives on `feat/newsletter`.

## Design source

The original high-fidelity design handoff (component-tool prototype + spec) this was built from lives outside this repo; `index.html`/`assets/style.css` are the plain-HTML recreation of that spec.
