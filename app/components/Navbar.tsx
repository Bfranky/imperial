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
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(15,10,26,.97)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,169,110,.15)" : "none",
        transition: "all .3s ease",
      }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 66 }}>
          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10 }}>
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

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="nav-desk">
            {links.map(l => (
              <a key={l.label} href={l.href} className="cin" style={{
                color: "rgba(250,246,240,.7)", fontSize: 10, letterSpacing: "1.5px",
                padding: "7px 12px", borderRadius: 4, transition: "color .2s",
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
              transition: "opacity .2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <Phone size={12} /><span className="cin">Call Now</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(o => !o)} style={{
            background: "none", border: "none", color: "#c8a96e", padding: 6, lineHeight: 1,
          }} className="nav-mob" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div style={{
            background: "rgba(15,10,26,.98)", borderTop: "1px solid rgba(200,169,110,.12)",
            padding: "12px 20px 24px",
          }}>
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="cin" style={{
                display: "block", color: "rgba(250,246,240,.7)", fontSize: 11,
                letterSpacing: "2px", padding: "13px 0", borderBottom: "1px solid rgba(200,169,110,.08)",
              }}>{l.label.toUpperCase()}</a>
            ))}
            <a href="tel:08074101786" style={{
              display: "flex", justifyContent: "center", alignItems: "center", gap: 8,
              marginTop: 18, background: "linear-gradient(135deg,#c8a96e,#e8c98a)",
              color: "#0f0a1a", padding: 14, borderRadius: 6, fontWeight: 700,
            }}>
              <Phone size={14} /><span className="cin" style={{ fontSize: 12, letterSpacing: "1px" }}>0807 410 1786</span>
            </a>
          </div>
        )}
      </nav>

      <style>{`
        .nav-desk { display:none; }
        .nav-mob  { display:block; }
        @media(min-width:768px){
          .nav-desk { display:flex !important; }
          .nav-mob  { display:none !important; }
        }
      `}</style>
    </>
  );
}
