# arimar_web

Ariana Del Mar's link-in-bio page. Plain static HTML/CSS/JS, deployed via GitHub Pages — no build step.

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

## Deploying

GitHub Pages is served straight from this repo (Settings → Pages → Deploy from a branch → `main` / `/ (root)`). Any push to `main` updates the live site.

## Outstanding stubs before launch

See inline `TODO` comments in `index.html`:

1. Active Promotion row — currently commented out in `index.html`; uncomment and fill in when a promo goes live
2. Firmo offer row — real destination URL still needed (code `XPFD50` is real)
3. Follower/like counts are static text in `index.html` — update manually, or wire to a live data source later
4. Custom domain — once set up, add a `CNAME` file at the repo root with the domain, and point DNS at GitHub Pages

This branch (`simple-launch`) is a stripped-down version for a quick first publish — no newsletter signup or "Latest TikToks" section. Those live on `main`.

## Design source

The original high-fidelity design handoff (component-tool prototype + spec) this was built from lives outside this repo; `index.html`/`assets/style.css` are the plain-HTML recreation of that spec.
