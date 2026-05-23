import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PROJECTS } from "@/content/projects";
import { ProjectIcon } from "@/components/ProjectIcons";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Mohammed Jamal`,
    description: project.blurb,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const statusLabel = project.status === "building" ? "Building" : project.status === "active" ? "Active" : project.status === "live" ? "Live" : "Side Project";
  const statusClass = project.status === "building" ? "building" : project.status === "active" ? "live" : "side";

  return (
    <>
      <nav id="nav" className="scrolled" style={{ position: "relative", padding: "22px 56px" }}>
        <Link href="/" className="nav-brand">
          <span className="nav-brand-dot" />
          Mohammed Jamal
        </Link>
        <div className="nav-links">
          <Link href="/#whatido">What I Do</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#journey">Experience</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <Link href="/#projects" className="nav-cv">← All Projects</Link>
      </nav>

      <main style={{ background: "var(--ivory)", minHeight: "100vh", paddingTop: "40px" }}>
        {/* Hero */}
        <div style={{
          padding: "56px 56px 32px",
          background: "linear-gradient(135deg, var(--sage-light) 0%, var(--ivory-dark) 100%)",
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
              <div className="modal-logo" style={{ width: "80px", height: "80px" }}>
                <ProjectIcon slug={project.slug} size={36} />
              </div>
              <div>
                <div className="modal-cat">{project.category}</div>
                <h1 className="modal-title" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
                  {project.name}
                  <span className={`modal-status ${statusClass}`}>{statusLabel}</span>
                </h1>
              </div>
            </div>
            <p className="modal-tagline" style={{ fontSize: "22px" }}>&ldquo;{project.tagline}&rdquo;</p>
          </div>
        </div>

        {/* Screenshot placeholder */}
        <div style={{ padding: "40px 56px", maxWidth: "900px", margin: "0 auto" }}>
          <div className="shot-frame">
            <div className="shot-bar">
              <div className="shot-dots">
                <div className="shot-dot" style={{ background: "#ff5f57" }} />
                <div className="shot-dot" style={{ background: "#febc2e" }} />
                <div className="shot-dot" style={{ background: "#28c840" }} />
              </div>
              <div className="shot-url">{project.liveUrl || `${project.slug}.simojamal.com`}</div>
            </div>
            <div className="shot-canvas" style={{ aspectRatio: "16/9" }}>
              {project.screenshots?.[0] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.screenshots[0]} alt={`${project.name} screenshot`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div className="shot-placeholder">
                  <svg className="shot-placeholder-svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <rect x="4" y="8" width="48" height="36" rx="3" stroke="#8A9A7B" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                    <circle cx="20" cy="22" r="4" fill="#C8D2BE" />
                    <path d="M10 38L22 28L30 34L46 20" stroke="#8A9A7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  Screenshot placeholder
                  <span className="shot-placeholder-text">Add image: /images/{project.slug}-1.png</span>
                </div>
              )}
            </div>
          </div>

          {/* Body */}
          <div className="project-layout-basic" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "56px", marginTop: "48px" }}>
            <div>
              <div className="modal-section-label">About this project</div>
              <p className="modal-desc" style={{ fontSize: "17px" }}>{project.description}</p>
              <div className="modal-section-label">Key features</div>
              <div className="modal-features">
                {project.features.map((f) => (
                  <div key={f} className="modal-feature">{f}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="modal-section-label">Built with</div>
              <div className="modal-stack" style={{ marginBottom: "32px" }}>
                {project.stack.map((s) => (
                  <span key={s} className="modal-stack-tag">{s}</span>
                ))}
              </div>
              <div className="modal-section-label">Status</div>
              <span className={`proj-status ${statusClass}`} style={{ fontSize: "11px", padding: "4px 12px" }}>
                {statusLabel}
              </span>

              {(project.hasPrivacyPolicy || project.hasSupport) && (
                <div style={{ marginTop: "32px" }}>
                  <div className="modal-section-label">Legal &amp; Support</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {project.hasPrivacyPolicy && (
                      <Link href={`/legal/${project.slug}-privacy`} style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--sage-dark)", letterSpacing: "0.04em" }}>
                        Privacy Policy →
                      </Link>
                    )}
                    {project.hasSupport && (
                      <Link href={`/support/${project.slug}`} style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--sage-dark)", letterSpacing: "0.04em" }}>
                        Support Page →
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="modal-actions" style={{ padding: "24px 0 0", background: "transparent", borderTop: "1px solid var(--line)", marginTop: "40px" }}>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-primary">
                Visit Live Site →
              </a>
            ) : (
              <button className="modal-btn disabled" disabled>
                {project.status === "building" ? "Coming Soon" : project.status === "active" ? "Running Internally" : "Live URL TBD"}
              </button>
            )}
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-ghost">
                View on GitHub ↗
              </a>
            ) : (
              <button className="modal-btn modal-btn-ghost disabled" disabled>GitHub TBD</button>
            )}
            <Link href="/#projects" className="modal-btn modal-btn-ghost">← Back to Projects</Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
