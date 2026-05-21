# simojamal.com — Personal Website & Platform

## What this is

A personal website that doubles as a platform. It hosts:
1. A **public homepage** (portfolio + about + contact)
2. **Project showcase pages** (one per project)
3. **Hidden legal/support pages** for apps published to App Store and Play Store (privacy policies, terms, support URLs) — these must be accessible by URL but NOT shown in the nav
4. A **future "tools" section** for utilities I build (AI CV screener, IT helpdesk bot, etc.) that I want to host on my own domain

Treat this as a long-lived platform I'll keep adding to, not a static portfolio.

---

## About me (use this throughout)

- **Name:** Mohammed Jamal (goes by Simo)
- **Title:** IT & Systems Specialist
- **Tagline:** "Six years building and supporting IT systems, with a growing focus on AI automation. Multilingual, hands-on, and obsessed with making things work better."
- **Location:** Dubai, UAE
- **Languages:** Arabic (Native), English (Fluent), French (Fluent), Mandarin (HSK4)
- **Email:** REDACTED
- **Phone / WhatsApp:** REDACTED
- **LinkedIn:** https://linkedin.com/in/mohammedjamal1995
- **GitHub:** @simojamal
- **Domain:** simojamal.com

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** Formspree (free tier) — placeholder URL `https://formspree.io/f/YOUR_FORM_ID`, I'll swap it in after sign-up
- **Deploy:** Vercel (already familiar with the workflow)
- **Domain:** simojamal.com (DNS will point to Vercel)
- **Analytics:** Vercel Analytics (built-in, free)

---

## Design system

### Color palette (light, editorial, warm — NOT dark mode)

```css
--ivory: #F4F1EA       /* main background */
--ivory-dark: #EAE5DA  /* alternate section background */
--sage: #8A9A7B        /* primary accent */
--sage-light: #C8D2BE  /* soft accent */
--sage-dark: #5C6A52   /* deeper accent */
--navy: #1F2937        /* main text + contact section bg */
--navy-soft: #374151   /* secondary text */
--sun: #E8B53D         /* highlight / CTA */
--rust: #C4622D        /* accent secondary */
--line: #D8D3CB        /* borders */
```

Sections alternate `--ivory` and `--ivory-dark` backgrounds. The Contact section is `--navy` (dark) for contrast at the end.

### Typography

- **Display (headings):** `Fraunces` from Google Fonts — weights 400, 700, 900; uses italic for emphasis
- **Body:** `Public Sans` from Google Fonts — weights 300, 400, 500
- **Mono (labels, eyebrow text):** `JetBrains Mono` — weights 300, 400, 500

### Visual details to preserve

- Section eyebrow uses mono font with a `§` prefix in `--sun` color
- Section titles use Fraunces 900 weight with italic `<em>` for one word in `--sage-dark`
- Subtle SVG grain texture overlay on the body (already in reference HTML)
- Photo has a layered offset frame (sage-light shadow behind it)
- Yellow underline highlight for important phrases (via `::after` pseudo)
- Custom SVG geometric logos for each project (already designed in reference HTML)
- Mock-browser frames for project screenshots (with traffic-light dots)
- Scroll reveal animation (`.r` → `.r.shown` with translateY + opacity)
- 22px green pulse dot for "Available" status indicator
- All section transitions use `cubic-bezier(.2,.7,.3,1)`

---

## Page structure (homepage)

In order:

1. **Hero** — name, role, tagline, [View CV] [Explore Work] [Get In Touch] buttons, photo with overlay tag, availability pill, Dubai clock
2. **What I Do** — 4 cards: IT Support & Systems / VoIP / AI Automation / Training & Multilingual Support
3. **Skills** — 4 categorized blocks: IT Systems / AI & Automation / Development / Communication & Training
4. **Side Projects** — clickable list, each opens a modal (or links to its own page — see below)
5. **Experience** — timeline of 5 roles with the current one highlighted
6. **Education** — Shanghai University + Hassan 1st University
7. **About** — combined personal story + fun facts + hobbies
8. **Contact** — Formspree form + WhatsApp/Email/LinkedIn/GitHub cards (this section has navy background)

A "View CV" button is persistent in the nav top right and in the hero. Opens a modal with full CV content + Download PDF button. PDF path: `/cv/mohammed-jamal-cv.pdf`.

---

## Routing

```
/                              homepage
/projects                      all projects list
/projects/[slug]               individual project page (MenuQR, Travel AI, Doctor SaaS, etc.)
/tools                         tools index (future)
/tools/[slug]                  individual tool (full React app embedded)
/legal/[slug]                  hidden — privacy policies, terms (NOT in nav)
/support/[slug]                hidden — app support pages (NOT in nav)
/api/contact                   form handler (or just use Formspree directly)
```

**Important:** `/legal/*` and `/support/*` must be valid URLs (Apple/Google App Store require them) but must NOT appear in the navigation. They only get linked from inside the apps themselves.

---

## Projects (current data)

```ts
// content/projects.ts
export const PROJECTS = [
  {
    slug: 'travel-ai',
    name: 'Travel AI Planner',
    category: 'AI · SaaS',
    status: 'side',                    // 'live' | 'side' | 'building'
    tagline: 'Where can your passport take you?',
    blurb: 'AI-powered trip planner that suggests destinations based on your passport\'s visa-free countries and budget.',
    description: 'A travel discovery tool that flips the usual planning model. Instead of picking a destination first, you start with what you have — your passport and your budget — and the AI suggests where you can actually go without visa hassles.',
    features: [
      'Passport-aware destination filtering across 150+ countries',
      'Budget-based recommendations with realistic cost breakdowns',
      'AI-generated daily itineraries with stays, food, and activities',
      'Multi-language support'
    ],
    stack: ['React', 'OpenAI API', 'Supabase', 'TypeScript', 'Tailwind'],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    hasPrivacyPolicy: false,
    hasSupport: false,
  },
  {
    slug: 'menuqr',
    name: 'MenuQR',
    category: 'SaaS',
    status: 'side',
    tagline: 'Restaurant menus, reinvented for mobile.',
    blurb: 'Digital QR-code menus for restaurants. Multi-language, image-rich, with kitchen order routing.',
    description: 'A complete digital menu solution for restaurants. Customers scan a QR code at the table, browse the menu in their preferred language with real food photos, and orders flow directly to the kitchen.',
    features: [
      'QR-to-menu in under 2 seconds',
      'Multi-language menu display (Arabic, English, French, more)',
      'High-quality food images with ingredient details',
      'Direct order routing to kitchen tablet',
      'Stripe-powered payments at the table'
    ],
    stack: ['React', 'Stripe', 'Postgres', 'Cloudflare Workers', 'Tailwind'],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    hasPrivacyPolicy: true,           // → /legal/menuqr-privacy
    hasSupport: true,                 // → /support/menuqr
  },
  {
    slug: 'doctor-saas',
    name: 'Doctor SaaS',
    category: 'SaaS · Healthcare',
    status: 'side',
    tagline: 'Clinics still running on spreadsheets, finally got an upgrade.',
    blurb: 'Clinic management platform — patient records, appointments, billing, and prescriptions.',
    description: 'A complete clinic management platform built for small to mid-size healthcare practices.',
    features: [
      'Patient records with encrypted sensitive data',
      'Smart appointment scheduling with reminders',
      'Billing & invoicing with insurance support',
      'Digital prescriptions',
      'Multi-doctor and multi-location support'
    ],
    stack: ['Vue 3', 'NestJS', 'Postgres', 'AWS', 'Redis'],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    hasPrivacyPolicy: true,
    hasSupport: true,
  },
  {
    slug: 'cv-screener',
    name: 'AI CV Screener',
    category: 'AI Tool',
    status: 'building',
    tagline: 'Hire smarter, not harder.',
    blurb: 'Drop a job description and CVs, get a ranked shortlist with AI reasoning.',
    description: 'Reads CVs the way a thoughtful recruiter would. Drop a JD and CVs, get a ranked shortlist with clear reasoning.',
    features: [
      'Bulk CV upload and parsing (PDF, DOCX, TXT)',
      'Match scoring against your specific job description',
      'AI-generated reasoning for each candidate',
      'Highlights gaps, red flags, and standout strengths',
      'Export shortlist to CSV or share via link'
    ],
    stack: ['Python', 'LangChain', 'Claude API', 'FastAPI', 'React'],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    hasPrivacyPolicy: false,
    hasSupport: false,
  },
  {
    slug: 'helpdesk-bot',
    name: 'IT Helpdesk Bot',
    category: 'AI · Automation',
    status: 'building',
    tagline: 'IT support that doesn\'t sleep — or get tired.',
    blurb: 'AI-powered IT support chatbot. Handles tier-1 tickets, answers in 4 languages.',
    description: 'Built from my own experience as IT support. Handles tier-1 tickets automatically in 4 languages, escalates the rest.',
    features: [
      'Handles password resets, VPN issues, common how-tos',
      'Replies in Arabic, English, French, and Mandarin',
      'Logs every conversation to Google Sheets',
      'Escalates complex issues to human staff via Slack',
      'Built on n8n — easy for any team to customize'
    ],
    stack: ['n8n', 'Claude API', 'Slack API', 'Google Sheets'],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    hasPrivacyPolicy: false,
    hasSupport: false,
  },
  {
    slug: 'email-triage',
    name: 'AI Email Triage Bot',
    category: 'Automation',
    status: 'building',
    tagline: 'Inbox zero, automated.',
    blurb: 'Reads incoming emails, classifies urgency with AI, drafts replies, logs to Sheets.',
    description: 'For small businesses drowning in inbox chaos. Reads each email, classifies it, drafts a reply, logs everything.',
    features: [
      'Auto-classifies emails: urgent, inquiry, complaint, spam, other',
      'Drafts professional replies in the sender\'s language',
      'Logs every email to Google Sheets with full metadata',
      'Notifies team on Slack for high-priority items',
      'Setup in under 30 minutes'
    ],
    stack: ['n8n', 'Claude API', 'Gmail API', 'Google Sheets'],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    hasPrivacyPolicy: false,
    hasSupport: false,
  },
];
```

---

## Build steps (recommended order)

1. **Init project**: `npx create-next-app@latest simojamal-website --typescript --tailwind --app --no-src-dir`
2. **Set up fonts** in `app/layout.tsx` (Fraunces, Public Sans, JetBrains Mono via `next/font/google`)
3. **Set up Tailwind theme** in `tailwind.config.ts` with the color palette above as custom colors
4. **Build shared components**: Nav, Footer, SectionHeader, RevealOnScroll wrapper
5. **Build homepage** matching the reference HTML exactly — same structure, same animations, same content
6. **Build dynamic project pages** at `app/projects/[slug]/page.tsx` reading from `content/projects.ts`
7. **Build legal/support templates** at `app/legal/[slug]/page.tsx` and `app/support/[slug]/page.tsx`
8. **Wire up contact form** with Formspree (placeholder URL until I provide real one)
9. **Add CV modal** with embedded preview (content from CV pasted into a React component) + Download PDF button pointing to `/public/cv/mohammed-jamal-cv.pdf`
10. **Deploy to Vercel**, hook up simojamal.com domain

---

## What the AI should NOT do

- Do **not** change the color palette without asking
- Do **not** add dark mode — this site is intentionally light/editorial
- Do **not** swap out the Fraunces serif for a sans-serif heading font
- Do **not** add sections that weren't requested (testimonials, blog, newsletter)
- Do **not** add the legal/support pages to the navigation
- Do **not** use a CMS (Sanity, Contentful) — markdown files or the TypeScript content file is enough for now
- Do **not** install heavy animation libraries — IntersectionObserver + CSS is sufficient

---

## Reference HTML

Use `reference-homepage.html` in this folder as the source of truth for layout, copy, spacing, and visual details. Port it to Next.js + React + Tailwind 1:1 — same fonts, same colors, same animations, same structure. Don't redesign it; translate it.
