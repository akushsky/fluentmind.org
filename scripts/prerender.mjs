import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const distDir = resolve(root, "dist");
const ssrDir = resolve(root, "dist-ssr");

const { render, PAGE_META, SITE_URL } = await import(
  pathToFileURL(resolve(ssrDir, "entry-server.js")).href
);

const template = await readFile(resolve(distDir, "index.html"), "utf8");

const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

function applyMeta(html, { title, description, path }) {
  const url = `${SITE_URL}${path}`;
  const replacements = [
    [/<title>.*?<\/title>/, `<title>${title}</title>`],
    [/(<meta name="description" content=")[^"]*(")/, `$1${escapeAttr(description)}$2`],
    [/(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttr(title)}$2`],
    [/(<meta property="og:description" content=")[^"]*(")/, `$1${escapeAttr(description)}$2`],
    [/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`],
    [/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`],
  ];
  return replacements.reduce((acc, [pattern, value]) => {
    if (!pattern.test(acc)) throw new Error(`prerender: template has no match for ${pattern}`);
    return acc.replace(pattern, value);
  }, html);
}

for (const meta of Object.values(PAGE_META)) {
  const body = render(meta.path);
  const html = applyMeta(
    template.replace('<div id="root"></div>', `<div id="root">${body}</div>`),
    meta
  );
  const file = meta.path === "/" ? "index.html" : `${meta.path.slice(1)}.html`;
  await mkdir(distDir, { recursive: true });
  await writeFile(resolve(distDir, file), html);
  console.log(`prerendered ${meta.path} -> dist/${file}`);
}

await rm(ssrDir, { recursive: true, force: true });
