import type { Metadata } from "next";
import { S3_BASE } from "@/lib/api";

export const metadata: Metadata = {
  title: "Our Sectors | Synergiz Global",
};

const sectors = [
  {
    id: "airport",
    label: "Airport",
    img: `${S3_BASE}/img/sectors/airplane.png`,
    description:
      "Synergiz has provided Project Management Consultancy services for world-class airport infrastructure projects including new terminal developments, airside expansion, and systems integration. Our expertise covers planning, scheduling, cost control, quality management, and stakeholder coordination for complex airport PMC assignments.",
    highlights: [
      "Airport construction management",
      "Terminal redevelopment PMC",
      "Airside expansion and systems integration",
      "Stakeholder and interface management",
      "PMC for tallest ATC tower in India (IGI Delhi)",
    ],
  },
  {
    id: "metro-rail",
    label: "Metro Rail",
    img: `${S3_BASE}/img/sectors/metro.png`,
    description:
      "We provide comprehensive project management services for metro rail projects including schedule management, cost management, project controls, and 5D BIM implementation. Our team has hands-on experience in India's most complex metro rail programmes.",
    highlights: [
      "Schedule management & project controls",
      "Cost management & financial planning",
      "5D BIM implementation (first in India)",
      "ERP system integration for metro rail",
      "Programme consultant for metro PPP projects",
    ],
  },
  {
    id: "highspeed-rail",
    label: "High Speed Rail",
    img: `${S3_BASE}/img/sectors/hsr.png`,
    description:
      "Synergiz played a pivotal role in India's inaugural high-speed rail project. Our services spanned leadership advisory, programme management, contracts management, design management, and risk management across this landmark programme.",
    highlights: [
      "Programme management leadership",
      "Contract strategy and management",
      "Design management and coordination",
      "Risk management planning",
      "Planning & Contracts for India's first HSR project",
    ],
  },
  {
    id: "railway",
    label: "Railway",
    img: `${S3_BASE}/img/sectors/railway.png`,
    description:
      "Our railway sector experience includes dedicated freight corridor projects, Project Management Information Systems (PMIS) setup, cost control frameworks, and interface management between multiple contractors and stakeholders.",
    highlights: [
      "Dedicated Freight Corridor PMC",
      "PMO setup and governance",
      "Cost control and financial management",
      "Interface management",
      "PMIS setup for ₹450B+ Mumbai Urban Transport",
    ],
  },
  {
    id: "roadways",
    label: "Roadways",
    img: `${S3_BASE}/img/sectors/roadway.png`,
    description:
      "Synergiz delivers planning, scheduling, delay analysis, window analysis, and Extension of Time (EoT) assessments for national highway and expressway projects. Our team brings rigorous analytical capabilities to resolve complex contractual disputes.",
    highlights: [
      "Planning and scheduling",
      "Delay analysis and claims",
      "Window analysis for EoT claims",
      "Extension of Time assessments",
      "National Highway PMC",
    ],
  },
];

export default function SectorsPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="bg-grad-deep"
        style={{
          marginTop: "90px",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "3rem", fontWeight: 800, position: "relative", zIndex: 1 }}>
          Our Sectors
        </h1>
      </div>

      {/* Sector Nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          flexWrap: "wrap",
        }}
      >
        {sectors.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            style={{
              padding: "10px 20px",
              backgroundColor: "#DB4F37",
              color: "#fff",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* Sector Sections */}
      {sectors.map((sector, i) => (
        <div
          key={sector.id}
          id={sector.id}
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: i % 2 === 0 ? "row" : "row-reverse",
            minHeight: "400px",
          }}
        >
          <div style={{ flex: "0 0 50%", minWidth: "280px", position: "relative", minHeight: "350px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={sector.img}
              alt={sector.label}
              style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.35)",
                display: "flex",
                alignItems: "flex-end",
                padding: "20px",
              }}
            >
              <h2 style={{ color: "#fff", fontSize: "2rem", fontWeight: 800 }}>{sector.label}</h2>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              minWidth: "280px",
              padding: "50px 40px",
              backgroundColor: i % 2 === 0 ? "#fff" : "#f8f8f8",
            }}
          >
            <p style={{ lineHeight: "1.8", color: "#444", marginBottom: "20px", fontSize: "16px" }}>
              {sector.description}
            </p>
            <ul style={{ paddingLeft: "1.2em" }}>
              {sector.highlights.map((h) => (
                <li key={h} style={{ margin: "8px 0", color: "#333", listStyleType: "square", lineHeight: "1.5" }}>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
