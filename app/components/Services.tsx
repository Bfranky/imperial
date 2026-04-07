"use client";
export default function Services() {
  return (
    <section id="services" style={{ background: "var(--imperial-cream)", padding: "96px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "5px", marginBottom: "16px" }}>
            ✦ OUR SERVICES ✦
          </div>
          <h2 className="font-cinzel" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: "800", color: "#1a0a2e", lineHeight: "1.15", marginBottom: "20px" }}>
            Two Ways to Experience Imperial Cuisine
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <span style={{ color: "#c9a84c", fontSize: "18px" }}>👑</span>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
        </div>

        {/* Two service cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>

          {/* Restaurant Dining */}
          <div
            className="imperial-card"
            style={{
              background: "linear-gradient(160deg, #1a0a2e 0%, #2d1b4e 70%, #1a0a2e 100%)",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            {/* Card header */}
            <div style={{
              background: "linear-gradient(135deg, rgba(107,33,168,0.4), rgba(61,0,102,0.6))",
              padding: "40px 36px 32px",
              borderBottom: "1px solid rgba(201,168,76,0.15)",
              position: "relative",
            }}>
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>🍽️</div>
              <h3 className="font-cinzel" style={{ color: "#fdf8f0", fontSize: "22px", fontWeight: "700", marginBottom: "8px" }}>
                Restaurant Dining
              </h3>
              <p className="font-cormorant" style={{ color: "rgba(240,208,128,0.8)", fontSize: "18px", fontStyle: "italic" }}>
                Visit us. Dine in style.
              </p>
            </div>

            {/* Card body */}
            <div style={{ padding: "32px 36px" }}>
              <p style={{ color: "rgba(253,248,240,0.7)", fontSize: "14px", lineHeight: "1.8", marginBottom: "24px" }}>
                Visit us for breakfast, lunch, or dinner. Extensive menu of Nigerian and continental dishes, 
                made fresh to order in a comfortable, welcoming atmosphere. Perfect for dates, family meals, 
                and work lunches. Takeaway available.
              </p>

              <div style={{ marginBottom: "28px" }}>
                <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "3px", marginBottom: "14px" }}>
                  WHAT WE SERVE
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["Nigerian Favorites", "Continental Classics", "Grills & Proteins", "Soups & Swallows", "Fresh Specials", "Drinks & Juices"].map(item => (
                    <span
                      key={item}
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        borderRadius: "50px",
                        padding: "4px 12px",
                        color: "rgba(240,208,128,0.8)",
                        fontSize: "11px",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "6px",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}>
                <span style={{ fontSize: "18px" }}>⏰</span>
                <span style={{ color: "#c9a84c", fontSize: "13px", fontWeight: "600" }}>Open Daily — Closes 8:30 PM</span>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="#contact"
                  className="font-cinzel"
                  style={{
                    flex: 1, textAlign: "center",
                    background: "linear-gradient(135deg, #c9a84c, #f0d080)",
                    color: "#1a0a2e", padding: "12px 20px",
                    borderRadius: "4px", textDecoration: "none",
                    fontWeight: "700", fontSize: "11px", letterSpacing: "1.5px",
                    minWidth: "120px",
                  }}
                >
                  VISIT US
                </a>
                <a
                  href="#menu"
                  className="font-cinzel"
                  style={{
                    flex: 1, textAlign: "center",
                    background: "transparent",
                    color: "#c9a84c", padding: "12px 20px",
                    borderRadius: "4px", textDecoration: "none",
                    fontWeight: "700", fontSize: "11px", letterSpacing: "1.5px",
                    border: "1px solid rgba(201,168,76,0.4)",
                    minWidth: "120px",
                  }}
                >
                  VIEW MENU
                </a>
              </div>
            </div>
          </div>

          {/* Professional Catering */}
          <div
            className="imperial-card"
            style={{
              background: "linear-gradient(160deg, #3d0020 0%, #5a0030 40%, #3d0060 100%)",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            {/* Card header */}
            <div style={{
              background: "linear-gradient(135deg, rgba(139,0,0,0.4), rgba(61,0,30,0.6))",
              padding: "40px 36px 32px",
              borderBottom: "1px solid rgba(201,168,76,0.15)",
            }}>
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎉</div>
              <h3 className="font-cinzel" style={{ color: "#fdf8f0", fontSize: "22px", fontWeight: "700", marginBottom: "8px" }}>
                Professional Catering
              </h3>
              <p className="font-cormorant" style={{ color: "rgba(240,208,128,0.8)", fontSize: "18px", fontStyle: "italic" }}>
                Your event. Unforgettable.
              </p>
            </div>

            {/* Card body */}
            <div style={{ padding: "32px 36px" }}>
              <p style={{ color: "rgba(253,248,240,0.7)", fontSize: "14px", lineHeight: "1.8", marginBottom: "24px" }}>
                Full-service catering for all occasions — from small intimate gatherings to grand celebrations. 
                Customized menus, buffet setup, professional service staff, and small chops for cocktails. 
                Reliable, punctual, and royally delicious.
              </p>

              <div style={{ marginBottom: "28px" }}>
                <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "3px", marginBottom: "14px" }}>
                  OCCASIONS WE CATER
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["Wedding Receptions", "Birthday Parties", "Corporate Events", "House Warming", "Naming Ceremonies", "Anniversaries"].map(item => (
                    <span
                      key={item}
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        borderRadius: "50px",
                        padding: "4px 12px",
                        color: "rgba(240,208,128,0.8)",
                        fontSize: "11px",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price hint */}
              <div style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "6px",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}>
                <span style={{ fontSize: "18px" }}>💰</span>
                <span style={{ color: "#c9a84c", fontSize: "13px", fontWeight: "600" }}>From ₦2,500/guest — Custom Packages Available</span>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="#catering"
                  className="font-cinzel"
                  style={{
                    flex: 1, textAlign: "center",
                    background: "linear-gradient(135deg, #c9a84c, #f0d080)",
                    color: "#1a0a2e", padding: "12px 20px",
                    borderRadius: "4px", textDecoration: "none",
                    fontWeight: "700", fontSize: "11px", letterSpacing: "1.5px",
                    minWidth: "120px",
                  }}
                >
                  GET QUOTE
                </a>
                <a
                  href="#contact"
                  className="font-cinzel"
                  style={{
                    flex: 1, textAlign: "center",
                    background: "transparent",
                    color: "#c9a84c", padding: "12px 20px",
                    borderRadius: "4px", textDecoration: "none",
                    fontWeight: "700", fontSize: "11px", letterSpacing: "1.5px",
                    border: "1px solid rgba(201,168,76,0.4)",
                    minWidth: "120px",
                  }}
                >
                  DISCUSS EVENT
                </a>
              </div>
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
