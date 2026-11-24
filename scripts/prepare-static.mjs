import { copyFile, readFile, writeFile } from "node:fs/promises";

// Publish only dist/public. No Express server, email credentials, or database
// connection is needed for the current portfolio.
const output = new URL("../dist/public/", import.meta.url);
await copyFile(
  new URL("../attached_assets/steinway-piano-bg.jpg", import.meta.url),
  new URL("social-preview.jpg", output),
);

let html = await readFile(new URL("index.html", output), "utf8");
if (process.env.PAGES_SITE_URL) {
  const site = new URL(process.env.PAGES_SITE_URL);
  if (!["https:", "http:"].includes(site.protocol)) {
    throw new Error("PAGES_SITE_URL must be an HTTP or HTTPS website URL.");
  }
  site.pathname = `${site.pathname.replace(/\/$/, "")}/`;
  const escapeAttribute = (value) =>
    value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
  const siteUrl = escapeAttribute(site.href);
  const imageUrl = escapeAttribute(new URL("social-preview.jpg", site).href);
  html = html
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${siteUrl}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${siteUrl}"`)
    .replace(/(<meta property="og:image" content=")[^"]*"/, `$1${imageUrl}"`)
    .replace(/(<meta name="twitter:image" content=")[^"]*"/, `$1${imageUrl}"`);
} else {
  // Keep the existing canonical domain when no new site URL is supplied.
  html = html.replaceAll(
    "https://lewischung.com/attached_assets/steinway-piano-bg.jpg",
    "https://lewischung.com/social-preview.jpg",
  );
}

await writeFile(new URL("index.html", output), html);
await writeFile(new URL("404.html", output), html);
await writeFile(new URL(".nojekyll", output), "");
console.log("Static website ready in dist/public.");
