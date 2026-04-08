"use client";
import { useEffect, useState } from "react";
import { Phone, ChevronDown, Star, MapPin, Clock } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  const T = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section id="home" style={{ position: "relative", height: "100vh", minHeight: "700px", overflow: "hidden" }}>
      {/* Full-bleed hero photo */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=85&fit=crop')`,
        backgroundSize: "cover", backgroundPosition: "center 40%",
      }} />
      {/* Multi-stop gradient overlay for drama */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(105deg, rgba(15,10,26,0.92) 0%, rgba(15,10,26,0.75) 40%, rgba(15,10,26,0.35) 70%, rgba(15,10,26,0.5) 100%)",
      }} />
      {/* Bottom fade for smooth section transition */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "200px",
        background: "linear-gradient(to top, #faf6f0 0%, transparent 100%)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "center", padding: "0 clamp(20px, 6vw, 100px)" }}>
        <div style={{ maxWidth: "660px" }}>

          {/* Rating pill */}
          <div style={{ ...T(0), display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(200,169,110,0.15)", border: "1px solid rgba(200,169,110,0.4)", borderRadius: "50px", padding: "7px 18px", marginBottom: "28px" }}>
            {[1,2,3,4,5].map(i => <Star key={i} size={11} fill="#c8a96e" color="#c8a96e" />)}
            <span style={{ color: "#c8a96e", fontSize: "12px", fontWeight: "600", letterSpacing: "1.5px" }}>PERFECT 5.0 RATING</span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair" style={{ ...T(100), fontSize: "clamp(46px, 8vw, 96px)", fontWeight: "800", lineHeight: "1.02", color: "#faf6f0", marginBottom: "6px" }}>
            Imperial
          </h1>
          <h1 className="font-playfair gold-text" style={{ ...T(150), fontSize: "clamp(46px, 8vw, 96px)", fontWeight: "800", lineHeight: "1.02", marginBottom: "6px", fontStyle: "italic" }}>
            Kitchen
          </h1>
          <p className="font-cinzel" style={{ ...T(200), color: "rgba(250,246,240,0.5)", fontSize: "clamp(11px, 1.5vw, 14px)", letterSpacing: "6px", marginBottom: "24px" }}>
            & RESTAURANT · PAPA ASHAFA, LAGOS
          </p>

          {/* Divider */}
          <div style={{ ...T(250), display: "flex", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.6))" }} />
            <span style={{ color: "rgba(200,169,110,0.7)", fontSize: "13px" }}>✦</span>
          </div>

          {/* Tagline */}
          <p className="font-playfair" style={{ ...T(300), color: "rgba(232,201,138,0.9)", fontSize: "clamp(16px, 2vw, 22px)", fontStyle: "italic", fontWeight: "400", marginBottom: "32px" }}>
            &ldquo;Where Every Meal is Royally Prepared&rdquo;
          </p>

          {/* Quick info */}
          <div style={{ ...T(350), display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "36px" }}>
            {[
              { icon: <MapPin size={13} />, text: "30 Suraogumakin Street" },
              { icon: <Clock size={13} />, text: "Open Daily · Closes 8:30 PM" },
              { icon: <Phone size={13} />, text: "0807 410 1786" },
            ].map(item => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "7px", color: "rgba(250,246,240,0.65)", fontSize: "13px" }}>
                <span style={{ color: "#c8a96e" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ ...T(420), display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a href="#menu" className="font-cinzel" style={{
              background: "linear-gradient(135deg, #c8a96e, #e8c98a)",
              color: "#0f0a1a", padding: "14px 36px", borderRadius: "4px",
              textDecoration: "none", fontWeight: "700", fontSize: "11px", letterSpacing: "2.5px",
              boxShadow: "0 6px 24px rgba(200,169,110,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(200,169,110,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(200,169,110,0.35)"; }}
            >
              VIEW MENU
            </a>
            <a href="#catering" className="font-cinzel" style={{
              background: "rgba(255,255,255,0.08)", color: "#faf6f0",
              padding: "14px 36px", borderRadius: "4px", textDecoration: "none",
              fontWeight: "600", fontSize: "11px", letterSpacing: "2.5px",
              border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)",
              transition: "background 0.2s, border-color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.borderColor = "rgba(200,169,110,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
            >
              BOOK CATERING
            </a>
          </div>
        </div>

        {/* Floating stats card — right side */}
        <div className="hidden-mobile float" style={{
          position: "absolute", right: "clamp(20px, 5vw, 80px)", bottom: "clamp(80px, 12vh, 160px)",
          background: "rgba(15,10,26,0.75)", backdropFilter: "blur(16px)",
          border: "1px solid rgba(200,169,110,0.2)", borderRadius: "12px",
          padding: "24px 28px", display: "flex", gap: "28px",
          opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.6s",
        }}
        >
          {[["5.0★", "Rating"], ["Daily", "Fresh Food"], ["8:30PM", "Last Order"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div className="font-playfair" style={{ color: "#c8a96e", fontSize: "20px", fontWeight: "700", lineHeight: "1" }}>{v}</div>
              <div style={{ color: "rgba(250,246,240,0.5)", fontSize: "10px", letterSpacing: "1.5px", marginTop: "4px" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
        zIndex: 2, opacity: visible ? 0.5 : 0, transition: "opacity 1s ease 1s",
        animation: "float 2.5s ease-in-out infinite",
      }}>
        <span className="font-cinzel" style={{ color: "#c8a96e", fontSize: "8px", letterSpacing: "4px" }}>DISCOVER</span>
        <ChevronDown size={15} color="#c8a96e" />
      </div>

      <style>{`
        .hidden-mobile { display: flex !important; }
        @media (max-width: 900px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </section>
  );
}
