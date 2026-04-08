"use client";

const packages = [
  {
    icon: "💒", title: "Wedding Catering", price: "From ₦2,500/guest",
    photo: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&q=80&fit=crop",
    highlight: true,
    features: ["Complete buffet service & setup", "Professional service staff", "50–1,000+ guests", "Customised menu", "Small chops for cocktail hour", "Flexible packages"],
  },
  {
    icon: "🎂", title: "Birthday Parties", price: "From ₦150,000",
    photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop",
    highlight: false,
    features: ["Kids & adults celebrations", "Fun, festive presentation", "Small chops platters", "Drinks packages", "Reliable delivery & setup"],
  },
  {
    icon: "🏢", title: "Corporate Events", price: "Custom quotes",
    photo: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&q=80&fit=crop",
    highlight: false,
    features: ["Business lunches & meetings", "Conferences & seminars", "Drop-off or full service", "Professional & punctual", "Guaranteed quality"],
  },
  {
    icon: "🥘", title: "Small Chops", price: "From ₦50,000",
    photo: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=500&q=80&fit=crop",
    highlight: false,
    features: ["Samosas & Spring Rolls", "Puff Puff & Meat Pies", "Chicken Wings & Fish Rolls", "Freshly prepared", "Beautiful presentation"],
  },
];

export default function Catering() {
  return (
    <section id="catering" style={{ background: "var(--cream-2)", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="eyebrow" style={{ marginBottom: "14px" }}>✦ CATERING SERVICES ✦</p>
          <h2 className="font-playfair" style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: "800", color: "#0f0a1a", lineHeight: "1.12", marginBottom: "12px" }}>
            We Cater Every Occasion
          </h2>
          <p className="font-playfair" style={{ color: "#8b4513", fontSize: "18px", fontStyle: "italic" }}>
            Let Imperial Kitchen make your event unforgettable
          </p>
        </div>

        {/* Package cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "64px" }}>
          {packages.map(pkg => (
            <div key={pkg.title} className="lift" style={{
              background: "white", borderRadius: "14px", overflow: "hidden",
              border: pkg.highlight ? "2px solid #c8a96e" : "1px solid rgba(90,74,56,0.12)",
              boxShadow: pkg.highlight ? "0 8px 40px rgba(200,169,110,0.2)" : "0 2px 16px rgba(15,10,26,0.06)",
              position: "relative",
            }}>
              {pkg.highlight && (
                <div style={{ position: "absolute", top: "14px", right: "14px", background: "#c8a96e", color: "#0f0a1a", fontSize: "9px", fontWeight: "700", letterSpacing: "1.5px", padding: "4px 10px", borderRadius: "50px", zIndex: 2 }}>
                  MOST POPULAR
                </div>
              )}
              <div style={{
                height: "180px",
                backgroundImage: `url('${pkg.photo}')`,
                backgroundSize: "cover", backgroundPosition: "center",
                position: "relative",
              }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 60%)" }} />
              </div>
              <div style={{ padding: "24px 24px 28px" }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>{pkg.icon}</div>
                <h3 className="font-playfair" style={{ color: "#0f0a1a", fontSize: "21px", fontWeight: "700", marginBottom: "6px" }}>{pkg.title}</h3>
                <div style={{ color: "#c8a96e", fontWeight: "700", fontSize: "13px", marginBottom: "18px" }}>{pkg.price}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                  {pkg.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
                      <span style={{ color: "#c8a96e", fontSize: "11px", marginTop: "3px", flexShrink: 0 }}>✓</span>
                      <span style={{ color: "#5a4a38", fontSize: "13px", lineHeight: "1.5" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="font-cinzel" style={{
                  display: "block", textAlign: "center",
                  background: pkg.highlight ? "linear-gradient(135deg, #c8a96e, #e8c98a)" : "#0f0a1a",
                  color: pkg.highlight ? "#0f0a1a" : "#c8a96e",
                  padding: "11px 20px", borderRadius: "6px",
                  textDecoration: "none", fontWeight: "700", fontSize: "10px", letterSpacing: "2px",
                  transition: "opacity 0.2s",
                }}>
                  GET QUOTE →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other occasions strip */}
        <div style={{
          background: "#0f0a1a", borderRadius: "14px", padding: "40px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px",
          border: "1px solid rgba(200,169,110,0.15)",
        }}>
          <div>
            <h4 className="font-playfair" style={{ color: "#faf6f0", fontSize: "22px", fontWeight: "700", marginBottom: "10px" }}>
              We also cater for...
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["House Warming", "Naming Ceremony", "Funeral Reception", "Anniversary", "Thanksgiving", "Graduation", "Any event!"].map(o => (
                <span key={o} className="tag" style={{ fontSize: "12px" }}>{o}</span>
              ))}
            </div>
          </div>
          <a href="#contact" className="font-cinzel" style={{
            background: "linear-gradient(135deg, #c8a96e, #e8c98a)",
            color: "#0f0a1a", padding: "14px 32px", borderRadius: "6px",
            textDecoration: "none", fontWeight: "700", fontSize: "11px", letterSpacing: "2px",
            whiteSpace: "nowrap", boxShadow: "0 6px 24px rgba(200,169,110,0.3)",
          }}>
            DISCUSS YOUR EVENT →
          </a>
        </div>
      </div>
    </section>
  );
}
