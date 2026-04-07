"use client";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      background: "#0d0520",
      borderTop: "1px solid rgba(201,168,76,0.2)",
      padding: "64px 24px 32px",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Main footer grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px",
          marginBottom: "56px",
        }}>

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                background: "linear-gradient(135deg, #c9a84c, #f0d080)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px",
                boxShadow: "0 0 20px rgba(201,168,76,0.3)",
              }}>
                👑
              </div>
              <div>
                <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "14px", fontWeight: "700", letterSpacing: "2px" }}>
                  IMPERIAL KITCHEN
                </div>
                <div className="font-cormorant" style={{ color: "rgba(253,248,240,0.5)", fontSize: "11px", letterSpacing: "1.5px" }}>
                  & RESTAURANT
                </div>
              </div>
            </div>
            <p className="font-cormorant" style={{ color: "rgba(240,208,128,0.7)", fontSize: "17px", fontStyle: "italic", lineHeight: "1.7", marginBottom: "20px" }}>
              &ldquo;Where Every Meal is Royally Prepared&rdquo;
            </p>
            <p style={{ color: "rgba(253,248,240,0.5)", fontSize: "13px", lineHeight: "1.8", marginBottom: "20px" }}>
              Papa Ashafa&apos;s premier restaurant and catering service. 
              Authentic Nigerian cuisine and continental favorites, fresh daily.
            </p>
            <div style={{ display: "flex", gap: "6px" }}>
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={14} fill="#c9a84c" color="#c9a84c" />
              ))}
              <span style={{ color: "#c9a84c", fontSize: "12px", marginLeft: "6px" }}>Perfect 5.0</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "3px", marginBottom: "20px" }}>
              QUICK LINKS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Menu", href: "#menu" },
                { label: "Services", href: "#services" },
                { label: "Catering", href: "#catering" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "rgba(253,248,240,0.55)",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    display: "flex", alignItems: "center", gap: "6px",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "#c9a84c"; }}
                  onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "rgba(253,248,240,0.55)"; }}
                >
                  <span style={{ color: "rgba(201,168,76,0.4)", fontSize: "10px" }}>✦</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "3px", marginBottom: "20px" }}>
              OUR SERVICES
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Restaurant Dining",
                "Professional Catering",
                "Wedding Catering",
                "Birthday Parties",
                "Corporate Events",
                "Small Chops",
                "Takeaway Orders",
                "Event Planning",
              ].map((s) => (
                <div key={s} style={{
                  color: "rgba(253,248,240,0.55)",
                  fontSize: "13px",
                  display: "flex", alignItems: "center", gap: "6px",
                }}>
                  <span style={{ color: "rgba(201,168,76,0.4)", fontSize: "10px" }}>✦</span>
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "3px", marginBottom: "20px" }}>
              CONTACT US
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a href="tel:08074101786" style={{ display: "flex", alignItems: "flex-start", gap: "10px", textDecoration: "none" }}>
                <Phone size={14} color="#c9a84c" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "rgba(253,248,240,0.7)", fontSize: "13px", lineHeight: "1.5" }}>
                  0807 410 1786
                </span>
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={14} color="#c9a84c" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "rgba(253,248,240,0.7)", fontSize: "13px", lineHeight: "1.5" }}>
                  30 Suraogumakin Street, Papa Ashafa, Lagos 102212
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Clock size={14} color="#c9a84c" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <div style={{ color: "rgba(253,248,240,0.7)", fontSize: "13px" }}>Open Daily</div>
                  <div style={{ color: "#c9a84c", fontSize: "13px", fontWeight: "600" }}>Until 8:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)", marginBottom: "28px" }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ color: "rgba(253,248,240,0.35)", fontSize: "12px" }}>
            © {new Date().getFullYear()} Imperial Kitchen and Restaurant. All rights reserved.
          </div>
          <div className="font-cinzel" style={{ color: "rgba(201,168,76,0.5)", fontSize: "9px", letterSpacing: "3px" }}>
            ✦ IMPERIAL QUALITY · NIGERIAN FLAVORS · LAGOS ✦
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
