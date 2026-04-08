"use client";

const dishes = [
  { img: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80&fit=crop", name: "Party Jollof Rice", desc: "Smoky, aromatic, unmissable" },
  { img: "https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=400&q=80&fit=crop", name: "Grilled Chicken", desc: "Marinated, chargrilled perfection" },
  { img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80&fit=crop", name: "Egusi Soup", desc: "Rich, nutty, slow-cooked" },
  { img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80&fit=crop", name: "Chef's Special", desc: "Daily fresh creation" },
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--cream)", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top: text + large image */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "80px" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: "16px" }}>✦ OUR STORY ✦</p>
            <h2 className="font-playfair" style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: "800", color: "#0f0a1a", lineHeight: "1.12", marginBottom: "24px" }}>
              Where Every Meal<br />
              <em style={{ color: "#8b4513", fontStyle: "italic" }}>Tells a Story</em>
            </h2>
            <p style={{ color: "#5a4a38", fontSize: "16px", lineHeight: "1.85", marginBottom: "20px" }}>
              Nestled in the heart of Papa Ashafa, Lagos, Imperial Kitchen and Restaurant has built a reputation for one thing above all else — food that makes people come back. Our perfect 5.0-star rating isn&apos;t just a number; it&apos;s the result of every early morning spent sourcing fresh ingredients, every soup simmered low and slow, every plate sent out with care.
            </p>
            <p style={{ color: "#5a4a38", fontSize: "16px", lineHeight: "1.85", marginBottom: "32px" }}>
              From our aromatic party jollof rice to our tender pepper soup and perfectly grilled proteins — we cook with the soul of Nigerian tradition and the precision of professionals. Whether you dine with us or invite us to cater your next celebration, you get the same imperial standard.
            </p>
            <div style={{ display: "flex", gap: "32px" }}>
              {[["5.0★", "Perfect Rating"], ["Fresh", "Daily Prep"], ["All Occasions", "Catering"]].map(([v, l]) => (
                <div key={l}>
                  <div className="font-playfair" style={{ color: "#c8a96e", fontSize: "22px", fontWeight: "700" }}>{v}</div>
                  <div style={{ color: "#8a7a65", fontSize: "12px", marginTop: "2px" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Large stacked photo */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "12px", overflow: "hidden",
              aspectRatio: "4/5",
              backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&fit=crop')",
              backgroundSize: "cover", backgroundPosition: "center",
              boxShadow: "0 32px 80px rgba(15,10,26,0.2)",
            }} />
            {/* Floating badge */}
            <div className="float" style={{
              position: "absolute", bottom: "-20px", left: "-20px",
              background: "linear-gradient(135deg, #c8a96e, #e8c98a)",
              borderRadius: "12px", padding: "20px 24px",
              boxShadow: "0 12px 40px rgba(200,169,110,0.4)",
              textAlign: "center",
            }}>
              <div className="font-playfair" style={{ color: "#0f0a1a", fontSize: "28px", fontWeight: "800", lineHeight: "1" }}>5.0★</div>
              <div className="font-cinzel" style={{ color: "#3a2a10", fontSize: "9px", letterSpacing: "1.5px", marginTop: "4px" }}>PERFECT RATING</div>
            </div>
            {/* Second floating element */}
            <div style={{
              position: "absolute", top: "20px", right: "-16px",
              background: "#0f0a1a", borderRadius: "10px", padding: "14px 18px",
              border: "1px solid rgba(200,169,110,0.25)",
            }}>
              <div style={{ color: "#c8a96e", fontSize: "22px", marginBottom: "4px" }}>🍽️</div>
              <div style={{ color: "#faf6f0", fontSize: "11px", fontWeight: "600" }}>Restaurant</div>
              <div style={{ color: "rgba(250,246,240,0.5)", fontSize: "10px" }}>+ Catering</div>
            </div>
          </div>
        </div>

        {/* Food photo grid */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>✦ FROM OUR KITCHEN ✦</p>
            <h3 className="font-playfair" style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: "700", color: "#0f0a1a" }}>
              A Taste of What Awaits You
            </h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {dishes.map((d) => (
              <div key={d.name} className="lift" style={{
                borderRadius: "10px", overflow: "hidden",
                aspectRatio: "3/4", position: "relative",
                cursor: "pointer",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `url('${d.img}')`,
                  backgroundSize: "cover", backgroundPosition: "center",
                  transition: "transform 0.4s ease",
                }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(15,10,26,0.85) 0%, rgba(15,10,26,0.15) 55%)",
                }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
                  <div className="font-playfair" style={{ color: "#faf6f0", fontSize: "15px", fontWeight: "600" }}>{d.name}</div>
                  <div style={{ color: "rgba(200,169,110,0.9)", fontSize: "11px", marginTop: "2px" }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .dish-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
