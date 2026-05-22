import { notFound } from "next/navigation";
import type { Metadata } from "next";

const SUPPORT_PAGES: Record<string, { app: string }> = {
  menuqr: { app: "MenuQR" },
  "doctor-saas": { app: "Doctor SaaS" },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SUPPORT_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = SUPPORT_PAGES[slug];
  if (!page) return {};
  return { title: `Support — ${page.app}` };
}

export default async function SupportPage({ params }: Props) {
  const { slug } = await params;
  const page = SUPPORT_PAGES[slug];
  if (!page) notFound();

  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px", fontFamily: "var(--body)", color: "var(--navy)" }}>
      <p style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--sage-dark)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
        {page.app}
      </p>
      <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "32px" }}>
        Support
      </h1>
      <div style={{ lineHeight: 1.7, color: "var(--navy-soft)", fontSize: "15px" }}>
        <p style={{ marginBottom: "24px" }}>
          Need help with <strong style={{ color: "var(--navy)" }}>{page.app}</strong>? We&apos;re here to assist you.
        </p>
        <h2 style={{ fontFamily: "var(--display)", fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px", marginTop: "32px" }}>Contact Support</h2>
        <p style={{ marginBottom: "16px" }}>
          For any issues, questions, or feedback, please reach out directly:
        </p>
        <p style={{ marginBottom: "8px" }}>
          📧 Email:{" "}
          <a href="mailto:REDACTED" style={{ color: "var(--sage-dark)" }}>REDACTED</a>
        </p>
        <p style={{ marginBottom: "32px" }}>
          💬 WhatsApp:{" "}
          <a href={`https://wa.me/${(process.env.NEXT_PUBLIC_PHONE ?? '').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: "var(--sage-dark)" }}>{process.env.NEXT_PUBLIC_PHONE}</a>
        </p>
        <p style={{ fontSize: "13px", color: "var(--navy-soft)" }}>
          We typically respond within 24 hours.
        </p>
      </div>
    </main>
  );
}
