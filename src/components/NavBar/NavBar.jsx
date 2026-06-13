import { useState } from "react";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
import useScrolled from "../../hooks/useScrolled";
import navLinks from "../../data/navLinks";

export default function NavBar() {
  const scrolled = useScrolled(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position:       "fixed",
          top:            0,
          left:           0,
          right:          0,
          zIndex:         100,
          padding:        "16px 5%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          background:     scrolled
            ? "rgba(10,15,30,0.97)"
            : "rgba(10,15,30,0.6)",
          backdropFilter: "blur(20px)",
          borderBottom:   "1px solid rgba(56,189,248,0.13)",
          transition:     "background 0.3s",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize:   "1.05rem",
            fontWeight: 600,
            color:      "#38bdf8",
            cursor:     "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span style={{ color: "#e2e8f0" }}>PKR</span>.dev
        </span>

        {/* Desktop links */}
        <nav
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          {navLinks.map((link) => (
            <NavLink key={link.id} label={link.label} sectionId={link.id} />
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background:     "none",
            border:         "none",
            cursor:         "pointer",
            display:        "flex",
            flexDirection:  "column",
            gap:            5,
            padding:        4,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width:        22,
                height:       2,
                background:   "#38bdf8",
                display:      "block",
                borderRadius: 2,
                transition:   "transform 0.3s, opacity 0.3s",
                transform:
                  mobileOpen && i === 0
                    ? "rotate(45deg) translate(5px,5px)"
                    : mobileOpen && i === 2
                    ? "rotate(-45deg) translate(5px,-5px)"
                    : "none",
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}