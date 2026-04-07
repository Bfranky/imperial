"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(26, 10, 46, 0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201, 168, 76, 0.2)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "42px", height: "42px", borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a84c, #f0d080)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "20px", flexShrink: 0,
              boxShadow: "0 0 15px rgba(201,168,76,0.4)"
            }}>
              👑
            </div>
            <div>
              <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "13px", fontWeight: "700", letterSpacing: "2px", lineHeight: "1.1" }}>
                IMPERIAL
              </div>
              <div className="font-cormorant" style={{ color: "#fdf8f0", fontSize: "11px", letterSpacing: "1.5px", lineHeight: "1" }}>
                KITCHEN & RESTAURANT
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-cinzel"
                style={{
                  color: "#e2d5f5",
                  fontSize: "11px",
                  fontWeight: "500",
                  letterSpacing: "1.5px",
                  padding: "8px 14px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#c9a84c";
                  (e.target as HTMLAnchorElement).style.background = "rgba(201,168,76,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#e2d5f5";
                  (e.target as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:08074101786"
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                background: "linear-gradient(135deg, #c9a84c, #f0d080)",
                color: "#1a0a2e", padding: "9px 18px", borderRadius: "6px",
                textDecoration: "none", fontWeight: "700",
                fontSize: "12px", letterSpacing: "0.5px",
                marginLeft: "8px", transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget).style.opacity = "0.9"; }}
              onMouseLeave={(e) => { (e.currentTarget).style.opacity = "1"; }}
            >
              <Phone size={13} />
              <span className="font-cinzel">Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "#c9a84c", cursor: "pointer", padding: "8px" }}
            className="show-mobile"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: "rgba(26, 10, 46, 0.98)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          padding: "16px 24px 24px",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-cinzel"
              style={{
                display: "block", color: "#e2d5f5", textDecoration: "none",
                padding: "12px 0", fontSize: "12px", letterSpacing: "2px",
                borderBottom: "1px solid rgba(201,168,76,0.1)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:08074101786"
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              marginTop: "16px", background: "linear-gradient(135deg, #c9a84c, #f0d080)",
              color: "#1a0a2e", padding: "12px 20px", borderRadius: "6px",
              textDecoration: "none", fontWeight: "700", fontSize: "13px", justifyContent: "center",
            }}
          >
            <Phone size={15} />
            <span className="font-cinzel">0807 410 1786</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
      `}</style>
    </nav>
  );
}
