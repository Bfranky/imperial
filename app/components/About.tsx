"use client";
const keyPoints = [
  "Premier restaurant and catering service in Papa Ashafa, Lagos with a perfect 5.0-star rating",
  "Every meal prepared with royal care — fresh ingredients, expert chefs, authentic recipes",
  "From casual dining to grand celebrations, we make every meal an imperial experience",
  "Open daily for breakfast, lunch, and dinner — convenient service until 8:30 PM",
  "Full-service catering for weddings, birthdays, corporate events, and all special occasions",
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--imperial-cream)", padding: "96px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "5px", marginBottom: "16px" }}>
            ✦ OUR STORY ✦
          </div>
          <h2 className="font-cinzel" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: "800", color: "#1a0a2e", lineHeight: "1.15", marginBottom: "20px" }}>
            Welcome to Imperial Kitchen
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <span style={{ color: "#c9a84c", fontSize: "18px" }}>👑</span>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
          <p className="font-cormorant" style={{ color: "#6b21a8", fontSize: "22px", fontStyle: "italic", fontWeight: "400" }}>
            Your Trusted Partner for Delicious Meals & Memorable Events
          </p>
        </div>

        {/* Main content grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>

          {/* Left: Text */}
          <div>
            <p style={{ color: "#4a3060", fontSize: "16px", lineHeight: "1.9", marginBottom: "24px" }}>
              Nestled in the heart of Papa Ashafa, Lagos, <strong style={{ color: "#1a0a2e" }}>Imperial Kitchen and Restaurant</strong> is 
              more than just a place to eat — it&apos;s an experience. We have earned our perfect 5.0-star rating 
              through an unwavering commitment to quality, freshness, and genuine Nigerian hospitality.
            </p>
            <p style={{ color: "#4a3060", fontSize: "16px", lineHeight: "1.9", marginBottom: "32px" }}>
              Whether you&apos;re joining us for a hearty lunch, a romantic dinner, or entrusting us with 
              your most important celebration, we bring the same imperial standard to every plate and 
              every event. Our expert chefs craft each dish with care — from aromatic party jollof rice 
              to slow-cooked soups and perfectly grilled proteins.
            </p>

            {/* Key points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {keyPoints.map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{
                    width: "20px", height: "20px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #c9a84c, #f0d080)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: "2px",
                    fontSize: "10px",
                  }}>
                    ✓
                  </div>
                  <span style={{ color: "#2d1b4e", fontSize: "14px", lineHeight: "1.6" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual panel */}
          <div style={{ position: "relative" }}>
            {/* Main large card */}
            <div style={{
              background: "linear-gradient(160deg, #1a0a2e 0%, #2d1b4e 60%, #3d0020 100%)",
              borderRadius: "8px",
              padding: "48px 40px",
              border: "1px solid rgba(201,168,76,0.2)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Decorative corner */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "60px", height: "60px", borderTop: "3px solid rgba(201,168,76,0.4)", borderLeft: "3px solid rgba(201,168,76,0.4)" }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "60px", height: "60px", borderBottom: "3px solid rgba(201,168,76,0.4)", borderRight: "3px solid rgba(201,168,76,0.4)" }} />

              <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <div style={{ fontSize: "48px", marginBottom: "8px" }}>👑</div>
                <div className="font-cinzel gold-shimmer" style={{ fontSize: "15px", letterSpacing: "3px", marginBottom: "4px" }}>
                  THE IMPERIAL PROMISE
                </div>
                <div className="font-cormorant" style={{ color: "rgba(253,248,240,0.6)", fontSize: "16px", fontStyle: "italic" }}>
                  Quality you can taste in every bite
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { emoji: "🍛", title: "Authentic Nigerian Cuisine", desc: "Traditional recipes, fresh ingredients" },
                  { emoji: "🎉", title: "All Occasions Catered", desc: "Weddings, birthdays, corporate events" },
                  { emoji: "⏰", title: "Open Until 8:30 PM Daily", desc: "Convenient for evening dining" },
                  { emoji: "📍", title: "30 Suraogumakin Street", desc: "Papa Ashafa, Lagos 102212" },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "6px", padding: "12px 16px",
                      border: "1px solid rgba(201,168,76,0.1)",
                    }}
                  >
                    <span style={{ fontSize: "22px" }}>{item.emoji}</span>
                    <div>
                      <div style={{ color: "#fdf8f0", fontSize: "13px", fontWeight: "600", marginBottom: "2px" }}>{item.title}</div>
                      <div style={{ color: "rgba(201,168,76,0.7)", fontSize: "11px" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", top: "-20px", right: "-20px",
              background: "linear-gradient(135deg, #c9a84c, #f0d080)",
              borderRadius: "50%", width: "90px", height: "90px",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              boxShadow: "0 8px 30px rgba(201,168,76,0.4)",
              animation: "float 3s ease-in-out infinite",
            }}>
              <div className="font-cinzel" style={{ color: "#1a0a2e", fontSize: "20px", fontWeight: "900", lineHeight: "1" }}>5.0</div>
              <div style={{ color: "#1a0a2e", fontSize: "10px", fontWeight: "700" }}>★★★★★</div>
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
      `}</style>
    </section>
  );
}
