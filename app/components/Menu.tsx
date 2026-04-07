"use client";
import { useState } from "react";

const menuCategories = [
  {
    id: "rice",
    icon: "🍛",
    title: "Rice Dishes",
    from: "From ₦1,500",
    color: "#c9a84c",
    items: [
      { name: "Jollof Rice", desc: "Our signature! Imperial party jollof or regular — perfectly smoky and aromatic" },
      { name: "Fried Rice", desc: "Colorful, flavorful, perfectly seasoned with vegetables and proteins" },
      { name: "Coconut Rice", desc: "Aromatic, creamy perfection — a tropical delight" },
      { name: "White Rice", desc: "Perfect base for any sauce or stew" },
      { name: "Ofada Rice & Ayamase", desc: "Native delicacy — the authentic local experience" },
      { name: "Chinese Fried Rice", desc: "Continental style with eggs, vegetables, and soy sauce" },
    ],
  },
  {
    id: "soups",
    icon: "🥘",
    title: "Soups & Swallows",
    from: "From ₦2,000",
    color: "#dc2626",
    items: [
      { name: "Egusi Soup", desc: "Rich, nutty, slow-cooked with assorted meats" },
      { name: "Efo Riro", desc: "Spinach stew perfection with palm oil and peppers" },
      { name: "Ogbono Soup", desc: "Draw soup in the most authentic traditional style" },
      { name: "Okro Soup", desc: "Fresh, well-seasoned — smooth or lumpy as you prefer" },
      { name: "Edikang Ikong", desc: "Premium vegetable soup specialty from Cross River" },
      { name: "Swallows", desc: "Pounded Yam • Eba • Amala • Semo • Fufu" },
    ],
  },
  {
    id: "proteins",
    icon: "🍗",
    title: "Proteins & Meats",
    from: "From ₦1,000",
    color: "#6b21a8",
    items: [
      { name: "Fried Chicken", desc: "Crispy, juicy, seasoned to absolute perfection" },
      { name: "Grilled Chicken", desc: "Healthy, tasty, well-marinated and char-grilled" },
      { name: "Turkey", desc: "Tender, flavorful — a celebration favorite" },
      { name: "Assorted Meat", desc: "Variety of beef parts in rich sauce" },
      { name: "Fresh Fish", desc: "Fried, grilled, or served in sauce — your choice" },
      { name: "Goat Meat Pepper Soup", desc: "Spicy, well-cooked goat meat in aromatic broth" },
    ],
  },
  {
    id: "continental",
    icon: "🍝",
    title: "Continental & Pasta",
    from: "From ₦1,500",
    color: "#0369a1",
    items: [
      { name: "Spaghetti Bolognese", desc: "Classic Italian-style pasta with rich meat sauce" },
      { name: "Spaghetti Jollof", desc: "Nigerian twist on pasta — uniquely delicious" },
      { name: "Sharwama", desc: "Freshly assembled with grilled meat and sauces" },
      { name: "Burgers & Sandwiches", desc: "Hearty, satisfying — made fresh to order" },
      { name: "Salads", desc: "Fresh, crisp, and nutritious — custom combinations" },
      { name: "Pasta Variations", desc: "Multiple pasta options with different sauces" },
    ],
  },
  {
    id: "staples",
    icon: "🍠",
    title: "Nigerian Staples",
    from: "From ₦800",
    color: "#b45309",
    items: [
      { name: "Beans Porridge", desc: "Creamy, perfectly spiced — a comforting classic" },
      { name: "Yam Porridge", desc: "Rich, flavorful, prepared just right" },
      { name: "Moi Moi", desc: "Steamed bean pudding — soft, moist perfection" },
      { name: "Fried Yam", desc: "Golden, crispy on the outside, fluffy inside" },
      { name: "Fried Plantain (Dodo)", desc: "Sweet, caramelized — the perfect side dish" },
      { name: "Boiled Plantain", desc: "Simple, wholesome, naturally sweet" },
    ],
  },
  {
    id: "drinks",
    icon: "🥤",
    title: "Drinks & Beverages",
    from: "From ₦300",
    color: "#065f46",
    items: [
      { name: "Soft Drinks", desc: "Full range of chilled sodas and mineral water" },
      { name: "Chapman", desc: "Our special signature mix — refreshing and vibrant" },
      { name: "Zobo", desc: "Traditional hibiscus drink — naturally sweet and tangy" },
      { name: "Fresh Juices", desc: "Freshly pressed fruit juices — no concentrates" },
      { name: "Smoothies", desc: "Blended fresh fruits and vegetables" },
      { name: "Bottled Water", desc: "Chilled purified water" },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("rice");

  const currentCategory = menuCategories.find(c => c.id === active)!;

  return (
    <section id="menu" style={{
      padding: "96px 24px",
      background: "linear-gradient(180deg, #fdf8f0 0%, #f5ecd7 100%)",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="font-cinzel" style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "5px", marginBottom: "16px" }}>
            ✦ OUR MENU ✦
          </div>
          <h2 className="font-cinzel" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: "800", color: "#1a0a2e", lineHeight: "1.15", marginBottom: "16px" }}>
            Imperial Kitchen Menu
          </h2>
          <p className="font-cormorant" style={{ color: "#6b21a8", fontSize: "20px", fontStyle: "italic", marginBottom: "8px" }}>
            Authentic Nigerian Cuisine & Continental Favorites
          </p>
          <p style={{ color: "#6b5a80", fontSize: "12px", letterSpacing: "0.5px" }}>
            Menu items and prices subject to availability. Call ahead for daily specials!
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "20px" }}>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <span style={{ color: "#c9a84c" }}>✦</span>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
        </div>

        {/* Category tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "8px",
          justifyContent: "center", marginBottom: "48px",
        }}>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="font-cinzel"
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                padding: "10px 20px", borderRadius: "50px",
                border: active === cat.id ? "none" : "1px solid rgba(26,10,46,0.15)",
                background: active === cat.id
                  ? "linear-gradient(135deg, #1a0a2e, #2d1b4e)"
                  : "white",
                color: active === cat.id ? "#c9a84c" : "#2d1b4e",
                fontSize: "11px", letterSpacing: "1px", fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: active === cat.id ? "0 4px 15px rgba(26,10,46,0.2)" : "none",
              }}
            >
              <span>{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active category display */}
        <div style={{
          background: "white",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 40px rgba(26,10,46,0.08)",
          border: "1px solid rgba(201,168,76,0.15)",
        }}>
          {/* Category header bar */}
          <div style={{
            background: `linear-gradient(135deg, #1a0a2e, #2d1b4e)`,
            padding: "28px 36px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ fontSize: "32px" }}>{currentCategory.icon}</span>
              <div>
                <h3 className="font-cinzel" style={{ color: "#fdf8f0", fontSize: "18px", fontWeight: "700", marginBottom: "2px" }}>
                  {currentCategory.title}
                </h3>
                <span style={{ color: "#c9a84c", fontSize: "12px" }}>{currentCategory.from}</span>
              </div>
            </div>
            <div style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "50px",
              padding: "6px 16px",
              color: "#c9a84c", fontSize: "11px", letterSpacing: "1px",
            }}>
              {currentCategory.items.length} Items
            </div>
          </div>

          {/* Menu items grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
          }}>
            {currentCategory.items.map((item, idx) => (
              <div
                key={item.name}
                style={{
                  padding: "24px 28px",
                  borderBottom: idx < currentCategory.items.length - 1 ? "1px solid rgba(26,10,46,0.06)" : "none",
                  borderRight: (idx % 2 === 0) ? "1px solid rgba(26,10,46,0.06)" : "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#fdf8f0"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "white"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#1a0a2e", fontSize: "15px", fontWeight: "700", marginBottom: "4px" }}>
                      {item.name}
                    </div>
                    <div style={{ color: "#6b5a80", fontSize: "13px", lineHeight: "1.5" }}>
                      {item.desc}
                    </div>
                  </div>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: currentCategory.color,
                    flexShrink: 0, marginTop: "6px",
                    opacity: 0.6,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ color: "#6b5a80", fontSize: "14px", marginBottom: "20px" }}>
            Full menu with current pricing available at our restaurant
          </p>
          <a
            href="tel:08074101786"
            className="font-cinzel"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(135deg, #1a0a2e, #2d1b4e)",
              color: "#c9a84c", padding: "14px 36px",
              borderRadius: "4px", textDecoration: "none",
              fontWeight: "700", fontSize: "12px", letterSpacing: "2px",
            }}
          >
            📞 CALL FOR DAILY SPECIALS & PRICING
          </a>
        </div>
      </div>
    </section>
  );
}
