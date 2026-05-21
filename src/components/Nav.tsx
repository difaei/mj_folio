"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
        <Image src="/images/SJ.png" alt="Simo" width={44} height={44} className="nav-brand-avatar" />
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
