# The African Governance Stethoscope

An editorial publication frontend for African Intellectual Sovereignty Collective (Pvt) Ltd. Plain HTML, CSS and JavaScript; no production dependencies or build step.

## Preview

Serve the repository root with a static HTTP server. The current development preview runs at http://127.0.0.1:4183/. Open index.html through HTTP for the interactive inline Africa map. Other views, article search and the native country selector also work when the map fetch is unavailable.

## Structure

- index.html: publication shell and metadata
- styles.css: responsive editorial design
- script.js: content, hash routes and interactions
- publication.js: restored publisher vision, funder case, country snapshots, monitoring register and visual dossier
- lens.js: one-pass, four-second country tour with manual selection and route-scoped cleanup
- photography.js: editorial photograph attribution and licence view
- edition-data.js / edition.js: revised October 2026 long-form content and shared article rendering
- scripts/export-edition.mjs: regenerates static article pages, sitemap and robots file
- experience.js: route-scoped reversible motion, reading progress and accessible auto catalogue
- assets/: optimized map, identity, cover and partnership PDF
- collective.html: preserved original company brochure
- partnership-brief.html: printable source of the PDF
- vercel.json: static-root deployment settings

## Routes

Home, #/diagnostics, #/accountability, #/renaissance, #/methodology, #/partners, #/impact, #/about, #/contact, #/zambia-2026, #/pulse and #/privacy. Nine supplied country profiles use #/country/Zambia and equivalent country names. Supplied commissioning briefs use #/assignment/mpesa and equivalent identifiers; additional editorial previews use #/read/beyond-the-ballot. Unknown routes display a recovery view.

## Content status

The 25 October manuscript adds four complete analysis pieces and a revised editorial-policy page. They have clean static routes under diagnostics/, tracker/, renaissance/, pulse/ and about/, while the existing hash routes remain available. The homepage/reading room/catalogue prioritise the new edition. Nigeria's revised supplied assessment is 43/100; its dataset and weights remain unavailable and that limitation is shown. Sources and editorial interpretation are distinguished; public audited accounts and funder records are not claimed to exist without the files. Incompatible early-access and old fixed partnership tiers were removed in favour of the revised independence policy.

After editing edition-data.js, edition.js or the shared index.html shell, run `node scripts/export-edition.mjs` from the repository root and commit the regenerated article directories and sitemap. No installed build dependencies are required. The original revised manuscript, import tool and paragraph-level review record remain private under work/; the client-facing review is under outputs/.

The supplied ZIP includes a strategic blueprint, a future production architecture, a launch checklist, a content calendar, promotional graphics and a demo website. Source files are preserved locally in work/package; they are deliberately excluded from deployment.

The 23 October restoration includes the exact supplied vision and mission, three named pillars/formats, funder case and benefits, proposed budget/tiers, publisher-reported impact/audience, nine illustrative country snapshots, eight expandable monitoring topics, the Zambia diagnostic and seven original downloadable campaign graphics. Eleven supplied article titles/summaries have distinct destinations. Only Zambia has complete source report text; the others are clearly commissioning briefs. Six additional editorial previews remain explicitly labelled.

Publisher-reported impact, illustrative edition scores and future strategic targets are distinguished. Scores have no reproducible validation record and are not official CPI rankings. Unsubstantiated case accusations are not presented as established findings. The confidential partnership graphic remains private; its public-facing funding summary and deck-request action are available. Target funders are not shown as existing partners. Details and outstanding requirements are recorded privately in outputs/package-restoration-audit.md.

The map uses simplified public-domain Natural Earth geography from datasets/geo-countries (https://github.com/datasets/geo-countries). Highlighting indicates the selected research agenda, not a governance rating.

The map illustration includes 55 geographic regions, including the small island countries. Responsive framing keeps the full illustration inside the hero at desktop and mobile widths; it does not rely on negative offscreen positioning or a fade mask.

## Integrations

Newsletter interest opens a prepared email to the existing editorial contact. It does not persist a subscription or send automatically. No analytics scripts, API keys, fabricated submission responses or subscriber database are included.

CMS, authenticated administration, newsletter provider, verified datasets, protected submissions, published case records and custom domain ownership remain to be configured. The ZIP's suggested stack is a future production brief, not evidence of connected services.

## Brand & browsing

The Continental Lens tours all 11 available research lenses once at four seconds per country, updating the map highlight and destination. After the final four-second frame it switches to the native country picker. Pause/resume and early selection are available; hover, focus, off-screen panels and hidden tabs suspend the timer. Reduced-motion starts directly in manual mode. Route changes dispose the timer and listeners.

Three credited contextual photographs break up the homepage: Parliament in Cape Town, Nairobi from Uhuru Park and Noor I/II near Ouarzazate. Responsive 640/1280 WebP derivatives are served locally. Full attribution, dates, original links, modification notices and licences are available at #/credits and in MEDIA-SOURCES.json. They do not imply site visits, partnerships or endorsements.

Uses the supplied package's midnight navy #0B1120, blue #3B82F6, cyan #06B6D4 and cool-white palette. Darker blue links on white preserve text contrast. Fraunces and DM Sans retain the curved editorial typography.

The six-item field-notes catalogue derives from the shared article collection. Desktop auto-advances only while visible; it pauses on hover, focus, hidden pages and manual interaction. Previous/next, play/pause, keyboard and swipe navigation are available. Mobile defaults to paused. Reduced-motion turns off autoplay and section motion, while leaving manual browsing usable.

Scroll reveals reset above and below the viewport. Pillar progression and the article reading indicator follow both forward and reverse scrolling. The motion layer uses native IntersectionObserver/CSS transforms rather than intercepting page scrolling. Route changes dispose observers, timers and event listeners. Lucide icons are vendored under assets/icons with their license.

A single fixed 3px cyan line at the top shows a loading sweep during initial/route rendering, then tracks whole-page scroll progress in both directions on every route. It stays above the directional header, resets on navigation and replaces the former article-only indicator. Reduced-motion uses a static loading line instead of the sweep.

## Deployment

Vercel: Framework Other; repository root; no build or install command; output directory '.'. The publication deploys through the african-governance-stethoscope project. Source is maintained in the existing African-Intellectual-Sovereignty-Collective GitHub repository. Local .vercel metadata, work/, outputs/, payment PDFs and original planning documents are excluded from publication.

## QA

Browser-tested at 320, 360, 375, 390, 430, 768, 1024, 1366 and 1920 pixels. Search, filtering, empty states, country views, articles, navigation, sharing, PDF download, reduced motion and header direction were checked. Additional tests cover catalogue auto-play/pause/resume, manual controls, keyboard browsing, reversible reveals/pillar progression/reading progress, and an axe accessibility scan. Evidence is retained in work/qa-results.json, work/experience-qa.json and screenshots under work/.
