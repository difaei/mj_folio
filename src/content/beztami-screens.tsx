"use client";

// ─── Beztami dark-app theme ─────────────────────────────────────────────────
export const B = {
  bg: "#1a1612",
  bg2: "#221d18",
  card: "#26201b",
  card2: "#2f2822",
  ink: "#f4ecdc",
  inkSoft: "#d6cbb5",
  muted: "#9e9485",
  terra: "#e09467",
  terra2: "#eaa980",
  sage: "#9bc09f",
  coral: "#e57c63",
  amber: "#f0bd6a",
  violet: "#a99cca",
  line: "#3a322a",
  line2: "#4a4036",
};

// ─── Shared screen sub-components ──────────────────────────────────────────

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
          color: B.ink,
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
              fill={B.ink}
            />
          ))}
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path d="M1 3.5C4 .5 11 .5 14 3.5" stroke={B.ink} strokeWidth={1.2} strokeLinecap="round" />
          <path d="M3 6C5 4.3 10 4.3 12 6" stroke={B.ink} strokeWidth={1.2} strokeLinecap="round" />
          <path d="M5.5 8.3C6.5 7.6 8.5 7.6 9.5 8.3" stroke={B.ink} strokeWidth={1.2} strokeLinecap="round" />
          <circle cx="7.5" cy="10" r="0.8" fill={B.ink} />
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
          <div
            style={{
              width: 23,
              height: 11,
              border: `1.5px solid ${B.ink}`,
              borderRadius: 3,
              padding: 1.5,
            }}
          >
            <div style={{ width: "70%", height: "100%", background: B.ink, borderRadius: 1.5 }} />
          </div>
          <div style={{ width: 2, height: 5, background: B.ink, borderRadius: 1, opacity: 0.6 }} />
        </div>
      </div>
    </div>
  );
}

function HomeTabIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" stroke={color} strokeWidth={1.5} fill={`${color}22`} />
      <path d="M9 21V12h6v9" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

function TxnsTabIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M8 6l4-4 4 4M12 2v9" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 18l-4 4-4-4M12 22v-9" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InsightsTabIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="13" width="4" height="8" rx="1" stroke={color} strokeWidth={1.5} fill={`${color}22`} />
      <rect x="10" y="8" width="4" height="13" rx="1" stroke={color} strokeWidth={1.5} fill={`${color}22`} />
      <rect x="17" y="3" width="4" height="18" rx="1" stroke={color} strokeWidth={1.5} fill={`${color}22`} />
    </svg>
  );
}

function BudgetsTabIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth={1.5} />
      <path d="M12 4a8 8 0 0 1 8 8" stroke={color} strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
}

function GoalsTabIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
        fill={`${color}22`}
      />
    </svg>
  );
}

const TAB_DEFS = [
  { name: "Home", Icon: HomeTabIcon },
  { name: "Txns", Icon: TxnsTabIcon },
  { name: "Insights", Icon: InsightsTabIcon },
  { name: "Budgets", Icon: BudgetsTabIcon },
  { name: "Goals", Icon: GoalsTabIcon },
];

function TabBar({ active: t }: { active: number }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: B.bg,
        borderTop: `1px solid ${B.line}`,
        display: "flex",
        paddingBottom: 22,
        paddingTop: 10,
      }}
    >
      {TAB_DEFS.map(({ name, Icon }, i) => {
        const color = i === t ? B.terra : B.muted;
        return (
          <div
            key={name}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}
          >
            <Icon color={color} />
            <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 9, color, letterSpacing: "0.02em" }}>
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Screen({ children, tab }: { children: React.ReactNode; tab: number }) {
  return (
    <div style={{ background: B.bg, width: 390, height: 844, position: "relative", overflow: "hidden" }}>
      <StatusBar />
      <div style={{ position: "absolute", top: 50, bottom: 76, left: 0, right: 0, overflowY: "hidden" }}>
        {children}
      </div>
      <TabBar active={tab} />
    </div>
  );
}

// ─── Screen 1 — Home ────────────────────────────────────────────────────────

export function HomeScreen() {
  const c = (r: number) => 2 * Math.PI * r;
  const r28 = c(28);

  return (
    <Screen tab={0}>
      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ marginBottom: 18 }}>
          <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: B.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            May 2026
          </span>
          <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontWeight: 400, fontSize: 26, color: B.ink, lineHeight: 1.2, letterSpacing: "-0.02em", marginTop: 4 }}>
            Good evening,<br />friend.
          </h2>
        </div>

        <div style={{ background: B.card, borderRadius: 20, padding: "16px 18px", marginBottom: 12, border: `1px solid ${B.line}` }}>
          <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 10, color: B.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Total spent · May
          </span>
          <div style={{ marginTop: 6 }}>
            <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 30, fontWeight: 500, color: B.ink, letterSpacing: "-0.03em" }}>1,842</span>
            <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 16, color: B.inkSoft }}>.50 AED</span>
          </div>
          <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: B.muted, marginBottom: 12 }}>≈ 4,606 MAD</div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 11, color: B.inkSoft }}>46% of budget</span>
            <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: B.terra }}>2,158 left</span>
          </div>
          <div style={{ height: 5, background: B.line2, borderRadius: 99 }}>
            <div style={{ width: "46%", height: "100%", background: B.terra, borderRadius: 99 }} />
          </div>
        </div>

        <div style={{ background: B.card, borderRadius: 20, padding: "14px 18px", marginBottom: 12, border: `1px solid ${B.line}` }}>
          <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 10, color: B.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Breakdown
          </span>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 10 }}>
            <svg width={76} height={76} viewBox="0 0 76 76" style={{ flexShrink: 0 }}>
              <circle cx={38} cy={38} r={28} fill="none" stroke={B.line2} strokeWidth={13} />
              <circle cx={38} cy={38} r={28} fill="none" stroke={B.terra} strokeWidth={13}
                strokeDasharray={`${r28 * 0.48} ${r28}`} strokeDashoffset={0} transform="rotate(-90 38 38)" />
              <circle cx={38} cy={38} r={28} fill="none" stroke={B.sage} strokeWidth={13}
                strokeDasharray={`${r28 * 0.19} ${r28}`} strokeDashoffset={`-${r28 * 0.48}`} transform="rotate(-90 38 38)" />
              <circle cx={38} cy={38} r={28} fill="none" stroke={B.violet} strokeWidth={13}
                strokeDasharray={`${r28 * 0.14} ${r28}`} strokeDashoffset={`-${r28 * 0.67}`} transform="rotate(-90 38 38)" />
              <circle cx={38} cy={38} r={28} fill="none" stroke={B.amber} strokeWidth={13}
                strokeDasharray={`${r28 * 0.09} ${r28}`} strokeDashoffset={`-${r28 * 0.81}`} transform="rotate(-90 38 38)" />
            </svg>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 7 }}>
              {[
                { label: "Bills", pct: "48%", col: B.terra },
                { label: "Groceries", pct: "19%", col: B.sage },
                { label: "Shopping", pct: "14%", col: B.violet },
                { label: "Food & Drink", pct: "9%", col: B.amber },
              ].map((r) => (
                <div key={r.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <div style={{ width: 7, height: 7, borderRadius: 99, background: r.col, flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 11, color: B.inkSoft, flex: 1 }}>{r.label}</span>
                  <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: B.muted }}>{r.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 10, color: B.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Recent
        </span>
        {[
          { name: "Carrefour", cat: "Groceries", emoji: "🛒", amt: "−85.00", sub: "≈ −212 MAD" },
          { name: "Du Telecom", cat: "Bills", emoji: "📡", amt: "−199.00", sub: "≈ −497 MAD" },
          { name: "Pizza Hut", cat: "Food & Drink", emoji: "🍕", amt: "−52.50", sub: "≈ −131 MAD" },
        ].map((tx) => (
          <div key={tx.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: `1px solid ${B.line}` }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: B.card2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
              {tx.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: B.ink, fontWeight: 500 }}>{tx.name}</div>
              <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 11, color: B.muted }}>{tx.cat}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 13, color: B.coral }}>{tx.amt}</div>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: B.muted }}>{tx.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </Screen>
  );
}

// ─── Screen 2 — Insights ────────────────────────────────────────────────────

export function InsightsScreen() {
  const bars = [
    { month: "Dec", h: 44 },
    { month: "Jan", h: 60 },
    { month: "Feb", h: 36 },
    { month: "Mar", h: 74 },
    { month: "Apr", h: 56 },
    { month: "May", h: 92, active: true },
  ];

  return (
    <Screen tab={2}>
      <div style={{ padding: "20px 20px 0" }}>
        <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontWeight: 400, fontSize: 26, color: B.ink, letterSpacing: "-0.02em", marginBottom: 3 }}>
          Insights
        </h2>
        <p style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: B.muted, marginBottom: 20 }}>
          How your money moves
        </p>

        <div style={{ background: B.card, borderRadius: 20, padding: "16px 18px 14px", marginBottom: 14, border: `1px solid ${B.line}` }}>
          <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 10, color: B.muted, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 14 }}>
            Monthly spending (AED)
          </span>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-end", height: 100, marginBottom: 8 }}>
            {bars.map((bar) => (
              <div key={bar.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  width: "100%",
                  height: bar.h,
                  background: bar.active ? `linear-gradient(to top, ${B.terra}, ${B.terra2})` : B.card2,
                  borderRadius: "6px 6px 3px 3px",
                  border: bar.active ? `1px solid ${B.terra2}` : `1px solid ${B.line2}`,
                }} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {bars.map((bar) => (
              <div key={bar.month} style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 9, color: bar.active ? B.terra : B.muted }}>
                {bar.month}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: B.card, borderRadius: 20, padding: "16px 18px", border: `1px solid ${B.line}` }}>
          <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 10, color: B.muted, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 14 }}>
            Where it went
          </span>
          {[
            { label: "Bills", pct: 51, col: B.terra },
            { label: "Groceries", pct: 19, col: B.sage },
            { label: "Shopping", pct: 14, col: B.violet },
            { label: "Food & Drink", pct: 8, col: B.amber },
            { label: "Other", pct: 8, col: B.muted },
          ].map((row) => (
            <div key={row.label} style={{ marginBottom: 11 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 12, color: B.inkSoft }}>{row.label}</span>
                <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, color: row.col }}>{row.pct}%</span>
              </div>
              <div style={{ height: 4, background: B.line2, borderRadius: 99 }}>
                <div style={{ width: `${row.pct}%`, height: "100%", background: row.col, borderRadius: 99 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

// ─── Screen 3 — Budgets ─────────────────────────────────────────────────────

export function BudgetsScreen() {
  const R = 52;
  const CX = 65;
  const circ = 2 * Math.PI * R;
  const used = 0.65;

  return (
    <Screen tab={3}>
      <div style={{ padding: "20px 20px 0" }}>
        <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontWeight: 400, fontSize: 26, color: B.ink, letterSpacing: "-0.02em", marginBottom: 2 }}>
          Budgets
        </h2>
        <p style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: B.muted, marginBottom: 16 }}>
          May 2026
        </p>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
          <div style={{ position: "relative", width: 130, height: 130 }}>
            <svg width={130} height={130} viewBox="0 0 130 130">
              <circle cx={CX} cy={CX} r={R} fill="none" stroke={B.line2} strokeWidth={16} />
              <circle cx={CX} cy={CX} r={R} fill="none" stroke={B.terra} strokeWidth={16}
                strokeDasharray={`${circ * used} ${circ}`} strokeDashoffset={0}
                strokeLinecap="round" transform={`rotate(-90 ${CX} ${CX})`} />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 26, fontWeight: 500, color: B.ink, lineHeight: 1 }}>65%</span>
              <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 10, color: B.muted, marginTop: 3 }}>of total budget</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "Groceries", spent: "340", budget: "500", pct: 68, status: "ON TRACK", sc: B.sage, bc: B.sage },
            { label: "Food & Drink", spent: "180", budget: "300", pct: 60, status: "ON TRACK", sc: B.sage, bc: B.sage },
            { label: "Shopping", spent: "390", budget: "450", pct: 87, status: "NEAR LIMIT", sc: B.amber, bc: B.amber },
            { label: "Bills", spent: "920", budget: "800", pct: 100, status: "OVER BUDGET", sc: B.coral, bc: B.coral },
          ].map((b) => (
            <div key={b.label} style={{ background: B.card, borderRadius: 16, padding: "13px 16px", border: `1px solid ${B.line}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: B.ink, fontWeight: 500 }}>{b.label}</span>
                <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 9, color: b.sc, letterSpacing: "0.06em", background: `${b.sc}18`, padding: "2px 8px", borderRadius: 99 }}>
                  {b.status}
                </span>
              </div>
              <div style={{ height: 4, background: B.line2, borderRadius: 99, marginBottom: 6, overflow: "hidden" }}>
                <div style={{ width: `${Math.min(b.pct, 100)}%`, height: "100%", background: b.bc, borderRadius: 99 }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: B.muted }}>{b.spent} AED</span>
                <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: B.muted }}>/ {b.budget} AED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

// ─── Screen 4 — Goals ───────────────────────────────────────────────────────

export function GoalsScreen() {
  return (
    <Screen tab={4}>
      <div style={{ padding: "20px 20px 0" }}>
        <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontWeight: 400, fontSize: 26, color: B.ink, letterSpacing: "-0.02em", marginBottom: 2 }}>
          Goals
        </h2>
        <p style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: B.muted, marginBottom: 18 }}>
          1 account · 2 goals
        </p>

        <div style={{ background: B.card, borderRadius: 20, padding: "18px", marginBottom: 12, border: `1px solid ${B.line}` }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: B.card2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>🗾</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontSize: 18, color: B.ink, letterSpacing: "-0.01em" }}>Japan trip</div>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: B.muted, marginTop: 2 }}>2 months left · Jul 2026</div>
            </div>
            <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 14, color: B.terra, fontWeight: 500 }}>35%</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: B.inkSoft }}>5,300 AED</span>
            <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: B.muted }}>15,000 AED</span>
          </div>
          <div style={{ height: 6, background: B.line2, borderRadius: 99 }}>
            <div style={{ width: "35%", height: "100%", background: B.terra, borderRadius: 99 }} />
          </div>
        </div>

        <div style={{ background: B.card, borderRadius: 20, padding: "18px", marginBottom: 12, border: `1px solid ${B.line}` }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: B.card2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>💻</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontSize: 18, color: B.ink, letterSpacing: "-0.01em" }}>MacBook Pro</div>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: B.muted, marginTop: 2 }}>No deadline</div>
            </div>
            <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 14, color: B.terra, fontWeight: 500 }}>32%</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: B.inkSoft }}>2,240 AED</span>
            <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: B.muted }}>7,000 AED</span>
          </div>
          <div style={{ height: 6, background: B.line2, borderRadius: 99 }}>
            <div style={{ width: "32%", height: "100%", background: B.terra, borderRadius: 99 }} />
          </div>
        </div>

        <div style={{ border: `1.5px dashed ${B.line2}`, borderRadius: 20, padding: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: B.muted }}>+ Add a goal</span>
        </div>
      </div>
    </Screen>
  );
}

// ─── Screen 5 — Goal Detail ─────────────────────────────────────────────────

export function GoalDetailScreen() {
  const milestones = [
    { label: "25%", sub: "4,250 AED saved", done: true, active: false },
    { label: "35%", sub: "You are here", done: true, active: true },
    { label: "50%", sub: "Halfway there", done: false, active: false },
    { label: "100%", sub: "Goal reached! 🎉", done: false, active: false },
  ];

  return (
    <Screen tab={4}>
      <div style={{ padding: "8px 20px 0" }}>
        <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 12, color: B.muted }}>← Goals</span>
      </div>
      <div style={{ padding: "12px 20px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🗾</div>
        <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontWeight: 400, fontSize: 28, color: B.ink, letterSpacing: "-0.02em", marginBottom: 4, textAlign: "center" }}>
          Japan trip
        </h2>
        <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: B.muted, marginBottom: 18 }}>
          Jul 2026 · 2 months left
        </p>

        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 28, fontWeight: 500, color: B.ink }}>5,300</span>
          <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 16, color: B.inkSoft }}>{" "}/ 15,000 AED</span>
        </div>

        <div style={{ width: "100%", marginBottom: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
            <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 12, color: B.inkSoft }}>35% saved</span>
            <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, color: B.terra }}>9,700 to go</span>
          </div>
          <div style={{ height: 8, background: B.line2, borderRadius: 99 }}>
            <div style={{ width: "35%", height: "100%", background: `linear-gradient(90deg, ${B.terra} 0%, ${B.terra2} 100%)`, borderRadius: 99 }} />
          </div>
        </div>

        <div style={{ width: "100%", background: B.card, borderRadius: 20, padding: "16px 18px", border: `1px solid ${B.line}` }}>
          <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 10, color: B.muted, textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 14 }}>
            Milestones
          </span>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 10, top: 11, bottom: 11, width: 2, background: B.line2 }} />
            {milestones.map((m, i) => (
              <div key={m.label} style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: i < milestones.length - 1 ? 14 : 0, position: "relative" }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 99, flexShrink: 0,
                  background: m.done ? B.terra : B.card2,
                  border: m.active ? `2px solid ${B.terra2}` : `2px solid ${m.done ? B.terra : B.line2}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: m.active ? `0 0 0 4px ${B.terra}22` : "none",
                  zIndex: 1,
                }}>
                  {m.done && !m.active && <span style={{ fontSize: 10, color: "#fff" }}>✓</span>}
                  {m.active && <div style={{ width: 8, height: 8, borderRadius: 99, background: "#fff" }} />}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, color: m.done ? B.ink : B.muted }}>{m.label}</div>
                  <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 11, color: B.muted }}>{m.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Screen>
  );
}

// ─── Screen 6 — Transactions ────────────────────────────────────────────────

export function TransactionsScreen() {
  const days = [
    {
      label: "Yesterday",
      txns: [
        { name: "Faaz Spmkt", cat: "Groceries", emoji: "🛒", amt: "−9.00", sub: "≈ −22 MAD", pos: false },
        { name: "Carrefour", cat: "Groceries", emoji: "🛒", amt: "−2.89", sub: "≈ −7 MAD", pos: false },
      ],
    },
    {
      label: "Monday",
      txns: [
        { name: "Deliveroo", cat: "Food & Drink", emoji: "🍔", amt: "−38.50", sub: "≈ −96 MAD", pos: false },
        { name: "Amazon AE", cat: "Shopping", emoji: "📦", amt: "−124.00", sub: "≈ −310 MAD", pos: false },
        { name: "ADCB ATM", cat: "Transfer", emoji: "🏧", amt: "+500.00", sub: "≈ +1,250 MAD", pos: true },
      ],
    },
  ];

  return (
    <Screen tab={1}>
      <div style={{ padding: "20px 20px 0" }}>
        <h2 style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontWeight: 400, fontSize: 26, color: B.ink, letterSpacing: "-0.02em", marginBottom: 3 }}>
          Transactions
        </h2>
        <p style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 12, color: B.muted, marginBottom: 12 }}>
          426 shown · 426 total
        </p>

        <div style={{ background: B.card, borderRadius: 14, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, marginBottom: 12, border: `1px solid ${B.line}` }}>
          <span style={{ color: B.muted, fontSize: 14 }}>🔍</span>
          <span style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: B.muted }}>Search transactions…</span>
        </div>

        <div style={{ display: "flex", gap: 7, marginBottom: 16, overflow: "hidden" }}>
          {["All", "Groceries", "Food & Drink", "Shopping"].map((p, i) => (
            <div key={p} style={{
              padding: "6px 13px", borderRadius: 99,
              background: i === 0 ? B.terra : B.card2,
              border: `1px solid ${i === 0 ? B.terra : B.line2}`,
              fontFamily: "var(--font-public-sans), sans-serif",
              fontSize: 11,
              color: i === 0 ? "#fff" : B.muted,
              whiteSpace: "nowrap", flexShrink: 0,
            }}>
              {p}
            </div>
          ))}
        </div>

        {days.map((day) => (
          <div key={day.label}>
            <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 11, color: B.muted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
              {day.label}
            </div>
            {day.txns.map((tx) => (
              <div key={tx.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: `1px solid ${B.line}` }}>
                <div style={{ width: 38, height: 38, borderRadius: 12, background: B.card2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
                  {tx.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 13, color: B.ink, fontWeight: 500 }}>{tx.name}</div>
                  <div style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: 11, color: B.muted }}>{tx.cat}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 13, color: tx.pos ? B.sage : B.coral }}>{tx.amt}</div>
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: B.muted }}>{tx.sub}</div>
                </div>
              </div>
            ))}
            <div style={{ marginBottom: 14 }} />
          </div>
        ))}
      </div>
    </Screen>
  );
}
