"use client";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--cream)", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="eyebrow" style={{ marginBottom: "14px" }}>✦ REACH US ✦</p>
          <h2 className="font-playfair" style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: "800", color: "#0f0a1a", lineHeight: "1.12" }}>
            Visit Imperial Kitchen
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>

          {/* Left: info + image */}
          <div>
            {/* Hero contact image */}
            <div style={{
              height: "240px", borderRadius: "12px", overflow: "hidden",
              backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=80&fit=crop')",
              backgroundSize: "cover", backgroundPosition: "center",
              marginBottom: "32px",
              boxShadow: "0 12px 48px rgba(15,10,26,0.15)",
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a href="tel:08074101786" style={{
                display: "flex", alignItems: "center", gap: "18px",
                background: "#0f0a1a", borderRadius: "10px", padding: "20px 24px",
                textDecoration: "none", transition: "transform 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateX(4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #c8a96e, #e8c98a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={20} color="#0f0a1a" />
                </div>
                <div>
                  <div className="font-cinzel" style={{ color: "rgba(200,169,110,0.7)", fontSize: "9px", letterSpacing: "2.5px", marginBottom: "4px" }}>CALL US NOW</div>
                  <div className="font-playfair" style={{ color: "#faf6f0", fontSize: "22px", fontWeight: "700" }}>0807 410 1786</div>
                  <div style={{ color: "rgba(250,246,240,0.45)", fontSize: "12px" }}>For reservations, orders & catering</div>
                </div>
              </a>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "18px", background: "white", borderRadius: "10px", padding: "20px 24px", border: "1px solid rgba(90,74,56,0.1)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#faf6f0", border: "1px solid rgba(200,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={20} color="#c8a96e" />
                </div>
                <div>
                  <div className="font-cinzel" style={{ color: "#8a7a65", fontSize: "9px", letterSpacing: "2.5px", marginBottom: "4px" }}>OUR LOCATION</div>
                  <div style={{ color: "#0f0a1a", fontSize: "16px", fontWeight: "600" }}>30 Suraogumakin Street</div>
                  <div style={{ color: "#8a7a65", fontSize: "13px" }}>Papa Ashafa, Lagos 102212</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "18px", background: "white", borderRadius: "10px", padding: "20px 24px", border: "1px solid rgba(90,74,56,0.1)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#faf6f0", border: "1px solid rgba(200,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Clock size={20} color="#c8a96e" />
                </div>
                <div>
                  <div className="font-cinzel" style={{ color: "#8a7a65", fontSize: "9px", letterSpacing: "2.5px", marginBottom: "4px" }}>HOURS</div>
                  <div style={{ color: "#0f0a1a", fontSize: "16px", fontWeight: "600" }}>Monday – Sunday</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "3px" }}>
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", animation: "blink 2s infinite" }} />
                    <span style={{ color: "#22c55e", fontSize: "13px", fontWeight: "600" }}>Open · Closes 8:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Rating card */}
              <div style={{ display: "flex", alignItems: "center", gap: "18px", background: "linear-gradient(135deg, #0f0a1a, #1c1228)", borderRadius: "10px", padding: "20px 24px", border: "1px solid rgba(200,169,110,0.2)" }}>
                <div style={{ textAlign: "center" }}>
                  <div className="font-playfair" style={{ color: "#c8a96e", fontSize: "30px", fontWeight: "800", lineHeight: "1" }}>5.0</div>
                  <div style={{ display: "flex", gap: "2px", marginTop: "4px" }}>
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="#c8a96e" color="#c8a96e" />)}
                  </div>
                </div>
                <div>
                  <div className="font-cinzel" style={{ color: "#c8a96e", fontSize: "10px", letterSpacing: "2px", marginBottom: "4px" }}>PERFECT RATING</div>
                  <div style={{ color: "rgba(250,246,240,0.6)", fontSize: "13px", lineHeight: "1.5" }}>100% satisfaction — trusted by Lagos families &amp; businesses</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div style={{ background: "white", borderRadius: "14px", padding: "40px", border: "1px solid rgba(90,74,56,0.1)", boxShadow: "0 8px 48px rgba(15,10,26,0.07)" }}>
            <h3 className="font-playfair" style={{ color: "#0f0a1a", fontSize: "24px", fontWeight: "700", marginBottom: "6px" }}>
              Send Us a Message
            </h3>
            <p style={{ color: "#8a7a65", fontSize: "13px", marginBottom: "32px" }}>
              Catering quotes, reservations, or any inquiry — we respond quickly.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "FULL NAME", type: "text", placeholder: "Your full name" },
                { label: "PHONE NUMBER", type: "tel", placeholder: "Your phone number" },
                { label: "EMAIL ADDRESS", type: "email", placeholder: "Your email address" },
              ].map(f => (
                <div key={f.label}>
                  <label className="font-cinzel" style={{ display: "block", color: "#8a7a65", fontSize: "9px", letterSpacing: "2px", marginBottom: "7px" }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{
                    width: "100%", padding: "12px 16px",
                    border: "1px solid rgba(90,74,56,0.2)", borderRadius: "7px",
                    fontSize: "14px", color: "#0f0a1a", outline: "none", background: "#faf6f0",
                    transition: "border-color 0.2s",
                  }}
                    onFocus={e => e.target.style.borderColor = "#c8a96e"}
                    onBlur={e => e.target.style.borderColor = "rgba(90,74,56,0.2)"}
                  />
                </div>
              ))}

              <div>
                <label className="font-cinzel" style={{ display: "block", color: "#8a7a65", fontSize: "9px", letterSpacing: "2px", marginBottom: "7px" }}>INQUIRY TYPE</label>
                <select style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(90,74,56,0.2)", borderRadius: "7px", fontSize: "14px", color: "#0f0a1a", outline: "none", background: "#faf6f0", cursor: "pointer" }}>
                  <option>Restaurant Reservation</option>
                  <option>Wedding Catering</option>
                  <option>Birthday Party Catering</option>
                  <option>Corporate Catering</option>
                  <option>Small Chops Order</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="font-cinzel" style={{ display: "block", color: "#8a7a65", fontSize: "9px", letterSpacing: "2px", marginBottom: "7px" }}>MESSAGE</label>
                <textarea rows={4} placeholder="Tell us about your event, number of guests, date, and any preferences..." style={{
                  width: "100%", padding: "12px 16px",
                  border: "1px solid rgba(90,74,56,0.2)", borderRadius: "7px",
                  fontSize: "14px", color: "#0f0a1a", outline: "none", background: "#faf6f0",
                  resize: "vertical", fontFamily: "Inter, sans-serif",
                  transition: "border-color 0.2s",
                }}
                  onFocus={e => e.target.style.borderColor = "#c8a96e"}
                  onBlur={e => e.target.style.borderColor = "rgba(90,74,56,0.2)"}
                />
              </div>

              <button className="font-cinzel" style={{
                width: "100%", background: "linear-gradient(135deg, #0f0a1a, #1c1228)",
                color: "#c8a96e", padding: "15px", border: "none",
                borderRadius: "7px", fontWeight: "700", fontSize: "11px",
                letterSpacing: "2.5px", cursor: "pointer", transition: "opacity 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                SEND MESSAGE 👑
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.4}}
      `}</style>
    </section>
  );
}
