"use client";
import { Star } from "lucide-react";

const stats = [
  { value: "5.0★", label: "Perfect Rating", sub: "100% Satisfaction" },
  { value: "2+", label: "Services Offered", sub: "Restaurant & Catering" },
  { value: "8:30", label: "PM Closing Time", sub: "Open Every Day" },
  { value: "100%", label: "Fresh Ingredients", sub: "Daily Preparation" },
];

export default function TrustBand() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%)",
      borderTop: "1px solid rgba(201,168,76,0.2)",
      borderBottom: "1px solid rgba(201,168,76,0.2)",
      padding: "64px 24px",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Stars row */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={28} fill="#c9a84c" color="#c9a84c" style={{ filter: "drop-shadow(0 0 6px rgba(201,168,76,0.6))" }} />
            ))}
          </div>
          <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "13px", letterSpacing: "4px", marginBottom: "8px" }}>
            PERFECT 5.0 RATING
          </div>
          <div className="font-cormorant" style={{ color: "rgba(253,248,240,0.7)", fontSize: "20px", fontStyle: "italic" }}>
            Imperial Quality — Guaranteed
          </div>
        </div>

        {/* Stats grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
        }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "32px 20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "4px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner accents */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "20px", height: "20px", borderTop: "2px solid rgba(201,168,76,0.5)", borderLeft: "2px solid rgba(201,168,76,0.5)" }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "20px", height: "20px", borderBottom: "2px solid rgba(201,168,76,0.5)", borderRight: "2px solid rgba(201,168,76,0.5)" }} />

              <div className="font-cinzel gold-shimmer" style={{ fontSize: "40px", fontWeight: "900", lineHeight: "1", marginBottom: "8px" }}>
                {stat.value}
              </div>
              <div className="font-cinzel" style={{ color: "#fdf8f0", fontSize: "11px", letterSpacing: "2px", marginBottom: "4px" }}>
                {stat.label}
              </div>
              <div style={{ color: "rgba(201,168,76,0.7)", fontSize: "12px" }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginTop: "48px" }}>
          {["Perfect 5.0★ Rating", "Established & Trusted", "Professional Catering", "Fresh Ingredients Daily", "Imperial Quality"].map((badge) => (
            <div
              key={badge}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "50px", padding: "8px 20px",
                color: "#c9a84c", fontSize: "12px", letterSpacing: "0.5px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
