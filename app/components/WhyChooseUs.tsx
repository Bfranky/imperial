"use client";
const benefits = [
  {
    emoji: "⭐",
    title: "Perfect 5.0★ Rating",
    desc: "100% customer satisfaction. Our perfect rating speaks for itself — years of delivering exceptional food and outstanding service to families and businesses across Lagos.",
    highlight: true,
  },
  {
    emoji: "👑",
    title: "Imperial Quality Standards",
    desc: "Every dish prepared to imperial standards. Fresh ingredients, expert chefs, authentic recipes, and meticulous attention to detail. Royally good food, every single time.",
    highlight: false,
  },
  {
    emoji: "🎉",
    title: "Restaurant & Catering Excellence",
    desc: "Enjoy our delicious meals at our restaurant OR let us cater your special event. Two exceptional ways to experience our imperial cuisine and hospitality.",
    highlight: false,
  },
  {
    emoji: "🏆",
    title: "Years of Trusted Service",
    desc: "Established and trusted in Lagos for years. We've served countless satisfied customers and catered memorable events — a proven track record of excellence.",
    highlight: false,
  },
  {
    emoji: "🌿",
    title: "Fresh Daily Preparation",
    desc: "We never compromise on freshness. All meals prepared daily using quality ingredients, sourced fresh. Taste the unmistakable difference that freshness makes.",
    highlight: false,
  },
  {
    emoji: "⏰",
    title: "Convenient & Reliable",
    desc: "Open until 8:30 PM daily for your dinner convenience. Located at Papa Ashafa with easy access, and reliable catering delivery you can count on.",
    highlight: false,
  },
];

export default function WhyChooseUs() {
  return (
    <section style={{
      padding: "96px 24px",
      background: "linear-gradient(180deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05,
        backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
        backgroundSize: "50px 50px", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "5px", marginBottom: "16px" }}>
            ✦ WHY CHOOSE US ✦
          </div>
          <h2 className="font-cinzel" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: "800", color: "#fdf8f0", lineHeight: "1.15", marginBottom: "20px" }}>
            The Imperial Difference
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <span style={{ color: "#c9a84c", fontSize: "18px" }}>✦</span>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {benefits.map((b) => (
            <div
              key={b.title}
              className="imperial-card"
              style={{
                background: b.highlight
                  ? "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))"
                  : "rgba(255,255,255,0.03)",
                border: `1px solid ${b.highlight ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "8px",
                padding: "36px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner accents for highlighted card */}
              {b.highlight && (
                <>
                  <div style={{ position: "absolute", top: 0, left: 0, width: "24px", height: "24px", borderTop: "2px solid rgba(201,168,76,0.6)", borderLeft: "2px solid rgba(201,168,76,0.6)" }} />
                  <div style={{ position: "absolute", bottom: 0, right: 0, width: "24px", height: "24px", borderBottom: "2px solid rgba(201,168,76,0.6)", borderRight: "2px solid rgba(201,168,76,0.6)" }} />
                </>
              )}

              <div style={{ fontSize: "36px", marginBottom: "16px" }}>{b.emoji}</div>
              <h3 className="font-cinzel" style={{
                color: b.highlight ? "#c9a84c" : "#fdf8f0",
                fontSize: "14px", fontWeight: "700",
                letterSpacing: "0.5px", marginBottom: "12px",
              }}>
                {b.title}
              </h3>
              <p style={{
                color: "rgba(253,248,240,0.65)",
                fontSize: "14px",
                lineHeight: "1.8",
              }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <p className="font-cormorant" style={{ color: "rgba(240,208,128,0.8)", fontSize: "22px", fontStyle: "italic", marginBottom: "24px" }}>
            &ldquo;Imperial quality at prices that welcome everyone&rdquo;
          </p>
          <a
            href="#contact"
            className="font-cinzel"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(135deg, #c9a84c, #f0d080)",
              color: "#1a0a2e", padding: "14px 40px",
              borderRadius: "4px", textDecoration: "none",
              fontWeight: "700", fontSize: "12px", letterSpacing: "2px",
              boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
            }}
          >
            EXPERIENCE THE DIFFERENCE →
          </a>
        </div>
      </div>
    </section>
  );
}
