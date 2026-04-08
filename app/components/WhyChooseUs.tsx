"use client";

const benefits = [
  { e:"⭐", t:"Perfect 5.0★ Rating", d:"100% customer satisfaction. Years of delivering exceptional meals — our track record speaks for itself." },
  { e:"🌿", t:"Fresh Every Day", d:"Ingredients sourced fresh every morning. No shortcuts. You taste the difference in every single bite." },
  { e:"👨‍🍳", t:"Expert Chefs", d:"Deep knowledge of Nigerian cuisine and continental cooking — authentic, skilled, passionate." },
  { e:"⏰", t:"Open Until 8:30 PM", d:"Late enough for after-work dinners. Reliable hours, every single day of the week." },
  { e:"🎉", t:"Full-Service Catering", d:"We set up, serve, and ensure your event runs smoothly from start to finish." },
  { e:"💛", t:"Trusted in Lagos", d:"An established name in Papa Ashafa. Families, corporates, event planners — they all come back." },
];

export default function WhyChooseUs() {
  return (
    <section style={{ background: "#0f0a1a", padding: "80px 20px", position: "relative", overflow: "hidden" }}>
      {/* Faint bg photo */}
      <div className="cover" style={{
        position: "absolute", inset: 0, opacity: .06,
        backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=50&fit=crop')",
      }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,rgba(15,10,26,.97),rgba(26,17,40,.95))" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>✦ WHY CHOOSE US ✦</p>
          <h2 className="pf" style={{ fontSize: "clamp(28px,6vw,50px)", fontWeight: 900, color: "#faf6f0", lineHeight: 1.1, marginBottom: 14 }}>
            The Imperial<br /><em className="gold">Difference</em>
          </h2>
          <p style={{ color: "rgba(250,246,240,.5)", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
            It&apos;s not just the food — though that speaks for itself. It&apos;s the care, freshness, and warmth behind every single order.
          </p>
        </div>

        {/* Cards grid: 1 col → 2 col → 3 col */}
        <div className="why-grid">
          {benefits.map(b => (
            <div key={b.t} style={{
              background: "rgba(255,255,255,.04)", border: "1px solid rgba(200,169,110,.1)",
              borderRadius: 10, padding: "24px 20px",
              transition: "border-color .2s, background .2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,169,110,.32)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(200,169,110,.06)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,169,110,.1)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,.04)"; }}
            >
              <div style={{ fontSize: 26, marginBottom: 10 }}>{b.e}</div>
              <h4 className="pf" style={{ color: "#faf6f0", fontSize: 15, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{b.t}</h4>
              <p style={{ color: "rgba(250,246,240,.48)", fontSize: 13, lineHeight: 1.7 }}>{b.d}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="tel:08074101786" className="cin" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg,#c8a96e,#e8c98a)", color: "#0f0a1a",
            padding: "14px 36px", borderRadius: 4, fontWeight: 700, fontSize: 11, letterSpacing: "2px",
            boxShadow: "0 6px 24px rgba(200,169,110,.28)",
          }}>📞 CALL 0807 410 1786</a>
        </div>
      </div>

      <style>{`
        .why-grid { display:grid; grid-template-columns:1fr; gap:14px; }
        @media(min-width:480px){ .why-grid { grid-template-columns:repeat(2,1fr); } }
        @media(min-width:960px){ .why-grid { grid-template-columns:repeat(3,1fr); } }
      `}</style>
    </section>
  );
}