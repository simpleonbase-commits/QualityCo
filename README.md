# Quality Company Research Cell Website

A static website for Quality Company's early-stage Cancer Protein Complex Research Cell. The site explains the mission, the S100A10/p11 and annexin A2 research focus, the public-data-first workflow, and the safety boundary that keeps the project in literature review, public data analysis, and research organization only.

## Project Status

This is not a medical product, treatment claim, clinical service, or wet-lab operation. It is a website for organizing a lean research initiative around cancer-associated protein-complex behavior.

## Files

- `index.html` — page structure and research content.
- `styles.css` — responsive visual design.
- `script.js` — mobile navigation and reveal animations.

## Local Preview

Open `index.html` directly in a browser, or run a simple static server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Vercel Deployment

This is a zero-build static site and can be deployed directly to Vercel. The repository includes `vercel.json` so Vercel serves the root `index.html` and applies the basic static-site headers.

With the Vercel CLI installed, deploy the current directory to a production Vercel domain:

```bash
vercel --prod
```

If using an API token in automation, pass it through an environment variable rather than committing it to the repository:

```bash
VERCEL_TOKEN=your-token vercel --prod --token "$VERCEL_TOKEN"
```
