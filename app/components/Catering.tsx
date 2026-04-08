"use client";

const pkgs = [
  {
    icon:"💒", title:"Wedding Catering", price:"From ₦2,500/guest",
    photo:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&q=80&fit=crop",
    highlight:true,
    features:["Complete buffet service & setup","Professional service staff","50–1,000+ guests","Customised menus","Small chops for cocktail hour","Flexible packages"],
  },
  {
    icon:"🎂", title:"Birthday Parties", price:"From ₦150,000",
    photo:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop",
    highlight:false,
    features:["Kids & adults celebrations","Festive food presentation","Small chops platters","Drinks packages","Reliable delivery & setup"],
  },
  {
    icon:"🏢", title:"Corporate Events", price:"Custom quotes",
    photo:"https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&q=80&fit=crop",
    highlight:false,
    features:["Business lunches & meetings","Conferences & seminars","Drop-off or full service","Professional & punctual","Guaranteed quality"],
  },
  {
    icon:"🥘", title:"Small Chops", price:"From ₦50,000",
    photo:"https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=500&q=80&fit=crop",
    highlight:false,
    features:["Samosas & Spring Rolls","Puff Puff & Meat Pies","Chicken Wings & Fish Rolls","Freshly prepared","Beautiful presentation"],
  },
];

export default function Catering() {
  return (
    <section id="catering" style={{ background: "var(--cream2)", padding: "80px 20px" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>✦ CATERING SERVICES ✦</p>
          <h2 className="pf" style={{ fontSize: "clamp(28px,6vw,50px)", fontWeight: 900, color: "#0f0a1a", lineHeight: 1.1, marginBottom: 10 }}>
            We Cater Every Occasion
          </h2>
          <p className="pf" style={{ color: "#8b4513", fontSize: "clamp(14px,3vw,17px)", fontStyle: "italic" }}>
            Let Imperial Kitchen make your event unforgettable
          </p>
        </div>

        {/* Cards */}
        <div className="cat-grid">
          {pkgs.map(p => (
            <div key={p.title} className="lift" style={{
              background: "white", borderRadius: 12, overflow: "hidden",
              border: p.highlight ? "2px solid #c8a96e" : "1px solid rgba(90,74,56,.1)",
              boxShadow: p.highlight ? "0 8px 36px rgba(200,169,110,.18)" : "0 2px 14px rgba(15,10,26,.06)",
              position: "relative", display: "flex", flexDirection: "column",
            }}>
              {p.highlight && (
                <div style={{
                  position: "absolute", top: 12, right: 12, zIndex: 2,
                  background: "#c8a96e", color: "#0f0a1a", fontSize: 8,
                  fontWeight: 700, letterSpacing: "1.5px", padding: "4px 10px", borderRadius: 50,
                }}>MOST POPULAR</div>
              )}
              {/* Photo */}
              <div style={{ height: 160, position: "relative" }}>
                <div className="cover" style={{ position: "absolute", inset: 0, backgroundImage: `url('${p.photo}')` }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(255,255,255,.95) 0%,transparent 55%)" }} />
              </div>
              {/* Body */}
              <div style={{ padding: "20px 22px 26px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{p.icon}</div>
                <h3 className="pf" style={{ color: "#0f0a1a", fontSize: "clamp(17px,3vw,20px)", fontWeight: 700, marginBottom: 5 }}>{p.title}</h3>
                <div style={{ color: "#c8a96e", fontWeight: 700, fontSize: 13, marginBottom: 16 }}>{p.price}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 22, flex: 1 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: "#c8a96e", fontSize: 10, marginTop: 4, flexShrink: 0 }}>✓</span>
                      <span style={{ color: "#5a4a38", fontSize: 13, lineHeight: 1.4 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="cin" style={{
                  display: "block", textAlign: "center",
                  background: p.highlight ? "linear-gradient(135deg,#c8a96e,#e8c98a)" : "#0f0a1a",
                  color: p.highlight ? "#0f0a1a" : "#c8a96e",
                  padding: "11px 20px", borderRadius: 6, fontWeight: 700, fontSize: 9, letterSpacing: "2px",
                  transition: "opacity .2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >GET QUOTE →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Other occasions banner */}
        <div style={{
          marginTop: 32, background: "#0f0a1a", borderRadius: 12,
          padding: "32px 28px", border: "1px solid rgba(200,169,110,.13)",
        }}>
          <h4 className="pf" style={{ color: "#faf6f0", fontSize: "clamp(17px,3vw,22px)", fontWeight: 700, marginBottom: 16 }}>
            We also cater for...
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {["House Warming","Naming Ceremony","Funeral Reception","Anniversary","Thanksgiving","Graduation","Any event!"].map(o => (
              <span key={o} className="tag" style={{ fontSize: 11 }}>{o}</span>
            ))}
          </div>
          <a href="#contact" className="cin" style={{
            display: "inline-block",
            background: "linear-gradient(135deg,#c8a96e,#e8c98a)", color: "#0f0a1a",
            padding: "12px 28px", borderRadius: 4, fontWeight: 700, fontSize: 10, letterSpacing: "2px",
            boxShadow: "0 6px 20px rgba(200,169,110,.28)",
          }}>DISCUSS YOUR EVENT →</a>
        </div>
      </div>

      <style>{`
        .cat-grid { display:grid; grid-template-columns:1fr; gap:16px; }
        @media(min-width:520px){ .cat-grid { grid-template-columns:repeat(2,1fr); } }
        @media(min-width:900px){ .cat-grid { grid-template-columns:repeat(4,1fr); } }
      `}</style>
    </section>
  );
}
