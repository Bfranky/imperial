"use client";
const cateringPackages = [
  {
    icon: "💒",
    title: "Wedding Catering",
    subtitle: "The Most Important Day Deserves the Best",
    features: [
      "Complete buffet service & setup",
      "Professional service staff",
      "Elegant food presentation",
      "Customized menus for your taste",
      "Serves 50–1,000+ guests",
      "Rice dishes, proteins & sides",
      "Small chops for cocktail hour",
      "Flexible packages available",
    ],
    price: "From ₦2,500/guest",
    cta: "Request Wedding Quote",
    highlight: true,
    color: "#c9a84c",
  },
  {
    icon: "🎂",
    title: "Birthday Parties",
    subtitle: "Kids & Adults Celebrations",
    features: [
      "Fun, festive food presentation",
      "Age-appropriate menus",
      "Small chops platters included",
      "Drinks packages available",
      "Reliable delivery & setup",
      "Custom birthday cakes (on request)",
    ],
    price: "From ₦150,000",
    cta: "Plan Your Birthday",
    highlight: false,
    color: "#dc2626",
  },
  {
    icon: "🏢",
    title: "Corporate Catering",
    subtitle: "Professional Events & Meetings",
    features: [
      "Business lunches & meetings",
      "Conferences & seminars",
      "Staff parties & appreciation",
      "Professional, punctual service",
      "Drop-off or full-service options",
      "Quality guaranteed",
    ],
    price: "Custom Quotes",
    cta: "Get Corporate Quote",
    highlight: false,
    color: "#6b21a8",
  },
  {
    icon: "🥘",
    title: "Small Chops Platters",
    subtitle: "Cocktails & Receptions",
    features: [
      "Samosas & Spring Rolls",
      "Puff Puff & Meat Pies",
      "Chicken Wings & Fish Rolls",
      "Scotch Eggs & Sausage Rolls",
      "Beautiful presentation",
      "Freshly prepared",
    ],
    price: "From ₦50,000",
    cta: "Order Small Chops",
    highlight: false,
    color: "#b45309",
  },
];

const includes = [
  "Fresh, delicious food",
  "Professional packaging & presentation",
  "On-time delivery guaranteed",
  "Customized menu options",
  "Professional service staff (on request)",
  "Setup & arrangement assistance",
  "Post-event cleanup (full-service)",
  "Dedicated event coordinator",
];

export default function Catering() {
  return (
    <section id="catering" style={{
      padding: "96px 24px",
      background: "linear-gradient(180deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
        backgroundSize: "50px 50px", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "5px", marginBottom: "16px" }}>
            ✦ CATERING SERVICES ✦
          </div>
          <h2 className="font-cinzel" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: "800", color: "#fdf8f0", lineHeight: "1.15", marginBottom: "16px" }}>
            Professional Catering
            <br /><span className="gold-shimmer">for Every Occasion</span>
          </h2>
          <p className="font-cormorant" style={{ color: "rgba(240,208,128,0.8)", fontSize: "20px", fontStyle: "italic", marginBottom: "8px" }}>
            Let Imperial Kitchen Make Your Event Unforgettable
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "20px" }}>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <span style={{ color: "#c9a84c", fontSize: "18px" }}>👑</span>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
        </div>

        {/* Packages grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          marginBottom: "72px",
        }}>
          {cateringPackages.map((pkg) => (
            <div
              key={pkg.title}
              className="imperial-card"
              style={{
                background: pkg.highlight
                  ? "linear-gradient(160deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))"
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${pkg.highlight ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Package header */}
              <div style={{
                padding: "28px 24px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background: pkg.highlight ? "rgba(201,168,76,0.1)" : "transparent",
              }}>
                <div style={{ fontSize: "36px", marginBottom: "10px" }}>{pkg.icon}</div>
                <h3 className="font-cinzel" style={{
                  color: pkg.highlight ? "#c9a84c" : "#fdf8f0",
                  fontSize: "15px", fontWeight: "700", marginBottom: "4px",
                }}>
                  {pkg.title}
                </h3>
                <p style={{ color: "rgba(253,248,240,0.5)", fontSize: "12px" }}>{pkg.subtitle}</p>
              </div>

              {/* Features */}
              <div style={{ padding: "20px 24px", flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                  {pkg.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span style={{ color: "#c9a84c", fontSize: "12px", marginTop: "2px", flexShrink: 0 }}>✓</span>
                      <span style={{ color: "rgba(253,248,240,0.7)", fontSize: "13px", lineHeight: "1.4" }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "6px",
                  padding: "10px 14px",
                  marginBottom: "16px",
                  textAlign: "center",
                }}>
                  <span className="font-cinzel" style={{ color: "#c9a84c", fontSize: "14px", fontWeight: "700" }}>
                    {pkg.price}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="font-cinzel"
                  style={{
                    display: "block", textAlign: "center",
                    background: pkg.highlight
                      ? "linear-gradient(135deg, #c9a84c, #f0d080)"
                      : "rgba(201,168,76,0.1)",
                    color: pkg.highlight ? "#1a0a2e" : "#c9a84c",
                    padding: "11px 20px", borderRadius: "4px",
                    textDecoration: "none", fontWeight: "700",
                    fontSize: "10px", letterSpacing: "1.5px",
                    border: pkg.highlight ? "none" : "1px solid rgba(201,168,76,0.3)",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                >
                  {pkg.cta.toUpperCase()}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other occasions row */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(201,168,76,0.15)",
          borderRadius: "10px",
          padding: "36px",
          marginBottom: "64px",
          textAlign: "center",
        }}>
          <h3 className="font-cinzel" style={{ color: "#c9a84c", fontSize: "14px", letterSpacing: "2px", marginBottom: "20px" }}>
            WE ALSO CATER FOR
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            {["House Warming", "Naming Ceremony", "Funeral Reception", "Anniversary", "Thanksgiving", "Office Parties", "Graduation Parties", "Any Special Event"].map(occ => (
              <span
                key={occ}
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "50px", padding: "7px 16px",
                  color: "rgba(253,248,240,0.8)", fontSize: "12px",
                }}
              >
                {occ}
              </span>
            ))}
          </div>
          <a href="#contact" className="font-cinzel" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "transparent", color: "#c9a84c",
            padding: "12px 28px", borderRadius: "4px",
            textDecoration: "none", fontWeight: "700", fontSize: "11px", letterSpacing: "2px",
            border: "1px solid rgba(201,168,76,0.4)",
          }}>
            DISCUSS YOUR EVENT →
          </a>
        </div>

        {/* What's Included */}
        <div>
          <h3 className="font-cinzel" style={{ color: "#fdf8f0", fontSize: "18px", textAlign: "center", marginBottom: "36px" }}>
            Every Catering Package Includes
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}>
            {includes.map((inc) => (
              <div
                key={inc}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,168,76,0.1)",
                  borderRadius: "6px", padding: "14px 18px",
                }}
              >
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #c9a84c, #f0d080)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, fontSize: "12px", color: "#1a0a2e", fontWeight: "700",
                }}>
                  ✓
                </div>
                <span style={{ color: "rgba(253,248,240,0.8)", fontSize: "13px" }}>{inc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
