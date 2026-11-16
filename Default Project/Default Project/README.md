# Portfolio Website

A static portfolio site — plain HTML/CSS/JS, no build step required. Deploys to Vercel's hobby plan with zero configuration.

## Structure

```
index.html          ← all content: hero, credentials, design work, about, contact
css/style.css       ← theme (colors, fonts, spacing)
js/main.js          ← mobile menu, scroll reveal, lightbox (images + video)
assets/designs/     ← design work images (Kitewell AI campaign)
assets/certificates/← certificate images
```

## Site structure

1. **Hero** — "AI-fluent. Marketing-certified. Building."
2. **Credentials** — skill cards (Digital Marketing, Email Marketing, AI Fluency, Generative AI) + certificate gallery with lightbox
3. **Design Work** — Kitewell AI concept-brand campaign (images + animated promo)
4. **About / Contact**

## Adding your content

1. **Replace placeholders** — drop your images into `assets/designs/` and
   `assets/certificates/`, then update the `src` paths in `index.html`.
2. **Add an item** — copy any `<figure class="card" ...>...</figure>` block in
   `index.html`, paste it, and edit the image path, title, and description.
3. **Personalize** — search `index.html` for "Your Name", "you@example.com",
   and the social links (`yourusername`) and replace them.

## Preview locally

Just double-click `index.html`, or serve it with any static server
(e.g. `npx serve` or the Live Server VS Code extension).

## Deploying to Vercel

Easiest options (no Node needed):

- **Drag & drop:** go to [vercel.com/new](https://vercel.com/new), drag this
  whole folder into the deploy area — done.
- **GitHub:** push this folder to a GitHub repo, then import the repo at
  [vercel.com/new](https://vercel.com/new). Vercel auto-detects static sites
  (no framework preset needed). Every future `git push` redeploys automatically.

No `vercel.json` is required — static HTML is the default behavior.

## Customizing the theme

Colors live in the `:root` block at the top of `css/style.css`:

| Variable       | Purpose                        |
| -------------- | ------------------------------ |
| `--accent`     | Primary violet accent          |
| `--accent-2`   | Secondary teal accent          |
| `--bg`         | Page background                |
| `--surface`    | Card background                |
