Medium Priority Issues (Fix Within 1 Month)
#	Issue	Severity	Impact
14	Address uses "Los Héroes" without "Mérida" city	Medium	Local geo-parsing
15	No About/Nosotros page with prose team info	Medium	E-E-A-T, entity clarity
16	Footer copyright: "Identidad digital" vs "Identia Studio"	Medium	NAP consistency
17	No blog / content marketing section	Medium	Topical authority, informational traffic
18	Sitemap lastmod dates all identical (2026-03-04)	Medium	Crawl priority signaling
19	No FAQ section (opportunity for AI Overviews)	Medium	GEO, rich results
20	Content is bullets/fragments, not citable prose	Medium	AI citation readiness
21	No portfolio case study detail pages	Medium	E-E-A-T, long-tail traffic
22	No testimonials with named attribution	Medium	Trust signals
23	No explicit AI crawler names in robots.txt	Medium	AI search control
24	Missing WebSite schema with SearchAction	Medium	Sitelinks search box
25	No privacy policy (LFPDPPP compliance)	Medium	Legal risk, trust
Low Priority Issues (Backlog)
#	Issue
26	WhatsApp number format inconsistency (display vs href)
27	Portfolio section alt text uses project titles only — no descriptive context
28	No og:image / Open Graph tags for social sharing
29	No Twitter/X card meta tags
30	Referral program pages not promoted in main navigation
31	changefreq values in sitemap are ignored by Google (cleanup only)
32	Instagram handle @identia.studio.mid — "mid" abbreviation unclear to new audiences
What's Working Well
HTTPS confirmed — secure connection
robots.txt exists with clean Allow: / directive
Bilingual architecture exists (en + es) — foundation is in place
Footer tagline "Desarrollo Web y Marketing Digital en Mérida" is a strong local signal
Phone, WhatsApp (+90% Mexico penetration), and social media all present
Referral program with specific terms (up to 15% commission) — citable, factual content
Clear 5-phase process (Onboarding → Discovery → Moodboard → Refining → Deliver)
Three portfolio projects named (even if under-detailed)
Next.js is an excellent SEO-capable stack — just needs SSR enabled
AI Search Readiness: 27 / 100
Platform	Score	Primary Blocker
Google AI Overviews (ES)	12/100	CSR + no schema + no hreflang + no FAQ
ChatGPT Web Search	18/100	No llms.txt + CSR blocks extraction
Perplexity	22/100	No llms.txt + CSR
Bing Copilot	20/100	No schema + no OG tags
Claude Web Tool	15/100	CSR prevents content extraction
Local SEO: 21 / 100
Dimension	Score
GBP Signals	5/100
Reviews & Reputation	0/100
Local On-Page SEO	40/100
NAP Consistency	30/100
Local Schema	0/100
Local Link Authority	75/100
Top citation targets for a Mérida agency:
Clutch.co → GoodFirms → DesignRush → Páginas Amarillas México → Kompass Mexico → AgenciasMX

90-Day Action Roadmap
Week 1–2 (Critical — Structural Fixes)
Enable SSR/SSG on all Next.js routes — verify with curl -s [url] | grep "<title>"
Fix double-slash URLs in sitemap generation config
Add hreflang tags to all page layouts
Add meta title + description to all pages via Next.js metadata export
Fix "item.title" bug in portfolio image alt text
Create llms.txt at /public/llms.txt
Set up domain email (hola@identiastudio.com)
Week 3–4 (High — Schema & Local)
Implement JSON-LD schema (MarketingAgency + ProfessionalService + Organization)
Claim/optimize Google Business Profile — category: "Agencia de marketing digital"
Create /es/contacto page with embedded Google Maps + full NAP + schema
Update robots.txt Sitemap directive to www URL; add named AI crawler blocks
Rewrite H1/H2 to include "Mérida, Yucatán" geo-modifier
Month 2 (High → Medium — Content)
Create dedicated service pages (/es/desarrollo-web, /es/apps-moviles, etc.)
Add /es/nosotros About page with team bios, founding year, mission (300+ words)
Rewrite service sections as direct-answer prose (50–60 word paragraphs, not bullets)
Add Spanish-language FAQ section targeting: "¿Qué hace Identia Studio?", "¿Cuánto cuesta una app en Mérida?", "¿Trabajan fuera de México?"
Expand portfolio to case study pages with client industry, problem, solution, tech stack
Month 3 (Medium — Authority & Compliance)
Submit to Clutch, GoodFirms, DesignRush with consistent NAP
Launch review acquisition program (post-project email flow for Google reviews)
Publish privacy policy (/es/privacidad) — LFPDPPP compliance
Add aggregateRating schema once reviews accumulate
Start blog targeting informational queries: "cómo elegir una agencia digital en Mérida", "cuánto cuesta una app móvil en México"
Projected Score After Full Implementation
Category	Current	Projected
Technical SEO	22	75
Content Quality	25	65
On-Page SEO	24	70
Schema	0	80
Performance (CWV)	~45	~60
AI Search Readiness	27	68
Images	35	70
Overall	24	69
Want a deeper dive into any category? Try:

/seo page https://www.identiastudio.com/es — page-level analysis
/seo google https://www.identiastudio.com — PageSpeed + GSC data (requires credentials)
/seo cluster agencia digital Mérida — keyword cluster architecture
/seo drift baseline https://www.identiastudio.com — capture baseline for change tracking

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The final SXO agent just completed. Here are the key additional findings it surfaced that reinforce and expand the audit:

SXO Addendum — Score: 41 / 100
Most important additional finding: Page-Type Architecture Mismatch

The site is attempting to rank a generic agency homepage for queries that Google rewards with dedicated service + location landing pages. Every target keyword (agencia digital Yucatán, diseño web Mérida, desarrollo web México) has a SERP dominated by URL-addressable service pages — not single-page apps. With only 7 indexed URLs total, this is the core architectural barrier to ranking.

Persona scores (how different searchers experience the site):

Persona	Score	Biggest Gap
E-commerce store owner	37/100	No e-commerce-specific language or metrics
Tech startup founder	48/100	No tech stack named, no pricing/timeline
Local SMB owner	52/100	Hero section has zero geo-modifier
Marketing director	58/100	No shareable case study URLs
Referred warm lead	66/100	Best fit — but no fast-track CTA flow
Additional bug found: The RedHome Inmobiliaria case study description appears to be a copy-paste of the CruceIDSE description — duplicate content within a single page, which Google's quality rater guidelines flag as thin/low-effort content.

Three structural barriers that even a fully on-page-optimized site won't overcome without addressing:

Domain authority gap — ~1-year-old domain competing against 3–8-year incumbents with directory citations
Zero topical authority — a 7-page site cannot rank against agencies with 30+ blog articles on web dev in Mexico
Local Pack exclusion — no verified GBP means the site is categorically invisible for the highest-clicked SERP real estate on geo-modified queries
The SXO findings are fully consistent with everything in the main audit above — the architecture fix (SSR + dedicated service pages + GBP) is the unlock for everything else.