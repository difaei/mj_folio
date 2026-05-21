"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NavProps {
  onOpenCV?: () => void;
}

export default function Nav({ onOpenCV }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <Link href="/#hero" className="nav-brand">
        <span className="nav-brand-dot" />
        Mohammed Jamal
      </Link>
      <div className="nav-links">
        <a href="/#whatido">What I Do</a>
        <a href="/#skills">Skills</a>
        <a href="/#projects">Projects</a>
        <a href="/#journey">Experience</a>
        <a href="/#contact">Contact</a>
      </div>
      <button className="nav-cv" onClick={onOpenCV}>
        📄 View CV
      </button>
    </nav>
  );
}
