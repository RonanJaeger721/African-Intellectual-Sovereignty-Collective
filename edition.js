/* Long-form publication views shared by the interactive shell and static exports. */
const RevisedEdition = {
  articles: revisedArticles,
  escape(value) {
    return String(value).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  },
  href(article) {
    return article.path + "/";
  },
  find(path) {
    return this.articles.find(
      (a) => a.path === ("/" + path).replace(/\/+/g, "/").replace(/\/$/, ""),
    );
  },
  rows(category = "all", query = "", country = "") {
    return this.articles
      .filter(
        (a) =>
          a.category !== "methodology" &&
          (category === "all" || a.category === category) &&
          (!country || a.country === country) &&
          `${a.title} ${a.country} ${a.tag} ${a.excerpt}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      )
      .map(
        (a) =>
          `<article class="reading-row edition-row"><span class="reading-num">${a.tag === "Pulse Check" ? "04" : "AGS"}</span><div><span class="tag eyebrow">${this.escape(a.tag)} / Analysis</span><h2><a href="${this.href(a)}">${this.escape(a.title)}</a></h2><p>${this.escape(a.excerpt)}</p></div><div class="reading-side"><span>${a.edition}<br>${a.country} / ${a.minutes} min</span><a href="${this.href(a)}">Read full article ↗</a></div></article>`,
      )
      .join("");
  },
  cards() {
    return `<section class="edition-desk wrap"><div class="section-heading"><div><span class="eyebrow section-label">The October edition</span><h2>Diagnosis. Accountability.<br><em>Critical optimism.</em></h2></div><a class="text-link" href="#/diagnostics">The Reading Room ↗</a></div><div class="edition-lead"><span class="edition-lead-number" aria-hidden="true">01</span><div><span class="eyebrow">Governance Diagnostics / The Diagnosis</span><h3><a href="${this.href(this.articles[0])}">${this.escape(this.articles[0].title)}</a></h3><p>${this.escape(this.articles[0].excerpt)}</p><a class="text-link" href="${this.href(this.articles[0])}">Read the diagnosis ↗</a></div></div><div class="edition-secondary">${this.articles
      .slice(1, 4)
      .map(
        (a, i) =>
          `<article><span class="eyebrow">0${i + 2} / ${a.tag}</span><h3><a href="${this.href(a)}">${this.escape(a.title)}</a></h3><p>${this.escape(a.excerpt)}</p><a class="text-link" href="${this.href(a)}">${a.minutes} min read ↗</a></article>`,
      )
      .join("")}</div></section>`;
  },
  catalogue() {
    const items = this.articles.filter((a) => a.category !== "methodology");
    const icon = (name) =>
      `<img src="assets/icons/${name}.svg" width="20" height="20" alt="">`;
    return `<section class="catalogue" aria-roledescription="carousel" aria-labelledby="catalogue-title"><div class="wrap"><div class="section-heading"><div><span class="eyebrow section-label">The October edition</span><h2 id="catalogue-title">A continent of <em>perspectives.</em></h2></div><div class="catalogue-controls"><span class="catalogue-count">01 / 04</span><button class="catalogue-prev icon-button" aria-label="Previous perspectives" title="Previous perspectives">${icon("arrow-left")}</button><button class="catalogue-play icon-button" aria-label="Pause catalogue" title="Pause catalogue">${icon("pause")}</button><button class="catalogue-next icon-button" aria-label="Next perspectives" title="Next perspectives">${icon("arrow-right")}</button></div></div><div class="catalogue-track" role="group" aria-label="October edition catalogue" tabindex="0">${items.map((a, i) => `<article class="catalogue-item" aria-roledescription="slide" aria-label="${i + 1} of ${items.length}"><div class="catalogue-topline"><span class="tag eyebrow">${a.tag}</span><span class="catalogue-index">0${i + 1}</span></div><h3><a href="${this.href(a)}">${this.escape(a.title)}</a></h3><p>${this.escape(a.excerpt)}</p><div class="catalogue-bottom"><span>${a.country}<br>Analysis / ${a.minutes} min</span><a class="catalogue-read" href="${this.href(a)}" aria-label="Read ${this.escape(a.title)}">${icon("arrow-up-right")}</a></div></article>`).join("")}</div><div class="catalogue-footer"><span class="catalogue-mode">Auto</span><span>Governance / Anti-Corruption / African Renaissance</span><a class="text-link" href="#/diagnostics">The full reading room ↗</a></div></div></section>`;
  },
  spotlight(category) {
    const article = this.articles.find((a) => a.category === category);
    return `<section class="edition-spotlight"><span class="eyebrow section-label">From the October edition / ${article.tag}</span><h2><a href="${this.href(article)}">${this.escape(article.title)}</a></h2><p>${this.escape(article.excerpt)}</p><a class="text-link" href="${this.href(article)}">Read the full analysis ↗</a></section>`;
  },
  sourceRefs(article, block) {
    if (block.type === "facts") return article.sources.map((_, i) => i);
    const t = block.text;
    if (article.category === "methodology") return [];
    if (article.path.includes("zambia-")) {
      if (t.startsWith("Zambia's crisis")) return [0];
      if (t.startsWith("The government elected")) return [0, 1, 2];
    } else if (article.path.includes("cobalt")) {
      if (t.startsWith("There is a number")) return [3];
      if (t.startsWith("Cobalt is not")) return [0];
      if (
        t.startsWith("Endowment, however") ||
        t.startsWith("This is not a story")
      )
        return [1];
      if (t.startsWith("CMOC is")) return [2];
    } else if (article.path.includes("m-pesa")) {
      if (t.startsWith("In March 2007")) return [0];
      if (t.startsWith("Nineteen years")) return [1];
      if (t.startsWith("One decisive variable")) return [2];
      if (t.startsWith("This publication's promise")) return [3];
    } else if (article.path.includes("nigeria-")) {
      if (t.startsWith("Nigeria's governing story")) return [0];
      if (t.startsWith("Removing the fuel")) return [1];
      if (t.startsWith("The other side")) return [2, 3];
    }
    return [];
  },
  scorecard() {
    return `<section class="edition-scorecard" aria-labelledby="nigeria-assessment"><div><span class="eyebrow">Publisher assessment / October 2026</span><h2 id="nigeria-assessment">43<span>/100</span></h2><strong>Elevated risk</strong></div><dl>${[
      ["Electoral integrity", 46],
      ["State capacity", 45],
      ["Rule of law", 41],
      ["Economic management", 42],
    ]
      .map(
        ([n, v]) =>
          `<div><dt>${n}</dt><dd>${v}/100</dd><i style="--score:${v}%" aria-hidden="true"></i></div>`,
      )
      .join(
        "",
      )}</dl><p class="source-note">Publisher-supplied assessment, not an official index. Source dataset and weighting have not been supplied; the composite is not asserted to be a simple average.</p></section>`;
  },
  render(article) {
    const e = this.escape;
    const isMethod = article.category === "methodology";
    const headings = article.blocks
      .map((b, i) => ({ ...b, index: i }))
      .filter((b) => b.type === "heading");
    const body = article.blocks
      .map((b, i) => {
        if (b.type === "heading")
          return `<h2 id="section-${i}" class="edition-section-heading">${e(b.text)}</h2>`;
        if (article.tag === "Pulse Check" && b.text.startsWith("Composite:"))
          return this.scorecard();
        const refs = this.sourceRefs(article, b)
          .map(
            (n) =>
              `<a class="source-ref" href="${this.href(article)}#source-${n + 1}" aria-label="Source ${n + 1}">[${n + 1}]</a>`,
          )
          .join(" ");
        if (b.type === "facts")
          return `<ul class="edition-facts">${b.text
            .split("\n- ")
            .map((t) => `<li>${e(t.replace(/^- /, ""))}</li>`)
            .join("")}</ul><div class="fact-refs">${refs}</div>`;
        const labels = [
          "Documented fact:",
          "Allegation:",
          "Analysis:",
          "Open question:",
        ];
        const label = labels.find((l) => b.text.startsWith(l));
        return `<p>${label ? `<strong class="provenance-label">${label}</strong> ${e(b.text.slice(label.length))}` : e(b.text)}${refs ? ` <span class="source-refs">${refs}</span>` : ""}</p>`;
      })
      .join("");
    return `<article class="article edition-article"><div class="article-toolbar"><a class="text-link" href="#/diagnostics">The Reading Room ↗</a><button class="share-button">Share ↗</button></div><div class="tagline"><span class="tag">${e(article.tag)}</span><span>${isMethod ? "Editorial policy" : "Analysis"} / ${article.edition}</span></div><h1>${e(article.title)}</h1><p class="standfirst">${e(article.excerpt)}</p><div class="edition-byline"><strong>${e(article.byline)}</strong><span>${article.minutes} min read / October edition</span></div>${article.country === "Kenya" ? '<figure class="edition-context-image"><img src="assets/photos/nairobi-1280.webp" alt="Nairobi seen from Uhuru Park, Kenya" width="1280" height="960"><figcaption>Nairobi, Kenya / contextual photograph, 2012. Raidarmax / <a href="#/credits">Credits & licence</a></figcaption></figure>' : ""}<details class="article-contents"><summary>In this ${isMethod ? "policy" : "article"}</summary><nav aria-label="Article sections">${headings.map((h) => `<a href="${this.href(article)}#section-${h.index}">${e(h.text)}</a>`).join("")}${article.sources.length ? `<a href="${this.href(article)}#sources">Sources & evidence</a>` : ""}</nav></details><div class="edition-body">${body}</div>${article.sources.length ? `<section class="article-sources" id="sources"><span class="eyebrow section-label">Show the working</span><h2>Sources & evidence</h2><p class="source-note">The argument is the publication's analysis. Official and company self-reports are attributed, not treated as independent audits. Numbers retain the dates and scope of their cited records.</p><ol>${article.sources.map((s, i) => `<li id="source-${i + 1}"><a href="${s.url}" target="_blank" rel="noopener noreferrer">${e(s.title)} ↗</a><p>${e(s.note)}</p></li>`).join("")}</ol></section>` : ""}${isMethod ? '<section class="disclosure-status"><h2>Disclosure status</h2><p>No audited annual accounts or funder-register files were supplied for this website. The promise to publish them is a commitment, not a link to records we do not have.</p><a class="text-link" href="#/contact">Request a disclosure or correction ↗</a></section>' : ""}<section class="article-next"><span class="eyebrow section-label">Continue the edition</span>${this.articles
      .filter((a) => a !== article && a.category !== "methodology")
      .slice(0, 2)
      .map((a) => `<h3><a href="${this.href(a)}">${e(a.title)} ↗</a></h3>`)
      .join(
        "",
      )}<p><a href="mailto:governancestethoscope@gmail.com?subject=${encodeURIComponent("Correction or response: " + article.title)}">Send a correction or response ↗</a> · <a href="#/corrections">Correction policy & record</a></p></section></article>`;
  },
  corrections() {
    return `<article class="article"><span class="eyebrow section-label">Editorial accountability</span><h1>Corrections, in the open.</h1><p>Our standard is to publish a correction within 48 hours of a confirmed error, identify the change and preserve the original published wording.</p><h2>October 2026 edition</h2><p>No post-publication correction has been recorded for these five new pieces at the time of their release. Pre-publication fact-checking changes to the supplied manuscript are not described as corrections to previously published articles.</p><h2>Request a correction</h2><p>Include the article link, the exact wording in question and a supporting source. Ordinary email is not a protected whistleblower channel.</p><a class="text-link" href="mailto:governancestethoscope@gmail.com?subject=Editorial%20correction">Write to the editorial desk ↗</a><p><a href="/about/editorial-approach/">Read the editorial policy ↗</a></p></article>`;
  },
};
