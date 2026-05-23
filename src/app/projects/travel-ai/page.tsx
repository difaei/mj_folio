"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PhoneMockup from "@/components/PhoneMockup";
import {
  OnboardingScreen,
  ResultsScreen,
  DestinationScreen,
  SavedScreen,
} from "@/content/travel-ai-screens";

const FEATURES = [
  {
    title: "Passport-aware filtering",
    desc: "Pulls live visa data for your passport across 150+ destinations. Only shows places you can actually go.",
  },
  {
    title: "Budget-first recommendations",
    desc: "Set a budget, get a realistic cost breakdown — flights, accommodation, food, and activities — before you commit.",
  },
  {
    title: "AI trip itineraries",
    desc: "Claude-generated daily plans with stays, restaurants, and activities matched to your travel style.",
  },
  {
    title: "Seasonal intelligence",
    desc: "Flags destinations that are ideal or risky for your travel window. No more booking Bali in monsoon season.",
  },
  {
    title: "Save & plan",
    desc: "Bookmark destinations, add travel dates, and compare shortlisted options side by side.",
  },
  {
    title: "Multi-language support",
    desc: "Full Arabic, French, and English support — because not every traveller thinks in English.",
  },
];

const STACK = [
  "React Native",
  "Expo SDK 54",
  "Claude API",
  "Supabase",
  "TypeScript",
  "Tailwind (web)",
];

export default function TravelAIPage() {
  const screens = [
    <OnboardingScreen key="onboarding" />,
    <ResultsScreen key="results" />,
    <DestinationScreen key="destination" />,
    <SavedScreen key="saved" />,
  ];

  return (
    <>
      <Nav />

      <main style={{ paddingTop: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px" }} className="project-layout">

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
                  background: "radial-gradient(circle, rgba(255,107,61,0.06) 0%, transparent 70%)",
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
                  § Mobile · AI · Travel
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
                  pass
                  <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--rust)" }}>
                    ply
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
                  A travel discovery app that starts with what you have — your
                  passport and your budget — and surfaces where you can actually go.
                  No visa surprises, no budget blowouts.
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["React Native", "Claude API", "Passport-aware"].map((t) => (
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
                {["🤖 Coming to App Store", "🐙 GitHub — private for now"].map((label) => (
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
