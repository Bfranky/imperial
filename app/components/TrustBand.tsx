"use client";
import { Star } from "lucide-react";

export default function TrustBand() {
  return (
    <section style={{ background: "#0f0a1a", padding: "72px 24px", borderBottom: "1px solid rgba(200,169,110,0.15)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "rgba(200,169,110,0.1)", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(200,169,110,0.15)" }}>
          {[
            { emoji: "⭐", val: "5.0", label: "Perfect Rating", sub: "100% satisfaction" },
            { emoji: "🍛", val: "Daily", label: "Fresh Prep", sub: "Made every morning" },
            { emoji: "🎉", val: "All", label: "Occasions Catered", sub: "Big or small events" },
            { emoji: "⏰", val: "8:30PM", label: "Daily Close", sub: "Open every day" },
            { emoji: "📍", val: "Lagos", label: "Papa Ashafa", sub: "30 Suraogumakin St" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0f0a1a", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "26px", marginBottom: "10px" }}>{item.emoji}</div>
              <div className="font-playfair" style={{ color: "#c8a96e", fontSize: "22px", fontWeight: "700", lineHeight: "1", marginBottom: "6px" }}>{item.val}</div>
              <div className="font-cinzel" style={{ color: "#faf6f0", fontSize: "10px", letterSpacing: "1.5px", marginBottom: "4px" }}>{item.label}</div>
              <div style={{ color: "rgba(250,246,240,0.4)", fontSize: "11px" }}>{item.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "10px" }}>
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#c8a96e" color="#c8a96e" />)}
          </div>
          <p className="font-playfair" style={{ color: "rgba(232,201,138,0.8)", fontSize: "18px", fontStyle: "italic" }}>
            &ldquo;Imperial quality — guaranteed in every meal we serve&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
