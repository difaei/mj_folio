"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import CVModal from "@/components/CVModal";
import ProjectModal from "@/components/ProjectModal";
import { ProjectIcon } from "@/components/ProjectIcons";
import { PROJECTS, Project } from "@/content/projects";

export default function HomePage() {
  const [cvOpen, setCvOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [clock, setClock] = useState("--:--");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const action = form.action;

    if (!action.includes("formspree.io/f/") || action.includes("YOUR_FORM_ID")) {
      const data = new FormData(form);
      const subject = encodeURIComponent(data.get("subject") as string);
      const body = encodeURIComponent(
        `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`
      );
      window.location.href = `mailto:REDACTED?subject=${subject}&body=${body}`;
      return;
    }

    setFormStatus("sending");
    try {
      const res = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else throw new Error();
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      <Nav onOpenCV={() => setCvOpen(true)} />

      {/* ── HERO ───────────────────────────────────────── */}
      <section id="hero">
        <div className="hero-deco" />
        <div className="hero-l">
          <div className="hero-eyebrow">Currently in Dubai</div>
          <h1 className="hero-h1">
            <span className="first">Mohammed</span>
            <span className="last">Jamal.</span>
          </h1>
          <div className="hero-role">IT &amp; Systems Specialist</div>
          <p className="hero-sub">
            Six years building and supporting <strong>IT systems</strong>, with a growing focus on{" "}
            <strong>AI automation</strong>. Multilingual, hands-on, and obsessed with making things work better.
          </p>
          <div className="hero-actions">
            <button className="btn btn-cv" onClick={() => setCvOpen(true)}>📄 View CV</button>
            <a href="#projects" className="btn btn-primary">Explore Work →</a>
            <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          </div>
          <div className="hero-availability">
            <span className="hero-availability-dot" />
            Open to opportunities · Dubai or remote · Available now
          </div>
          <div className="hero-meta">
            <div className="hero-meta-row"><span className="hero-meta-dot" />{clock} GST</div>
            <div className="hero-meta-row"><span className="hero-meta-dot" />Arabic · English · Français · 中文</div>
          </div>
        </div>
        <div className="hero-r">
          <div className="hero-photo-frame">
            <div className="hero-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/simo.jpeg" alt="Mohammed Jamal" />
            </div>
            <div className="hero-photo-tag">
              <span className="hero-photo-tag-l">Based in</span>
              <span className="hero-photo-tag-v">Dubai, UAE 🇦🇪</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ──────────────────────────────────── */}
      <section id="whatido" className="sec">
        <RevealOnScroll>
          <div className="sec-header">
            <span className="sec-eyebrow">What I do</span>
            <span className="sec-num">01 / 07</span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <h2 className="sec-title">Systems that work. <em>People who use them.</em></h2>
        </RevealOnScroll>
        <div className="do-grid">
          {[
            {
              icon: "🖥️", variant: "",
              title: "IT Support & Systems",
              desc: "End-to-end IT support — from hardware to software, networks to servers. Six years keeping systems running and users happy.",
              tags: ["Windows", "macOS", "Network Admin", "Google Workspace"],
              delay: 1,
            },
            {
              icon: "📞", variant: "sun",
              title: "VoIP & Communication Systems",
              desc: "3CX IP communication systems specialist — installation, configuration, maintenance, and end-user training. A rare and in-demand specialty.",
              tags: ["3CX", "VoIP", "PBX", "SIP Trunks"],
              delay: 2,
            },
            {
              icon: "🤖", variant: "rust",
              title: "AI Automation & Workflows",
              desc: "Building AI-powered automations with n8n, Claude API, and modern tools that save hours of manual work — from email triage to ticket routing.",
              tags: ["n8n", "Make.com", "Claude API", "Webhooks"],
              delay: 3,
            },
            {
              icon: "🌍", variant: "navy",
              title: "Training & Multilingual Support",
              desc: "Designing technical training programs and supporting users across four languages — bridging the gap between systems and the people who use them.",
              tags: ["Arabic", "English", "French", "Mandarin"],
              delay: 4,
            },
          ].map((card) => (
            <RevealOnScroll key={card.title} delay={card.delay as 1 | 2 | 3 | 4}>
              <div className="do-card">
                <div className={`do-icon${card.variant ? ` ${card.variant}` : ""}`}>{card.icon}</div>
                <div className="do-content">
                  <div className="do-title">{card.title}</div>
                  <div className="do-desc">{card.desc}</div>
                  <div className="do-tags">
                    {card.tags.map((t) => <span key={t} className="do-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────── */}
      <section id="skills" className="sec">
        <RevealOnScroll>
          <div className="sec-header">
            <span className="sec-eyebrow">Skills &amp; toolkit</span>
            <span className="sec-num">02 / 07</span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <h2 className="sec-title">Tools I use to <em>get things done.</em></h2>
        </RevealOnScroll>
        <div className="skills-grid">
          {[
            {
              num: "01", title: "IT Systems",
              desc: "Six years of frontline support, system administration, and infrastructure work.",
              tags: [
                { label: "3CX IP Phone", cls: "featured" },
                { label: "Google Workspace", cls: "featured" },
                { label: "Windows" }, { label: "macOS" }, { label: "Linux" },
                { label: "Network Setup" }, { label: "Server Admin" }, { label: "Hardware Troubleshooting" },
              ],
              delay: 1,
            },
            {
              num: "02", title: "AI & Automation",
              desc: "Building AI-powered workflows that save real time. My current focus area.",
              tags: [
                { label: "n8n", cls: "featured" }, { label: "Claude API", cls: "featured" },
                { label: "Make.com" }, { label: "OpenAI API" }, { label: "LangChain" },
                { label: "Webhooks" }, { label: "Lovable.dev" }, { label: "Bolt.new" },
              ],
              delay: 2,
            },
            {
              num: "03", title: "Development",
              desc: "Comfortable building tools and small applications when needed.",
              tags: [
                { label: "Python" }, { label: "JavaScript" }, { label: "HTML / CSS" },
                { label: "Web Development" }, { label: "GitHub" }, { label: "Vercel" },
              ],
              delay: 3,
            },
            {
              num: "04", title: "Communication & Training",
              desc: "The skills I built first. Knowing how to teach is half the job.",
              tags: [
                { label: "Arabic · Native", cls: "sage" }, { label: "English · Fluent", cls: "sage" },
                { label: "French · Fluent", cls: "sage" }, { label: "Mandarin · HSK4", cls: "sage" },
                { label: "Technical Training" }, { label: "Documentation" }, { label: "Customer Support" },
              ],
              delay: 4,
            },
          ].map((cat) => (
            <RevealOnScroll key={cat.num} delay={cat.delay as 1 | 2 | 3 | 4}>
              <div className="skill-cat">
                <div className="skill-cat-top">
                  <div className="skill-cat-num">{cat.num}</div>
                  <div className="skill-cat-title">{cat.title}</div>
                </div>
                <div className="skill-cat-desc">{cat.desc}</div>
                <div className="skill-tags">
                  {cat.tags.map((t) => (
                    <span key={t.label} className={`skill-tag${t.cls ? ` ${t.cls}` : ""}`}>{t.label}</span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ───────────────────────────────────── */}
      <section id="projects" className="sec">
        <RevealOnScroll>
          <div className="sec-header">
            <span className="sec-eyebrow">Side projects</span>
            <span className="sec-num">03 / 07</span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <h2 className="sec-title">Things I&apos;ve <span className="accent">built</span> on the side.</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <p className="proj-intro">
            A mix of products I&apos;ve shipped and tools I&apos;m currently building — nights and weekends.
            They&apos;re how I stay sharp on new technologies and explore ideas outside my day job.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={2}>
          <div className="proj-list">
            {PROJECTS.map((project, i) => (
              <div
                key={project.slug}
                className="proj-row"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
              >
                <span className="proj-num">{String(i + 1).padStart(2, "0")}.</span>
                <div className="proj-logo"><ProjectIcon slug={project.slug} size={32} /></div>
                <div>
                  <div className="proj-name">
                    {project.name}
                    <span className={`proj-status${project.status === "building" ? " building" : ""}`}>
                      {project.status === "building" ? "Building" : "Side Project"}
                    </span>
                  </div>
                  <div className="proj-cat">{project.category}</div>
                </div>
                <div className="proj-blurb">{project.blurb}</div>
                <div className="proj-stack">
                  {project.stack.slice(0, 3).map((s) => (
                    <span key={s} className="proj-stack-tag">{s}</span>
                  ))}
                  <span className="proj-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────── */}
      <section id="journey" className="sec">
        <RevealOnScroll>
          <div className="sec-header">
            <span className="sec-eyebrow">Experience</span>
            <span className="sec-num">04 / 07</span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <h2 className="sec-title">A career built <em>across continents.</em></h2>
        </RevealOnScroll>
        <div className="journey-wrap">
          <div className="journey-line" />

          {[
            {
              current: true,
              date: "May 2024 — Present", loc: "Dubai, UAE",
              role: "IT Training & Support Officer", tag: "Now",
              company: "Zen Interactive Technologies",
              points: [
                "Specialized in 3CX IP communication systems — configured, maintained, and supported installations while leading user onboarding and training.",
                "Provided frontline IT support to staff and clients, troubleshooting software, hardware, and connectivity issues.",
                "Used AI-based tools to streamline IT documentation and training content, improving clarity and efficiency in support processes.",
                "Designed and delivered technical training programs for internal teams and clients, enhancing system adoption and reducing support tickets.",
              ],
            },
            {
              current: false,
              date: "Jan 2023 — Mar 2024", loc: "Dubai, UAE",
              role: "IT Support", company: "Gulf Model School",
              points: [
                "Provided daily technical support for over 200 users, resolving hardware, software, and network-related issues.",
                "Administered and supported Google Workspace for Education — managing user accounts, data security, and cloud-based collaboration tools.",
                "Oversaw the setup, configuration, and maintenance of servers, routers, switches, and end-user devices, significantly reducing system downtime.",
                "Coordinated with vendors to scope and procure IT resources and support digital initiatives.",
              ],
            },
            {
              current: false,
              date: "Sep 2022 — Jan 2023", loc: "Doha, Qatar",
              role: "Social Media Officer", company: "Discover Qatar",
              points: [
                "Conducted regular training sessions for staff on IT systems, ensuring teams were proficient in technology to assist guests and manage reservations.",
                "Coordinated with the IT team to implement a CRM system, enabling personalized guest interactions.",
              ],
            },
            {
              current: false,
              date: "Jan 2022 — Aug 2022", loc: "Dubai, UAE",
              role: "Digital Marketing Officer", company: "Cyber Elements Technologies",
              points: [
                "Created compelling content resulting in a 40% increase in website traffic.",
                "Provided customer support across phone, email, and chat, maintaining a 95% customer satisfaction rate.",
                "Conducted training sessions for new employees on customer service and digital marketing skills.",
                "Leveraged influencer marketing to promote campaigns, increasing brand visibility by 25%.",
              ],
            },
            {
              current: false,
              date: "2020 — 2021", loc: "El Jadida, Morocco",
              role: "Founder · Akaibara", company: "Personal E-commerce Project",
              points: [
                "Established and managed an e-commerce business — applying digital marketing and CRM techniques to drive sales.",
                "Built and maintained the e-commerce website, optimizing user experience and product presentation.",
                "Conducted product research and ran Facebook ad campaigns, resulting in steady growth in online sales.",
              ],
            },
          ].map((job) => (
            <RevealOnScroll key={job.role}>
              <div className={`j-item${job.current ? " j-current" : ""}`}>
                <div className="j-dot" />
                <div className="j-card">
                  <div className="j-top">
                    <span className="j-date">{job.date}</span>
                    <span className="j-loc">{job.loc}</span>
                  </div>
                  <div className="j-role">
                    {job.role}
                    {job.tag && <span className="j-current-tag">{job.tag}</span>}
                  </div>
                  <div className="j-company">{job.company}</div>
                  <div className="j-points">
                    {job.points.map((p) => <div key={p} className="j-point">{p}</div>)}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────────────── */}
      <section id="education" className="sec">
        <RevealOnScroll>
          <div className="sec-header">
            <span className="sec-eyebrow">Education</span>
            <span className="sec-num">05 / 07</span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <h2 className="sec-title">Studied across <em>two continents.</em></h2>
        </RevealOnScroll>
        <div className="edu-grid">
          <RevealOnScroll delay={1}>
            <div className="edu-card china">
              <div className="edu-degree">Master Studies in Computer Science &amp; Technology</div>
              <div className="edu-school">Shanghai University of Electric Power</div>
              <div className="edu-meta">Shanghai, China · Studied in Mandarin</div>
              <div className="edu-points">
                <div className="edu-point">Completed all coursework taught entirely in Mandarin Chinese.</div>
                <div className="edu-point">Received the &ldquo;Best Foreign Student&rdquo; award.</div>
                <div className="edu-point">Won the Shanghai inter-university dragon boat competition.</div>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <div className="edu-card">
              <div className="edu-degree">Bachelor&apos;s in Computing &amp; Industrial Management</div>
              <div className="edu-school">Hassan 1st University</div>
              <div className="edu-meta">Settat, Morocco · Graduated July 2017</div>
              <div className="edu-points">
                <div className="edu-point">Graduated top of the class with multiple internships.</div>
                <div className="edu-point">Played on the university football team — qualified to the semi-finals.</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────── */}
      <section id="about" className="sec">
        <RevealOnScroll>
          <div className="sec-header">
            <span className="sec-eyebrow">A bit about me</span>
            <span className="sec-num">06 / 07</span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <h2 className="sec-title">Curious by default. <em>Multilingual by choice.</em></h2>
        </RevealOnScroll>
        <div className="about-grid">
          <RevealOnScroll delay={2}>
            <div className="about-body">
              <p>I&apos;m <strong>Simo</strong> — short for Mohammed. I grew up in <em>Morocco</em>, studied in <em>China</em>, worked in <em>Qatar</em>, and now build for businesses in <em>Dubai</em>.</p>
              <p>Along the way I became fluent in four languages and learned that <strong>most technical problems are also human problems</strong>. The hard part is rarely the code — it&apos;s understanding what people actually need.</p>
              <p>Outside of work I&apos;m usually <em>watching football</em>, exploring new cities, or testing some new AI tool over the weekend. I love cultural exchange — it&apos;s what got me into languages in the first place, and what keeps me curious about how different teams solve the same problems.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={3}>
            <div className="fun-facts">
              {[
                { emoji: "🏆", text: <>Won a <strong>dragon boat competition</strong> in Shanghai against universities across the city</> },
                { emoji: "🎓", text: <>Studied a Master&apos;s degree <strong>in Mandarin</strong> — graduated with the Best Foreign Student award</> },
                { emoji: "⚽", text: <>Played semi-finalist <strong>football</strong> at Hassan 1st University</> },
                { emoji: "🛒", text: <>Built and ran an <strong>e-commerce business</strong> from scratch in Morocco</> },
              ].map((f) => (
                <div key={f.emoji} className="fun">
                  <div className="fun-emoji">{f.emoji}</div>
                  <div className="fun-text">{f.text}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
        <div className="hobbies-grid">
          {[
            { emoji: "⚽", label: "Football", sub: "Watching & playing" },
            { emoji: "🌐", label: "Languages", sub: "Always learning" },
            { emoji: "✈️", label: "Travel", sub: "Cultural exchange" },
            { emoji: "🛠️", label: "New Tech", sub: "AI, automation, gadgets" },
          ].map((h) => (
            <div key={h.label} className="hobby">
              <div className="hobby-emoji">{h.emoji}</div>
              <div className="hobby-label">{h.label}</div>
              <div className="hobby-sub">{h.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────── */}
      <section id="contact" className="sec">
        <RevealOnScroll>
          <div className="sec-header">
            <span className="sec-eyebrow">Get in touch</span>
            <span className="sec-num">07 / 07</span>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <h2 className="sec-title">Let&apos;s <em>talk.</em></h2>
        </RevealOnScroll>
        <RevealOnScroll delay={2}>
          <p className="contact-intro">
            Whether you&apos;re hiring, looking to collaborate, or just want to say hi — I&apos;d love to hear from you. Arabic, English, French, or Mandarin — your choice.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={3}>
          <div className="contact-layout">
            <form className="contact-form" action="https://formspree.io/f/xkoejdne" method="POST" onSubmit={handleContactSubmit}>
              <div className="cf-row">
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-name">Your Name</label>
                  <input className="cf-input" type="text" id="cf-name" name="name" placeholder="Jane Doe" required />
                </div>
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-email">Your Email</label>
                  <input className="cf-input" type="email" id="cf-email" name="email" placeholder="jane@company.com" required />
                </div>
              </div>
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-subject">Subject</label>
                <input className="cf-input" type="text" id="cf-subject" name="subject" placeholder="What's this about?" required />
              </div>
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-message">Message</label>
                <textarea className="cf-textarea" id="cf-message" name="message" placeholder="Tell me what you have in mind..." required />
              </div>
              <input type="hidden" name="_subject" value="New message from simojamal.com" />
              <button type="submit" className="cf-submit" disabled={formStatus === "sending"}>
                {formStatus === "sending" ? "Sending..." : "Send Message →"}
              </button>
              {formStatus === "success" && (
                <div className="cf-status show success">✓ Message sent! I&apos;ll get back to you within 24 hours.</div>
              )}
              {formStatus === "error" && (
                <div className="cf-status show error">✗ Something went wrong. Try emailing REDACTED directly.</div>
              )}
            </form>

            <div className="contact-side">
              <a href="https://wa.me/REDACTED?text=Hi%20Mohammed%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out." target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon whatsapp">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">WhatsApp · fastest reply</div>
                  <div className="contact-card-value">REDACTED</div>
                </div>
                <span className="contact-card-arrow">→</span>
              </a>

              <a href="mailto:REDACTED" className="contact-card">
                <div className="contact-card-icon email">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6L12 13 2 6" /></svg>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">REDACTED</div>
                </div>
                <span className="contact-card-arrow">→</span>
              </a>

              <a href="https://linkedin.com/in/mohammedjamal1995" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon linkedin">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">LinkedIn</div>
                  <div className="contact-card-value">/in/mohammedjamal1995</div>
                </div>
                <span className="contact-card-arrow">→</span>
              </a>

              <a href="https://github.com/difaei" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon github">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">GitHub</div>
                  <div className="contact-card-value">@difaei</div>
                </div>
                <span className="contact-card-arrow">→</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
