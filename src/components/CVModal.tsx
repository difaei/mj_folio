"use client";

import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CVModal({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className={`modal-overlay${open ? " show" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal cv-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        <div className="cv-modal-hero">
          <div className="cv-modal-title">Curriculum Vitae</div>
          <div className="cv-modal-sub">Mohammed Jamal — IT &amp; Systems Specialist · Dubai, UAE</div>
        </div>

        <div className="cv-preview">
          <div className="cv-preview-frame">
            <div className="cv-preview-name">Mohammed Jamal</div>
            <div className="cv-preview-role">IT &amp; Systems Specialist</div>
            <div className="cv-preview-contact">
              simojamal15@gmail.com · +971 50 876 2319 · Dubai, UAE · linkedin.com/in/mohammedjamal1995
            </div>

            <div className="cv-section">
              <div className="cv-h">Work Experience</div>

              <div className="cv-job">
                <div className="cv-job-top">
                  <div className="cv-job-role">IT Training &amp; Support Officer</div>
                  <div className="cv-job-date">May 2024 — Present</div>
                </div>
                <div className="cv-job-company">Zen Interactive Technologies · Dubai, UAE</div>
                <ul className="cv-job-points">
                  <li>Specialized in 3CX IP communication systems — configured, maintained, and supported installations.</li>
                  <li>Provided frontline IT support to staff and clients across software, hardware, and connectivity issues.</li>
                  <li>Used AI-based tools to streamline IT documentation and training content.</li>
                  <li>Designed and delivered technical training programs for internal teams and clients.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-top">
                  <div className="cv-job-role">IT Support</div>
                  <div className="cv-job-date">Jan 2023 — Mar 2024</div>
                </div>
                <div className="cv-job-company">Gulf Model School · Dubai, UAE</div>
                <ul className="cv-job-points">
                  <li>Daily technical support for over 200 users — hardware, software, and network issues.</li>
                  <li>Administered Google Workspace for Education — accounts, security, and collaboration tools.</li>
                  <li>Setup and maintenance of servers, routers, switches, and end-user devices.</li>
                  <li>Coordinated with vendors to scope and procure IT resources.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-top">
                  <div className="cv-job-role">Social Media Officer</div>
                  <div className="cv-job-date">Sep 2022 — Jan 2023</div>
                </div>
                <div className="cv-job-company">Discover Qatar · Doha, Qatar</div>
                <ul className="cv-job-points">
                  <li>Conducted IT systems training for staff to improve guest experience and reservations.</li>
                  <li>Coordinated with IT to implement a CRM system for personalized guest interactions.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-top">
                  <div className="cv-job-role">Digital Marketing Officer</div>
                  <div className="cv-job-date">Jan 2022 — Aug 2022</div>
                </div>
                <div className="cv-job-company">Cyber Elements Technologies · Dubai, UAE</div>
                <ul className="cv-job-points">
                  <li>40% increase in website traffic through content and digital strategy.</li>
                  <li>95% customer satisfaction across phone, email, and chat support.</li>
                  <li>Conducted training sessions for new employees on customer service.</li>
                </ul>
              </div>
            </div>

            <div className="cv-section">
              <div className="cv-h">Education</div>

              <div className="cv-job">
                <div className="cv-job-top">
                  <div className="cv-job-role">Master&apos;s in Computer Science &amp; Technology</div>
                  <div className="cv-job-date">Shanghai, China</div>
                </div>
                <div className="cv-job-company">Shanghai University of Electric Power</div>
                <ul className="cv-job-points">
                  <li>All coursework completed in Mandarin Chinese.</li>
                  <li>&ldquo;Best Foreign Student&rdquo; award.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-top">
                  <div className="cv-job-role">Bachelor&apos;s in Computing &amp; Industrial Management</div>
                  <div className="cv-job-date">July 2017</div>
                </div>
                <div className="cv-job-company">Hassan 1st University · Settat, Morocco</div>
              </div>
            </div>

            <div className="cv-section">
              <div className="cv-h">Skills</div>
              <div className="cv-skill-row"><strong>IT Systems:</strong> 3CX, Google Workspace, Windows, macOS, Linux, Networks, Servers, Hardware Troubleshooting</div>
              <div className="cv-skill-row"><strong>AI &amp; Automation:</strong> n8n, Make.com, Claude API, OpenAI, LangChain, Webhooks, Lovable.dev, Bolt.new</div>
              <div className="cv-skill-row"><strong>Development:</strong> Python, JavaScript, HTML/CSS, Web Development, GitHub, Vercel</div>
              <div className="cv-skill-row"><strong>Languages:</strong> Arabic (Native), English (Fluent), French (Fluent), Mandarin (HSK4)</div>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <a href="/cv/mohammed-jamal-cv.pdf" download="Mohammed-Jamal-CV.pdf" className="modal-btn modal-btn-primary">
            ⬇ Download PDF
          </a>
          <a href="/cv/mohammed-jamal-cv.pdf" target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-ghost">
            Open in New Tab ↗
          </a>
        </div>
      </div>
    </div>
  );
}
