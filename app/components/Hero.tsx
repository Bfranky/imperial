"use client";
import { useEffect, useState } from "react";
import { Phone, ChevronDown, Star } from "lucide-react";

const badges = [
  { icon: "🍽️", text: "Restaurant Dining" },
  { icon: "📦", text: "Takeaway Available" },
  { icon: "🎉", text: "Professional Catering" },
  { icon: "👨‍🍳", text: "Fresh Daily Prep" },
  { icon: "🕗", text: "Open Until 8:30 PM" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(160deg, #0d0520 0%, #1a0a2e 30%, #2d1b4e 60%, #1a0a2e 80%, #3d0020 100%)",
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "-200px", right: "-200px",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(107,33,168,0.25) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-150px", left: "-150px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,0,0,0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Grid pattern overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* Diagonal gold accent line */}
      <div style={{
        position: "absolute", top: 0, right: "30%", width: "1px", height: "100%",
        background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.15), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 24px 80px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "780px" }}>

          {/* Rating badge */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "50px", padding: "6px 16px", marginBottom: "28px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#c9a84c" color="#c9a84c" />)}
            <span style={{ color: "#c9a84c", fontSize: "12px", fontWeight: "700", letterSpacing: "1px" }}>
              5.0 PERFECT RATING
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-cinzel"
            style={{
              fontSize: "clamp(36px, 7vw, 88px)",
              fontWeight: "900",
              lineHeight: "1.05",
              letterSpacing: "-0.5px",
              marginBottom: "8px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            <span style={{ color: "#fdf8f0", display: "block" }}>IMPERIAL</span>
            <span className="gold-shimmer" style={{ display: "block" }}>KITCHEN</span>
          </h1>
          <div
            className="font-cormorant"
            style={{
              color: "rgba(253,248,240,0.6)",
              fontSize: "clamp(16px, 2.5vw, 26px)",
              letterSpacing: "6px",
              fontWeight: "300",
              marginBottom: "28px",
              opacity: visible ? 1 : 0,
              transition: "all 0.7s ease 0.2s",
            }}
          >
            & RESTAURANT
          </div>

          {/* Tagline */}
          <div
            style={{
              marginBottom: "16px",
              opacity: visible ? 1 : 0,
              transition: "all 0.7s ease 0.3s",
            }}
          >
            <div style={{
              display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px"
            }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5))" }} />
              <span style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "3px" }}>✦</span>
            </div>
            <p className="font-cormorant" style={{
              color: "rgba(240,208,128,0.9)",
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontStyle: "italic",
              fontWeight: "300",
              letterSpacing: "1px",
            }}>
              &ldquo;Where Every Meal is Royally Prepared&rdquo;
            </p>
          </div>

          {/* Sub description */}
          <p style={{
            color: "rgba(253,248,240,0.65)",
            fontSize: "15px",
            lineHeight: "1.8",
            maxWidth: "540px",
            marginBottom: "40px",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.4s",
          }}>
            Papa Ashafa&apos;s premier restaurant and catering service. Authentic Nigerian cuisine 
            and continental favorites, prepared fresh daily by our expert chefs.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "48px",
              opacity: visible ? 1 : 0,
              transition: "all 0.7s ease 0.5s",
            }}
          >
            <a
              href="#menu"
              className="font-cinzel"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(135deg, #c9a84c, #f0d080, #c9a84c)",
                backgroundSize: "200% auto",
                color: "#1a0a2e", padding: "14px 32px",
                borderRadius: "4px", textDecoration: "none",
                fontWeight: "700", fontSize: "12px", letterSpacing: "2px",
                transition: "background-position 0.4s, transform 0.2s",
                boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundPosition = "right center"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundPosition = "left center"; }}
            >
              VIEW MENU
            </a>
            <a
              href="#catering"
              className="font-cinzel"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "transparent",
                color: "#c9a84c", padding: "14px 32px",
                borderRadius: "4px", textDecoration: "none",
                fontWeight: "700", fontSize: "12px", letterSpacing: "2px",
                border: "1px solid rgba(201,168,76,0.5)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor = "#c9a84c"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
            >
              BOOK CATERING
            </a>
            <a
              href="tel:08074101786"
              className="font-cinzel"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,255,255,0.05)",
                color: "#fdf8f0", padding: "14px 24px",
                borderRadius: "4px", textDecoration: "none",
                fontWeight: "600", fontSize: "12px", letterSpacing: "1px",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s",
              }}
            >
              <Phone size={14} />
              0807 410 1786
            </a>
          </div>

          {/* Service Badges */}
          <div
            style={{
              display: "flex", flexWrap: "wrap", gap: "10px",
              opacity: visible ? 1 : 0,
              transition: "all 0.7s ease 0.6s",
            }}
          >
            {badges.map((b) => (
              <div
                key={b.text}
                style={{
                  display: "flex", alignItems: "center", gap: "7px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "50px", padding: "6px 14px",
                  color: "rgba(253,248,240,0.75)", fontSize: "12px",
                }}
              >
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location tag */}
        <div style={{
          position: "absolute", bottom: "40px", right: "24px",
          textAlign: "right",
          opacity: visible ? 1 : 0,
          transition: "all 0.7s ease 0.7s",
        }}>
          <div style={{ color: "rgba(201,168,76,0.6)", fontSize: "10px", letterSpacing: "3px", marginBottom: "4px" }}>
            LOCATION
          </div>
          <div className="font-cormorant" style={{ color: "#fdf8f0", fontSize: "18px", fontStyle: "italic" }}>
            Papa Ashafa, Lagos
          </div>
          <div style={{ color: "rgba(253,248,240,0.4)", fontSize: "11px" }}>
            30 Suraogumakin Street
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
        opacity: 0.5,
        animation: "float 2s ease-in-out infinite",
      }}>
        <span style={{ color: "#c9a84c", fontSize: "9px", letterSpacing: "3px" }}>SCROLL</span>
        <ChevronDown size={16} color="#c9a84c" />
      </div>
    </section>
  );
}
