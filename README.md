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

See inline `TODO` comments in `index.html` and `assets/script.js`:

1. Real Amazon Storefront affiliate URL
2. Real ShopMy URL
3. Active Promotion row — currently commented out in `index.html`; uncomment and fill in when a promo goes live
4. Real Instagram and TikTok profile URLs on the social icons
5. Real TikTok video embeds (3 placeholder cards)
6. Listmonk newsletter integration — set `LISTMONK_ENDPOINT` in `assets/script.js`, and add the list UUID hidden field to the form in `index.html` (see comment there)
7. Follower/like counts are static text in `index.html` — update manually, or wire to a live data source later
8. Custom domain — once set up, add a `CNAME` file at the repo root with the domain, and point DNS at GitHub Pages

## Design source

The original high-fidelity design handoff (component-tool prototype + spec) this was built from lives outside this repo; `index.html`/`assets/style.css` are the plain-HTML recreation of that spec.
