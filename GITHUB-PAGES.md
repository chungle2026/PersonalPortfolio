# Publish this website on GitHub Pages

The current portfolio works as a static website. Its biography, images,
YouTube embeds, email text and Instagram link do not need a backend.

## One-time setup

1. Push this project, including `.github/workflows/deploy-pages.yml`, to your
   GitHub repository's **default branch** (usually `main`).
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open **Actions → Deploy website to GitHub Pages → Run workflow**, select
   the default branch, and run it. Subsequent pushes to that branch deploy
   automatically.
5. Once the workflow succeeds, find the website address in **Settings → Pages**
   or in the workflow's deployment link.

GitHub Pages must be available for your repository and account plan. A public
repository can use GitHub Pages on GitHub Free; private repositories require a
plan that supports Pages. The published site may be public even if the source
repository is private.

The workflow reads your Pages address automatically, so repository-based URLs,
user/organization sites and custom domains use the correct asset paths.
For a custom domain, configure it in **Settings → Pages**, follow GitHub's DNS
instructions, and run the workflow again. No DNS changes are made by this code.

## Local checks

```sh
npm ci
npm run build:static
npm run test:static
npm run preview:static
```

To test under a repository prefix:

```sh
PAGES_BASE_PATH=/music-portfolio/ PAGES_SITE_URL=https://example.github.io/music-portfolio/ npm run build:static
PAGES_BASE_PATH=/music-portfolio/ PAGES_SITE_URL=https://example.github.io/music-portfolio/ npm run test:static
PAGES_BASE_PATH=/music-portfolio/ npm run preview:static
```

Visit the `/music-portfolio/` path on the preview server.

## Replit compatibility and secrets

- `npm run dev` still runs the existing Replit preview.
- `npm run build` and `npm start` still support the existing Express hosting.
- GitHub Pages publishes **only `dist/public`**, not the server or original uploads.
- No Gmail password, session secret or database URL is needed in GitHub Actions.
  Never commit `.env` files or credentials to the repository.
- The old contact-form backend is retained for compatibility but is not built
  or run on GitHub Pages. Restoring a form that sends email would require a
  separate service.
