# simojamal.com

Personal website and project platform for Mohammed Jamal (Simo) — IT & Systems Specialist based in Dubai, with a growing focus on AI automation.

**Live site:** [simojamal.com](https://simojamal.com)

---

## What's here

A Next.js platform that serves three purposes:

- **Portfolio & homepage** — who I am, what I do, experience, and contact
- **Project pages** — individual pages for each project I've built or am building
- **Legal & support pages** — privacy policies and support URLs for App Store / Play Store submissions (accessible by URL, hidden from navigation)

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Forms | Formspree |
| Deploy | Vercel |
| Analytics | Vercel Analytics |

Typography: **Fraunces** (display) · **Public Sans** (body) · **JetBrains Mono** (labels)

---

## Project structure

```
src/
  app/
    page.tsx              # Homepage
    projects/[slug]/      # Dynamic project pages
    legal/[slug]/         # Privacy policies (not in nav)
    support/[slug]/       # App support pages (not in nav)
  components/             # Shared UI components
content/
  projects.ts             # All project data in one place
public/
  cv/                     # CV PDF
  images/                 # Photos and project screenshots
```

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Claude Code Skills

I build reusable Claude Code skills to speed up my own development workflow.
Install them in any Claude Code session to get consistent, high-quality output
for specific tasks without re-explaining things every time.

→ **[github.com/difaei/skills](https://github.com/difaei/skills)**

| Skill | What it does |
|---|---|
| `app-mockup.skill` | Generates an interactive phone or browser mockup for any app — reads your design tokens, builds realistic mock screens, tap-to-advance navigation |

More skills added as I build them.

---

## Contact

[simojamal.com](https://simojamal.com) · [linkedin.com/in/mohammedjamal1995](https://linkedin.com/in/mohammedjamal1995) · [@simojamal](https://github.com/simojamal)
