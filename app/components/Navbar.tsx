"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Services", href: "#services" },
  { label: "Catering", href: "#catering" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
      if (e.matches) setOpen(false);
    };
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(15,10,26,.97)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(200,169,110,.15)" : "none",
      transition: "all .3s ease",
    }}>
      <div className="wrap" style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 66,
        padding: "0 20px",
      }}>
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "linear-gradient(135deg,#c8a96e,#e8c98a)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, flexShrink: 0, boxShadow: "0 0 14px rgba(200,169,110,.35)",
          }}>👑</div>
          <div>
            <div className="cin" style={{ color: "#c8a96e", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", lineHeight: 1.1 }}>IMPERIAL</div>
            <div className="pf" style={{ color: "rgba(250,246,240,.5)", fontSize: 10, fontStyle: "italic", lineHeight: 1 }}>Kitchen & Restaurant</div>
          </div>
        </a>

        {/* Desktop links — only rendered when isDesktop */}
        {isDesktop && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {links.map(l => (
              <a key={l.label} href={l.href} className="cin" style={{
                color: "rgba(250,246,240,.7)", fontSize: 10, letterSpacing: "1.5px",
                padding: "7px 12px", borderRadius: 4, transition: "color .2s",
                textDecoration: "none",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c8a96e")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,246,240,.7)")}
              >{l.label.toUpperCase()}</a>
            ))}
            <a href="tel:08074101786" style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "linear-gradient(135deg,#c8a96e,#e8c98a)",
              color: "#0f0a1a", padding: "8px 16px", borderRadius: 4,
              fontWeight: 700, fontSize: 11, letterSpacing: ".5px", marginLeft: 6,
              transition: "opacity .2s", textDecoration: "none",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <Phone size={12} /><span className="cin">Call Now</span>
            </a>
          </div>
        )}

        {/* Mobile hamburger — only when not desktop */}
        {!isDesktop && (
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", color: "#c8a96e",
              padding: "10px", lineHeight: 1, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {open && !isDesktop && (
        <div style={{
          background: "rgba(15,10,26,.98)",
          borderTop: "1px solid rgba(200,169,110,.12)",
          padding: "8px 20px 24px",
        }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="cin"
              style={{
                display: "flex", alignItems: "center",
                color: "rgba(250,246,240,.75)", fontSize: 12,
                letterSpacing: "2px", padding: "15px 0",
                borderBottom: "1px solid rgba(200,169,110,.08)",
                minHeight: 52, textDecoration: "none",
              }}
            >{l.label.toUpperCase()}</a>
          ))}
          <a href="tel:08074101786" style={{
            display: "flex", justifyContent: "center", alignItems: "center", gap: 8,
            marginTop: 20, background: "linear-gradient(135deg,#c8a96e,#e8c98a)",
            color: "#0f0a1a", padding: 15, borderRadius: 6, fontWeight: 700,
            textDecoration: "none",
          }}>
            <Phone size={14} />
            <span className="cin" style={{ fontSize: 12, letterSpacing: "1px" }}>0807 410 1786</span>
          </a>
        </div>
      )}
    </nav>
  );
}