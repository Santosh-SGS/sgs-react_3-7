"use client";

import { useState } from "react";

const domains = [
  {
    id: "railway",
    num: "01",
    title: "Railway\n& Freight",
    stat: "40+",
    statLabel: "Rail Programmes",
    excerpt:
      "Dedicated Freight Corridor Eastern & Western, Mumbai\u2013Ahmedabad HSR, 4+ Indian Railway zones \u2014 programme management and PMIS at national scale.",
    tags: ["DFC", "MAHSR", "Indian Railways", "MRVC"],
    image: "/img/domain_railway.png",
    imagePos: "center center",
  },
  {
    id: "metro",
    num: "02",
    title: "Metro\nRail",
    stat: "8",
    statLabel: "Metro Cities",
    excerpt:
      "Hyderabad, Nagpur, Pune, Delhi, Mumbai, Chennai \u2014 end-to-end programme delivery across India\u2019s urban rail expansion. EOT, 5D BIM, project controls.",
    tags: ["Hyderabad Metro", "Nagpur Metro", "Delhi MRTS", "Mumbai Metro"],
    image: "/img/domain_metro.png",
    imagePos: "center center",
  },
  {
    id: "airport",
    num: "03",
    title: "Airport &\nAviation",
    stat: "6+",
    statLabel: "Airport Programmes",
    excerpt:
      "IGI Delhi T1, T2, T3 revamp, CSIA Mumbai T1 & T2, Taoyuan Terminal 3 Taiwan, Kuwait International Airport \u2014 PMC services across terminals and airside infrastructure.",
    tags: ["Delhi IGI", "Mumbai CSIA", "Taoyuan T3", "Kuwait"],
    image: "/img/domain_airports.png",
    imagePos: "center 30%",
  },
  {
    id: "energy",
    num: "04",
    title: "Power &\nEnergy",
    stat: "5+",
    statLabel: "Energy Programmes",
    excerpt:
      "Brazil 230kV & 500kV transmission, Angola 400kV grid, Eswatini 132kV \u2014 programme monitoring across international power infrastructure.",
    tags: ["Brazil", "Angola", "Eswatini"],
    image: "/img/domain_energy.png",
    imagePos: "center center",
  },
];

export default function DomainSlider() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "clamp(480px, 65vh, 700px)",
        maxWidth: "1240px",
        margin: "0 auto",
      }}
      onMouseLeave={() => setActive(null)}
    >
      {domains.map((d, i) => {
        const isActive = active === d.id;
        const isDimmed = active !== null && !isActive;

        return (
          <div
            key={d.id}
            onMouseEnter={() => setActive(d.id)}
            style={{
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              flexBasis: isActive ? "55%" : isDimmed ? "15%" : "25%",
              flexShrink: 0,
              flexGrow: 0,
              minWidth: "80px",
              transition: "flex-basis 0.5s ease",
              borderRight: i < domains.length - 1 ? "1px solid rgba(200,200,205,0.1)" : "none",
            }}
          >
            <img
              src={d.image}
              alt={d.title.replace("\n", " ")}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: d.imagePos,
                filter: "grayscale(1)",
                transition: "transform 0.7s ease, filter 0.5s ease",
                transform: isActive ? "scale(1.04)" : "scale(1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: isActive
                  ? "linear-gradient(to top, rgba(6,13,28,0.95) 0%, rgba(6,13,28,0.5) 40%, rgba(6,13,28,0.2) 100%)"
                  : "linear-gradient(to top, rgba(6,13,28,0.9) 0%, rgba(6,13,28,0.65) 60%, rgba(6,13,28,0.35) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "2px",
                width: "100%",
                background: "#DB4F37",
                transform: isActive ? "scaleX(1)" : "scaleX(0.2)",
                transformOrigin: "left",
                transition: "transform 0.5s ease",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "28px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-roboto), Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  color: "rgba(200,200,205,0.4)",
                }}
              >
                {d.num}
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "28px 28px 48px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-roboto), Roboto, sans-serif",
                  fontWeight: 800,
                  color: "#F3F3F3",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  whiteSpace: "pre-line",
                  fontSize: isActive ? "clamp(24px, 2.5vw, 36px)" : "clamp(14px, 1.5vw, 20px)",
                  transition: "font-size 0.4s ease",
                  margin: 0,
                }}
              >
                {d.title}
              </h3>
              <div style={{ marginTop: "16px", opacity: isActive ? 1 : 0, transform: isActive ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.35s ease-out, transform 0.35s ease-out", pointerEvents: isActive ? "auto" : "none" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-roboto), Roboto, sans-serif",
                        fontSize: "clamp(40px, 4.5vw, 64px)",
                        fontWeight: 800,
                        color: "#DB4F37",
                        lineHeight: 0.9,
                        padding: "4px 10px",
                        borderRadius: "3px",
                        background: "rgba(6,13,28,0.62)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        boxShadow: "0 10px 28px rgba(0,0,0,0.32)",
                      }}
                    >
                      {d.stat}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-roboto), Roboto, sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "4px 8px",
                        borderRadius: "2px",
                        color: "rgba(255,255,255,0.9)",
                        background: "rgba(6,13,28,0.58)",
                        border: "1px solid rgba(255,255,255,0.14)",
                      }}
                    >
                      {d.statLabel}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.65,
                      color: "rgba(210,228,238,0.7)",
                      maxWidth: "340px",
                      margin: "0 0 16px",
                    }}
                  >
                    {d.excerpt}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {d.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-roboto), Roboto, sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          borderRadius: "2px",
                          background: "rgba(200,200,205,0.1)",
                          color: "rgba(200,200,205,0.6)",
                          border: "1px solid rgba(200,200,205,0.15)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        );
      })}
    </div>
  );
}
