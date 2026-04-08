"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Star, MapPin, Clock, Phone } from "lucide-react";

export default function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);

  const anim = (d = 0): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(22px)",
    transition: `opacity .65s ease ${d}ms, transform .65s ease ${d}ms`,
  });

  return (
    <section id="home" style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* BG photo */}
      <div className="cover" style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80&fit=crop')",
      }} />
      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(15,10,26,.94) 0%, rgba(15,10,26,.8) 45%, rgba(15,10,26,.55) 100%)",
      }} />
      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 180,
        background: "linear-gradient(to top,#faf6f0,transparent)",
      }} />

      <div className="wrap" style={{ position: "relative", zIndex: 2, padding: "100px 20px 100px", width: "100%" }}>
        {/* Rating badge */}
        <div style={{ ...anim(0), display: "inline-flex", alignItems: "center", gap: 7,
          background: "rgba(200,169,110,.13)", border: "1px solid rgba(200,169,110,.38)",
          borderRadius: 50, padding: "6px 16px", marginBottom: 24 }}>
          {[1,2,3,4,5].map(i => <Star key={i} size={11} fill="#c8a96e" color="#c8a96e" />)}
          <span className="cin" style={{ color: "#c8a96e", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px" }}>PERFECT 5.0 RATING</span>
        </div>

        {/* Headline */}
        <h1 className="pf" style={{ ...anim(80), fontSize: "clamp(44px,10vw,90px)", fontWeight: 900, lineHeight: 1.02, color: "#faf6f0", marginBottom: 4 }}>
          Imperial
        </h1>
        <h1 className="pf gold" style={{ ...anim(130), fontSize: "clamp(44px,10vw,90px)", fontWeight: 900, lineHeight: 1.02, fontStyle: "italic", marginBottom: 10 }}>
          Kitchen
        </h1>
        <p className="cin" style={{ ...anim(180), color: "rgba(250,246,240,.45)", fontSize: "clamp(9px,2vw,12px)", letterSpacing: "5px", marginBottom: 20 }}>
          & RESTAURANT · PAPA ASHAFA, LAGOS
        </p>

        <p className="pf" style={{ ...anim(230), color: "rgba(232,201,138,.9)", fontSize: "clamp(15px,3vw,20px)", fontStyle: "italic", marginBottom: 32, maxWidth: 460 }}>
          &ldquo;Where Every Meal is Royally Prepared&rdquo;
        </p>

        {/* Info pills */}
        <div style={{ ...anim(280), display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 34 }}>
          {[
            [<MapPin size={12} key="m" />, "Papa Ashafa, Lagos"],
            [<Clock size={12} key="c" />, "Open Daily · 8:30 PM"],
            [<Phone size={12} key="p" />, "0807 410 1786"],
          ].map(([icon, text], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(250,246,240,.6)", fontSize: 12 }}>
              <span style={{ color: "#c8a96e" }}>{icon}</span>{text}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ ...anim(340), display: "flex", flexWrap: "wrap", gap: 12 }}>
          <a href="#menu" className="cin" style={{
            background: "linear-gradient(135deg,#c8a96e,#e8c98a)", color: "#0f0a1a",
            padding: "14px 32px", borderRadius: 4, fontWeight: 700,
            fontSize: 11, letterSpacing: "2px", boxShadow: "0 6px 24px rgba(200,169,110,.35)",
            transition: "opacity .2s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = ".88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >VIEW MENU</a>
          <a href="#catering" className="cin" style={{
            background: "rgba(255,255,255,.08)", color: "#faf6f0",
            padding: "14px 32px", borderRadius: 4, fontWeight: 600,
            fontSize: 11, letterSpacing: "2px",
            border: "1px solid rgba(255,255,255,.2)", backdropFilter: "blur(8px)",
            transition: "background .2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.15)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,.08)"}
          >BOOK CATERING</a>
          <a href="tel:08074101786" className="cin" style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "transparent", color: "rgba(250,246,240,.7)",
            padding: "14px 24px", borderRadius: 4, fontWeight: 600,
            fontSize: 11, letterSpacing: "1.5px",
            border: "1px solid rgba(255,255,255,.12)",
          }}><Phone size={13} />CALL US</a>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
        opacity: vis ? .5 : 0, transition: "opacity 1s ease 1s",
        animation: "float 2.5s ease-in-out infinite", zIndex: 2,
      }}>
        <span className="cin" style={{ color: "#c8a96e", fontSize: 8, letterSpacing: "4px" }}>SCROLL</span>
        <ChevronDown size={14} color="#c8a96e" />
      </div>
    </section>
  );
}
