/* Publisher-supplied launch content. Scores remain edition data, not live feeds. */
const Publication = {
  vision:
    "The African Governance Stethoscope is Africa's premier independent platform for governance diagnostics, anti-corruption monitoring, and data-driven storytelling about African progress.",
  mission:
    "We do not just diagnose what is broken. We also track what works. We expose corruption without cynicism. We celebrate progress without naivety. And we provide the rigorous, independent analysis that international funders, policymakers, and African citizens need to make informed decisions.",
  pillars: [
    [
      "Governance Diagnostics",
      "Electoral integrity, state capacity, rule of law, economic management",
      "Pulse Check / Diagnosis / Prescription / Election Watch / Institutional Autopsy",
      "diagnostics",
    ],
    [
      "Anti-Corruption",
      "State capture, procurement fraud, illicit financial flows, mining opacity",
      "Capture Report / Procurement Watch / Illicit Flows Tracker / Mining Contracts Uncovered / Whistleblower Spotlight",
      "accountability",
    ],
    [
      "The African Renaissance",
      "Innovation, green energy, financial inclusion, health victories",
      "Innovation Index / Green Africa / Health Victories / Financial Inclusion / The Builders",
      "renaissance",
    ],
  ],
  countries: [
    ["Zambia", 42, "Election integrity", "down"],
    ["South Africa", 58, "Coalition governance", "up"],
    ["Kenya", 51, "Protests & reform", "stable"],
    ["Ghana", 64, "Transition period", "up"],
    ["Nigeria", 43, "Economic pressure", "not assessed"],
    ["Rwanda", 71, "Stability & growth", "up"],
    ["Botswana", 68, "Democratic consolidation", "up"],
    ["Senegal", 55, "Post-transition", "up"],
    ["Democratic Republic of the Congo", 31, "Resource governance", "down"],
  ],
  cases: [
    [
      "Democratic Republic of the Congo",
      "Mining contracts",
      "Contract disclosure, royalty reconciliation, and beneficial ownership.",
      "Extractives",
      31,
    ],
    [
      "Nigeria",
      "Public procurement",
      "Procurement oversight and anti-graft enforcement.",
      "Procurement",
      38,
    ],
    [
      "Zambia",
      "Institutional accountability",
      "Electoral administration, judicial independence, and public trust.",
      "Institutions",
      42,
    ],
    [
      "Kenya",
      "County health spending",
      "County-level public expenditure and health procurement.",
      "Procurement",
      48,
    ],
    [
      "South Africa",
      "State capture legacy",
      "Institutional response to the Transnet and Eskom inquiries.",
      "Institutions",
      52,
    ],
    [
      "Ghana",
      "Gold & customs",
      "Gold exports, customs reporting, and revenue transparency.",
      "Extractives",
      58,
    ],
    [
      "Botswana",
      "Procurement oversight",
      "Public purchasing safeguards and contract scrutiny.",
      "Procurement",
      68,
    ],
    [
      "Rwanda",
      "Anti-corruption framework",
      "Prevention, enforcement, and institutional safeguards.",
      "Institutions",
      71,
    ],
  ],
  graphics: [
    [
      "Pulse-Check-Zambia",
      "Zambia governance pulse",
      "Voting day peacefulness 75%; results transparency 35%; ballot secrecy 45%; institutional trust 40%; reform quality 55%. Publisher assessment: elevated risk.",
    ],
    [
      "Infographic-Observers",
      "Who's watching?",
      "The supplied observer infographic compares SADC, AU-COMESA, ICGLR and ECF, with attention to peaceful voting, results management, ballot secrecy and public communication.",
    ],
    [
      "Carousel-Slide-1-Reforms",
      "01 / The reforms",
      "December 2025: the supplied timeline examines constitutional reforms, constituency expansion from 156 to 226, mixed-member representation, consultation and preparation time.",
    ],
    [
      "Carousel-Slide-2-Voting-Day",
      "02 / Voting day",
      "13 August 2026: the supplied timeline describes 14 presidential candidates, largely peaceful voting and the contest between Hichilema and Mundubile.",
    ],
    [
      "Carousel-Slide-3-Suspension",
      "03 / The suspension",
      "14 August 2026: the supplied timeline records the temporary counting suspension and reports of violence and stolen ballots. These are historical edition materials, not a live election update.",
    ],
    [
      "Carousel-Slide-4-Observers",
      "04 / The observers",
      "The supplied carousel compares observer concerns about uncertainty, results integrity, ballot secrecy and preventive diplomacy.",
    ],
    [
      "Carousel-Slide-5-What-Next",
      "05 / What next?",
      "Can electoral authorities restore confidence, protect ballot secrecy and resolve challenges? The publication's central lesson: democracy is more than voting day.",
    ],
  ],
  metrics() {
    return `<section class="impact-band"><div class="wrap"><div class="section-heading"><div><span class="eyebrow section-label">Impact to date</span><h2>Research with a <em>public purpose.</em></h2></div>${link("#/impact", "Impact & methodology")}</div><dl class="impact-numbers">${[
      ["34", "Countries monitored"],
      ["127", "Diagnostics published"],
      ["4,200+", "Subscribers across 34 countries"],
      ["12", "Reforms influenced or informed"],
    ]
      .map(([n, l]) => `<div><dt>${l}</dt><dd>${n}</dd></div>`)
      .join(
        "",
      )}</dl><p class="source-note">Publisher-reported figures from the supplied 2026 partnership brief; not live website analytics.</p></div></section>`;
  },
  assignments: [
    [
      "zambia",
      "Zambia",
      "governance",
      "Election integrity",
      "Zambia 2026: When results management fails the democratic stress test",
      "The original diagnostic and seven supplied campaign graphics.",
      "zambia-2026",
    ],
    [
      "south-africa",
      "South Africa",
      "corruption",
      "State capture",
      "South Africa: From state capture to institutional recovery - five years later",
      "The commissioned focus is institutional recovery and the response to the Zondo Commission.",
      "",
    ],
    [
      "drc-minerals",
      "Democratic Republic of the Congo",
      "governance",
      "Resource governance",
      "Critical minerals & the art of deal-making in the DRC",
      "Cobalt, copper, contract disclosure and who captures public value.",
      "",
    ],
    [
      "nigeria-efcc",
      "Nigeria",
      "corruption",
      "Anti-corruption",
      "Nigeria: The EFCC reform that never came",
      "A proposed investigation into anti-graft reform, procurement oversight and enforcement. The headline is a supplied working title, not a completed finding.",
      "",
    ],
    [
      "mpesa",
      "Kenya",
      "renaissance",
      "Innovation",
      "M-Pesa at 18: How Kenya built the world's most inclusive financial system",
      "A supplied working title for the financial-inclusion feature, covering mobile money and its wider applications.",
      "",
    ],
    [
      "afcfta",
      "Africa",
      "governance",
      "Regional integration",
      "AfCFTA: From agreement to execution - what still blocks trade",
      "A proposed examination of implementation, non-tariff barriers and cross-border commerce.",
      "",
    ],
    [
      "noor",
      "Morocco",
      "renaissance",
      "Green energy",
      "Morocco's solar miracle: Noor Ouarzazate",
      "The supplied programme's clean-energy feature, with project outcomes to be established through primary records.",
      "",
    ],
    [
      "polio",
      "Nigeria",
      "renaissance",
      "Health",
      "Nigeria eliminated wild poliovirus. Here's what the world can learn.",
      "A proposed feature on vaccination, health-system capacity and lessons from the 2020 certification.",
      "",
    ],
    [
      "coding-schools",
      "Rwanda",
      "renaissance",
      "Education",
      "Rwanda's coding schools are producing Africa's next tech workforce",
      "The supplied education and technology feature; reporting and outcome verification remain part of the commission.",
      "",
    ],
    [
      "wheat",
      "Ethiopia",
      "renaissance",
      "Agriculture",
      "Ethiopia's wheat revolution: From importer to exporter in 5 years",
      "A supplied working title for the agriculture feature, requiring production and trade records before publication.",
      "",
    ],
    [
      "dakar",
      "Senegal",
      "renaissance",
      "Infrastructure",
      "The Dakar-Diamniadio toll highway: A model for African infrastructure",
      "A planned infrastructure feature examining delivery, access, costs and public benefit.",
      "",
    ],
  ],
  editionRows(category, query, country) {
    return this.assignments
      .filter(
        (a) =>
          a[0] !== "mpesa" &&
          (category === "all" || a[2] === category) &&
          (!country || a[1] === country) &&
          a.join(" ").toLowerCase().includes(query.toLowerCase()),
      )
      .map(
        (a) =>
          `<article class="reading-row"><span class="reading-num">AGS</span><div><span class="tag eyebrow">${a[3]}</span><h2><a href="#/${a[6] || "assignment/" + a[0]}">${a[4]}</a></h2><p>${a[5]}</p></div><div class="reading-side"><span>${a[6] ? "Supplied diagnostic" : "Commissioned feature"}<br>${a[1]}</span><a href="#/${a[6] || "assignment/" + a[0]}">${a[6] ? "Read diagnostic" : "View editorial brief"} ↗</a></div></article>`,
      )
      .join("");
  },
  assignment(id) {
    const a = this.assignments.find((a) => a[0] === id);
    if (!a)
      return pageHead(
        "Editorial programme",
        "This brief is not available.",
        "Return to the reading room to explore the publication.",
      );
    return `${pageHead(a[3] + " / " + a[1], a[4], a[5])}<section class="wrap commissioning-brief"><span class="eyebrow section-label">From the supplied editorial programme</span><h2>A commissioned story, not a finished investigation.</h2><p>The original HTML includes this headline and a short summary, but no complete article text. It is preserved here as an editorial brief rather than linking to an unrelated Zambia report.</p><h3>The reporting standard</h3><p>Establish the primary-source record, verify figures and dates, include relevant responses, distinguish analysis from findings, and document the limitations. The supplied headline remains a working title until editorial approval.</p><a class="button dark" href="mailto:${contact}?subject=${encodeURIComponent("Publication enquiry: " + a[4])}">Ask about this feature ${arrow}</a><p>${link("#/diagnostics", "Return to the reading room")}</p></section>`;
  },
  introduction() {
    return `<section class="vision-section wrap"><div><span class="eyebrow section-label">Our vision</span><h2>Diagnose honestly.<br>Hold power accountable.<br><em>Track what works.</em></h2></div><div><p class="vision-statement">${this.vision}</p><p>${this.mission}</p>${link("#/about", "The mission behind the publication")}</div></section>`;
  },
  pulseGrid() {
    return `<section class="country-pulse wrap"><div class="section-heading"><div><span class="eyebrow section-label">Governance Pulse / October 2026 edition</span><h2>The continental <em>check-up.</em></h2></div>${link("#/methodology", "How to read these scores")}</div><p class="source-note">Publisher-supplied assessments on a 0-100 scale, not independently validated rankings or real-time data. Nigeria uses the revised October Pulse Check; other scores remain illustrative launch-package data. The scoring dataset and weights have not been supplied.</p><div class="country-pulse-grid">${this.countries.map(([n, s, t, tr]) => `<a class="pulse-country" href="#/country/${encodeURIComponent(n)}"><span>${n === "Democratic Republic of the Congo" ? "DR Congo" : n}</span><strong>${s}<small>/100</small></strong><span class="score-track" aria-hidden="true"><i style="--score:${s}%"></i></span><span class="pulse-country-topic">${t}</span><span class="pulse-trend">Trend in supplied edition: ${tr}</span></a>`).join("")}</div></section>`;
  },
  about() {
    return `${pageHead("The publication", "Independent analysis.<br>African progress.", this.vision)}${this.introduction()}<section class="wrap publication-pillars">${this.pillars.map(([n, d, f, r], i) => `<section class="research-item"><span class="serif">0${i + 1}</span><div><h2>${n}</h2><p>${d}.</p></div><div><p>${f}</p>${link("#/" + r, "Explore this pillar")}</div></section>`).join("")}</section><section class="method-strip"><div class="wrap method-strip-inner"><div><span class="eyebrow">Our identity</span><h2>Knowledge. Narrative.<br><em>Sovereignty.</em></h2></div><div><p>An initiative of African Intellectual Sovereignty Collective (Pvt) Ltd, based in Harare, Zimbabwe.</p><p>Our intended audience spans international funders, policymakers, researchers, journalists and African citizens.</p>${link("#/contact", "Contact the editorial team")}</div></div></section>`;
  },
  partners() {
    return `${pageHead("Partnerships / 2026-2028", "Fund independent thought.<br>Enable lasting change.", "Rigorous diagnostics, anti-corruption monitoring, and data-driven stories of African progress. An investment in the evidence that better decisions need.")}<section class="wrap funder-case"><span class="eyebrow section-label">Why this matters to funders</span><h2>The governance deficit.<br>The corruption crisis.<br><em>The narrative gap.</em></h2><div class="funder-evidence">${[
      [
        "01",
        "The governance deficit",
        [
          ["$1 trillion", "in potential GDP lost annually to poor governance"],
          [
            "$88 billion",
            "leaves Africa yearly through illicit financial flows",
          ],
          ["60%", "of Africans live under hybrid or authoritarian regimes"],
          [
            "<10%",
            "of governance data is accessible to local policymakers in usable form",
          ],
        ],
      ],
      [
        "02",
        "The corruption crisis",
        [
          ["$50 billion", "lost annually to corruption"],
          [
            "30-40%",
            "of public spending affected by procurement fraud in some countries",
          ],
          [
            "70%",
            "of African states lack effective whistleblower protection, according to the supplied brief",
          ],
        ],
      ],
    ]
      .map(
        ([i, t, stats]) =>
          `<section class="funder-evidence-group"><span class="eyebrow">${i} / ${t}</span><dl>${stats.map(([v, l]) => `<div><dt>${l}</dt><dd>${v.replace("<", "&lt;")}</dd></div>`).join("")}</dl></section>`,
      )
      .join(
        "",
      )}</div><p class="source-note">Context figures reproduced from the publisher's strategic brief. The $88 billion figure rounds UNCTAD's historical estimate of $88.6 billion annually, published in 2020. The other estimates require underlying source records before use as independently verified findings. <a href="https://unctad.org/publication/curbing-illicit-financial-flows-finance-sustainable-development-africa" target="_blank" rel="noopener noreferrer">Read the UNCTAD report ↗</a></p><div class="narrative-gap"><h3>Africa is more than its crises.</h3><div><p>International media too often covers Africa through crisis, conflict and charity. Innovation such as M-Pesa, Noor Ouarzazate and mRNA vaccine manufacturing receives fractional coverage, shaping investor perception, policy priorities and youth aspiration.</p><p>Mining contracts in the DRC, Zambia and Guinea also expose capacity asymmetries. Independent analysis can make complex agreements legible and put public benefit at the centre.</p></div></div></section><section class="partner-value"><div class="wrap"><div class="section-heading"><div><span class="eyebrow section-label">What funders get</span><h2>Local credibility.<br><em>Actionable intelligence.</em></h2></div></div><dl class="benefit-list">${[
      [
        "Independent data",
        "No government affiliation, no partisan bias, no commercial interest.",
      ],
      [
        "Local credibility",
        "Field-based researchers, local language capacity and cultural fluency.",
      ],
      [
        "Global reach",
        "4,200+ subscribers across 34 countries, including international organisations, embassies and media.",
      ],
      [
        "Actionable intelligence",
        "Not just scores: prescriptions, reform pathways and policy briefs.",
      ],
      [
        "Measurable impact",
        "Tracking reforms influenced, court cases supported and policies shaped.",
      ],
    ]
      .map(([t, d]) => `<div><dt>${t}</dt><dd>${d}</dd></div>`)
      .join(
        "",
      )}</dl><p class="source-note">The publisher's stated partnership proposition. Reach and impact figures are publisher-reported, not independently audited here.</p></div></section>${this.metrics()}<section class="wrap funding-plan"><span class="eyebrow section-label">Proposed funding / 24 months</span><div class="funding-heading"><h2>$450,000.<br><em>A stronger evidence base.</em></h2><p>A multi-year programme for foundations, bilateral agencies and international organisations. Proposed allocation, not funding already secured.</p></div><div class="budget-list">${[
      [
        "Platform & technology",
        120000,
        "Website, data infrastructure, CMS and security",
      ],
      [
        "Research & analysis",
        150000,
        "Analysts, field research and data partnerships",
      ],
      [
        "Corruption Tracker",
        80000,
        "Case monitoring, legal review and protected-channel development",
      ],
      ["Communications", 60000, "Design, video, social media and events"],
      ["Operations", 40000, "Administration, accounting, audit and compliance"],
    ]
      .map(
        ([n, v, d]) =>
          `<div><h3>${n}</h3><strong>$${v.toLocaleString("en-US")}</strong><span>${d}</span><i style="--allocation:${v / 1500}%" aria-hidden="true"></i></div>`,
      )
      .join(
        "",
      )}</div><h2 class="funding-subtitle">A partnership at the <em>right scale.</em></h2><div class="funding-tiers">${[
      [
        "Strategic partner",
        "Programme-wide support",
        "Post-publication briefings, transparent funding attribution and independently edited research. No pre-publication access or editorial control.",
      ],
      [
        "Institutional partner",
        "Annual institutional support",
        "Biannual briefings, event co-sponsorship and analyst fellowship support.",
      ],
      [
        "Project partner",
        "Defined project support",
        "Defined research scope, project reporting and funding attribution.",
      ],
    ]
      .map(
        ([t, v, d]) =>
          `<section><h3>${t}</h3><p class="tier-amount">${v}</p><p>${d}</p><a href="mailto:${contact}?subject=${encodeURIComponent(t + " enquiry")}">Discuss this partnership ↗</a></section>`,
      )
      .join(
        "",
      )}</div><p class="source-note">Proposed partnership terms, subject to agreement and the editorial policy's 30% single-funder cap. Funding attribution never confers editorial control or pre-publication access. <a href="/about/editorial-approach/">Read the independence policy ↗</a></p><div class="deck-request"><div><span class="eyebrow section-label">The partnership deck</span><h2>Start the <em>conversation.</em></h2><p>The supplied full deck is marked confidential. Request it directly from the editorial team.</p></div><div><a class="button dark" href="mailto:${contact}?subject=Request%20the%202026-2028%20partnership%20deck">Request the full deck ${arrow}</a><a class="text-link" href="assets/partnership-brief.pdf" download>Download the public introduction ${arrow}</a></div></div></section>`;
  },
  impact() {
    return `${pageHead("Impact & accountability", "Count the work.<br>Show the difference.", "A useful platform measures not only what it publishes, but what its evidence helps people do.")}${this.metrics()}<section class="wrap impact-detail"><div><span class="eyebrow section-label">Who we reach</span><h2>A shared interest in<br><em>better institutions.</em></h2><dl class="audience-list">${[
      [38, "Policy analysts & researchers"],
      [27, "Diplomats & international organisation staff"],
      [19, "Journalists & editors"],
      [16, "Civil society & advocacy leaders"],
    ]
      .map(
        ([v, l]) =>
          `<div><dt>${l}</dt><dd>${v}%</dd><span style="--score:${v}%" aria-hidden="true"></span></div>`,
      )
      .join(
        "",
      )}</dl><p class="source-note">Audience composition reported in the supplied partnership deck.</p></div><div><span class="eyebrow section-label">2026-2028 / Strategic goals</span><h2>The next chapter,<br><em>not a victory lap.</em></h2><dl class="benefit-list">${[
      ["40 countries", "Target research coverage"],
      ["200 diagnostics", "Target publication output"],
      ["150 cases", "Target corruption-monitoring records"],
      ["100 progress stories", "Target African Renaissance features"],
      ["10,000 subscribers", "Target newsletter audience"],
      ["15 reforms", "Target reforms influenced or informed"],
    ]
      .map(([n, d]) => `<div><dt>${n}</dt><dd>${d}</dd></div>`)
      .join(
        "",
      )}</dl><p class="source-note">Strategic targets, not achieved outcomes. The blueprint and 90-day plan use different planning baselines; they are not combined with reported current reach.</p></div></section><section class="wrap methodology-grid"><section><h2>Evidence of influence</h2><p>Record citations, policy references, documented reform decisions and permissioned accounts of how research was used. Publication volume alone is not evidence of causation.</p></section><section><h2>Inspect the method</h2><p>Edition scores need source dates, transparent weights and validation. The supplied scores are shown as illustrative package data, not an official index.</p>${link("#/methodology", "Methodology & editorial standards")}</section></section>`;
  },
  tracker() {
    return `${pageHead("Anti-Corruption / Corruption Tracker", "Follow the money.<br>Follow the response.", "State capture, procurement fraud, illicit financial flows and mining opacity. A continental research agenda, with evidence and institutional response at its centre.")}<section class="wrap tracker-section"><div class="notice">Launch-package research register. These eight entries restore the supplied monitoring agenda; scores are illustrative and are not Transparency International CPI rankings. No live case database or verified monetary-loss register is connected.</div><div class="room-controls"><label class="search-wrap" for="case-search">Search the register <input id="case-search" type="search" placeholder="Country or issue"></label><label class="case-sector-label" for="case-sector">Sector <select id="case-sector"><option value="all">All sectors</option><option>Extractives</option><option>Procurement</option><option>Institutions</option></select></label></div><p id="case-count" role="status"></p><div id="case-results"></div><div class="source-note">Expand a record for its evidence requirements. An allegation, an official finding and a judgment are different stages; no guilt is inferred from inclusion.</div></section><section class="wrap publication-pillars">${this.pillars[1][2]
      .split(" / ")
      .map(
        (n, i) =>
          `<section class="research-item"><span class="serif">0${i + 1}</span><h2>${n}</h2><p>${i === 4 ? "General enquiries go to the editorial desk. A secure, anonymous whistleblower service has not yet launched." : "A dedicated reporting format in the anti-corruption programme, developed around primary documents, context and a right of reply."}</p></section>`,
      )
      .join("")}</section>`;
  },
  country(name) {
    const c = this.countries.find((c) => c[0] === name);
    return `${pageHead("Country profile / October edition", name, c[2])}<section class="wrap country-profile"><div class="country-score"><span class="eyebrow">${name === "Nigeria" ? "Revised publisher assessment" : "Supplied illustrative score"}</span><strong>${c[1]}<small>/100</small></strong><p>Trend in package: ${c[3]}. Not a validated current rating.</p>${link("#/methodology", "Read the scoring note")}</div><div><h2>The research lens</h2><p>${countryNotes[name] || c[2] + " is the country's focus in the supplied editorial programme."}</p><h3>Four diagnostic dimensions</h3><p>Electoral integrity / State capacity / Rule of law / Economic management</p>${name === "Zambia" ? link("#/zambia-2026", "Read the Zambia diagnostic & visual dossier") : RevisedEdition.articles.some((a) => a.country === name) ? "<p>Full October-edition analysis is available below, with the source record and editorial context.</p>" : `<p>The package supplies a research focus, but no complete country-specific report for this profile. Contact the desk for the publication schedule.</p>`}${link("#/accountability", "Explore the corruption research register")}</div></section>`;
  },
  zambia() {
    return `<article class="article dossier"><div class="article-toolbar">${link("#/diagnostics", "The Reading Room")}<button class="share-button">Share ↗</button></div><span class="eyebrow section-label">Election integrity / Zambia / 14 August 2026 edition</span><h1>Zambia 2026: When results management fails the democratic stress test</h1><p class="standfirst">The voting was peaceful. But the results process - counting, transparency, ballot secrecy - is where democratic credibility is tested.</p><p class="source-note">The African Governance Stethoscope Editorial / Supplied launch report and campaign artwork. Historical edition, not a current election alert.</p><section><h2>The suspension that changed everything</h2><p>The supplied diagnostic examines the Electoral Commission of Zambia's temporary suspension of counting and results announcements on 14 August 2026, following reports of attacks on polling personnel and stolen ballots. Counting subsequently resumed. The publication asks what the interruption revealed about institutional preparedness and public confidence.</p><p>Contemporaneous reporting records both the suspension and its reversal. The supplied artwork captures the concerns of that moment; its risk assessments are the publisher's own, not official electoral results.</p><p><a href="https://times.co.zm/ecz-lifts-suspension-first-election-results-due-at-2200/" target="_blank" rel="noopener noreferrer"><u>Contemporaneous report: ECZ lifts suspension, Times of Zambia ↗</u></a></p></section><section><h2>Governance diagnostic: three pressure points</h2><h3>01 / Late constitutional reforms</h3><p>The supplied report examines the December 2025 constitutional changes, expanded constituencies, mixed-member representation and the time available for implementation. Its central question is whether institutional preparation and public consultation kept pace with the legal changes.</p><h3>02 / Ballot secrecy</h3><p>The publication's observer summary raises concerns about voter identifiers and ballot secrecy. Such concerns require a clear procedural record, the full observer statements and a response from electoral authorities; they should not be read as a final legal finding.</p><h3>03 / Institutions beyond polling day</h3><p>Credibility depends on transparent results management, lawful security responses and independent routes to challenge. The diagnostic looks beyond a peaceful polling day to the full electoral ecosystem.</p></section><section><h2>The prescription</h2><ol class="prescription-list"><li>Publish a transparent incident report with timelines, corrective measures and a public accounting of interruptions.</li><li>Review electoral reforms through a participatory process, with meaningful civil society input before the next cycle.</li><li>Maintain observation beyond results announcements, including grievance mechanisms and judicial review.</li></ol></section><blockquote>Democracy is more than voting day.</blockquote><section><h2>The visual dossier</h2><p>Original publisher-supplied artwork, with readable summaries and full-resolution downloads. The percentages are editorial stress-test assessments; no calculation methodology was supplied.</p><div class="dossier-graphics">${this.graphics
      .slice(0, 2)
      .map((g) => this.graphic(g))
      .join(
        "",
      )}</div></section><section><h2>Five moments. One stress test.</h2><div class="timeline-tabs" role="group" aria-label="Election timeline">${this.graphics
      .slice(2)
      .map(
        (g, i) =>
          `<button data-timeline="${i}" aria-pressed="${i === 0}">${i + 1}<span>${g[1].split(" / ")[1]}</span></button>`,
      )
      .join(
        "",
      )}</div><div class="timeline-slide"></div></section><p>${link("#/methodology", "How to read the evidence")}</p></article>`;
  },
  graphic(g) {
    return `<figure class="publication-graphic"><a href="assets/editorial/${g[0]}.png" target="_blank" rel="noopener" aria-label="Open full-resolution ${g[1]}"><img src="assets/editorial/${g[0]}.webp" alt="${g[1]}" loading="lazy" width="900" height="1000"></a><figcaption><h3>${g[1]}</h3><p>${g[2]}</p><a href="assets/editorial/${g[0]}.png" download>Download original graphic ${arrow}</a></figcaption></figure>`;
  },
  contactPage() {
    return `${pageHead("Contact", "A question worth asking?", "Research contributions, corrections, publication enquiries and partnership conversations.")}<section class="wrap contact-page"><div><h2>Write to the editorial desk.</h2><a class="contact-email" href="mailto:${contact}">${contact}</a><p>Harare, Zimbabwe / African Intellectual Sovereignty Collective (Pvt) Ltd</p><p>For corrections, include the page link, the statement in question and the evidence supporting a change. Ordinary email is not a protected whistleblower channel.</p></div><div><h2>Partnership enquiries</h2><p>Request the 2026-2028 deck or discuss a defined programme of independent research.</p><a class="button dark" href="mailto:${contact}?subject=Partnership%20enquiry">Start a conversation ${arrow}</a></div></section>`;
  },
  setup(root) {
    const search = root.querySelector("#case-search");
    if (search) {
      const sector = root.querySelector("#case-sector");
      const draw = () => {
        const rows = this.cases.filter(
          (c) =>
            (sector.value === "all" || c[3] === sector.value) &&
            c.join(" ").toLowerCase().includes(search.value.toLowerCase()),
        );
        root.querySelector("#case-count").textContent =
          `${rows.length} research records`;
        root.querySelector("#case-results").innerHTML = rows.length
          ? rows
              .map(
                ([n, t, d, s, sc]) =>
                  `<details class="case-record"><summary><span>${n === "Democratic Republic of the Congo" ? "DR Congo" : n}</span><strong>${t}</strong><span>${s}</span><span>${sc}/100 <small>illustrative</small></span></summary><div><p>${d}</p><p><strong>Status:</strong> Research agenda / source review required.</p><p><strong>Evidence requirements:</strong> Primary records, publication dates, responses from relevant institutions, and the legal status of any finding.</p><a href="#/country/${encodeURIComponent(n)}">Open country profile ${arrow}</a></div></details>`,
              )
              .join("")
          : '<p class="empty-state">No records match. Try another country or sector.</p>';
      };
      search.addEventListener("input", draw);
      sector.addEventListener("change", draw);
      draw();
    }
    const tabs = [...root.querySelectorAll("[data-timeline]")];
    if (tabs.length) {
      const show = (index) => {
        tabs.forEach((t, i) =>
          t.setAttribute("aria-pressed", String(i === index)),
        );
        root.querySelector(".timeline-slide").innerHTML = this.graphic(
          this.graphics[index + 2],
        );
      };
      tabs.forEach((t, i) => t.addEventListener("click", () => show(i)));
      show(0);
    }
  },
};
