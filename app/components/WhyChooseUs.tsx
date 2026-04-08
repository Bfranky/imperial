"use client";

const benefits = [
  { emoji: "⭐", title: "Perfect 5.0★ Rating", desc: "100% customer satisfaction — our track record speaks for itself. Years of delivering exceptional meals across Lagos." },
  { emoji: "🌿", title: "Fresh Every Day", desc: "No shortcuts. Ingredients sourced fresh every morning. You can taste the difference in every single bite." },
  { emoji: "👨‍🍳", title: "Expert Chefs", desc: "Our kitchen team brings deep knowledge of Nigerian cuisine and continental cooking — authentic, skilled, passionate." },
  { emoji: "⏰", title: "Open Until 8:30 PM", desc: "Late enough for after-work dinners. Reliable hours, every single day. We're here when you need us." },
  { emoji: "🎉", title: "Full-Service Catering", desc: "We don't just deliver food — we set up, serve, and ensure your event runs smoothly from start to finish." },
  { emoji: "💛", title: "Trusted in Lagos", desc: "An established name in Papa Ashafa. Families, corporates, event planners — they all come back to Imperial." },
];

export default function WhyChooseUs() {
  return (
    <section style={{ background: "#0f0a1a", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      {/* Background image with heavy overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=60&fit=crop')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.08,
      }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(15,10,26,0.97) 0%, rgba(28,18,40,0.94) 100%)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* Left: text */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "16px" }}>✦ WHY IMPERIAL ✦</p>
            <h2 className="font-playfair" style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: "800", color: "#faf6f0", lineHeight: "1.12", marginBottom: "24px" }}>
              The Imperial<br />
              <em className="gold-text" style={{ fontStyle: "italic" }}>Difference</em>
            </h2>
            <p style={{ color: "rgba(250,246,240,0.6)", fontSize: "15px", lineHeight: "1.85", marginBottom: "36px" }}>
              It&apos;s not just the food — though that speaks for itself. It&apos;s the care, the freshness, the reliability, and the warmth that comes with every order. This is why Lagos families keep coming back.
            </p>
            <a href="tel:08074101786" className="font-cinzel" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(135deg, #c8a96e, #e8c98a)",
              color: "#0f0a1a", padding: "14px 32px", borderRadius: "4px",
              textDecoration: "none", fontWeight: "700", fontSize: "11px", letterSpacing: "2px",
              boxShadow: "0 6px 24px rgba(200,169,110,0.3)",
            }}>
              📞 CALL 0807 410 1786
            </a>
          </div>

          {/* Right: benefit cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {benefits.map((b, i) => (
              <div key={b.title} className="lift" style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(200,169,110,0.12)",
                borderRadius: "10px", padding: "22px 18px",
                transition: "border-color 0.2s, background 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.35)"; e.currentTarget.style.background = "rgba(200,169,110,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              >
                <div style={{ fontSize: "24px", marginBottom: "10px" }}>{b.emoji}</div>
                <h4 className="font-playfair" style={{ color: "#faf6f0", fontSize: "14px", fontWeight: "600", marginBottom: "7px", lineHeight: "1.3" }}>{b.title}</h4>
                <p style={{ color: "rgba(250,246,240,0.5)", fontSize: "12px", lineHeight: "1.7" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}
