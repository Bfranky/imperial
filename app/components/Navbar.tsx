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
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(15,10,26,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(200,169,110,0.15)" : "none",
      transition: "all 0.35s ease",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>

          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg, #c8a96e, #e8c98a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", boxShadow: "0 0 16px rgba(200,169,110,0.35)" }}>
              👑
            </div>
            <div>
              <div className="font-cinzel" style={{ color: "#c8a96e", fontSize: "12px", fontWeight: "700", letterSpacing: "2.5px", lineHeight: "1.1" }}>IMPERIAL</div>
              <div className="font-playfair" style={{ color: "rgba(250,246,240,0.5)", fontSize: "10px", letterSpacing: "1px", fontStyle: "italic", lineHeight: "1" }}>Kitchen & Restaurant</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }} className="desk-nav">
            {links.map(l => (
              <a key={l.label} href={l.href} className="font-cinzel" style={{
                color: "rgba(250,246,240,0.7)", fontSize: "10px", letterSpacing: "1.5px",
                padding: "8px 14px", borderRadius: "4px", textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = "#c8a96e"}
                onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = "rgba(250,246,240,0.7)"}
              >
                {l.label.toUpperCase()}
              </a>
            ))}
            <a href="tel:08074101786" style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "linear-gradient(135deg, #c8a96e, #e8c98a)",
              color: "#0f0a1a", padding: "9px 18px", borderRadius: "4px",
              textDecoration: "none", fontWeight: "700", fontSize: "11px",
              marginLeft: "8px", letterSpacing: "0.5px",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <Phone size={12} />
              <span className="font-cinzel">Call Now</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#c8a96e", cursor: "pointer", padding: "8px" }} className="mob-btn">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(15,10,26,0.98)", borderTop: "1px solid rgba(200,169,110,0.15)", padding: "16px 24px 28px" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="font-cinzel" style={{
              display: "block", color: "rgba(250,246,240,0.7)", fontSize: "11px",
              letterSpacing: "2px", padding: "12px 0", borderBottom: "1px solid rgba(200,169,110,0.08)",
              textDecoration: "none",
            }}>
              {l.label.toUpperCase()}
            </a>
          ))}
          <a href="tel:08074101786" style={{
            display: "flex", justifyContent: "center", alignItems: "center", gap: "8px",
            marginTop: "18px", background: "linear-gradient(135deg, #c8a96e, #e8c98a)",
            color: "#0f0a1a", padding: "13px", borderRadius: "4px",
            textDecoration: "none", fontWeight: "700",
          }}>
            <Phone size={14} />
            <span className="font-cinzel" style={{ fontSize: "12px", letterSpacing: "1px" }}>0807 410 1786</span>
          </a>
        </div>
      )}

      <style>{`
        @media(min-width:768px){.desk-nav{display:flex!important;}.mob-btn{display:none!important;}}
        @media(max-width:767px){.desk-nav{display:none!important;}.mob-btn{display:block!important;}}
      `}</style>
    </nav>
  );
}
