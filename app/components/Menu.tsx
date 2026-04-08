"use client";
import { useState } from "react";

const cats = [
  {
    id:"rice", icon:"🍛", label:"Rice", from:"From ₦1,500",
    photo:"https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80&fit=crop",
    items:[
      {n:"Party Jollof Rice",d:"Smoky, aromatic party jollof — the one everyone asks about",pop:true},
      {n:"Fried Rice",d:"Colourful, well-seasoned with vegetables and protein",pop:false},
      {n:"Coconut Rice",d:"Creamy, aromatic — cooked in fresh coconut milk",pop:false},
      {n:"White Rice",d:"Fluffy, perfectly cooked — pairs with any stew or sauce",pop:false},
      {n:"Ofada & Ayamase",d:"Authentic native delicacy with rich ayamase stew",pop:true},
      {n:"Chinese Fried Rice",d:"Continental style with eggs, vegetables and soy sauce",pop:false},
    ],
  },
  {
    id:"soups", icon:"🥘", label:"Soups", from:"From ₦2,000",
    photo:"https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop",
    items:[
      {n:"Egusi Soup",d:"Rich, nutty, slow-cooked with assorted meat and fish",pop:true},
      {n:"Efo Riro",d:"Vibrant spinach stew with palm oil, crayfish and peppers",pop:false},
      {n:"Ogbono Soup",d:"Classic draw soup — traditional style",pop:false},
      {n:"Okro Soup",d:"Fresh, well-seasoned — smooth or chunky your choice",pop:false},
      {n:"Edikang Ikong",d:"Premium Cross River vegetable soup — a true delicacy",pop:true},
      {n:"Banga Soup",d:"Warm palm nut soup — deeply comforting",pop:false},
    ],
  },
  {
    id:"protein", icon:"🍗", label:"Proteins", from:"From ₦1,000",
    photo:"https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=600&q=80&fit=crop",
    items:[
      {n:"Fried Chicken",d:"Crispy golden crust, impossibly juicy — perfectly seasoned",pop:true},
      {n:"Grilled Chicken",d:"Marinated overnight, char-grilled to smoky perfection",pop:true},
      {n:"Turkey",d:"Tender, deeply flavoured — the celebration choice",pop:false},
      {n:"Assorted Meat",d:"Slow-cooked variety of premium beef parts in rich sauce",pop:false},
      {n:"Fresh Fish",d:"Fried, grilled, or cooked in sauce — your way",pop:false},
      {n:"Goat Meat Pepper Soup",d:"Slow-simmered in aromatic spiced broth",pop:true},
    ],
  },
  {
    id:"continental", icon:"🍝", label:"Continental", from:"From ₦1,500",
    photo:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80&fit=crop",
    items:[
      {n:"Spaghetti Bolognese",d:"Classic pasta with rich, meaty sauce",pop:false},
      {n:"Spaghetti Jollof",d:"Nigerian twist on pasta — smoky and addictive",pop:true},
      {n:"Sharwama",d:"Freshly assembled with grilled meat and special sauce",pop:true},
      {n:"Burgers",d:"Hearty, made-to-order with proper toppings",pop:false},
      {n:"Pasta Variations",d:"Multiple options — ask for today's special",pop:false},
      {n:"Fresh Salads",d:"Crisp and refreshing — a healthy option",pop:false},
    ],
  },
  {
    id:"staples", icon:"🍠", label:"Staples", from:"From ₦800",
    photo:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80&fit=crop",
    items:[
      {n:"Beans Porridge",d:"Creamy, well-seasoned — a comforting classic",pop:false},
      {n:"Yam Porridge (Asaro)",d:"Rich, perfectly spiced — pure comfort in a bowl",pop:true},
      {n:"Moi Moi",d:"Steamed bean pudding — moist and flavourful",pop:false},
      {n:"Fried Yam",d:"Golden, crispy outside, fluffy inside",pop:true},
      {n:"Fried Plantain (Dodo)",d:"Sweet, caramelised — the perfect side dish",pop:true},
      {n:"Boiled Plantain",d:"Simple, wholesome, naturally sweet",pop:false},
    ],
  },
  {
    id:"drinks", icon:"🥤", label:"Drinks", from:"From ₦300",
    photo:"https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80&fit=crop",
    items:[
      {n:"Chapman",d:"Our signature mix — vibrant and refreshingly Nigerian",pop:true},
      {n:"Zobo",d:"Traditional hibiscus drink — naturally sweet, perfectly spiced",pop:true},
      {n:"Fresh Juices",d:"Freshly pressed — no concentrates, no shortcuts",pop:false},
      {n:"Smoothies",d:"Blended fresh fruits and greens",pop:false},
      {n:"Soft Drinks",d:"Full range of chilled sodas and mineral water",pop:false},
      {n:"Bottled Water",d:"Chilled purified water",pop:false},
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("rice");
  const cat = cats.find(c => c.id === active)!;

  return (
    <section id="menu" style={{ background: "var(--cream)", padding: "80px 0" }}>
      <div className="wrap" style={{ padding: "0 20px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>✦ OUR MENU ✦</p>
          <h2 className="pf" style={{ fontSize: "clamp(28px,6vw,50px)", fontWeight: 900, color: "#0f0a1a", lineHeight: 1.1, marginBottom: 10 }}>
            Imperial Kitchen Menu
          </h2>
          <p className="pf" style={{ color: "#8b4513", fontSize: "clamp(14px,3vw,17px)", fontStyle: "italic" }}>
            Authentic Nigerian Cuisine & Continental Favourites
          </p>
        </div>

        {/* Tab scroll bar */}
        <div style={{
          display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4,
          scrollbarWidth: "none", marginBottom: 32,
          WebkitOverflowScrolling: "touch",
        }}>
          {cats.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)} style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "9px 18px", borderRadius: 50, flexShrink: 0,
              background: active === c.id ? "#0f0a1a" : "white",
              color: active === c.id ? "#c8a96e" : "#5a4a38",
              border: active === c.id ? "none" : "1px solid rgba(90,74,56,.18)",
              fontSize: 13, fontWeight: 500, transition: "all .18s",
              boxShadow: active === c.id ? "0 4px 16px rgba(15,10,26,.18)" : "none",
            }}>
              <span style={{ fontSize: 14 }}>{c.icon}</span>{c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Full-width panel */}
      <div className="menu-panel">
        {/* Photo col */}
        <div className="menu-photo cover" style={{ backgroundImage: `url('${cat.photo}')` }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(15,10,26,.15),rgba(15,10,26,.02))" }} />
          <div style={{ position: "absolute", bottom: 24, left: 24 }}>
            <div style={{ fontSize: 36, marginBottom: 6 }}>{cat.icon}</div>
            <div className="pf" style={{ color: "#faf6f0", fontSize: "clamp(20px,4vw,26px)", fontWeight: 700, textShadow: "0 2px 16px rgba(0,0,0,.5)" }}>{cat.label}</div>
            <div style={{ color: "rgba(200,169,110,.9)", fontSize: 12, marginTop: 2 }}>{cat.from}</div>
          </div>
        </div>

        {/* Items col */}
        <div style={{ background: "white", padding: "clamp(24px,5vw,40px) clamp(20px,5vw,44px)" }}>
          <div className="menu-items">
            {cat.items.map((item, i) => (
              <div key={item.n} style={{
                padding: "16px 0",
                borderBottom: i < cat.items.length - 1 ? "1px solid rgba(90,74,56,.08)" : "none",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 4 }}>
                  <span style={{ color: "#0f0a1a", fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>{item.n}</span>
                  {item.pop && (
                    <span style={{
                      background: "#c8a96e", color: "#0f0a1a",
                      fontSize: 8, fontWeight: 700, letterSpacing: "1px",
                      padding: "3px 7px", borderRadius: 50, flexShrink: 0, marginTop: 2,
                    }}>POPULAR</span>
                  )}
                </div>
                <p style={{ color: "#8a7a65", fontSize: 12, lineHeight: 1.5 }}>{item.d}</p>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 20, paddingTop: 18, borderTop: "1px solid rgba(90,74,56,.1)",
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
          }}>
            <p style={{ color: "#8a7a65", fontSize: 12 }}>Call for full pricing & daily specials</p>
            <a href="tel:08074101786" className="cin" style={{
              background: "#0f0a1a", color: "#c8a96e",
              padding: "9px 22px", borderRadius: 4, fontSize: 9, letterSpacing: "2px", fontWeight: 700,
            }}>📞 CALL NOW</a>
          </div>
        </div>
      </div>

      <style>{`
        div[style*="scrollbarWidth"] { -ms-overflow-style: none; }
        div[style*="scrollbarWidth"]::-webkit-scrollbar { display: none; }
        .menu-panel {
          display: grid;
          grid-template-columns: 1fr;
          margin-top: 0;
        }
        .menu-photo {
          position: relative;
          height: 220px;
        }
        .menu-items {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media(min-width:768px){
          .menu-panel { grid-template-columns: 340px 1fr; }
          .menu-photo { height: auto; min-height: 480px; }
          .menu-items { grid-template-columns: 1fr 1fr; column-gap: 0; }
        }
      `}</style>
    </section>
  );
}
