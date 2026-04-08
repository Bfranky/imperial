"use client";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#080512", borderTop: "1px solid rgba(200,169,110,.12)" }}>
      {/* CTA banner */}
      <div style={{
        background: "linear-gradient(135deg,#c8a96e 0%,#e8c98a 50%,#c8a96e 100%)",
        padding: "44px 20px", textAlign: "center",
      }}>
        <h3 className="pf" style={{ color: "#0f0a1a", fontSize: "clamp(20px,5vw,34px)", fontWeight: 900, marginBottom: 8 }}>
          Ready to Order or Book Catering?
        </h3>
        <p style={{ color: "rgba(15,10,26,.6)", fontSize: "clamp(13px,2.5vw,15px)", marginBottom: 22 }}>
          Call us now — open daily until 8:30 PM
        </p>
        <a href="tel:08074101786" className="cin" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#0f0a1a", color: "#c8a96e",
          padding: "13px 32px", borderRadius: 4, fontWeight: 700,
          fontSize: "clamp(11px,2.5vw,13px)", letterSpacing: "1.5px",
          boxShadow: "0 8px 24px rgba(15,10,26,.25)",
        }}>📞 0807 410 1786</a>
      </div>

      {/* Main footer */}
      <div className="wrap" style={{ padding: "52px 20px 32px" }}>
        <div className="foot-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#c8a96e,#e8c98a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>👑</div>
              <div>
                <div className="cin" style={{ color: "#c8a96e", fontSize: 11, fontWeight: 700, letterSpacing: "2px" }}>IMPERIAL KITCHEN</div>
                <div className="pf" style={{ color: "rgba(250,246,240,.4)", fontSize: 10, fontStyle: "italic" }}>& Restaurant</div>
              </div>
            </div>
            <p className="pf" style={{ color: "rgba(232,201,138,.6)", fontSize: "clamp(13px,2.5vw,15px)", fontStyle: "italic", lineHeight: 1.7, marginBottom: 14 }}>
              &ldquo;Where Every Meal is Royally Prepared&rdquo;
            </p>
            <div style={{ display: "flex", gap: 3 }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#c8a96e" color="#c8a96e" />)}
              <span style={{ color: "#c8a96e", fontSize: 11, marginLeft: 5 }}>5.0 Perfect</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="cin" style={{ color: "#c8a96e", fontSize: 8, letterSpacing: "3px", marginBottom: 18 }}>NAVIGATION</div>
            {[["Home","#home"],["About","#about"],["Menu","#menu"],["Services","#services"],["Catering","#catering"],["Contact","#contact"]].map(([l,h]) => (
              <a key={l} href={h} style={{ display: "block", color: "rgba(250,246,240,.4)", fontSize: 13, padding: "5px 0", transition: "color .2s" }}
                onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = "#c8a96e"}
                onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = "rgba(250,246,240,.4)"}
              >{l}</a>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="cin" style={{ color: "#c8a96e", fontSize: 8, letterSpacing: "3px", marginBottom: 18 }}>SERVICES</div>
            {["Restaurant Dining","Wedding Catering","Birthday Parties","Corporate Events","Small Chops","Takeaway"].map(s => (
              <div key={s} style={{ color: "rgba(250,246,240,.4)", fontSize: 13, padding: "5px 0" }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="cin" style={{ color: "#c8a96e", fontSize: 8, letterSpacing: "3px", marginBottom: 18 }}>CONTACT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="tel:08074101786" style={{ display: "flex", gap: 8, color: "rgba(250,246,240,.5)", fontSize: 13, alignItems: "flex-start" }}>
                <Phone size={12} color="#c8a96e" style={{ marginTop: 2, flexShrink: 0 }} />0807 410 1786
              </a>
              <div style={{ display: "flex", gap: 8, color: "rgba(250,246,240,.5)", fontSize: 13, alignItems: "flex-start" }}>
                <MapPin size={12} color="#c8a96e" style={{ marginTop: 2, flexShrink: 0 }} />
                <span>30 Suraogumakin St,<br />Papa Ashafa, Lagos</span>
              </div>
              <div style={{ display: "flex", gap: 8, color: "rgba(250,246,240,.5)", fontSize: 13, alignItems: "flex-start" }}>
                <Clock size={12} color="#c8a96e" style={{ marginTop: 2, flexShrink: 0 }} />Daily · Until 8:30 PM
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(200,169,110,.18),transparent)", margin: "36px 0 20px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <div style={{ color: "rgba(250,246,240,.22)", fontSize: 11 }}>© {new Date().getFullYear()} Imperial Kitchen and Restaurant. All rights reserved.</div>
          <div className="cin" style={{ color: "rgba(200,169,110,.28)", fontSize: 8, letterSpacing: "2.5px" }}>✦ IMPERIAL QUALITY · LAGOS ✦</div>
        </div>
      </div>

      <style>{`
        .foot-grid { display:grid; grid-template-columns:1fr 1fr; gap:32px; }
        @media(min-width:768px){ .foot-grid { grid-template-columns:1.6fr 1fr 1fr 1.2fr; gap:40px; } }
      `}</style>
    </footer>
  );
}
