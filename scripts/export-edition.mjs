// Regenerate the checked-in static article pages from the public edition data.
import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
const context = vm.createContext({});
vm.runInContext(
  (await fs.readFile("edition-data.js", "utf8")) +
    "\n" +
    (await fs.readFile("edition.js", "utf8")) +
    "\nglobalThis.exported = RevisedEdition.articles.map(a=>({article:a, html:RevisedEdition.render(a)}));",
  context,
);
const shell = await fs.readFile("index.html", "utf8");
const escape = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const origin = "https://african-governance-stethoscope.vercel.app";
const paths = [];
for (const { article: a, html } of context.exported) {
  const route = a.path + "/";
  const folder = path.resolve("." + a.path);
  if (!folder.startsWith(process.cwd() + path.sep))
    throw new Error("Output outside workspace");
  await fs.mkdir(folder, { recursive: true });
  let document = shell.replace(
    '<main id="main" tabindex="-1"></main>',
    `<main id="main" tabindex="-1">${html}</main>`,
  );
  if (a.category !== "methodology")
    document = document.replace(
      'property="og:type" content="website"',
      'property="og:type" content="article"',
    );
  if (!document.includes(html)) throw new Error("Main shell insertion failed");
  document = document.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escape(a.title)} | The African Governance Stethoscope</title>`,
  );
  document = document.replace(
    /(<meta\s+name="description"\s+content=")[^"]*("\s*\/>)/,
    `$1${escape(a.excerpt)}$2`,
  );
  document = document.replace(
    /(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/>)/,
    `$1${escape(a.title)}$2`,
  );
  document = document.replace(
    /(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/>)/,
    `$1${escape(a.excerpt)}$2`,
  );
  document = document.replace(
    "</head>",
    `<link rel="canonical" href="${origin + route}"><meta property="og:url" content="${origin + route}"></head>`,
  );
  await fs.writeFile(path.join(folder, "index.html"), document);
  paths.push(route);
  console.log(route);
}
await fs.writeFile(
  "sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    ["/", ...paths].map((p) => `<url><loc>${origin + p}</loc></url>`).join("") +
    "</urlset>\n",
);
await fs.writeFile(
  "robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
);
