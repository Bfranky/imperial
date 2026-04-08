"use client";

const services = [
  {
    badge:"DINE IN", badgeColor:"#c8a96e", badgeText:"#0f0a1a",
    photo:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80&fit=crop",
    icon:"🍽️", title:"Restaurant Dining", tagline:"Visit us. Dine in style.",
    desc:"Made-to-order Nigerian and continental dishes in a warm, welcoming setting. Family-friendly, takeaway available. Open daily until 8:30 PM.",
    tags:["Nigerian Cuisine","Continental","Grills","Soups & Swallows","Takeaway"],
    cta:"VIEW MENU", href:"#menu",
  },
  {
    badge:"CATERING", badgeColor:"#8b1a1a", badgeText:"#faf6f0",
    photo:"https://images.unsplash.com/photo-1555244162-803834f70033?w=700&q=80&fit=crop",
    icon:"🎉", title:"Professional Catering", tagline:"Your event. Unforgettable.",
    desc:"Full-service catering for all occasions. Customised menus, professional staff, buffet setup. From 50 to 1,000+ guests.",
    tags:["Weddings","Birthdays","Corporate","Small Chops","Full Setup"],
    cta:"GET A QUOTE", href:"#catering",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#0f0a1a", padding: "80px 20px", position: "relative" }}>
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: .035, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(200,169,110,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,169,110,1) 1px,transparent 1px)",
        backgroundSize: "55px 55px",
      }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>✦ TWO WAYS TO DINE ✦</p>
          <h2 className="pf" style={{ fontSize: "clamp(28px,6vw,50px)", fontWeight: 900, color: "#faf6f0", lineHeight: 1.1 }}>
            Experience Imperial Cuisine
          </h2>
        </div>

        <div className="srv-grid">
          {services.map(s => (
            <div key={s.title} className="lift" style={{
              borderRadius: 14, overflow: "hidden",
              background: "#1a1128", border: "1px solid rgba(200,169,110,.13)",
            }}>
              {/* Photo */}
              <div style={{ position: "relative", height: "clamp(180px,28vw,260px)" }}>
                <div className="cover" style={{ position: "absolute", inset: 0, backgroundImage: `url('${s.photo}')` }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#1a1128,transparent 60%)" }} />
                <div style={{
                  position: "absolute", top: 14, left: 14,
                  background: s.badgeColor, color: s.badgeText,
                  borderRadius: 50, padding: "5px 13px",
                }}>
                  <span className="cin" style={{ fontSize: 9, fontWeight: 700, letterSpacing: "1.5px" }}>{s.badge}</span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "24px 24px 28px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <h3 className="pf" style={{ color: "#faf6f0", fontSize: "clamp(20px,4vw,24px)", fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p className="pf" style={{ color: "rgba(232,201,138,.7)", fontSize: 14, fontStyle: "italic", marginBottom: 12 }}>{s.tagline}</p>
                <p style={{ color: "rgba(250,246,240,.55)", fontSize: 13, lineHeight: 1.8, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 24 }}>
                  {s.tags.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
                </div>
                <a href={s.href} className="cin" style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg,#c8a96e,#e8c98a)", color: "#0f0a1a",
                  padding: "11px 26px", borderRadius: 4, fontWeight: 700, fontSize: 10, letterSpacing: "2px",
                }}>{s.cta} →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .srv-grid { display:grid; grid-template-columns:1fr; gap:20px; }
        @media(min-width:768px){ .srv-grid { grid-template-columns:repeat(2,1fr); } }
      `}</style>
    </section>
  );
}