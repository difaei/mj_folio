"use client";
import { useState, useRef, useEffect, useCallback } from "react";

const PHONE_W = 390;
const PHONE_H = 844;

interface PhoneMockupProps {
  screens: React.ReactNode[];
}

export default function PhoneMockup({ screens }: PhoneMockupProps) {
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
      setScale(w < PHONE_W ? w / PHONE_W : 1);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

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

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      {/* Tap hint — fades out after first interaction */}
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

      {/* Sizing wrapper — tracks available width for scaling */}
      <div ref={wrapRef} style={{ width: "100%", maxWidth: PHONE_W, position: "relative", height: PHONE_H * scale }}>
        {/* Phone: renders at full 390×844, transformed to fit container */}
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
            boxShadow:
              "0 48px 130px rgba(10,5,2,0.58), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.04)",
            userSelect: "none",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {/* Screen content */}
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
          {/* Glass sheen overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, transparent 40%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
        {screens.map((_, i) => (
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
