"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Project } from "@/content/projects";
import { ProjectIcon } from "./ProjectIcons";
import PhoneMockup from "./PhoneMockup";
import {
  HomeScreen,
  InsightsScreen,
  BudgetsScreen,
  GoalsScreen,
  GoalDetailScreen,
  TransactionsScreen,
} from "@/content/beztami-screens";
import {
  OnboardingScreen,
  ResultsScreen,
  DestinationScreen,
  SavedScreen,
} from "@/content/travel-ai-screens";

const SCREENS_BY_SLUG: Record<string, React.ReactNode[]> = {
  beztami: [
    <HomeScreen key="home" />,
    <InsightsScreen key="insights" />,
    <BudgetsScreen key="budgets" />,
    <GoalsScreen key="goals" />,
    <GoalDetailScreen key="goal-detail" />,
    <TransactionsScreen key="txns" />,
  ],
  "travel-ai": [
    <OnboardingScreen key="onboarding" />,
    <ResultsScreen key="results" />,
    <DestinationScreen key="destination" />,
    <SavedScreen key="saved" />,
  ],
};

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const open = !!project;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!project) return null;

  const statusLabel = project.status === "building" ? "Building" : "Side Project";
  const statusClass = project.status === "building" ? "building" : "side";

  return (
    <div
      className="modal-overlay show"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        <div className="modal-hero">
          <div className="modal-hero-top">
            <div className="modal-logo">
              <ProjectIcon slug={project.slug} size={32} />
            </div>
            <div>
              <div className="modal-cat">{project.category}</div>
              <div className="modal-title">
                {project.name}
                <span className={`modal-status ${statusClass}`}>{statusLabel}</span>
              </div>
            </div>
          </div>
          <div className="modal-tagline">&ldquo;{project.tagline}&rdquo;</div>
        </div>

        {project.mockupType === "phone" && SCREENS_BY_SLUG[project.slug] ? (
          /* ── Side-by-side: phone mockup + info ── */
          <div className="modal-phone-layout">
            <div className="modal-phone-col">
              <PhoneMockup screens={SCREENS_BY_SLUG[project.slug]} compact />
            </div>
            <div className="modal-info-col">
              <div className="modal-section-label">About this project</div>
              <p className="modal-desc">{project.description}</p>
              <div className="modal-section-label">Key features</div>
              <div className="modal-features">
                {project.features.map((f) => (
                  <div key={f} className="modal-feature">{f}</div>
                ))}
              </div>
              <div className="modal-section-label">Built with</div>
              <div className="modal-stack">
                {project.stack.map((s) => (
                  <span key={s} className="modal-stack-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="modal-screenshots">
              <div className="modal-section-label">Preview</div>
              <div className="shot-frame">
                <div className="shot-bar">
                  <div className="shot-dots">
                    <div className="shot-dot" style={{ background: "#ff5f57" }} />
                    <div className="shot-dot" style={{ background: "#febc2e" }} />
                    <div className="shot-dot" style={{ background: "#28c840" }} />
                  </div>
                  <div className="shot-url">
                    {project.liveUrl || `${project.slug}.simojamal.com`}
                  </div>
                </div>
                <div className="shot-canvas">
                  {project.screenshots?.[0] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.screenshots[0]}
                      alt={`${project.name} screenshot`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <div className="shot-placeholder">
                      <svg className="shot-placeholder-svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <rect x="4" y="8" width="48" height="36" rx="3" stroke="#8A9A7B" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                        <circle cx="20" cy="22" r="4" fill="#C8D2BE" />
                        <path d="M10 38L22 28L30 34L46 20" stroke="#8A9A7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      Screenshot placeholder
                      <span className="shot-placeholder-text">
                        Add image: /images/{project.slug}-1.png
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section-label">About this project</div>
              <p className="modal-desc">{project.description}</p>
              <div className="modal-section-label">Key features</div>
              <div className="modal-features">
                {project.features.map((f) => (
                  <div key={f} className="modal-feature">{f}</div>
                ))}
              </div>
              <div className="modal-section-label">Built with</div>
              <div className="modal-stack">
                {project.stack.map((s) => (
                  <span key={s} className="modal-stack-tag">{s}</span>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="modal-actions">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-primary">
              Visit Live Site →
            </a>
          ) : (
            <button className="modal-btn disabled" disabled>
              {project.status === "building" ? "Coming Soon" : "Live URL TBD"}
            </button>
          )}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-ghost">
              View on GitHub ↗
            </a>
          ) : (
            <button className="modal-btn modal-btn-ghost disabled" disabled>
              GitHub TBD
            </button>
          )}
          <Link href={`/projects/${project.slug}`} className="modal-btn modal-btn-ghost" onClick={onClose}>
            Full Page →
          </Link>
        </div>
      </div>
    </div>
  );
}
