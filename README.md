# The African Governance Stethoscope

An editorial publication frontend for African Intellectual Sovereignty Collective (Pvt) Ltd. Plain HTML, CSS and JavaScript; no production dependencies or build step.

## Preview

Serve the repository root with a static HTTP server. The current development preview runs at http://127.0.0.1:4183/. Open index.html through HTTP for the interactive inline Africa map. Other views, article search and the native country selector also work when the map fetch is unavailable.

## Structure

- index.html: publication shell and metadata
- styles.css: responsive editorial design
- script.js: content, hash routes and interactions
- experience.js: route-scoped reversible motion, reading progress and accessible auto catalogue
- assets/: optimized map, identity, cover and partnership PDF
- collective.html: preserved original company brochure
- partnership-brief.html: printable source of the PDF
- vercel.json: static-root deployment settings

## Routes

Home, #/diagnostics, #/accountability, #/renaissance, #/methodology, #/partners, #/pulse and #/privacy. Country views use #/country/Zambia, article views use #/read/beyond-the-ballot. Unknown routes display a recovery view.

## Content status

The supplied ZIP includes a strategic blueprint, a future production architecture, a launch checklist, a content calendar, promotional graphics and a demo website. Source files are preserved locally in work/package; they are deliberately excluded from deployment.

The blueprint's zero baselines contradict its audience and impact claims. Demonstration country scores, corruption rankings, readership numbers and proposed funder endorsements were not carried forward. The six reading-room pieces are newly drafted editorial previews based on the supplied research themes, not verified country reports. Approve and replace them with sourced reporting before editorial launch.

The map uses simplified public-domain Natural Earth geography from datasets/geo-countries (https://github.com/datasets/geo-countries). Highlighting indicates the selected research agenda, not a governance rating.

The map illustration includes 55 geographic regions, including the small island countries. Responsive framing keeps the full illustration inside the hero at desktop and mobile widths; it does not rely on negative offscreen positioning or a fade mask.

## Integrations

Newsletter interest opens a prepared email to the existing editorial contact. It does not persist a subscription or send automatically. No analytics scripts, API keys, fabricated submission responses or subscriber database are included.

CMS, authenticated administration, newsletter provider, verified datasets, protected submissions, published case records and custom domain ownership remain to be configured. The ZIP's suggested stack is a future production brief, not evidence of connected services.

## Brand & browsing

Uses the supplied package's midnight navy #0B1120, blue #3B82F6, cyan #06B6D4 and cool-white palette. Darker blue links on white preserve text contrast. Fraunces and DM Sans retain the curved editorial typography.

The six-item field-notes catalogue derives from the shared article collection. Desktop auto-advances only while visible; it pauses on hover, focus, hidden pages and manual interaction. Previous/next, play/pause, keyboard and swipe navigation are available. Mobile defaults to paused. Reduced-motion turns off autoplay and section motion, while leaving manual browsing usable.

Scroll reveals reset above and below the viewport. Pillar progression and the article reading indicator follow both forward and reverse scrolling. The motion layer uses native IntersectionObserver/CSS transforms rather than intercepting page scrolling. Route changes dispose observers, timers and event listeners. Lucide icons are vendored under assets/icons with their license.

## Deployment

Vercel: Framework Other; repository root; no build or install command; output directory '.'. The publication deploys through the african-governance-stethoscope project. Source is maintained in the existing African-Intellectual-Sovereignty-Collective GitHub repository. Local .vercel metadata, work/, outputs/, payment PDFs and original planning documents are excluded from publication.

## QA

Browser-tested at 320, 360, 375, 390, 430, 768, 1024, 1366 and 1920 pixels. Search, filtering, empty states, country views, articles, navigation, sharing, PDF download, reduced motion and header direction were checked. Additional tests cover catalogue auto-play/pause/resume, manual controls, keyboard browsing, reversible reveals/pillar progression/reading progress, and an axe accessibility scan. Evidence is retained in work/qa-results.json, work/experience-qa.json and screenshots under work/.
