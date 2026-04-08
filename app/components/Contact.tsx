"use client";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--cream)", padding: "80px 20px" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>✦ REACH US ✦</p>
          <h2 className="pf" style={{ fontSize: "clamp(28px,6vw,50px)", fontWeight: 900, color: "#0f0a1a", lineHeight: 1.1 }}>
            Visit Imperial Kitchen
          </h2>
        </div>

        <div className="contact-grid">
          {/* Left col */}
          <div>
            {/* Big photo */}
            <div style={{
              height: "clamp(180px,40vw,240px)", borderRadius: 12, overflow: "hidden", marginBottom: 24,
              backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=80&fit=crop')",
              backgroundSize: "cover", backgroundPosition: "center",
              boxShadow: "0 12px 40px rgba(15,10,26,.14)",
            }} />

            {/* Info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Call */}
              <a href="tel:08074101786" style={{
                display: "flex", alignItems: "center", gap: 16,
                background: "#0f0a1a", borderRadius: 10, padding: "18px 22px",
                textDecoration: "none", transition: "transform .2s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateX(4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
              >
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#c8a96e,#e8c98a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={18} color="#0f0a1a" />
                </div>
                <div>
                  <div className="cin" style={{ color: "rgba(200,169,110,.65)", fontSize: 8, letterSpacing: "2.5px", marginBottom: 3 }}>CALL US NOW</div>
                  <div className="pf" style={{ color: "#faf6f0", fontSize: "clamp(17px,4vw,21px)", fontWeight: 700 }}>0807 410 1786</div>
                  <div style={{ color: "rgba(250,246,240,.4)", fontSize: 11 }}>Reservations, orders & catering</div>
                </div>
              </a>

              {/* Address */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "white", borderRadius: 10, padding: "16px 20px", border: "1px solid rgba(90,74,56,.1)" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--gold-pale)", border: "1px solid rgba(200,169,110,.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={16} color="#c8a96e" />
                </div>
                <div>
                  <div className="cin" style={{ color: "#8a7a65", fontSize: 8, letterSpacing: "2px", marginBottom: 3 }}>LOCATION</div>
                  <div style={{ color: "#0f0a1a", fontSize: 14, fontWeight: 600 }}>30 Suraogumakin Street</div>
                  <div style={{ color: "#8a7a65", fontSize: 12 }}>Papa Ashafa, Lagos 102212</div>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, background: "white", borderRadius: 10, padding: "16px 20px", border: "1px solid rgba(90,74,56,.1)" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--gold-pale)", border: "1px solid rgba(200,169,110,.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Clock size={16} color="#c8a96e" />
                </div>
                <div>
                  <div className="cin" style={{ color: "#8a7a65", fontSize: 8, letterSpacing: "2px", marginBottom: 3 }}>HOURS</div>
                  <div style={{ color: "#0f0a1a", fontSize: 14, fontWeight: 600 }}>Monday – Sunday</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", animation: "blink 2s infinite", flexShrink: 0 }} />
                    <span style={{ color: "#22c55e", fontSize: 12, fontWeight: 600 }}>Open · Closes 8:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, background: "linear-gradient(135deg,#0f0a1a,#1a1128)", borderRadius: 10, padding: "16px 20px", border: "1px solid rgba(200,169,110,.18)" }}>
                <div style={{ textAlign: "center", flexShrink: 0 }}>
                  <div className="pf" style={{ color: "#c8a96e", fontSize: 26, fontWeight: 800, lineHeight: 1 }}>5.0</div>
                  <div style={{ display: "flex", gap: 2, marginTop: 3 }}>
                    {[1,2,3,4,5].map(i => <Star key={i} size={9} fill="#c8a96e" color="#c8a96e" />)}
                  </div>
                </div>
                <div>
                  <div className="cin" style={{ color: "#c8a96e", fontSize: 8, letterSpacing: "2px", marginBottom: 3 }}>PERFECT RATING</div>
                  <div style={{ color: "rgba(250,246,240,.55)", fontSize: 12, lineHeight: 1.5 }}>100% satisfaction — trusted by Lagos families & businesses</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right col — form */}
          <div style={{ background: "white", borderRadius: 14, padding: "clamp(24px,5vw,36px)", border: "1px solid rgba(90,74,56,.1)", boxShadow: "0 8px 40px rgba(15,10,26,.07)" }}>
            <h3 className="pf" style={{ color: "#0f0a1a", fontSize: "clamp(20px,4vw,24px)", fontWeight: 700, marginBottom: 6 }}>Send Us a Message</h3>
            <p style={{ color: "#8a7a65", fontSize: 13, marginBottom: 28 }}>Catering quotes, reservations, or any inquiry — we respond quickly.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {l:"FULL NAME", t:"text", p:"Your full name"},
                {l:"PHONE NUMBER", t:"tel", p:"Your phone number"},
                {l:"EMAIL ADDRESS", t:"email", p:"Your email address"},
              ].map(f => (
                <div key={f.l}>
                  <label className="cin" style={{ display: "block", color: "#8a7a65", fontSize: 8, letterSpacing: "2px", marginBottom: 6 }}>{f.l}</label>
                  <input type={f.t} placeholder={f.p} style={{
                    width: "100%", padding: "11px 14px", border: "1px solid rgba(90,74,56,.18)",
                    borderRadius: 7, fontSize: 14, color: "#0f0a1a", outline: "none", background: "#faf6f0",
                    transition: "border-color .2s",
                  }}
                    onFocus={e => e.target.style.borderColor = "#c8a96e"}
                    onBlur={e => e.target.style.borderColor = "rgba(90,74,56,.18)"}
                  />
                </div>
              ))}

              <div>
                <label className="cin" style={{ display: "block", color: "#8a7a65", fontSize: 8, letterSpacing: "2px", marginBottom: 6 }}>INQUIRY TYPE</label>
                <select style={{ width: "100%", padding: "11px 14px", border: "1px solid rgba(90,74,56,.18)", borderRadius: 7, fontSize: 14, color: "#0f0a1a", outline: "none", background: "#faf6f0", cursor: "pointer" }}>
                  <option>Restaurant Reservation</option>
                  <option>Wedding Catering</option>
                  <option>Birthday Party</option>
                  <option>Corporate Catering</option>
                  <option>Small Chops</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="cin" style={{ display: "block", color: "#8a7a65", fontSize: 8, letterSpacing: "2px", marginBottom: 6 }}>MESSAGE</label>
                <textarea rows={4} placeholder="Event date, number of guests, special requests..." style={{
                  width: "100%", padding: "11px 14px", border: "1px solid rgba(90,74,56,.18)",
                  borderRadius: 7, fontSize: 14, color: "#0f0a1a", outline: "none", background: "#faf6f0",
                  resize: "vertical", fontFamily: "Inter, sans-serif", transition: "border-color .2s",
                }}
                  onFocus={e => e.target.style.borderColor = "#c8a96e"}
                  onBlur={e => e.target.style.borderColor = "rgba(90,74,56,.18)"}
                />
              </div>

              <button className="cin" style={{
                width: "100%", background: "linear-gradient(135deg,#0f0a1a,#1a1128)", color: "#c8a96e",
                padding: 14, border: "none", borderRadius: 7, fontWeight: 700, fontSize: 10, letterSpacing: "2.5px",
                transition: "opacity .2s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >SEND MESSAGE 👑</button>

              <p style={{ color: "#8a7a65", fontSize: 12, textAlign: "center" }}>
                Or call: <a href="tel:08074101786" style={{ color: "#8b4513", fontWeight: 700 }}>0807 410 1786</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid { display:grid; grid-template-columns:1fr; gap:24px; }
        @media(min-width:768px){ .contact-grid { grid-template-columns:1fr 1fr; gap:40px; } }
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.4}}
      `}</style>
    </section>
  );
}
