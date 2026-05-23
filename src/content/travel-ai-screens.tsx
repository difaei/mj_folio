"use client";

// ─── passply dark-app theme ──────────────────────────────────────────────────
export const T = {
  bg: "#0E0F10",
  bg2: "#15171A",
  card: "#1A1D21",
  card2: "#20242A",
  ink: "#F4EFE6",
  inkDim: "rgba(244,239,230,0.62)",
  inkMute: "rgba(244,239,230,0.38)",
  accent: "#FF6B3D",
  accentDim: "rgba(255,107,61,0.18)",
  accentBorder: "rgba(255,107,61,0.35)",
  ok: "#6DE38E",
  okDim: "rgba(109,227,142,0.15)",
  info: "#7BB8FF",
  infoDim: "rgba(123,184,255,0.15)",
  warn: "#F1C15A",
  warnDim: "rgba(241,193,90,0.15)",
  line: "rgba(255,255,255,0.06)",
  line2: "rgba(255,255,255,0.10)",
};

// ─── Shared sub-components ───────────────────────────────────────────────────

function StatusBar() {
  return (
    <div
      style={{
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px 0",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 14,
          fontWeight: 500,
          color: T.ink,
        }}
      >
        9:41
      </span>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <svg width="17" height="11" viewBox="0 0 17 11">
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={i * 4.5}
              y={11 - (i + 1) * 3}
              width={3}
              height={(i + 1) * 3}
              rx={0.5}
              fill={T.ink}
            />
          ))}
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path d="M1 3.5C4 .5 11 .5 14 3.5" stroke={T.ink} strokeWidth={1.2} strokeLinecap="round" />
          <path d="M3 6C5 4.3 10 4.3 12 6" stroke={T.ink} strokeWidth={1.2} strokeLinecap="round" />
          <path d="M5.5 8.3C6.5 7.6 8.5 7.6 9.5 8.3" stroke={T.ink} strokeWidth={1.2} strokeLinecap="round" />
          <circle cx="7.5" cy="10" r="0.8" fill={T.ink} />
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
          <div
            style={{
              width: 23,
              height: 11,
              border: `1.5px solid ${T.ink}`,
              borderRadius: 3,
              padding: 1.5,
            }}
          >
            <div style={{ width: "80%", height: "100%", background: T.ink, borderRadius: 1.5 }} />
          </div>
          <div style={{ width: 2, height: 5, background: T.ink, borderRadius: 1, opacity: 0.6 }} />
        </div>
      </div>
    </div>
  );
}

function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: T.bg, width: 390, height: 844, position: "relative", overflow: "hidden" }}>
      <StatusBar />
      <div style={{ position: "absolute", top: 50, bottom: 0, left: 0, right: 0, overflowY: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

function Wordmark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          background: T.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 11,
            fontWeight: 700,
            color: T.bg,
            letterSpacing: "-0.5px",
          }}
        >
          p.
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-public-sans), sans-serif",
          fontSize: 16,
          fontWeight: 600,
          color: T.ink,
          letterSpacing: "-0.4px",
        }}
      >
        passply
      </span>
    </div>
  );
}

type VisaStatus = "visa free" | "e-visa" | "on arrival" | "visa required";

function VisaPill({ status }: { status: VisaStatus }) {
  const map: Record<VisaStatus, { bg: string; color: string; label: string }> = {
    "visa free": { bg: T.okDim, color: T.ok, label: "Visa free" },
    "e-visa": { bg: T.infoDim, color: T.info, label: "e-Visa" },
    "on arrival": { bg: T.warnDim, color: T.warn, label: "On arrival" },
    "visa required": { bg: "rgba(255,138,122,0.15)", color: "#FF8A7A", label: "Visa req." },
  };
  const s = map[status];
  return (
    <div
      style={{
        padding: "2px 8px",
        borderRadius: 99,
        background: s.bg,
        fontFamily: "var(--font-jetbrains-mono), monospace",
        fontSize: 9,
        letterSpacing: "0.04em",
        color: s.color,
        whiteSpace: "nowrap",
      }}
    >
      {s.label}
    </div>
  );
}

// ─── Screen 1 — Onboarding ───────────────────────────────────────────────────

export function OnboardingScreen() {
  return (
    <Screen>
      <div style={{ padding: "20px 24px 0", height: "100%", display: "flex", flexDirection: "column" }}>
        <Wordmark />

        <h2
          style={{
            fontFamily: "var(--font-public-sans), sans-serif",
            fontSize: 26,
            fontWeight: 600,
            color: T.ink,
            letterSpacing: "-1px",
            lineHeight: 1.2,
            marginBottom: 10,
          }}
        >
          Where can your passport take you?
        </h2>
        <p style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: T.inkMute, lineHeight: 1.6, marginBottom: 28 }}>
          Tell us three things. We'll find destinations that match.
        </p>

        {/* Section 01 — Passport */}
        <div style={{ marginBottom: 20 }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "1.4px",
              textTransform: "uppercase",
              color: T.inkMute,
              display: "block",
              marginBottom: 8,
            }}
          >
            01 · Passport
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: T.card,
              border: `1px solid ${T.line2}`,
              borderRadius: 16,
              padding: "16px 18px",
            }}
          >
            <span style={{ fontSize: 22 }}>🇲🇦</span>
            <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 15, color: T.ink, fontWeight: 500, flex: 1 }}>Morocco</span>
            <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "1px", color: T.inkMute }}>MA</span>
            <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 12, color: T.accent, fontWeight: 500 }}>Change</span>
          </div>
        </div>

        {/* Section 02 — Travel style */}
        <div style={{ marginBottom: 20 }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "1.4px",
              textTransform: "uppercase",
              color: T.inkMute,
              display: "block",
              marginBottom: 8,
            }}
          >
            02 · Travel style
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "Budget backpacker", note: "Hostels, street food, local transport", selected: true },
              { label: "Balanced explorer", note: "Mix of comfort and adventure", selected: false },
              { label: "Comfort traveller", note: "Hotels, restaurants, guided tours", selected: false },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: s.selected ? T.accentDim : T.card,
                  border: `1px solid ${s.selected ? T.accentBorder : T.line}`,
                  borderRadius: 14,
                  padding: "13px 16px",
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 999,
                    background: s.selected ? T.accent : "transparent",
                    border: `1.5px solid ${s.selected ? T.accent : T.line2}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {s.selected && (
                    <span style={{ fontSize: 10, color: T.bg, fontWeight: 700, lineHeight: 1 }}>✓</span>
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 14, color: T.ink, fontWeight: 500, letterSpacing: "-0.2px" }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 11, color: T.inkMute, marginTop: 1 }}>
                    {s.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 03 — Duration */}
        <div style={{ marginBottom: 28 }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "1.4px",
              textTransform: "uppercase",
              color: T.inkMute,
              display: "block",
              marginBottom: 8,
            }}
          >
            03 · Duration
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Weekend", days: "3 DAYS", sel: false },
              { label: "Short trip", days: "5 DAYS", sel: true },
              { label: "One week", days: "7 DAYS", sel: false },
              { label: "Two weeks", days: "14 DAYS", sel: false },
            ].map((d) => (
              <div
                key={d.label}
                style={{
                  width: "calc(50% - 4px)",
                  background: d.sel ? T.accent : T.card,
                  border: `1px solid ${d.sel ? T.accent : T.line}`,
                  borderRadius: 12,
                  padding: "13px 12px",
                }}
              >
                <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: d.sel ? T.bg : T.ink, fontWeight: 500, letterSpacing: "-0.2px" }}>
                  {d.label}
                </div>
                <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.8px", color: d.sel ? "rgba(14,15,16,0.55)" : T.inkMute, marginTop: 2 }}>
                  {d.days}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: T.accent,
            borderRadius: 18,
            padding: "18px 22px",
            boxShadow: `0 8px 24px rgba(255,107,61,0.32)`,
          }}
        >
          <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 15, fontWeight: 600, color: T.bg, letterSpacing: "-0.2px" }}>
            Find destinations
          </span>
          <span style={{ color: T.bg, fontSize: 18 }}>→</span>
        </div>
      </div>
    </Screen>
  );
}

// ─── Screen 2 — Results ──────────────────────────────────────────────────────

const DESTINATIONS = [
  { flag: "🇬🇪", country: "Georgia", bestFor: "CULTURE · FOOD · HIKING", visa: "visa free" as VisaStatus, flight: "$340", total: "$890", seasonal: "🌤 May is ideal" },
  { flag: "🇦🇪", country: "UAE", bestFor: "LUXURY · CITY · SHOPPING", visa: "visa free" as VisaStatus, flight: "$220", total: "$650", seasonal: null },
  { flag: "🇹🇭", country: "Thailand", bestFor: "BEACHES · CULTURE · FOOD", visa: "e-visa" as VisaStatus, flight: "$480", total: "$1,200", seasonal: "🌤 May is great" },
  { flag: "🇯🇵", country: "Japan", bestFor: "CULTURE · FOOD · NATURE", visa: "visa required" as VisaStatus, flight: "$780", total: "$2,100", seasonal: null },
];

export function ResultsScreen() {
  return (
    <Screen>
      {/* Header */}
      <div
        style={{
          padding: "12px 24px 10px",
          background: T.bg,
          borderBottom: `1px solid ${T.line}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: T.inkMute }}>‹ Passport</span>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: T.inkMute }}>
              4 matches
            </span>
            <div
              style={{
                padding: "4px 10px",
                borderRadius: 999,
                background: T.card,
                border: `1px solid ${T.line2}`,
                fontFamily: "var(--font-public-sans), sans-serif",
                fontSize: 11,
                color: T.inkDim,
              }}
            >
              ⟳ Refine
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 17, fontWeight: 600, color: T.ink, letterSpacing: "-0.4px", marginBottom: 8 }}>
          Destinations for 🇲🇦 MA passport
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {["Budget backpacker", "Short trip", "5 days"].map((c) => (
            <div
              key={c}
              style={{
                padding: "4px 10px",
                borderRadius: 999,
                background: T.card,
                border: `1px solid ${T.line}`,
                fontFamily: "var(--font-public-sans), sans-serif",
                fontSize: 11,
                color: T.inkDim,
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div style={{ padding: "8px 16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
        {DESTINATIONS.map((d) => (
          <div
            key={d.country}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: T.card,
              border: `1px solid ${T.line}`,
              borderRadius: 16,
              padding: 12,
            }}
          >
            {/* Thumb */}
            <div
              style={{
                width: 82,
                height: 82,
                borderRadius: 10,
                background: T.card2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
                flexShrink: 0,
              }}
            >
              {d.flag}
            </div>

            {/* Info */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 16, fontWeight: 600, color: T.ink, letterSpacing: "-0.4px" }}>
                  {d.country}
                </span>
                <span style={{ fontSize: 16, color: T.inkMute }}>♡</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 9, letterSpacing: "0.8px", textTransform: "uppercase", color: T.inkMute }}>
                  {d.bestFor}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <VisaPill status={d.visa} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 12, color: T.inkDim, fontWeight: 500 }}>
                  ✈ {d.flight}
                </span>
                <span style={{ color: T.inkMute, fontSize: 12 }}>·</span>
                <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 12, color: T.ink, fontWeight: 600, flex: 1 }}>
                  {d.total} total
                </span>
                <span style={{ color: T.inkMute, fontSize: 16 }}>›</span>
              </div>
              {d.seasonal && (
                <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 11, color: T.ok }}>
                  {d.seasonal}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Screen>
  );
}

// ─── Screen 3 — Destination detail (Georgia) ────────────────────────────────

export function DestinationScreen() {
  return (
    <Screen>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px 14px" }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              background: "rgba(128,128,128,0.08)",
              border: `1px solid ${T.line}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              color: T.ink,
            }}
          >
            ‹
          </div>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              background: "rgba(128,128,128,0.08)",
              border: `1px solid ${T.line}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              color: T.inkDim,
            }}
          >
            ↑
          </div>
        </div>

        {/* Hero art */}
        <div
          style={{
            margin: "0 16px 20px",
            height: 180,
            borderRadius: 18,
            background: `linear-gradient(135deg, #1a2e1a 0%, #2a3d2a 50%, #1e3328 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 72,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span style={{ opacity: 0.9 }}>🇬🇪</span>
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: 16,
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 10,
              letterSpacing: "1.4px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            VISA FREE · TBILISI
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "0 24px", flex: 1 }}>
          <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "1.4px", textTransform: "uppercase", color: T.inkMute, marginBottom: 6 }}>
            CAUCASUS · EASTERN EUROPE
          </div>
          <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 30, fontWeight: 600, color: T.ink, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 8 }}>
            Georgia
          </div>
          <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 14, fontWeight: 500, color: T.inkDim, lineHeight: 1.5, marginBottom: 18 }}>
            Ancient churches, world-class wine, and a cuisine that'll ruin you for other food. Visa-free and endlessly cheap.
          </div>

          {/* Cost card */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "1.4px", textTransform: "uppercase", color: T.inkMute, marginBottom: 8 }}>
              COST ESTIMATE · 5 DAYS
            </div>
            <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 18, overflow: "hidden" }}>
              {[
                { label: "Flights (return)", value: "$340", emphasis: false },
                { label: "Accommodation", value: "$280", emphasis: false },
                { label: "Food & activities", value: "$180", emphasis: false },
                { label: "Estimated total", value: "$890", emphasis: true },
              ].map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    borderTop: i > 0 ? `1px solid ${T.line}` : "none",
                    background: row.emphasis ? T.accentDim : "transparent",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: row.emphasis ? T.ink : T.inkDim, fontWeight: row.emphasis ? 600 : 400 }}>
                    {row.label}
                  </span>
                  <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: row.emphasis ? 18 : 14, color: row.emphasis ? T.accent : T.ink, fontWeight: row.emphasis ? 700 : 500 }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visa info card */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              background: T.okDim,
              border: `1px solid rgba(109,227,142,0.25)`,
              borderRadius: 16,
              padding: 14,
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 16, color: T.ok, paddingTop: 1 }}>✓</span>
            <div>
              <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, fontWeight: 600, color: T.ok, marginBottom: 3 }}>
                Visa Free
              </div>
              <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 12, color: T.inkDim, lineHeight: 1.5 }}>
                🇲🇦 Moroccan passport holders can stay up to 365 days. No application needed.
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: "0 16px 16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: T.accent,
              borderRadius: 18,
              padding: "18px 22px",
              boxShadow: `0 8px 24px rgba(255,107,61,0.3)`,
            }}
          >
            <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 15, fontWeight: 600, color: T.bg }}>
              Add to planned
            </span>
            <span style={{ color: T.bg, fontSize: 18 }}>→</span>
          </div>
        </div>
      </div>
    </Screen>
  );
}

// ─── Screen 4 — Saved ───────────────────────────────────────────────────────

const SAVED_ITEMS = [
  { flag: "🇬🇪", country: "Georgia", visa: "visa free" as VisaStatus, total: "$890", style: "Budget backpacker", duration: "5 days" },
  { flag: "🇦🇪", country: "UAE", visa: "visa free" as VisaStatus, total: "$650", style: "Budget backpacker", duration: "5 days" },
  { flag: "🇹🇭", country: "Thailand", visa: "e-visa" as VisaStatus, total: "$1,200", style: "Budget backpacker", duration: "5 days" },
];

export function SavedScreen() {
  return (
    <Screen>
      <div style={{ padding: "18px 24px 0" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 4 }}>
          <div>
            <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 32, fontWeight: 700, color: T.ink, letterSpacing: "-1px", lineHeight: 1.1 }}>
              Saved
            </div>
            <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: T.inkMute, marginTop: 3 }}>
              3 DESTINATIONS
            </div>
          </div>
          <div
            style={{
              padding: "8px 12px",
              borderRadius: 999,
              background: T.card,
              border: `1px solid ${T.line}`,
              fontFamily: "var(--font-public-sans), sans-serif",
              fontSize: 12,
              fontWeight: 500,
              color: T.inkDim,
            }}
          >
            Sort ↓
          </div>
        </div>

        {/* Filter pills */}
        <div style={{ display: "flex", gap: 7, marginTop: 14, marginBottom: 14 }}>
          {["All", "Easy entry", "Visa req."].map((f, i) => (
            <div
              key={f}
              style={{
                padding: "5px 12px",
                borderRadius: 999,
                background: i === 0 ? T.accentDim : T.card,
                border: `1px solid ${i === 0 ? T.accentBorder : T.line2}`,
                fontFamily: "var(--font-public-sans), sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: i === 0 ? T.accent : T.inkDim,
              }}
            >
              {f}
            </div>
          ))}
        </div>

        {/* Saved cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {SAVED_ITEMS.map((item, idx) => (
            <div
              key={item.country}
              style={{ position: "relative" }}
            >
              {/* Delete background (peek) */}
              {idx === 0 && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: 70,
                    borderRadius: "0 14px 14px 0",
                    background: "rgba(255,138,122,0.18)",
                    border: `1px solid rgba(255,138,122,0.25)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderLeft: "none",
                  }}
                >
                  <span style={{ fontSize: 18 }}>🗑</span>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: T.card,
                  border: `1px solid ${T.line}`,
                  borderRadius: 14,
                  padding: "14px 14px",
                  position: "relative",
                  transform: idx === 0 ? "translateX(-60px)" : "none",
                  transition: "transform 0.2s ease",
                }}
              >
                {/* Flag art */}
                <div
                  style={{
                    width: 66,
                    height: 66,
                    borderRadius: 12,
                    background: T.card2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 30,
                    flexShrink: 0,
                  }}
                >
                  {item.flag}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 16, fontWeight: 600, color: T.ink, letterSpacing: "-0.4px" }}>
                      {item.country}
                    </span>
                    <VisaPill status={item.visa} />
                  </div>
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: T.inkMute, letterSpacing: "0.6px", marginBottom: 5 }}>
                    {item.style.toUpperCase()} · {item.duration.toUpperCase()}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: T.ink, fontWeight: 600 }}>
                      {item.total} est. total
                    </span>
                    <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 12, color: T.accent, fontWeight: 500 }}>
                      Plan →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe hint */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            marginTop: 14,
          }}
        >
          <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: T.inkMute, letterSpacing: "0.05em" }}>
            ← swipe to remove
          </span>
        </div>
      </div>
    </Screen>
  );
}
