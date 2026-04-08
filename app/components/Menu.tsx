"use client";
import { useState } from "react";

const categories = [
  {
    id: "rice", icon: "🍛", label: "Rice Dishes", from: "From ₦1,500",
    photo: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80&fit=crop",
    items: [
      { name: "Party Jollof Rice", desc: "Our signature smoky, aromatic party jollof — the one everyone asks about", popular: true },
      { name: "Fried Rice", desc: "Colourful, well-seasoned with vegetables and your choice of protein", popular: false },
      { name: "Coconut Rice", desc: "Creamy, aromatic — cooked in fresh coconut milk", popular: false },
      { name: "White Rice", desc: "Fluffy, perfectly cooked — pairs with any stew or sauce", popular: false },
      { name: "Ofada Rice & Ayamase", desc: "Authentic native delicacy with our rich ayamase stew", popular: true },
      { name: "Chinese Fried Rice", desc: "Continental style with eggs, vegetables and soy sauce", popular: false },
    ],
  },
  {
    id: "soups", icon: "🥘", label: "Soups & Swallows", from: "From ₦2,000",
    photo: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop",
    items: [
      { name: "Egusi Soup", desc: "Rich, nutty, slow-cooked with assorted meat and fish", popular: true },
      { name: "Efo Riro", desc: "Vibrant spinach stew with palm oil, crayfish and peppers", popular: false },
      { name: "Ogbono Soup", desc: "Classic draw soup in the most traditional style", popular: false },
      { name: "Okro Soup", desc: "Fresh, well-seasoned — your choice of smooth or chunky", popular: false },
      { name: "Edikang Ikong", desc: "Premium vegetable soup from Cross River — a true delicacy", popular: true },
      { name: "Banga Soup", desc: "Warm palm nut soup — deeply comforting and flavourful", popular: false },
    ],
  },
  {
    id: "protein", icon: "🍗", label: "Proteins & Meats", from: "From ₦1,000",
    photo: "https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=600&q=80&fit=crop",
    items: [
      { name: "Fried Chicken", desc: "Crispy golden crust, impossibly juicy inside — perfectly seasoned", popular: true },
      { name: "Grilled Chicken", desc: "Marinated overnight, char-grilled to smoky perfection", popular: true },
      { name: "Turkey", desc: "Tender, deeply flavoured — the celebration choice", popular: false },
      { name: "Assorted Meat", desc: "Slow-cooked variety of premium beef parts in rich sauce", popular: false },
      { name: "Fresh Fish", desc: "Fried, grilled, or cooked in sauce — tell us how you like it", popular: false },
      { name: "Goat Meat Pepper Soup", desc: "Slow-simmered goat meat in aromatic spiced broth", popular: true },
    ],
  },
  {
    id: "continental", icon: "🍝", label: "Continental", from: "From ₦1,500",
    photo: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80&fit=crop",
    items: [
      { name: "Spaghetti Bolognese", desc: "Classic Italian-inspired pasta with rich, meaty sauce", popular: false },
      { name: "Spaghetti Jollof", desc: "The Nigerian twist on pasta — smoky and completely addictive", popular: true },
      { name: "Sharwama", desc: "Freshly assembled with grilled meat, veggies and special sauce", popular: true },
      { name: "Burgers", desc: "Hearty, made-to-order — with proper toppings and sauces", popular: false },
      { name: "Pasta Variations", desc: "Multiple pasta options with different sauces — ask for today's", popular: false },
      { name: "Fresh Salads", desc: "Crisp, seasonal — a healthy and refreshing option", popular: false },
    ],
  },
  {
    id: "staples", icon: "🍠", label: "Nigerian Staples", from: "From ₦800",
    photo: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80&fit=crop",
    items: [
      { name: "Beans Porridge", desc: "Creamy, well-seasoned — a comforting Nigerian staple", popular: false },
      { name: "Yam Porridge (Asaro)", desc: "Rich, perfectly spiced yam — a bowl of pure comfort", popular: true },
      { name: "Moi Moi", desc: "Steamed bean pudding — moist, flavourful, with your add-ins", popular: false },
      { name: "Fried Yam", desc: "Golden, crispy outside, fluffy inside — serve with sauce", popular: true },
      { name: "Fried Plantain (Dodo)", desc: "Sweet, caramelised, perfectly golden — the perfect side", popular: true },
      { name: "Boiled Plantain", desc: "Simple, wholesome, naturally sweet", popular: false },
    ],
  },
  {
    id: "drinks", icon: "🥤", label: "Drinks", from: "From ₦300",
    photo: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80&fit=crop",
    items: [
      { name: "Chapman", desc: "Our signature mix — vibrant, refreshing, and utterly Nigerian", popular: true },
      { name: "Zobo", desc: "Traditional hibiscus drink — naturally sweet, perfectly spiced", popular: true },
      { name: "Fresh Juices", desc: "Freshly pressed — no concentrates, no shortcuts", popular: false },
      { name: "Smoothies", desc: "Blended fresh fruits and greens", popular: false },
      { name: "Soft Drinks", desc: "Full range of chilled sodas and mineral water", popular: false },
      { name: "Bottled Water", desc: "Chilled purified water", popular: false },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("rice");
  const cat = categories.find(c => c.id === active)!;

  return (
    <section id="menu" style={{ background: "var(--cream)", padding: "100px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p className="eyebrow" style={{ marginBottom: "14px" }}>✦ OUR MENU ✦</p>
          <h2 className="font-playfair" style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: "800", color: "#0f0a1a", lineHeight: "1.12", marginBottom: "12px" }}>
            Imperial Kitchen Menu
          </h2>
          <p className="font-playfair" style={{ color: "#8b4513", fontSize: "18px", fontStyle: "italic" }}>
            Authentic Nigerian Cuisine & Continental Favourites
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "40px" }}>
          {categories.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)} style={{
              display: "flex", alignItems: "center", gap: "7px",
              padding: "10px 20px", borderRadius: "50px",
              background: active === c.id ? "#0f0a1a" : "white",
              color: active === c.id ? "#c8a96e" : "#5a4a38",
              border: active === c.id ? "none" : "1px solid rgba(90,74,56,0.2)",
              fontSize: "13px", fontWeight: "500", cursor: "pointer",
              boxShadow: active === c.id ? "0 4px 20px rgba(15,10,26,0.2)" : "none",
              transition: "all 0.2s",
            }}>
              <span style={{ fontSize: "14px" }}>{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Full-bleed menu panel */}
      <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", minHeight: "520px" }}>
        {/* Photo side */}
        <div style={{
          position: "relative", overflow: "hidden",
          backgroundImage: `url('${cat.photo}')`,
          backgroundSize: "cover", backgroundPosition: "center",
          transition: "background-image 0.3s",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,10,26,0.2) 0%, rgba(15,10,26,0.05) 100%)" }} />
          <div style={{ position: "absolute", bottom: "32px", left: "32px" }}>
            <div style={{ fontSize: "40px", marginBottom: "8px" }}>{cat.icon}</div>
            <div className="font-playfair" style={{ color: "#faf6f0", fontSize: "28px", fontWeight: "700", textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>{cat.label}</div>
            <div style={{ color: "rgba(200,169,110,0.9)", fontSize: "13px", marginTop: "4px" }}>{cat.from}</div>
          </div>
        </div>

        {/* Items side */}
        <div style={{ background: "white", padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
            {cat.items.map((item, i) => (
              <div key={item.name} style={{
                padding: "20px 20px",
                borderBottom: i < cat.items.length - 2 ? "1px solid rgba(90,74,56,0.08)" : "none",
                borderRight: i % 2 === 0 ? "1px solid rgba(90,74,56,0.08)" : "none",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginBottom: "5px" }}>
                  <div style={{ color: "#0f0a1a", fontSize: "15px", fontWeight: "600", lineHeight: "1.3" }}>{item.name}</div>
                  {item.popular && (
                    <span style={{ background: "#c8a96e", color: "#0f0a1a", fontSize: "9px", fontWeight: "700", letterSpacing: "1px", padding: "3px 8px", borderRadius: "50px", flexShrink: 0, marginTop: "2px" }}>
                      POPULAR
                    </span>
                  )}
                </div>
                <div style={{ color: "#8a7a65", fontSize: "12px", lineHeight: "1.5" }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(90,74,56,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ color: "#8a7a65", fontSize: "13px" }}>Prices vary · Call for full pricing & daily specials</p>
            <a href="tel:08074101786" className="font-cinzel" style={{
              background: "#0f0a1a", color: "#c8a96e",
              padding: "10px 24px", borderRadius: "4px",
              textDecoration: "none", fontSize: "10px", letterSpacing: "2px", fontWeight: "700",
            }}>
              📞 CALL NOW
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 380px"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="grid-template-columns: 380px"] > div:first-child {
            height: 220px !important;
          }
        }
        @media (max-width: 600px) {
          div[style*="grid-template-columns: 1fr 1fr"][style*="gap: 0"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
