"use client";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--imperial-cream)", padding: "96px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "5px", marginBottom: "16px" }}>
            ✦ FIND US ✦
          </div>
          <h2 className="font-cinzel" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: "800", color: "#1a0a2e", lineHeight: "1.15", marginBottom: "20px" }}>
            Visit Imperial Kitchen
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <span style={{ color: "#c9a84c", fontSize: "18px" }}>👑</span>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>

          {/* Left: Contact info */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>

              {/* Phone */}
              <a
                href="tel:08074101786"
                style={{
                  display: "flex", alignItems: "center", gap: "20px",
                  background: "white",
                  border: "1px solid rgba(26,10,46,0.1)",
                  borderRadius: "10px", padding: "24px",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  boxShadow: "0 2px 15px rgba(26,10,46,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(26,10,46,0.12)";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 15px rgba(26,10,46,0.05)";
                  e.currentTarget.style.borderColor = "rgba(26,10,46,0.1)";
                }}
              >
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #1a0a2e, #2d1b4e)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Phone size={22} color="#c9a84c" />
                </div>
                <div>
                  <div className="font-cinzel" style={{ color: "#6b5a80", fontSize: "9px", letterSpacing: "3px", marginBottom: "4px" }}>CALL US</div>
                  <div className="font-cinzel" style={{ color: "#1a0a2e", fontSize: "22px", fontWeight: "700" }}>0807 410 1786</div>
                  <div style={{ color: "#6b5a80", fontSize: "12px", marginTop: "2px" }}>
                    For reservations, catering & inquiries
                  </div>
                </div>
              </a>

              {/* Address */}
              <div style={{
                display: "flex", alignItems: "flex-start", gap: "20px",
                background: "white",
                border: "1px solid rgba(26,10,46,0.1)",
                borderRadius: "10px", padding: "24px",
                boxShadow: "0 2px 15px rgba(26,10,46,0.05)",
              }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #8b0000, #dc2626)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <MapPin size={22} color="#fdf8f0" />
                </div>
                <div>
                  <div className="font-cinzel" style={{ color: "#6b5a80", fontSize: "9px", letterSpacing: "3px", marginBottom: "4px" }}>OUR LOCATION</div>
                  <div style={{ color: "#1a0a2e", fontSize: "16px", fontWeight: "700", marginBottom: "2px" }}>
                    30 Suraogumakin Street
                  </div>
                  <div style={{ color: "#4a3060", fontSize: "14px" }}>Papa Ashafa, Lagos 102212</div>
                  <div style={{ color: "#6b5a80", fontSize: "12px", marginTop: "4px" }}>Location Code: J8C5+J6 Lagos</div>
                </div>
              </div>

              {/* Hours */}
              <div style={{
                display: "flex", alignItems: "flex-start", gap: "20px",
                background: "white",
                border: "1px solid rgba(26,10,46,0.1)",
                borderRadius: "10px", padding: "24px",
                boxShadow: "0 2px 15px rgba(26,10,46,0.05)",
              }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #6b21a8, #9333ea)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Clock size={22} color="#fdf8f0" />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="font-cinzel" style={{ color: "#6b5a80", fontSize: "9px", letterSpacing: "3px", marginBottom: "8px" }}>OPENING HOURS</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#1a0a2e", fontSize: "15px", fontWeight: "600" }}>Mon — Sun</span>
                    <span style={{ color: "#6b21a8", fontSize: "14px", fontWeight: "700" }}>Until 8:30 PM</span>
                  </div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    marginTop: "8px",
                    background: "rgba(107,33,168,0.08)",
                    borderRadius: "50px", padding: "4px 12px",
                  }}>
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
                    <span style={{ color: "#22c55e", fontSize: "12px", fontWeight: "600" }}>Open Now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating callout */}
            <div style={{
              background: "linear-gradient(135deg, #1a0a2e, #2d1b4e)",
              borderRadius: "10px",
              padding: "28px",
              display: "flex", alignItems: "center", gap: "20px",
              border: "1px solid rgba(201,168,76,0.2)",
            }}>
              <div style={{ textAlign: "center" }}>
                <div className="font-cinzel gold-shimmer" style={{ fontSize: "36px", fontWeight: "900", lineHeight: "1" }}>5.0</div>
                <div style={{ display: "flex", gap: "3px", justifyContent: "center", marginTop: "4px" }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#c9a84c" color="#c9a84c" />)}
                </div>
              </div>
              <div>
                <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "12px", letterSpacing: "1.5px", marginBottom: "4px" }}>PERFECT RATING</div>
                <div style={{ color: "rgba(253,248,240,0.7)", fontSize: "13px", lineHeight: "1.5" }}>
                  100% customer satisfaction. Trusted by Lagos families and businesses for memorable dining experiences.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Inquiry form */}
          <div style={{
            background: "white",
            borderRadius: "12px",
            padding: "40px",
            boxShadow: "0 4px 40px rgba(26,10,46,0.08)",
            border: "1px solid rgba(201,168,76,0.15)",
          }}>
            <div style={{ marginBottom: "28px" }}>
              <h3 className="font-cinzel" style={{ color: "#1a0a2e", fontSize: "20px", fontWeight: "700", marginBottom: "6px" }}>
                Send Us a Message
              </h3>
              <p style={{ color: "#6b5a80", fontSize: "13px" }}>
                For catering quotes, reservations, or any inquiry — we&apos;ll respond promptly!
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Full Name", type: "text", placeholder: "Your name" },
                { label: "Phone Number", type: "tel", placeholder: "Your phone number" },
                { label: "Email Address", type: "email", placeholder: "Your email address" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="font-cinzel" style={{ display: "block", color: "#2d1b4e", fontSize: "9px", letterSpacing: "2px", marginBottom: "6px" }}>
                    {field.label.toUpperCase()}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: "100%", padding: "12px 16px",
                      border: "1px solid rgba(26,10,46,0.15)",
                      borderRadius: "6px", fontSize: "14px",
                      color: "#1a0a2e", outline: "none",
                      background: "#fdf8f0",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "#c9a84c"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(26,10,46,0.15)"; }}
                  />
                </div>
              ))}

              <div>
                <label className="font-cinzel" style={{ display: "block", color: "#2d1b4e", fontSize: "9px", letterSpacing: "2px", marginBottom: "6px" }}>
                  INQUIRY TYPE
                </label>
                <select
                  style={{
                    width: "100%", padding: "12px 16px",
                    border: "1px solid rgba(26,10,46,0.15)",
                    borderRadius: "6px", fontSize: "14px",
                    color: "#1a0a2e", outline: "none",
                    background: "#fdf8f0",
                    cursor: "pointer",
                  }}
                >
                  <option>Restaurant Reservation</option>
                  <option>Wedding Catering</option>
                  <option>Birthday Party Catering</option>
                  <option>Corporate Catering</option>
                  <option>Small Chops Order</option>
                  <option>Other Catering</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="font-cinzel" style={{ display: "block", color: "#2d1b4e", fontSize: "9px", letterSpacing: "2px", marginBottom: "6px" }}>
                  MESSAGE
                </label>
                <textarea
                  placeholder="Tell us about your event, number of guests, date, preferences..."
                  rows={4}
                  style={{
                    width: "100%", padding: "12px 16px",
                    border: "1px solid rgba(26,10,46,0.15)",
                    borderRadius: "6px", fontSize: "14px",
                    color: "#1a0a2e", outline: "none",
                    background: "#fdf8f0",
                    resize: "vertical",
                    fontFamily: "Lato, sans-serif",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "#c9a84c"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(26,10,46,0.15)"; }}
                />
              </div>

              <button
                className="font-cinzel"
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #1a0a2e, #2d1b4e)",
                  color: "#c9a84c", padding: "14px",
                  border: "none", borderRadius: "6px",
                  fontWeight: "700", fontSize: "12px", letterSpacing: "2px",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                SEND MESSAGE 👑
              </button>

              <p style={{ color: "#6b5a80", fontSize: "11px", textAlign: "center" }}>
                Or call us directly: <a href="tel:08074101786" style={{ color: "#6b21a8", fontWeight: "700" }}>0807 410 1786</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
