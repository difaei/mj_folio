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

// ─── Page ────────────────────────────────────────────────────────────────────

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
        {/* ── Hero ── */}
        <section
          style={{
            padding: "80px 56px 48px",
            background: "var(--ivory)",
            position: "relative",
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          {/* Decorative radial */}
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 480,
              height: 480,
              background:
                "radial-gradient(circle, rgba(196,98,45,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
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
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
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
                fontSize: "clamp(56px, 9vw, 110px)",
                lineHeight: 0.92,
                letterSpacing: "-0.045em",
                color: "var(--navy)",
                marginBottom: 28,
              }}
            >
              Bez
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--rust)",
                }}
              >
                tami
              </em>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-public-sans), sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                fontWeight: 300,
                color: "var(--navy-soft)",
                lineHeight: 1.6,
                maxWidth: 560,
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

        {/* ── Phone mockup ── */}
        <section
          style={{
            padding: "72px 24px 80px",
            background: "var(--ivory-dark)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 10,
              color: "var(--navy-soft)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 40,
              opacity: 0.6,
            }}
          >
            § App preview
          </p>
          <div style={{ width: "100%", maxWidth: 440 }}>
            <PhoneMockup screens={screens} />
          </div>
        </section>

        {/* ── Features ── */}
        <section
          style={{
            padding: "80px 56px",
            background: "var(--ivory)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div
              className="sec-header"
              style={{ marginBottom: 48 }}
            >
              <span className="sec-eyebrow">Features</span>
              <span className="sec-num">06</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 5vw, 68px)",
                lineHeight: 0.95,
                letterSpacing: "-0.035em",
                color: "var(--navy)",
                marginBottom: 48,
              }}
            >
              What it{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--sage-dark)",
                }}
              >
                does
              </em>
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
                gap: 20,
              }}
            >
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  style={{
                    background: "var(--ivory-dark)",
                    border: "1px solid var(--line)",
                    borderRadius: 10,
                    padding: "28px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: 11,
                      color: "var(--sun)",
                      marginBottom: 12,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--navy)",
                      letterSpacing: "-0.02em",
                      marginBottom: 10,
                      lineHeight: 1.2,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-public-sans), sans-serif",
                      fontSize: 14,
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
          </div>
        </section>

        {/* ── Tech stack + actions ── */}
        <section
          style={{
            padding: "60px 56px 88px",
            background: "var(--ivory-dark)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div className="sec-header" style={{ marginBottom: 36 }}>
              <span className="sec-eyebrow">Built with</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 52,
              }}
            >
              {STACK.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: 12,
                    padding: "7px 16px",
                    background: "var(--ivory)",
                    border: "1px solid var(--line)",
                    borderRadius: 100,
                    color: "var(--navy)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                disabled
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "0.05em",
                  padding: "14px 24px",
                  borderRadius: 100,
                  background: "var(--ivory)",
                  color: "var(--navy-soft)",
                  border: "1px dashed var(--line)",
                  cursor: "not-allowed",
                  opacity: 0.65,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                🤖 Coming to Play Store
              </button>
              <button
                disabled
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "0.05em",
                  padding: "14px 24px",
                  borderRadius: 100,
                  background: "var(--ivory)",
                  color: "var(--navy-soft)",
                  border: "1px dashed var(--line)",
                  cursor: "not-allowed",
                  opacity: 0.65,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                🐙 GitHub — private for now
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
