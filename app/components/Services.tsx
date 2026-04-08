"use client";

export default function Services() {
  return (
    <section id="services" style={{ background: "#0f0a1a", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      {/* Subtle noise/grid bg */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.035,
        backgroundImage: "linear-gradient(rgba(200,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="eyebrow" style={{ marginBottom: "14px" }}>✦ TWO WAYS TO DINE ✦</p>
          <h2 className="font-playfair" style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: "800", color: "#faf6f0", lineHeight: "1.12" }}>
            Experience Imperial Cuisine
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>

          {/* Restaurant card */}
          <div className="lift" style={{
            borderRadius: "16px", overflow: "hidden",
            border: "1px solid rgba(200,169,110,0.15)",
            background: "#1c1228",
            cursor: "default",
          }}>
            {/* Photo */}
            <div style={{
              height: "280px", position: "relative",
              backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80&fit=crop')",
              backgroundSize: "cover", backgroundPosition: "center",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #1c1228 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(200,169,110,0.9)", borderRadius: "50px", padding: "6px 14px" }}>
                <span className="font-cinzel" style={{ color: "#0f0a1a", fontSize: "10px", letterSpacing: "1.5px", fontWeight: "700" }}>DINE IN</span>
              </div>
            </div>
            <div style={{ padding: "32px" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>🍽️</div>
              <h3 className="font-playfair" style={{ color: "#faf6f0", fontSize: "26px", fontWeight: "700", marginBottom: "12px" }}>
                Restaurant Dining
              </h3>
              <p style={{ color: "rgba(250,246,240,0.6)", fontSize: "14px", lineHeight: "1.8", marginBottom: "24px" }}>
                Visit us for breakfast, lunch, or dinner. Made-to-order Nigerian and continental dishes in a warm, welcoming setting. Family-friendly, takeaway available, open until 8:30 PM daily.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
                {["Nigerian Cuisine", "Continental Dishes", "Grills & Proteins", "Soups & Swallows", "Takeaway"].map(t => (
                  <span key={t} className="tag" style={{ fontSize: "11px" }}>{t}</span>
                ))}
              </div>
              <a href="#menu" className="font-cinzel" style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #c8a96e, #e8c98a)",
                color: "#0f0a1a", padding: "12px 28px", borderRadius: "4px",
                textDecoration: "none", fontWeight: "700", fontSize: "10px", letterSpacing: "2px",
              }}>
                VIEW MENU →
              </a>
            </div>
          </div>

          {/* Catering card */}
          <div className="lift" style={{
            borderRadius: "16px", overflow: "hidden",
            border: "1px solid rgba(200,169,110,0.15)",
            background: "#1c1228",
            cursor: "default",
          }}>
            {/* Photo */}
            <div style={{
              height: "280px", position: "relative",
              backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?w=700&q=80&fit=crop')",
              backgroundSize: "cover", backgroundPosition: "center",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #1c1228 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(139,26,26,0.9)", borderRadius: "50px", padding: "6px 14px" }}>
                <span className="font-cinzel" style={{ color: "#faf6f0", fontSize: "10px", letterSpacing: "1.5px", fontWeight: "700" }}>CATERING</span>
              </div>
            </div>
            <div style={{ padding: "32px" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>🎉</div>
              <h3 className="font-playfair" style={{ color: "#faf6f0", fontSize: "26px", fontWeight: "700", marginBottom: "12px" }}>
                Professional Catering
              </h3>
              <p style={{ color: "rgba(250,246,240,0.6)", fontSize: "14px", lineHeight: "1.8", marginBottom: "24px" }}>
                We bring the imperial experience to your event. Weddings, birthdays, corporate functions — full-service setup, professional staff, customized menus. From 50 to 1,000+ guests.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
                {["Weddings", "Birthdays", "Corporate", "Small Chops", "Full Setup"].map(t => (
                  <span key={t} className="tag" style={{ fontSize: "11px" }}>{t}</span>
                ))}
              </div>
              <a href="#catering" className="font-cinzel" style={{
                display: "inline-block",
                background: "rgba(200,169,110,0.1)", border: "1px solid rgba(200,169,110,0.4)",
                color: "#c8a96e", padding: "12px 28px", borderRadius: "4px",
                textDecoration: "none", fontWeight: "700", fontSize: "10px", letterSpacing: "2px",
              }}>
                GET A QUOTE →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
