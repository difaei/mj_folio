# Quickstart — Handing this off to Claude Code

## What's in this folder

- `CLAUDE.md` — Full project brief. Drop this in the project root, Claude Code reads it automatically every conversation.
- `reference-homepage.html` — The complete working homepage. Use as the source of truth for design and content.

## Step-by-step handoff

### 1. Create your project folder

```bash
mkdir simojamal-website
cd simojamal-website
```

### 2. Copy these files in

```bash
# From this handoff folder, copy:
cp /path/to/CLAUDE.md .
cp /path/to/reference-homepage.html .
```

### 3. Start Claude Code

```bash
claude
```

### 4. First prompt to Claude Code

Paste this exactly:

> Read CLAUDE.md and reference-homepage.html in this folder. Then set up a new Next.js 15 project with TypeScript, Tailwind, and App Router in the current directory. Use the existing files as-is — don't delete CLAUDE.md or the reference HTML. After setup, ask me before building any pages so we can plan together.

That's it. Claude Code will:
1. Read your project brief
2. Read your reference HTML
3. Run the Next.js setup
4. Stop and confirm before building, so you stay in control

### 5. Subsequent prompts

Once setup is done, walk through it section by section:

- *"Build the homepage hero section, matching the reference HTML exactly. Use Tailwind classes mapped to the colors in CLAUDE.md."*
- *"Build the What I Do section."*
- *"Set up the dynamic projects routing — `/projects/[slug]` reading from `content/projects.ts`."*
- *"Create the CV modal component with the embedded preview from the reference HTML."*
- *"Wire up the contact form using Formspree (placeholder URL is fine for now)."*

## After it's built

### Deploy
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial portfolio site"
git remote add origin https://github.com/simojamal/simojamal-website
git push -u origin main

# Then in Vercel dashboard:
# 1. Import the GitHub repo
# 2. Deploy (auto-detects Next.js)
# 3. Settings → Domains → Add simojamal.com
# 4. Update DNS at your domain registrar per Vercel's instructions
```

### Add real assets
- Drop your CV PDF as `public/cv/mohammed-jamal-cv.pdf`
- Drop project screenshots in `public/images/projects/`
- Replace your photo placeholder in `public/images/photo.jpg`

### Set up Formspree
1. Sign up at formspree.io
2. Create form, copy the endpoint URL
3. Replace `YOUR_FORM_ID` in the contact form code

### Add a privacy policy for an app
1. Open Claude Code
2. *"Create a privacy policy page at /legal/menuqr-privacy for the MenuQR app. Use the standard mobile app privacy policy template, customized for MenuQR which collects [list what it collects]. Match the styling of the rest of the site."*
3. Done — the URL `https://simojamal.com/legal/menuqr-privacy` will work and you can paste it into App Store / Play Store.

## Tips for working with Claude Code

- Always start a Claude Code session by saying "read CLAUDE.md" if it doesn't auto-read
- Keep CLAUDE.md updated as the project grows — it's the project's memory between sessions
- When something looks off visually, screenshot it and paste into Claude Code's terminal session (with `/img` or by reference)
- Use `git commit` frequently — easy to revert mistakes
- Run `npm run dev` in a separate terminal so you can see changes live as Claude Code edits
