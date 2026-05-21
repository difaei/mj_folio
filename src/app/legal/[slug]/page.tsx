import { notFound } from "next/navigation";
import type { Metadata } from "next";

const POLICIES: Record<string, { title: string; app: string }> = {
  "menuqr-privacy": { title: "Privacy Policy", app: "MenuQR" },
  "doctor-saas-privacy": { title: "Privacy Policy", app: "Doctor SaaS" },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(POLICIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const policy = POLICIES[slug];
  if (!policy) return {};
  return { title: `${policy.title} — ${policy.app}` };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const policy = POLICIES[slug];
  if (!policy) notFound();

  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px", fontFamily: "var(--body)", color: "var(--navy)" }}>
      <p style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--sage-dark)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
        {policy.app}
      </p>
      <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "32px" }}>
        {policy.title}
      </h1>
      <p style={{ fontSize: "14px", color: "var(--navy-soft)", marginBottom: "32px" }}>
        Last updated: May 2025
      </p>
      <div style={{ lineHeight: 1.7, color: "var(--navy-soft)", fontSize: "15px" }}>
        <p style={{ marginBottom: "24px" }}>
          <strong style={{ color: "var(--navy)" }}>{policy.app}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
        </p>
        <h2 style={{ fontFamily: "var(--display)", fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px", marginTop: "32px" }}>Information We Collect</h2>
        <p style={{ marginBottom: "16px" }}>We may collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
        <h2 style={{ fontFamily: "var(--display)", fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px", marginTop: "32px" }}>How We Use Your Information</h2>
        <p style={{ marginBottom: "16px" }}>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
        <h2 style={{ fontFamily: "var(--display)", fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px", marginTop: "32px" }}>Data Security</h2>
        <p style={{ marginBottom: "16px" }}>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        <h2 style={{ fontFamily: "var(--display)", fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px", marginTop: "32px" }}>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:simojamal15@gmail.com" style={{ color: "var(--sage-dark)" }}>simojamal15@gmail.com</a>.
        </p>
      </div>
    </main>
  );
}
