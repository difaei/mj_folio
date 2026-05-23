"use client";
import { useState, useRef, useEffect, useCallback } from "react";

const PHONE_W = 390;
const PHONE_H = 844;

interface PhoneMockupProps {
  screens: React.ReactNode[];
  compact?: boolean;
}

const PHONE_SHADOW =
  "0 48px 130px rgba(10,5,2,0.58), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.04)";

const GLASS = (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, transparent 40%)",
      pointerEvents: "none",
    }}
  />
);

const Dots = ({
  count,
  active,
  go,
}: {
  count: number;
  active: number;
  go: (i: number) => void;
}) => (
  <div style={{ display: "flex", gap: 7, alignItems: "center", flexShrink: 0 }}>
    {Array.from({ length: count }).map((_, i) => (
      <button
        key={i}
        onClick={() => go(i)}
        aria-label={`Screen ${i + 1}`}
        style={{
          width: i === active ? 22 : 7,
          height: 7,
          borderRadius: 99,
          background: i === active ? "#e09467" : "#D8D3CB",
          border: "none",
          padding: 0,
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(.2,.7,.3,1)",
          outline: "none",
          flexShrink: 0,
        }}
      />
    ))}
  </div>
);

export default function PhoneMockup({ screens, compact }: PhoneMockupProps) {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [scale, setScale] = useState(1);
  const [hinted, setHinted] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      const h = entry.contentRect.height;
      if (compact) {
        setScale(Math.min(w / PHONE_W, h / PHONE_H));
      } else {
        setScale(w / PHONE_W);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [compact]);

  const go = useCallback(
    (next: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setActive(next);
        setTransitioning(false);
      }, 200);
    },
    [transitioning]
  );

  const advance = () => {
    if (!hinted) setHinted(true);
    go((active + 1) % screens.length);
  };

  /* ── Compact mode: height-driven, fills parent column ── */
  if (compact) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%", height: "100%" }}>
        {/* Measurement div — fills remaining height, phone centers inside */}
        <div ref={wrapRef} style={{ flex: 1, minHeight: 0, width: "100%", position: "relative" }}>
          <div
            onClick={advance}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: PHONE_W,
              height: PHONE_H,
              transformOrigin: "center",
              transform: `translate(-50%, -50%) scale(${scale})`,
              borderRadius: 40,
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: PHONE_SHADOW,
              userSelect: "none",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: transitioning ? 0 : 1,
                transition: "opacity 0.2s ease",
              }}
            >
              {screens[active]}
            </div>
            {GLASS}
          </div>
        </div>
        <Dots count={screens.length} active={active} go={go} />
      </div>
    );
  }

  /* ── Default mode: width-driven, standalone page use ── */
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 11,
          color: "var(--sage)",
          letterSpacing: "0.06em",
          opacity: hinted ? 0 : 1,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        Tap to explore →
      </span>

      <div ref={wrapRef} style={{ width: "100%", position: "relative", height: PHONE_H * scale }}>
        <div
          onClick={advance}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: PHONE_W,
            height: PHONE_H,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
            borderRadius: 40,
            overflow: "hidden",
            cursor: "pointer",
            boxShadow: PHONE_SHADOW,
            userSelect: "none",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: transitioning ? 0 : 1,
              transition: "opacity 0.2s ease",
            }}
          >
            {screens[active]}
          </div>
          {GLASS}
        </div>
      </div>

      <Dots count={screens.length} active={active} go={go} />

      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 10,
          color: "#9e9485",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {active + 1} / {screens.length} · tap to advance
      </span>
    </div>
  );
}
