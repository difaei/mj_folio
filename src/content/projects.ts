export type ProjectStatus = "live" | "side" | "building";

export interface Project {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  tagline: string;
  blurb: string;
  description: string;
  features: string[];
  stack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  screenshots?: string[];
  mockupType?: "browser" | "phone";
  hasCustomPage?: boolean;
  hasPrivacyPolicy: boolean;
  hasSupport: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "beztami",
    name: "beztami",
    category: "Mobile App · Finance",
    status: "live",
    tagline: "Your money. Your phone. Nobody else.",
    blurb:
      "A privacy-first personal finance app that tracks your spending automatically via SMS — no accounts, no cloud, no data leaving your device.",
    description:
      "Most finance apps want your bank login, your data, and your trust. beztami wants none of that. It reads your bank SMS notifications locally on your device, categorizes transactions automatically, and gives you a full picture of your finances — budgets, goals, insights, merchant history — without ever sending a byte to a server.",
    features: [
      "Automatic transaction parsing from bank SMS notifications",
      "Smart categorization across Groceries, Food & Drink, Transport, Bills, and more",
      "Monthly budgets with ON TRACK / NEAR LIMIT / OVER BUDGET tracking",
      "Savings goals with milestone tracking and monthly pace calculations",
      "Insights dashboard — 6-month spend trends, category breakdown, merchant analysis",
      "Multi-currency support with live conversion display",
      "Encrypted local backup and restore — no account needed",
      "Full privacy: all data stays on your device, zero analytics, zero uploads",
    ],
    stack: ["React Native", "Expo", "expo-sqlite", "expo-router", "Reanimated", "TypeScript"],
    liveUrl: null,
    githubUrl: null,
    mockupType: "phone",
    hasCustomPage: true,
    hasPrivacyPolicy: true,
    hasSupport: true,
  },
  {
    slug: "travel-ai",
    name: "Travel AI Planner",
    category: "AI · SaaS",
    status: "side",
    tagline: "Where can your passport take you?",
    blurb:
      "AI-powered trip planner that suggests destinations based on your passport's visa-free countries and budget.",
    description:
      "A travel discovery tool that flips the usual planning model. Instead of picking a destination first, you start with what you have — your passport and your budget — and the AI suggests where you can actually go without visa hassles.",
    features: [
      "Passport-aware destination filtering across 150+ countries",
      "Budget-based recommendations with realistic cost breakdowns",
      "AI-generated daily itineraries with stays, food, and activities",
      "Multi-language support",
    ],
    stack: ["React", "OpenAI API", "Supabase", "TypeScript", "Tailwind"],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    hasPrivacyPolicy: false,
    hasSupport: false,
    mockupType: "phone" as const,
  },
  {
    slug: "menuqr",
    name: "MenuQR",
    category: "SaaS",
    status: "side",
    tagline: "Restaurant menus, reinvented for mobile.",
    blurb:
      "Digital QR-code menus for restaurants. Multi-language, image-rich, with kitchen order routing.",
    description:
      "A complete digital menu solution for restaurants. Customers scan a QR code at the table, browse the menu in their preferred language with real food photos, and orders flow directly to the kitchen.",
    features: [
      "QR-to-menu in under 2 seconds",
      "Multi-language menu display (Arabic, English, French, more)",
      "High-quality food images with ingredient details",
      "Direct order routing to kitchen tablet",
      "Stripe-powered payments at the table",
    ],
    stack: ["React", "Vercel Edge", "Supabase", "Postgres", "Tailwind"],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    hasPrivacyPolicy: true,
    hasSupport: true,
  },
  {
    slug: "doctor-saas",
    name: "Doctor SaaS",
    category: "SaaS · Healthcare",
    status: "side",
    tagline: "Clinics still running on spreadsheets, finally got an upgrade.",
    blurb:
      "Clinic management platform — patient records, appointments, billing, and prescriptions.",
    description:
      "A complete clinic management platform built for small to mid-size healthcare practices.",
    features: [
      "Patient records with encrypted sensitive data",
      "Smart appointment scheduling with reminders",
      "Billing & invoicing with insurance support",
      "Digital prescriptions",
      "Multi-doctor and multi-location support",
    ],
    stack: ["Wails 3", "Golang", "Postgres", "AWS", "Redis"],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    hasPrivacyPolicy: true,
    hasSupport: true,
  },
  {
    slug: "cv-screener",
    name: "AI CV Screener",
    category: "AI Tool",
    status: "building",
    tagline: "Hire smarter, not harder.",
    blurb:
      "Drop a job description and CVs, get a ranked shortlist with AI reasoning.",
    description:
      "Reads CVs the way a thoughtful recruiter would. Drop a JD and CVs, get a ranked shortlist with clear reasoning.",
    features: [
      "Bulk CV upload and parsing (PDF, DOCX, TXT)",
      "Match scoring against your specific job description",
      "AI-generated reasoning for each candidate",
      "Highlights gaps, red flags, and standout strengths",
      "Export shortlist to CSV or share via link",
    ],
    stack: ["Python", "LangChain", "Claude API", "FastAPI", "React"],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    hasPrivacyPolicy: false,
    hasSupport: false,
  },
  {
    slug: "helpdesk-bot",
    name: "IT Helpdesk Bot",
    category: "AI · Automation",
    status: "building",
    tagline: "IT support that doesn't sleep — or get tired.",
    blurb:
      "AI-powered IT support chatbot. Handles tier-1 tickets, answers in 4 languages.",
    description:
      "Built from my own experience as IT support. Handles tier-1 tickets automatically in 4 languages, escalates the rest.",
    features: [
      "Handles password resets, VPN issues, common how-tos",
      "Replies in Arabic, English, French, and Mandarin",
      "Logs every conversation to Google Sheets",
      "Escalates complex issues to human staff via Slack",
      "Built on n8n — easy for any team to customize",
    ],
    stack: ["n8n", "Claude API", "Slack API", "Google Sheets"],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    hasPrivacyPolicy: false,
    hasSupport: false,
  },
  {
    slug: "email-triage",
    name: "AI Email Triage Bot",
    category: "Automation",
    status: "building",
    tagline: "Inbox zero, automated.",
    blurb:
      "Reads incoming emails, classifies urgency with AI, drafts replies, logs to Sheets.",
    description:
      "An n8n workflow that connects Gmail, Claude Haiku, Google Sheets, and Telegram into a fully automated email operations layer. Every incoming email is classified, replied to in the sender's language, logged with full metadata, and escalated via Telegram if high priority — with no manual triage needed.",
    features: [
      "Auto-classifies emails: urgent, inquiry, complaint, spam, other",
      "Generates multilingual draft replies matched to sender's language",
      "Logs every email to Google Sheets with full metadata",
      "Sends real-time Telegram alerts for high-priority items",
      "Built on n8n — fully visual, no custom backend needed",
    ],
    stack: ["n8n", "Claude Haiku", "Gmail API", "Google Sheets", "Telegram API"],
    liveUrl: null,
    githubUrl: null,
    screenshots: ["/images/email_triage.png"],
    hasPrivacyPolicy: false,
    hasSupport: false,
  },
];
