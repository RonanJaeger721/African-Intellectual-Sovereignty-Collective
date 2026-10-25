const main = document.querySelector("main");
const header = document.querySelector(".site-header");
const navigation = document.querySelector("#navigation");
const menu = document.querySelector(".menu-toggle");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const contact = "governancestethoscope@gmail.com";
let experienceCleanup = () => {};
let lensCleanup = () => {};
const pageProgress = document.querySelector(".reading-progress");
let pageLoadTimer;
function finishPageLoading() {
  if (document.readyState !== "complete") return;
  clearTimeout(pageLoadTimer);
  pageLoadTimer = setTimeout(() => {
    pageProgress.classList.remove("is-loading");
    pageProgress.setAttribute("aria-busy", "false");
    window.StethoscopeExperience.update();
  }, 240);
}
window.addEventListener("load", finishPageLoading, { once: true });
const articles = [
  {
    slug: "beyond-the-ballot",
    category: "governance",
    country: "Zambia",
    tag: "Electoral integrity",
    title: "Democracy is more than the day we vote.",
    excerpt:
      "A credible election is a chain of public trust. The count, the record, and the right to challenge matter as much as the ballot.",
    minutes: 4,
    sections: [
      [
        "The process is the story",
        "An election cannot be understood from a single day of voting. The useful questions begin earlier: who can register, how rules are communicated, and whether people have a fair opportunity to participate. They continue after polling closes, through counting, publication of results, and the resolution of disputes.",
      ],
      [
        "Follow the evidence",
        "A diagnostic should distinguish a documented procedural weakness from an allegation and a final legal finding. Electoral commission notices, published legislation, observer reports, and court decisions answer different questions. Reading them together is more useful than treating any one account as the complete record.",
      ],
      [
        "What a country briefing should examine",
        "The Zambia research agenda in the launch package proposes a focus on electoral administration. Before country-specific conclusions are published, the editorial team needs to establish a source record for registration, ballot secrecy, results management, observer access, and dispute resolution. No country score is assigned in this preview.",
      ],
      [
        "The questions that matter",
        "Can citizens trace a result from a polling station to the national tally? Are changes explained in a public record? Can a challenge be heard by a body that is independent of the contestants? These questions turn an argument about personalities into an examination of institutions.",
      ],
    ],
  },
  {
    slug: "follow-the-public-money",
    category: "corruption",
    country: "South Africa",
    tag: "Public accountability",
    title: "Follow the public money. Then follow the response.",
    excerpt:
      "Exposing a questionable contract is the beginning. Accountability is what happens after the finding.",
    minutes: 4,
    sections: [
      [
        "Start with the contract",
        "Public money leaves a documentary trail: a tender notice, selection criteria, an award, changes to the scope, payments, and a delivered service. A useful investigation reconstructs that chain before drawing conclusions about who benefited or who failed to act.",
      ],
      [
        "A red flag is a question",
        "A single bidder, a repeated supplier, or a large contract variation can warrant scrutiny. None alone proves corruption. The task is to establish the relevant rules, obtain the documents, seek an explanation, and distinguish a process concern from a substantiated finding.",
      ],
      [
        "Measure the institutional response",
        "What happened after an audit or inquiry? Was a recommendation accepted? Did a disciplinary process begin? Were funds recovered, and is there a public record? Tracking the response gives readers something more meaningful than a succession of scandals.",
      ],
      [
        "Keep the record open",
        "The planned accountability desk will separate allegations, official findings, prosecutions, and judgments. Case records need dates, sources, a right of reply, and updates when circumstances change. This preview describes that approach; it is not a published case database.",
      ],
    ],
  },
  {
    slug: "the-value-beneath-the-ground",
    category: "governance",
    country: "Democratic Republic of the Congo",
    tag: "Resource governance",
    title: "The value beneath the ground. The terms above it.",
    excerpt:
      "A resource story is also a contract story: who negotiates, what is disclosed, and where the public benefit goes.",
    minutes: 3,
    sections: [
      [
        "Read the terms",
        "A headline contract value does not tell us how a resource agreement distributes risk and reward. A diagnostic needs to examine royalties, tax treatment, ownership, environmental obligations, and the provisions that allow the public to understand the deal.",
      ],
      [
        "Ask who can see the agreement",
        "Transparency begins with access to the agreement and its amendments. The next question is whether parliamentary bodies, auditors, affected communities, and regulators have the information and authority needed to scrutinise implementation.",
      ],
      [
        "An agenda for investigation",
        "The Democratic Republic of the Congo is a proposed focus in the launch materials. Contract-specific findings remain subject to document review and editorial approval. The planned research asks how public institutions can turn resource value into accountable long-term benefit.",
      ],
    ],
  },
  {
    slug: "progress-worth-understanding",
    category: "renaissance",
    country: "Kenya",
    tag: "African Renaissance",
    title: "Progress is a story worth investigating, too.",
    excerpt:
      "Beyond the success headline: the institutions, design choices, and people that make an innovation useful.",
    minutes: 3,
    sections: [
      [
        "A different kind of scrutiny",
        "Reporting on progress should be as rigorous as reporting on failure. An innovation story needs to explain the problem, identify the people it serves, and show what evidence supports a claim of improvement.",
      ],
      [
        "Inclusion is more than access",
        "For the planned Kenya financial inclusion feature, the questions go beyond the number of accounts. Are services affordable? Can people resolve a complaint? Who remains excluded, and what happens when a system fails?",
      ],
      [
        "Understand what travels",
        "A useful story gives readers the conditions behind a result. Regulation, infrastructure, trust, and institutional capacity determine whether an approach can be adapted elsewhere. The aim is informed possibility, with limitations visible alongside achievements.",
      ],
    ],
  },
  {
    slug: "energy-and-the-public-interest",
    category: "renaissance",
    country: "Morocco",
    tag: "Energy transition",
    title: "Clean energy. Clear questions.",
    excerpt:
      "The energy transition deserves a wider lens: public value, access, financing, and the communities closest to the infrastructure.",
    minutes: 3,
    sections: [
      [
        "Beyond the capacity figure",
        "An energy project is more than its installed capacity. A public-interest feature should ask what electricity reaches users, who pays for it, how financing is structured, and whether the result matches the promises made at approval.",
      ],
      [
        "Keep communities in the frame",
        "Land, water, work, and local participation belong in the same story as technology. The strongest reporting follows those effects over time and includes the people who experience them directly.",
      ],
      [
        "A planned research focus",
        "The launch strategy identifies Morocco as an energy reporting focus. Project-specific numbers and outcomes will need primary-source verification before a reported feature is published. This editorial preview sets out the questions for that work.",
      ],
    ],
  },
  {
    slug: "institutions-that-outlast-the-headline",
    category: "governance",
    country: "Zimbabwe",
    tag: "Institutional resilience",
    title: "Institutions that outlast the headline.",
    excerpt:
      "The quieter work of governance: building a record, enforcing a rule, and making public decisions explainable.",
    minutes: 3,
    sections: [
      [
        "Make the decision legible",
        "A public institution earns trust when people can understand what it decided, the authority for the decision, and how to question it. A clear public record makes accountability possible beyond a moment of political attention.",
      ],
      [
        "Look at practice, not only promises",
        "Rules on paper and institutional practice can diverge. Research should ask how a rule is applied, what evidence is available, and whether the people affected have a meaningful way to seek a remedy.",
      ],
      [
        "An African-centred lens",
        "The Collective is based in Harare. Its proposed publication brings African priorities and voices into the examination of governance, while retaining a commitment to evidence, context, and a record that readers can inspect.",
      ],
    ],
  },
];
const categoryNames = {
  governance: "Governance",
  corruption: "Anti-Corruption",
  renaissance: "Renaissance",
};
const countryNotes = {
  Zambia:
    "Electoral integrity, results transparency, and the institutions behind public trust.",
  "South Africa":
    "Public procurement, institutional recovery, and the response to accountability findings.",
  "Democratic Republic of the Congo":
    "Resource contracts, disclosure, and the distribution of public value.",
  Kenya:
    "Financial inclusion, public-interest innovation, and progress worth understanding.",
  Morocco:
    "The energy transition, public value, and the communities behind the infrastructure.",
  Zimbabwe:
    "Constitutional governance, public records, and institutional resilience.",
  Ghana: "Democratic transition, gold exports, and revenue transparency.",
  Nigeria: "Economic management, procurement oversight, and public health.",
  Rwanda: "Institutional capacity, innovation, and public accountability.",
  Botswana: "Democratic consolidation and public procurement safeguards.",
  Senegal: "Political transition, regional integration, and infrastructure.",
};
const arrow = '<span aria-hidden="true">↗</span>';
const link = (url, label) =>
  `<a class="text-link" href="${url}">${label} ${arrow}</a>`;
const tags = (a) =>
  `<div class="tagline"><span class="tag">${a.tag}</span><span class="draft-label">Editorial preview</span></div>`;
const meta = (a) =>
  `<div class="story-meta"><span>${a.country}</span><span>${a.minutes} min read</span></div>`;
const notice =
  '<p class="source-note">Full articles from the October edition appear first. Commissioned features and earlier editorial previews remain separately labelled.</p>';
const pageHead = (kicker, title, description) =>
  `<header class="page-head wrap reveal"><span class="eyebrow section-label">${kicker}</span><h1>${title}</h1><p>${description}</p></header>`;

function pulse() {
  return `<section class="pulse"><div class="wrap pulse-inner"><div><span class="eyebrow section-label">The Pulse · Weekly briefing</span><h2>A little more context.<br>A better perspective.</h2><p>Governance, accountability, and African progress.<br>Register your interest in our forthcoming briefing.</p></div><form class="pulse-form"><label for="pulse-email">Your email address</label><div class="email-row"><input id="pulse-email" type="email" name="email" placeholder="you@example.com" autocomplete="email" required maxlength="254"><button aria-label="Prepare subscription request" type="submit">↗</button></div><p class="form-note">Opens an email request to our editorial team. You are not subscribed automatically. <a href="#/privacy"><u>Privacy</u></a></p><p class="form-status" role="status"></p></form></div></section>`;
}

function catalogue() {
  const icon = (name) =>
    `<img src="assets/icons/${name}.svg" width="20" height="20" alt="">`;
  return `<section class="catalogue" aria-roledescription="carousel" aria-labelledby="catalogue-title"><div class="wrap"><div class="section-heading"><div><span class="eyebrow section-label">The field notes</span><h2 id="catalogue-title">A continent of <em>perspectives.</em></h2></div><div class="catalogue-controls"><span class="catalogue-count" aria-live="off">01 / 06</span><button class="catalogue-prev icon-button" aria-label="Previous perspectives" title="Previous perspectives">${icon("arrow-left")}</button><button class="catalogue-play icon-button" aria-label="Pause catalogue" title="Pause catalogue">${icon("pause")}</button><button class="catalogue-next icon-button" aria-label="Next perspectives" title="Next perspectives">${icon("arrow-right")}</button></div></div><div class="catalogue-track" role="group" aria-label="Field notes catalogue" tabindex="0">${articles.map((a, i) => `<article class="catalogue-item" aria-roledescription="slide" aria-label="${i + 1} of ${articles.length}"><div class="catalogue-topline"><span class="tag eyebrow">${a.tag}</span><span class="catalogue-index" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span></div><h3><a href="#/read/${a.slug}">${a.title}</a></h3><p>${a.excerpt}</p><div class="catalogue-bottom"><span>${a.country}<br>Editorial preview · ${a.minutes} min</span><a class="catalogue-read" href="#/read/${a.slug}" aria-label="Read ${a.title}" title="Read perspective">${icon("arrow-up-right")}</a></div></article>`).join("")}</div><div class="catalogue-footer"><span class="catalogue-mode">Auto</span><span>Governance / Accountability / African Renaissance</span>${link("#/diagnostics", "The full reading room")}</div></div></section>`;
}

function home() {
  const lead = articles[1];
  return `<section class="hero"><div class="hero-map" aria-hidden="true"></div><div class="wrap hero-inner reveal"><div class="hero-topline"><span class="edition-note">Independent perspective. African priorities.</span><span>The launch edition · October 2026</span></div><h1>The African<br>Governance<br><em>Stethoscope.</em></h1><p class="hero-description">Read the continent beyond the headline.<br>Governance, accountability, and the people<br>building a better Africa.</p><div class="hero-bottom"><a class="button" href="#/diagnostics">Enter the reading room ${arrow}</a><div class="country-console"><label class="eyebrow" for="country-select">The continental lens · Research agenda</label><div class="lens-heading"><span class="lens-country" aria-live="off">Zambia</span><select class="country-selector" id="country-select">${Object.keys(
    countryNotes,
  )
    .map(
      (n) =>
        `<option value="${n}">${n === "Democratic Republic of the Congo" ? "DR Congo" : n}</option>`,
    )
    .join(
      "",
    )}</select><button class="lens-toggle" aria-label="Pause country tour" title="Pause country tour"><img src="assets/icons/pause.svg" width="18" height="18" alt=""></button></div><p class="country-description" aria-live="off">${countryNotes.Zambia}</p><div class="lens-controls"><span class="lens-count">01 / 11</span><button class="lens-choose">Choose country ${arrow}</button></div><a class="country-link text-link" href="#/country/Zambia">Explore the perspective ${arrow}</a></div></div><div class="hero-scroll">Scroll for a fuller picture ↓</div></div></section>
    ${Publication.introduction()}
    ${RevisedEdition.cards()}
    ${Publication.pulseGrid()}
    <section class="wrap edition-feature"><div><span class="eyebrow section-label">From the supplied edition / Zambia 2026</span><h2>Beyond the ballot.<br><em>The democratic stress test.</em></h2><p>Read the governance diagnostic, explore the five-part election timeline and download the original pulse-check and observer graphics.</p>${link("#/zambia-2026", "Open the report & visual dossier")}</div><a href="#/zambia-2026"><img src="assets/editorial/Pulse-Check-Zambia.webp" alt="Zambia pulse check: five governance stress-test measures" width="900" height="1002" loading="lazy"></a></section>
    <section class="journal wrap"><span class="eyebrow section-label">On our editorial agenda</span><div class="section-heading"><h2>Look a little <em>closer.</em></h2>${link("#/diagnostics", "All perspectives")}</div><div class="journal-grid"><div><a class="lead-story" href="#/read/${lead.slug}"><div class="story-art editorial-photo"><img src="assets/photos/parliament-1280.webp" srcset="assets/photos/parliament-640.webp 640w, assets/photos/parliament-1280.webp 1280w" sizes="(max-width: 900px) 100vw, 55vw" width="1280" height="736" loading="lazy" alt="South African Parliament seen from the Company Gardens in Cape Town"></div>${tags(lead)}<h3>${lead.title}</h3><p>${lead.excerpt}</p>${meta(lead)}</a><p class="photo-credit">Parliament, Cape Town · Jonathan Beech · <a href="#/credits">Photo credits</a></p></div><div>${[articles[0], articles[2], articles[3]].map((a) => `<a class="side-story" href="#/read/${a.slug}">${tags(a)}<h3>${a.title}</h3><p>${a.excerpt}</p>${meta(a)}</a>`).join("")}</div></div></section>
    ${RevisedEdition.catalogue()}
    <section class="perspective"><div class="wrap perspective-inner"><div><span class="eyebrow section-label">Our point of view</span><h2>A continent.<br>Many realities.<br><em>A fuller picture.</em></h2><p class="perspective-intro">Africa is not a single score or a single story. Our work connects rigorous diagnosis with accountability and the possibility of progress.</p>${link("#/methodology", "How we approach the work")}<div class="perspective-position" aria-hidden="true"><span class="perspective-marker">01</span><span class="perspective-track"><span></span></span><span>03</span></div></div><div>${[
      [
        "01",
        "Governance diagnostics",
        "Look beyond the event to the system. Electoral integrity, rule of law, state capacity, and economic management.",
        "diagnostics",
        "Explore the questions",
      ],
      [
        "02",
        "Anti-Corruption",
        "State capture, procurement fraud, illicit financial flows, and mining opacity. Follow the documents, the money, and the institutional response.",
        "accountability",
        "Follow the evidence",
      ],
      [
        "03",
        "The African Renaissance",
        "Understand the people and ideas moving the continent forward, without overlooking the difficult questions.",
        "renaissance",
        "Find the possibility",
      ],
    ]
      .map(
        (p) =>
          `<article class="pillar"><span class="pillar-num">${p[0]}</span><div><h3>${p[1]}</h3><p>${p[2]}</p><a href="#/${p[3]}">${p[4]} ↗</a></div></article>`,
      )
      .join("")}</div></div></section>
    <section class="renaissance wrap"><div class="renaissance-layout"><figure><div class="renaissance-visual editorial-photo"><img src="assets/photos/nairobi-1280.webp" srcset="assets/photos/nairobi-640.webp 640w, assets/photos/nairobi-1280.webp 1280w" sizes="(max-width: 900px) 100vw, 50vw" alt="Nairobi skyline seen from Uhuru Park, Kenya" width="1280" height="960" loading="lazy"></div><figcaption class="photo-credit">Nairobi, Kenya · Raidarmax · <a href="#/credits">Photo credits</a></figcaption></figure><div class="renaissance-copy"><span class="eyebrow section-label">The African Renaissance</span><h2>There is another<br>story to <em>tell.</em></h2><p>The continent is also a place of invention, institution-building, and everyday ambition. These stories deserve the same curiosity and scrutiny as the crises.</p><div class="topic-line"><span>Innovation</span><span>Clean energy</span><span>Financial inclusion</span><span>Public health</span></div>${link("#/renaissance", "Explore African progress")}</div></div></section>
    <section class="solar-story wrap"><figure><a href="#/assignment/noor"><img src="assets/photos/noor-1280.webp" srcset="assets/photos/noor-640.webp 640w, assets/photos/noor-1280.webp 1280w" sizes="(max-width: 1280px) 100vw, 1280px" alt="Fields of solar collectors at Noor I and II near Ouarzazate, Morocco" width="1280" height="596" loading="lazy"></a><figcaption><div><span class="eyebrow section-label">Green Africa / Morocco</span><h2>Progress you can <em>see.</em></h2>${link("#/assignment/noor", "Inside the Noor editorial brief")}</div><p class="photo-credit">Noor I & II, Ouarzazate · Richard Allaway<br><a href="#/credits">Photo credits</a></p></figcaption></figure></section>
    <section class="method-strip"><div class="wrap method-strip-inner"><div><span class="eyebrow section-label">The standard behind the story</span><h2>Evidence before <em>everything.</em></h2></div><div><p>A useful diagnostic shows its working. We distinguish documented facts, allegations, analysis, and unanswered questions, so readers can form their own judgment.</p>${link("#/methodology", "Read our editorial approach")}</div></div></section>
    ${Publication.metrics()}${pulse()}<section class="partnership-band"><div class="wrap"><div><span class="eyebrow">Build the work with us</span><h2>Better questions.<br>Stronger institutions. <em>Shared progress.</em></h2></div><a class="button dark" href="#/partners">Explore a partnership ${arrow}</a></div></section>`;
}

function room(category = "all", country = "") {
  const title = country
    ? `${country === "Democratic Republic of the Congo" ? "DR Congo" : country}, in context.`
    : category === "renaissance"
      ? "The African Renaissance."
      : "The Reading Room.";
  return `${pageHead(country ? "The continental lens" : category === "renaissance" ? "Progress deserves scrutiny, too" : "Ideas, in context", title, country ? countryNotes[country] || "Explore our country research agenda." : "A place for deeper questions, independent perspectives, and a fuller understanding of the continent.")}<div class="wrap">${notice}<div class="room-controls"><div class="filters" role="group" aria-label="Filter perspectives">${["all", "governance", "corruption", "renaissance"].map((c) => `<button class="filter" data-filter="${c}" aria-pressed="${c === category}">${c === "all" ? "All perspectives" : categoryNames[c]}</button>`).join("")}</div><label class="search-wrap" for="article-search">Search <input id="article-search" type="search" placeholder="Country, topic, or title" autocomplete="off"></label></div><div class="reading-list" aria-live="polite"></div></div>`;
}
function renderRows(category = "all", query = "", country = "") {
  const filtered = articles.filter(
    (a) =>
      (category === "all" || a.category === category) &&
      (!country || a.country === country) &&
      `${a.title} ${a.excerpt} ${a.country} ${a.tag}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const edition = Publication.editionRows(category, query, country);
  const published = RevisedEdition.rows(category, query, country);
  const previews = filtered.length
    ? filtered
        .map(
          (a, i) =>
            `<article class="reading-row"><span class="reading-num">${String(i + 1).padStart(2, "0")}</span><div><span class="tag eyebrow">${a.tag}</span><h2><a href="#/read/${a.slug}">${a.title}</a></h2><p>${a.excerpt}</p></div><div class="reading-side"><span>Editorial preview<br>${a.country} · ${a.minutes} min</span><a href="#/read/${a.slug}">Read perspective ↗</a></div></article>`,
        )
        .join("")
    : "";
  document.querySelector(".reading-list").innerHTML =
    published +
      (!query && category === "all" && !country
        ? `<details class="earlier-perspectives"><summary>Commissioned features & earlier perspectives</summary>${edition + previews}</details>`
        : edition + previews) ||
    '<p class="empty-state">No perspectives match your search. Try another topic or country.</p>';
}

function accountability() {
  return `${pageHead("Public accountability", "Follow the evidence.", "A research desk for public money, institutional integrity, and what happens after the findings.")}<div class="wrap"><div class="notice">The case tracker is in development. No live case counts, country rankings, or corruption scores are published in this preview.</div><div class="research-list">${[
    [
      "01",
      "Public procurement",
      "Reconstruct the contract trail: tender, award, variations, payment, and delivery. Distinguish warning signs from established findings.",
    ],
    [
      "02",
      "State capture & institutional response",
      "Follow official inquiries and the response: recommendations, prosecutions, judgments, and institutional change.",
    ],
    [
      "03",
      "Extractives & financial flows",
      "Examine contract disclosure, ownership, and the distribution of public benefit. Document the source and date of every claim.",
    ],
    [
      "04",
      "A record that can be challenged",
      "Give subjects a right of reply. Record corrections. Update cases when evidence or legal status changes.",
    ],
  ]
    .map(
      (a) =>
        `<section class="research-item"><span class="serif">${a[0]}</span><h2>${a[1]}</h2><p>${a[2]}</p></section>`,
    )
    .join(
      "",
    )}<a class="button dark" href="#/read/follow-the-public-money">Read the accountability perspective ${arrow}</a></div></div>`;
}

function methodology() {
  return `${pageHead("Our approach", "Show the working.", "Independent thought needs an inspectable evidence trail. This is the editorial approach proposed for our launch.")}<div class="wrap"><div class="methodology-grid">${[
    [
      "01 / Diagnose the system",
      "Look at electoral integrity, state capacity, rule of law, and economic management. Explain how an institution works before judging whether it works well.",
    ],
    [
      "02 / Build the source record",
      "Prioritise original legislation, public records, audits, judgments, and official datasets. Check date, scope, and the difference between a reported allegation and an established fact.",
    ],
    [
      "03 / Make room for context",
      "Put African researchers, citizens, and institutions in the frame. Compare carefully: countries do not have identical histories, incentives, or administrative systems.",
    ],
    [
      "04 / Keep conclusions accountable",
      "State uncertainty. Offer a right of reply. Separate reporting from opinion and publish corrections with a clear record of what changed.",
    ],
  ]
    .map((a) => `<section><h2>${a[0]}</h2><p>${a[1]}</p></section>`)
    .join(
      "",
    )}</div><h2 class="serif" style="font-size:34px">A score should earn your trust.</h2><div class="notice">The package proposes a four-part governance index: electoral integrity, state capacity, rule of law and economic management. Its source weights, normalisation and validation still need to be established. The launch package's scores are preserved as explicitly illustrative edition data, not independently validated rankings. The anti-corruption register uses separate illustrative scores and must not be read as the Transparency International CPI.</div><h2 class="serif" style="font-size:29px">Reference institutions</h2><p style="color:var(--muted);font-size:14px;margin-top:15px">Starting points for research, not a statement of partnership or endorsement.</p><div class="sources">${[
    ["Mo Ibrahim Foundation", "https://mo.ibrahim.foundation/"],
    ["Transparency International", "https://www.transparency.org/"],
    [
      "Worldwide Governance Indicators · World Bank",
      "https://www.worldbank.org/en/publication/worldwide-governance-indicators",
    ],
    ["Afrobarometer", "https://www.afrobarometer.org/"],
  ]
    .map(
      (a) =>
        `<a href="${a[1]}" target="_blank" rel="noopener noreferrer">${a[0]} ${arrow}</a>`,
    )
    .join("")}</div></div>`;
}

function partners() {
  return `${pageHead("Build the work with us", "Independence is worth investing in.", "We welcome conversations with research institutions, editorial collaborators, and funders who share a commitment to accountable public life.")}<div class="wrap partner-layout"><div><h2>Support better questions.<br>Enable deeper answers.</h2><p>The proposed platform brings governance diagnostics, public accountability, and African progress into one editorial home. Partnerships can help turn that agenda into sustained research and accessible public knowledge.</p>${[
    [
      "Research collaboration",
      "Contribute expertise, public-interest datasets, peer review, or a jointly defined research question.",
    ],
    [
      "Editorial & knowledge partnerships",
      "Explore publication, translation, dissemination, or a public briefing around shared research interests.",
    ],
    [
      "Institutional & project support",
      "Discuss a defined programme of work with transparent deliverables and editorial independence.",
    ],
  ]
    .map(
      (a) =>
        `<section class="partner-option"><h3>${a[0]}</h3><p>${a[1]}</p></section>`,
    )
    .join(
      "",
    )}<a class="button dark" href="mailto:${contact}?subject=Partnership%20enquiry%20-%20African%20Governance%20Stethoscope">Start a conversation ${arrow}</a><div class="contact-block"><span class="eyebrow">Editorial & partnership enquiries</span><a href="mailto:${contact}">${contact}</a><p>Harare, Zimbabwe</p></div></div><div><img src="assets/partnership-cover.png" alt="Partnership brief: independent perspective, African priorities" width="900" height="1125"><p class="download-caption">An introduction to the proposed publication and ways to collaborate.</p><a class="button dark" href="assets/partnership-brief.pdf" download>Download partnership brief ${arrow}</a><p class="download-caption">PDF · No registration required</p></div></div>`;
}

function articlePage(a) {
  return `<article class="article reveal"><div class="article-toolbar">${link("#/diagnostics", "The Reading Room")}<button class="share-button">Share ↗</button></div><div class="tagline"><span class="tag">${a.tag}</span><span>Editorial preview</span></div><h1>${a.title}</h1><p class="standfirst">${a.excerpt}</p>${meta(a)}<div class="notice">Editorial preview for the launch edition. This piece sets out a research perspective; it does not report verified findings about ${a.country}.</div>${a.sections.map((s) => `<section><h2>${s[0]}</h2><p>${s[1]}</p></section>`).join("")}<blockquote>Diagnosing governance.<br>Prescribing accountability.<br>Advancing Africa.</blockquote><p>Have documents, expertise, or a different perspective to contribute? <a href="mailto:${contact}?subject=${encodeURIComponent("Editorial enquiry: " + a.title)}"><u>Write to the editorial desk.</u></a></p>${link("#/methodology", "Our editorial approach")}<hr style="border:0;border-top:1px solid var(--line);margin:38px 0">${link("#/diagnostics", "Keep exploring")}</article>`;
}

function privacy() {
  return `<article class="article"><span class="eyebrow section-label">Privacy & corrections</span><h1>A clear relationship with our readers.</h1><p>This preview does not run advertising, analytics, or newsletter tracking scripts. It does not store submitted email addresses in a website database.</p><h2>Newsletter requests</h2><p>The Pulse form prepares a message in your email application. You decide whether to send it. Sending the message shares your address and its contents with our editorial team and the email providers involved. The form does not subscribe you automatically.</p><h2>Fonts & external links</h2><p>This site loads fonts from Google Fonts. Your browser requests those files directly from that service. Links to external organisations take you to websites with their own privacy practices.</p><h2>Corrections & editorial enquiries</h2><p>To request a correction, identify the page, the statement you are questioning, and the evidence supporting a change. Send your request to <a href="mailto:${contact}"><u>${contact}</u></a>.</p><h2>Before you share documents</h2><p>Our ordinary email address is for general correspondence. It is not an anonymous or secure whistleblower submission service. A dedicated protected channel has not been launched.</p><p>Launch-stage privacy information. A fuller policy will be needed when publishing and subscription services are connected.</p></article>`;
}

let mapMarkup = "";
async function setupMap() {
  const container = document.querySelector(".hero-map");
  if (!container) return;
  const select = document.querySelector("#country-select");
  const description = document.querySelector(".country-description");
  const countryLink = document.querySelector(".country-link");
  const changeCountry = (value) => {
    select.value = value;
    description.textContent = countryNotes[value];
    countryLink.href = "#/country/" + encodeURIComponent(value);
    container
      .querySelectorAll("path")
      .forEach((p) =>
        p.classList.toggle("is-active", p.dataset.country === value),
      );
  };
  lensCleanup = window.mountContinentalLens(main, changeCountry, reducedMotion);
  try {
    if (!mapMarkup) {
      const res = await fetch("assets/africa.svg");
      if (!res.ok) throw new Error("Map unavailable");
      mapMarkup = await res.text();
    }
    if (!container.isConnected) return;
    container.innerHTML = mapMarkup;
    const svg = container.querySelector("svg");
    svg.setAttribute("aria-hidden", "true");
    container
      .querySelectorAll("path")
      .forEach((p) =>
        p.classList.toggle(
          "has-perspective",
          Boolean(countryNotes[p.dataset.country]),
        ),
      );
    changeCountry(select.value);
  } catch {
    container.innerHTML =
      '<img src="assets/africa.svg" alt="" width="800" height="760">';
  }
}

function setupPulse() {
  const form = document.querySelector(".pulse-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const email = form.querySelector("input").value.trim();
    const body = `Hello, I would like to register my interest in The Pulse briefing.\n\nMy email address: ${email}\n\nPlease let me know when the publication is ready.`;
    window.location.href = `mailto:${contact}?subject=The%20Pulse%20-%20subscription%20interest&body=${encodeURIComponent(body)}`;
    form.querySelector(".form-status").textContent =
      "Your email application has been requested. Send the prepared message to register your interest. If it did not open, email " +
      contact +
      ".";
  });
}

function render() {
  clearTimeout(pageLoadTimer);
  pageProgress.classList.add("is-loading");
  pageProgress.setAttribute("aria-busy", "true");
  lensCleanup();
  experienceCleanup();
  const routePath = location.hash.startsWith("#/")
    ? location.hash.slice(2)
    : location.pathname.replace(/\/index\.html$/, "").replace(/^\/|\/$/g, "");
  const segments = routePath.split("/");
  const revisedArticle = RevisedEdition.find(routePath);
  const route = segments[0] || "home";
  let country = "";
  try {
    country = decodeURIComponent(segments.slice(1).join("/"));
  } catch {
    country = "";
  }
  let title = "The African Governance Stethoscope";
  let category = "all";
  if (revisedArticle) {
    main.innerHTML = RevisedEdition.render(revisedArticle);
    title = revisedArticle.title;
  } else if (route === "corrections") {
    main.innerHTML = RevisedEdition.corrections();
    title = "Corrections Record";
  } else if (route === "home") {
    main.innerHTML = home();
    setupMap();
  } else if (
    route === "diagnostics" ||
    route === "renaissance" ||
    route === "country"
  ) {
    category = route === "renaissance" ? "renaissance" : "all";
    if (
      route === "country" &&
      Publication.countries.some((c) => c[0] === country)
    ) {
      main.innerHTML = Publication.country(country);
      if (RevisedEdition.rows("all", "", country))
        main.insertAdjacentHTML(
          "beforeend",
          `<section class="wrap reading-list"><h2 class="serif">From the October edition</h2>${RevisedEdition.rows("all", "", country)}</section>`,
        );
    } else if (route === "country" && !countryNotes[country]) {
      main.innerHTML =
        pageHead(
          "Country research",
          "This perspective is not available yet.",
          "Explore the current reading room or contact the editorial team.",
        ) +
        '<div class="wrap reading-list">' +
        link("#/diagnostics", "Browse perspectives") +
        "</div>";
    } else {
      main.innerHTML = room(category, route === "country" ? country : "");
      renderRows(category, "", route === "country" ? country : "");
      main.querySelectorAll("[data-filter]").forEach((b) =>
        b.addEventListener("click", () => {
          category = b.dataset.filter;
          main
            .querySelectorAll("[data-filter]")
            .forEach((el) => el.setAttribute("aria-pressed", String(el === b)));
          renderRows(
            category,
            document.querySelector("#article-search").value,
            route === "country" ? country : "",
          );
        }),
      );
      document
        .querySelector("#article-search")
        .addEventListener("input", (e) =>
          renderRows(
            category,
            e.target.value,
            route === "country" ? country : "",
          ),
        );
    }
    title =
      route === "country"
        ? country
        : route === "renaissance"
          ? "The African Renaissance"
          : "The Reading Room";
  } else if (route === "accountability" || route === "corruption") {
    main.innerHTML = Publication.tracker();
    main
      .querySelector(".tracker-section")
      .insertAdjacentHTML("afterbegin", RevisedEdition.spotlight("corruption"));
    title = "Anti-Corruption Tracker";
  } else if (route === "impact") {
    main.innerHTML = Publication.impact();
    title = "Impact & Methodology";
  } else if (route === "about") {
    main.innerHTML = Publication.about();
    title = "Our Vision & Mission";
  } else if (route === "credits") {
    main.innerHTML = photoCredits();
    title = "Photography Credits";
  } else if (route === "contact") {
    main.innerHTML = Publication.contactPage();
    title = "Contact";
  } else if (route === "assignment") {
    main.innerHTML =
      segments[1] === "mpesa"
        ? RevisedEdition.render(RevisedEdition.articles[2])
        : Publication.assignment(segments[1]);
    title = "Editorial Programme";
  } else if (route === "zambia-2026") {
    main.innerHTML = Publication.zambia();
    title = "Zambia 2026: The Democratic Stress Test";
  } else if (route === "methodology") {
    main.innerHTML = RevisedEdition.render(RevisedEdition.articles[4]);
    title = "Our Approach";
  } else if (route === "partners") {
    main.innerHTML = Publication.partners();
    title = "Partnerships";
  } else if (route === "pulse") {
    main.innerHTML =
      pageHead(
        "The forthcoming briefing",
        "The Pulse.",
        "An African-centred perspective, delivered with context.",
      ) + pulse();
    title = "The Pulse";
  } else if (route === "privacy" || route === "terms") {
    main.innerHTML = privacy();
    title = "Privacy & Corrections";
  } else if (route === "read") {
    const a = articles.find((item) => item.slug === segments[1]);
    if (a) {
      main.innerHTML = articlePage(a);
      title = a.title;
    } else {
      main.innerHTML =
        pageHead(
          "Reading room",
          "This page is not on the record.",
          "The perspective you requested could not be found.",
        ) +
        '<div class="wrap reading-list">' +
        link("#/diagnostics", "Return to the reading room") +
        "</div>";
    }
  } else {
    main.innerHTML =
      pageHead(
        "Page not found",
        "A different perspective?",
        "The requested page could not be found.",
      ) +
      '<div class="wrap reading-list">' +
      link("#/", "Back to the publication") +
      "</div>";
  }
  document.title =
    title === "The African Governance Stethoscope"
      ? title
      : title + " | The African Governance Stethoscope";
  document.querySelector('meta[name="description"]').content = revisedArticle
    ? revisedArticle.excerpt
    : route === "read"
      ? articles.find((a) => a.slug === segments[1])?.excerpt ||
        "Independent African perspectives."
      : main.querySelector(".page-head p")?.textContent ||
        "Read the continent beyond the headline. Governance, accountability, and African progress.";
  navigation.querySelectorAll("a").forEach((a) => {
    const activeHash = revisedArticle
      ? revisedArticle.category === "renaissance"
        ? "#/renaissance"
        : revisedArticle.category === "corruption"
          ? "#/accountability"
          : revisedArticle.category === "governance"
            ? "#/diagnostics"
            : ""
      : location.hash;
    if (a.hash === activeHash) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  closeMenu();
  header.classList.remove("is-hidden");
  window.scrollTo({ top: 0, behavior: "instant" });
  setupPulse();
  Publication.setup(main);
  experienceCleanup = window.StethoscopeExperience.mount(main, reducedMotion);
  requestAnimationFrame(finishPageLoading);
  if (revisedArticle && location.hash && !location.hash.startsWith("#/")) {
    const target = document.getElementById(location.hash.slice(1));
    if (target)
      requestAnimationFrame(() =>
        target.scrollIntoView({ behavior: "instant", block: "start" }),
      );
  }
  document.querySelector(".share-button")?.addEventListener("click", () => {
    document.querySelector("#share-url").value = location.href;
    document.querySelector("#share-status").textContent = "";
    document.querySelector("#share-dialog").showModal();
  });
}

function closeMenu() {
  navigation.classList.remove("is-open");
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Open navigation");
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  navigation.classList.toggle("is-open", open);
  header.classList.remove("is-hidden");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menu.focus();
  }
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.querySelector(".skip-link").addEventListener("click", (event) => {
  event.preventDefault();
  main.focus({ preventScroll: true });
  main.scrollIntoView({ block: "start", behavior: "instant" });
});
document
  .querySelector(".close-dialog")
  .addEventListener("click", () =>
    document.querySelector("#share-dialog").close(),
  );
document.querySelector("#share-dialog").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    const rect = e.currentTarget.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    )
      e.currentTarget.close();
  }
});
document.querySelector("#copy-link").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(
      document.querySelector("#share-url").value,
    );
    document.querySelector("#share-status").textContent = "Link copied.";
  } catch {
    document.querySelector("#share-url").select();
    document.querySelector("#share-status").textContent =
      "Select and copy the page link above.";
  }
});
let previousY = window.scrollY;
let scrollQueued = false;
window.addEventListener(
  "scroll",
  () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      const y = Math.max(0, window.scrollY);
      if (Math.abs(y - previousY) > 6) {
        header.classList.toggle(
          "is-hidden",
          y > 120 &&
            y > previousY &&
            menu.getAttribute("aria-expanded") !== "true",
        );
        previousY = y;
      }
      const map = document.querySelector(".hero-map svg");
      if (map && !reducedMotion.matches && y < 800 && window.innerWidth > 900)
        map.style.transform = `translateY(${Math.min(35, y * 0.07)}px)`;
      window.StethoscopeExperience.update();
      scrollQueued = false;
    });
  },
  { passive: true },
);
window.addEventListener("hashchange", () => {
  render();
  main.focus({ preventScroll: true });
});
document.querySelector("#year").textContent = new Date().getFullYear();
reducedMotion.addEventListener("change", () => {
  experienceCleanup();
  experienceCleanup = window.StethoscopeExperience.mount(main, reducedMotion);
});
render();
