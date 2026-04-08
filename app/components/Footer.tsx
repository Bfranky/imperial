"use client";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#080512", borderTop: "1px solid rgba(200,169,110,0.15)" }}>
      {/* Top CTA banner */}
      <div style={{
        background: "linear-gradient(135deg, #c8a96e 0%, #e8c98a 50%, #c8a96e 100%)",
        padding: "48px 24px", textAlign: "center",
      }}>
        <h3 className="font-playfair" style={{ color: "#0f0a1a", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: "800", marginBottom: "8px" }}>
          Ready to Order or Book Catering?
        </h3>
        <p style={{ color: "rgba(15,10,26,0.65)", fontSize: "15px", marginBottom: "24px" }}>
          Call us now — we&apos;re open daily until 8:30 PM
        </p>
        <a href="tel:08074101786" className="font-cinzel" style={{
          background: "#0f0a1a", color: "#c8a96e",
          padding: "14px 40px", borderRadius: "4px",
          textDecoration: "none", fontWeight: "700", fontSize: "13px", letterSpacing: "2px",
          boxShadow: "0 8px 24px rgba(15,10,26,0.25)",
          display: "inline-flex", alignItems: "center", gap: "10px",
        }}>
          📞 0807 410 1786
        </a>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.2fr", gap: "48px", marginBottom: "48px" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #c8a96e, #e8c98a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>👑</div>
              <div>
                <div className="font-cinzel" style={{ color: "#c8a96e", fontSize: "13px", fontWeight: "700", letterSpacing: "2px" }}>IMPERIAL KITCHEN</div>
                <div className="font-playfair" style={{ color: "rgba(250,246,240,0.4)", fontSize: "11px", fontStyle: "italic" }}>& Restaurant</div>
              </div>
            </div>
            <p className="font-playfair" style={{ color: "rgba(232,201,138,0.65)", fontSize: "16px", fontStyle: "italic", lineHeight: "1.7", marginBottom: "16px" }}>
              &ldquo;Where Every Meal is<br />Royally Prepared&rdquo;
            </p>
            <div style={{ display: "flex", gap: "4px" }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#c8a96e" color="#c8a96e" />)}
              <span style={{ color: "#c8a96e", fontSize: "12px", marginLeft: "6px" }}>5.0 Perfect</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="font-cinzel" style={{ color: "#c8a96e", fontSize: "9px", letterSpacing: "3px", marginBottom: "20px" }}>NAVIGATION</div>
            {["Home", "About Us", "Our Menu", "Services", "Catering", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "")}`} style={{ display: "block", color: "rgba(250,246,240,0.45)", fontSize: "13px", textDecoration: "none", padding: "6px 0", transition: "color 0.2s" }}
                onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = "#c8a96e"}
                onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = "rgba(250,246,240,0.45)"}
              >{l}</a>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="font-cinzel" style={{ color: "#c8a96e", fontSize: "9px", letterSpacing: "3px", marginBottom: "20px" }}>SERVICES</div>
            {["Restaurant Dining", "Wedding Catering", "Birthday Parties", "Corporate Events", "Small Chops", "Takeaway"].map(s => (
              <div key={s} style={{ color: "rgba(250,246,240,0.45)", fontSize: "13px", padding: "6px 0" }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="font-cinzel" style={{ color: "#c8a96e", fontSize: "9px", letterSpacing: "3px", marginBottom: "20px" }}>CONTACT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a href="tel:08074101786" style={{ display: "flex", gap: "10px", textDecoration: "none", color: "rgba(250,246,240,0.6)", fontSize: "13px", alignItems: "flex-start" }}>
                <Phone size={13} color="#c8a96e" style={{ marginTop: "2px", flexShrink: 0 }} />
                0807 410 1786
              </a>
              <div style={{ display: "flex", gap: "10px", color: "rgba(250,246,240,0.6)", fontSize: "13px", alignItems: "flex-start" }}>
                <MapPin size={13} color="#c8a96e" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>30 Suraogumakin Street,<br />Papa Ashafa, Lagos</span>
              </div>
              <div style={{ display: "flex", gap: "10px", color: "rgba(250,246,240,0.6)", fontSize: "13px", alignItems: "flex-start" }}>
                <Clock size={13} color="#c8a96e" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>Daily · Until 8:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.2), transparent)", marginBottom: "24px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ color: "rgba(250,246,240,0.25)", fontSize: "12px" }}>© {new Date().getFullYear()} Imperial Kitchen and Restaurant. All rights reserved.</div>
          <div className="font-cinzel" style={{ color: "rgba(200,169,110,0.35)", fontSize: "9px", letterSpacing: "3px" }}>✦ IMPERIAL QUALITY · NIGERIAN FLAVOURS · LAGOS ✦</div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){div[style*="grid-template-columns: 2fr 1fr 1fr 1.2fr"]{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:500px){div[style*="grid-template-columns: 2fr 1fr 1fr 1.2fr"]{grid-template-columns:1fr!important;}}
      `}</style>
    </footer>
  );
}
