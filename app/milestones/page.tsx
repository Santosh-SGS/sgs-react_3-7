import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milestones | Synergiz Global",
};

const milestones = [
  {
    icon: "✈",
    title: "IGI Delhi — Tallest ATC Tower",
    desc: "PMC for the tallest Air Traffic Control tower in India at Indira Gandhi International Airport, Delhi.",
  },
  {
    icon: "🏙",
    title: "Hyderabad — Largest PPP Infrastructure",
    desc: "PMC for the largest PPP (Public-Private Partnership) infrastructure project in Hyderabad.",
  },
  {
    icon: "🚇",
    title: "First 5D BIM & ERP in Metro Rail",
    desc: "Programme Consultant for the first 5D BIM implementation and ERP integration in Metro Rail in India.",
  },
  {
    icon: "🚄",
    title: "India's First High-Speed Rail",
    desc: "Planning & Contracts advisory for India's first High-Speed Rail project.",
  },
  {
    icon: "🌆",
    title: "Mumbai Urban Transport — ₹450B PMIS",
    desc: "Setup of Project Management Information System (PMIS) for various Mumbai Urban Transport projects with a total value exceeding ₹450 Billion.",
  },
];

export default function MilestonesPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="bg-grad-deep"
        style={{
          marginTop: "90px",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "3rem", fontWeight: 800, position: "relative", zIndex: 1 }}>
          Our Milestones
        </h1>
      </div>

      {/* Desktop timeline */}
      <div style={{ padding: "80px 40px" }}>
        {/* Horizontal scroll wrapper on desktop */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            overflowX: "auto",
            paddingBottom: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {milestones.map((m, i) => (
            <div
              key={m.title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "220px",
                flex: "0 0 220px",
              }}
            >
              {/* Circle */}
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  backgroundColor: "#E97132",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 2,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  style={{
                    width: "115px",
                    height: "115px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                  }}
                >
                  {m.icon}
                </div>
              </div>

              {/* Connector line */}
              <div style={{ width: "3px", height: "40px", backgroundColor: "#3498db", marginTop: "-4px" }} />

              {/* Number badge */}
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "#3498db",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>

              {/* Description */}
              <div
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  backgroundColor: "#f8f8f8",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #eee",
                }}
              >
                <h5
                  style={{
                    color: "#DB4F37",
                    fontWeight: 700,
                    fontSize: "14px",
                    marginBottom: "8px",
                  }}
                >
                  {m.title}
                </h5>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: "1.5" }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ backgroundColor: "rgba(0,0,0,0.85)", padding: "60px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ color: "#fff", fontSize: "2rem", fontWeight: 700 }}>By The Numbers</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "30px" }}>
          {[
            { val: "450B+", label: "Project Value (₹)", sub: "Mumbai Urban Transport PMIS" },
            { val: "5", label: "Key Sectors", sub: "Airport, Metro, HSR, Railway, Roads" },
            { val: "15+", label: "Years Experience", sub: "In infrastructure consulting" },
            { val: "5", label: "National Milestones", sub: "Industry firsts in India" },
          ].map((s) => (
            <div key={s.val} style={{ textAlign: "center", minWidth: "180px" }}>
              <p style={{ color: "#DB4F37", fontSize: "3rem", fontWeight: 800, margin: 0 }}>{s.val}</p>
              <p style={{ color: "#4AB4D4", fontWeight: 600, margin: "5px 0" }}>{s.label}</p>
              <p style={{ color: "#ccc", fontSize: "13px" }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
