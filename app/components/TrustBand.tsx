"use client";
import { Star } from "lucide-react";

const stats = [
  { emoji: "⭐", val: "5.0★", label: "Perfect Rating", sub: "100% satisfaction" },
  { emoji: "🍛", val: "Daily", label: "Fresh Ingredients", sub: "Sourced every morning" },
  { emoji: "🎉", val: "All", label: "Occasions", sub: "From 10 to 1,000+ guests" },
  { emoji: "⏰", val: "8:30PM", label: "Last Order", sub: "Open every single day" },
];

export default function TrustBand() {
  return (
    <section style={{ background: "#0f0a1a", padding: "56px 20px", borderBottom: "1px solid rgba(200,169,110,.12)" }}>
      <div className="wrap">
        {/* Stars row */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 10 }}>
            {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#c8a96e" color="#c8a96e" />)}
          </div>
          <p className="pf" style={{ color: "rgba(232,201,138,.8)", fontSize: "clamp(15px,3vw,19px)", fontStyle: "italic" }}>
            &ldquo;Imperial quality — guaranteed in every meal we serve&rdquo;
          </p>
        </div>

        {/* Stats grid — 2 cols mobile, 4 cols desktop */}
        <div className="trust-grid" style={{
          display: "grid",
          gap: 1,
          background: "rgba(200,169,110,.1)",
          border: "1px solid rgba(200,169,110,.12)",
          borderRadius: 12,
          overflow: "hidden",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: "#0f0a1a", padding: "28px 20px", textAlign: "center",
            }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{s.emoji}</div>
              <div className="pf" style={{ color: "#c8a96e", fontSize: "clamp(18px,4vw,24px)", fontWeight: 700, lineHeight: 1, marginBottom: 5 }}>{s.val}</div>
              <div className="cin" style={{ color: "#faf6f0", fontSize: 10, letterSpacing: "1px", marginBottom: 3 }}>{s.label}</div>
              <div style={{ color: "rgba(250,246,240,.4)", fontSize: 11 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-grid { grid-template-columns: repeat(2, 1fr); }
        @media(min-width:640px){ .trust-grid { grid-template-columns: repeat(4,1fr); } }
      `}</style>
    </section>
  );
}