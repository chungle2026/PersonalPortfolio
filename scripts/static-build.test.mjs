import assert from "node:assert/strict";
import { access, readdir, readFile, stat } from "node:fs/promises";
import { test } from "node:test";

const output = new URL("../dist/public/", import.meta.url);
const base = process.env.PAGES_BASE_PATH || "/";

test("built page loads its scripts and styles from the hosting prefix", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");
  const links = [...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g)];
  assert.ok(links.length >= 2, "Expected built JavaScript and CSS");
  for (const [, link] of links) {
    assert.ok(link.startsWith(base), `${link} must start with ${base}`);
    await access(new URL(link.slice(base.length), output));
  }
  assert.ok(!html.includes("replit-dev-banner"));
  if (process.env.PAGES_SITE_URL) {
    const site = `${process.env.PAGES_SITE_URL.replace(/\/$/, "")}/`;
    assert.ok(html.includes(`property="og:url" content="${site}"`));
    assert.ok(html.includes(`rel="canonical" href="${site}"`));
    assert.ok(html.includes(`content="${site}social-preview.jpg"`));
  }
});

test("static output includes photos, sharing image and a GitHub Pages fallback", async () => {
  const assets = await readdir(new URL("assets/", output));
  assert.ok(assets.some((asset) => /\.(jpg|jpeg|png)$/i.test(asset)));
  assert.ok((await stat(new URL("social-preview.jpg", output))).size > 0);
  await access(new URL(".nojekyll", output));
  assert.equal(
    await readFile(new URL("404.html", output), "utf8"),
    await readFile(new URL("index.html", output), "utf8"),
  );
  const files = await readdir(output);
  assert.ok(!files.includes("index.js"), "Do not publish the Express server");
  assert.ok(!files.some((file) => file.startsWith(".env")));
});
