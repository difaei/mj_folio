"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PhoneMockup from "@/components/PhoneMockup";
import {
  HomeScreen,
  InsightsScreen,
  BudgetsScreen,
  GoalsScreen,
  GoalDetailScreen,
  TransactionsScreen,
} from "@/content/beztami-screens";

const FEATURES = [
  {
    title: "SMS-powered ingestion",
    desc: "Reads bank SMS messages automatically and imports transactions with merchant detection and smart categorization.",
  },
  {
    title: "Multi-currency support",
    desc: "Works across AED, MAD, EUR, and more — converts everything to your primary currency using live exchange rates.",
  },
  {
    title: "Smart categorizer",
    desc: "4-layer system learns from your corrections. Merchant overrides, keyword matching, and amount heuristics.",
  },
  {
    title: "Goal tracking",
    desc: "Set savings goals with optional deadlines. Milestone timelines visualise your progress at every step.",
  },
  {
    title: "Budget alerts",
    desc: "Per-category monthly budgets with live colour-coded status: on track, near limit, and over budget.",
  },
  {
    title: "100% local & private",
    desc: "No server, no account, no cloud sync. All data lives in an encrypted SQLite database on your device.",
  },
];

const STACK = [
  "Expo SDK 54",
  "React Native 0.81",
  "Expo Router v6",
  "SQLite",
  "TypeScript",
  "expo-sms",
  "i18n (EN / FR / AR)",
];

export default function BeztamiPage() {
  const screens = [
    <HomeScreen key="home" />,
    <InsightsScreen key="insights" />,
    <BudgetsScreen key="budgets" />,
    <GoalsScreen key="goals" />,
    <GoalDetailScreen key="goal-detail" />,
    <TransactionsScreen key="txns" />,
  ];

  return (
    <>
      <Nav />

      <main style={{ paddingTop: 80 }}>
        {/*
          Grid: content left, phone right.
          No alignItems — phone cell stretches to full grid height so the sticky
          div has room to travel. Footer appears full-width below the grid.
        */}
        <div className="project-layout" style={{ display: "grid", gridTemplateColumns: "1fr 420px" }}>

          {/* ── Left: scrollable content ── */}
          <div>
            {/* Hero */}
            <section
              style={{
                padding: "80px 56px 56px",
                background: "var(--ivory)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -80,
                  right: -80,
                  width: 480,
                  height: 480,
                  background: "radial-gradient(circle, rgba(196,98,45,0.07) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative" }}>
                <Link
                  href="/#projects"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: 11,
                    color: "var(--navy-soft)",
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 36,
                    opacity: 0.8,
                  }}
                >
                  ← Projects
                </Link>

                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: 10,
                    color: "var(--rust)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    marginBottom: 20,
                  }}
                >
                  § Mobile · Finance · React Native
                </div>

                <h1
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontWeight: 900,
                    fontSize: "clamp(52px, 7vw, 96px)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.045em",
                    color: "var(--navy)",
                    marginBottom: 28,
                  }}
                >
                  Bez
                  <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--rust)" }}>
                    tami
                  </em>
                </h1>

                <p
                  style={{
                    fontFamily: "var(--font-public-sans), sans-serif",
                    fontSize: "clamp(15px, 1.6vw, 19px)",
                    fontWeight: 300,
                    color: "var(--navy-soft)",
                    lineHeight: 1.65,
                    maxWidth: 520,
                    marginBottom: 32,
                  }}
                >
                  A personal finance tracker built for the MENA region. Reads bank
                  SMS messages to auto-import transactions, tracks savings goals, and
                  enforces budgets — entirely offline and private.
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["React Native", "Expo SDK 54", "SQLite · Local-only"].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: 11,
                        padding: "6px 14px",
                        background: "var(--ivory-dark)",
                        border: "1px solid var(--line)",
                        borderRadius: 99,
                        color: "var(--navy-soft)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: 11,
                      padding: "6px 14px",
                      background: "rgba(196,98,45,0.08)",
                      border: "1px solid rgba(196,98,45,0.22)",
                      borderRadius: 99,
                      color: "var(--rust)",
                    }}
                  >
                    In development
                  </span>
                </div>
              </div>
            </section>

            {/* Features */}
            <section style={{ padding: "72px 56px", background: "var(--ivory-dark)" }}>
              <div className="sec-header" style={{ marginBottom: 48 }}>
                <span className="sec-eyebrow">Features</span>
                <span className="sec-num">06</span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontWeight: 900,
                  fontSize: "clamp(36px, 4.5vw, 60px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.035em",
                  color: "var(--navy)",
                  marginBottom: 44,
                }}
              >
                What it{" "}
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--sage-dark)" }}>
                  does
                </em>
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 16,
                }}
              >
                {FEATURES.map((f, i) => (
                  <div
                    key={f.title}
                    style={{
                      background: "var(--ivory)",
                      border: "1px solid var(--line)",
                      borderRadius: 10,
                      padding: "24px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: 11,
                        color: "var(--sun)",
                        marginBottom: 10,
                      }}
                    >
                      0{i + 1}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-fraunces), serif",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "var(--navy)",
                        letterSpacing: "-0.02em",
                        marginBottom: 8,
                        lineHeight: 1.2,
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-public-sans), sans-serif",
                        fontSize: 13,
                        fontWeight: 300,
                        color: "var(--navy-soft)",
                        lineHeight: 1.65,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Stack + CTAs */}
            <section style={{ padding: "60px 56px 88px", background: "var(--ivory)" }}>
              <div className="sec-header" style={{ marginBottom: 32 }}>
                <span className="sec-eyebrow">Built with</span>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
                {STACK.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: 12,
                      padding: "7px 16px",
                      background: "var(--ivory-dark)",
                      border: "1px solid var(--line)",
                      borderRadius: 100,
                      color: "var(--navy)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["🤖 Coming to Play Store", "🐙 GitHub — private for now"].map((label) => (
                  <button
                    key={label}
                    disabled
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: 11,
                      letterSpacing: "0.05em",
                      padding: "14px 24px",
                      borderRadius: 100,
                      background: "var(--ivory-dark)",
                      color: "var(--navy-soft)",
                      border: "1px dashed var(--line)",
                      cursor: "not-allowed",
                      opacity: 0.65,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* ── Right: phone column — stretches full grid height, phone is sticky inside ── */}
          <div
            style={{
              background: "var(--ivory-dark)",
              borderLeft: "1px solid var(--line)",
            }}
          >
            <div
              style={{
                position: "sticky",
                top: 80,
                height: "calc(100vh - 80px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px 20px 16px",
                overflow: "hidden",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 10,
                  color: "var(--navy-soft)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                  opacity: 0.45,
                  flexShrink: 0,
                }}
              >
                § App preview
              </p>
              <div
                style={{
                  flex: 1,
                  minHeight: 0,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <PhoneMockup screens={screens} compact />
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
