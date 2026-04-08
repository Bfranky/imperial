"use client";

const dishes = [
  { img: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=500&q=80&fit=crop&crop=center", name: "Party Jollof Rice", tag: "Signature" },
  { img: "https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=500&q=80&fit=crop&crop=center", name: "Grilled Chicken", tag: "Popular" },
  { img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80&fit=crop&crop=center", name: "Egusi Soup", tag: "Traditional" },
  { img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=500&q=80&fit=crop&crop=center", name: "Fresh Fish", tag: "Daily" },
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--cream)", padding: "80px 20px" }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>✦ OUR STORY ✦</p>
          <h2 className="pf" style={{ fontSize: "clamp(28px,6vw,52px)", fontWeight: 900, color: "#0f0a1a", lineHeight: 1.1, marginBottom: 16 }}>
            Where Every Meal<br />
            <em style={{ color: "#8b4513" }}>Tells a Story</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "clamp(14px,2.5vw,16px)", lineHeight: 1.8, maxWidth: 560, margin: "0 auto" }}>
            Nestled in Papa Ashafa, Lagos — Imperial Kitchen has earned a perfect 5.0-star rating through one thing: food that makes people come back. Fresh ingredients every morning, recipes built on tradition, and a kitchen full of passion.
          </p>
        </div>

        {/* Two column: text + image (stacks on mobile) */}
        <div className="about-cols">
          <div className="about-text">
            <p style={{ color: "#5a4a38", fontSize: 15, lineHeight: 1.9, marginBottom: 20 }}>
              From our smoky party jollof rice to slow-cooked pepper soup and perfectly grilled proteins — we cook with the soul of Nigerian tradition. Every order is made fresh, every plate sent out with care.
            </p>
            <p style={{ color: "#5a4a38", fontSize: 15, lineHeight: 1.9, marginBottom: 32 }}>
              Whether you dine with us or book us to cater your next celebration, you get the same imperial standard. We are your trusted partner for delicious meals and memorable events.
            </p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginBottom: 32 }}>
              {[["5.0★","Perfect Rating"],["Fresh","Daily Prep"],["Any Event","Catering"]].map(([v,l]) => (
                <div key={l}>
                  <div className="pf" style={{ color: "#c8a96e", fontSize: 20, fontWeight: 700 }}>{v}</div>
                  <div style={{ color: "var(--muted)", fontSize: 11, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="#menu" className="cin" style={{
                background: "linear-gradient(135deg,#c8a96e,#e8c98a)", color: "#0f0a1a",
                padding: "12px 28px", borderRadius: 4, fontWeight: 700, fontSize: 10, letterSpacing: "2px",
              }}>VIEW MENU</a>
              <a href="tel:08074101786" className="cin" style={{
                background: "#0f0a1a", color: "#c8a96e",
                padding: "12px 28px", borderRadius: 4, fontWeight: 700, fontSize: 10, letterSpacing: "2px",
              }}>CALL US</a>
            </div>
          </div>

          <div className="about-img-wrap" style={{ position: "relative" }}>
            <div style={{
              borderRadius: 12, overflow: "hidden", paddingBottom: "120%", position: "relative",
              boxShadow: "0 24px 64px rgba(15,10,26,.18)",
            }}>
              <div className="cover" style={{
                position: "absolute", inset: 0,
                backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=85&fit=crop')",
              }} />
            </div>
            {/* floating badge */}
            <div className="float" style={{
              position: "absolute", bottom: -18, left: -14,
              background: "linear-gradient(135deg,#c8a96e,#e8c98a)",
              borderRadius: 10, padding: "16px 20px", textAlign: "center",
              boxShadow: "0 10px 32px rgba(200,169,110,.4)",
            }}>
              <div className="pf" style={{ color: "#0f0a1a", fontSize: 24, fontWeight: 800, lineHeight: 1 }}>5.0★</div>
              <div className="cin" style={{ color: "#3a2a10", fontSize: 8, letterSpacing: "1.5px", marginTop: 3 }}>PERFECT RATING</div>
            </div>
          </div>
        </div>

        {/* Dish photo grid */}
        <div style={{ marginTop: 72 }}>
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: 12 }}>✦ FROM OUR KITCHEN ✦</p>
          <h3 className="pf" style={{ textAlign: "center", fontSize: "clamp(20px,4vw,32px)", fontWeight: 800, color: "#0f0a1a", marginBottom: 32 }}>
            A Taste of What Awaits
          </h3>
          <div className="dish-grid">
            {dishes.map(d => (
              <div key={d.name} className="lift" style={{ borderRadius: 10, overflow: "hidden", position: "relative", paddingBottom: "115%" }}>
                <div className="cover" style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `url('${d.img}')`,
                  transition: "transform .4s ease",
                }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top,rgba(15,10,26,.82) 0%,rgba(15,10,26,.1) 55%)",
                }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 14 }}>
                  <div style={{ display: "inline-block", background: "#c8a96e", color: "#0f0a1a", fontSize: 9, fontWeight: 700, letterSpacing: "1px", padding: "3px 8px", borderRadius: 50, marginBottom: 5 }}>
                    {d.tag}
                  </div>
                  <div className="pf" style={{ color: "#faf6f0", fontSize: "clamp(13px,2.5vw,15px)", fontWeight: 700 }}>{d.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-cols {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .about-img-wrap { order: -1; }
        .dish-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media(min-width:768px){
          .about-cols { grid-template-columns: 1fr 1fr; gap: 64px; }
          .about-img-wrap { order: 1; }
          .dish-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  );
}
