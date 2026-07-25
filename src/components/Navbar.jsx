import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_LINKS.map((l) => document.getElementById(l.toLowerCase()));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollPos) {
          setActive(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="logo">
         <span className="c">C</span>
         <span className="k">K</span>
        </div>
        <nav className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className={`nav-link ${active === link ? "active" : ""}`}
              onClick={() => scrollTo(link)}
            >
              {link.toUpperCase()}
            </span>
          ))}
        </nav>
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <span key={link} className="mobile-menu-link" onClick={() => scrollTo(link)}>
              {link}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
