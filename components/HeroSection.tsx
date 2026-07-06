"use client";

import { useEffect, useState } from "react";

const rotatingTexts = [
  "Project Management",
  "Project Controls",
  "EoT and Claim Analysis",
  "Contract Management",
  "Project Management Systems",
  "Web Applications",
  "BIM Support",
];
const colors = ["#DB4F37", "#4AB4D4"];

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTextIndex((i) => (i + 1) % rotatingTexts.length);
        setVisible(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        marginTop: 0,
        overflow: "hidden",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/video/homebackgroundvideo.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.75)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 50px",
          paddingTop: "90px",
        }}
      >
        <h1
          style={{
            color: "#DB4F37",
            fontSize: "clamp(34px, 5vw, 62px)",
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.1,
            WebkitTextStroke: "0.5px rgba(255,255,255,0.5)",
            textShadow: "2px 3px 5px rgba(0,0,0,0.65)",

          }}
        >
          Welcome To{" "}
          <strong>
            Synergiz <span style={{ color: "#4AB4D4" }}>Global</span>
          </strong>
        </h1>
        <p style={{ color: "#fff", marginTop: "12px", fontSize: "clamp(14px, 1.5vw, 18px)" }}>
          Project Management Consultants providing <br />
          tailormade services from planning to delivery
        </p>
        <p style={{ color: "#fff", marginTop: "12px", fontSize: "clamp(14px, 1.5vw, 18px)" }}>
          Our area of expertise
          <span
            style={{
              marginLeft: "12px",
              fontSize: "clamp(16px, 1.8vw, 22px)",
              fontWeight: 600,
              color: visible ? colors[textIndex % 2] : "transparent",
              transition: "color 0.4s, opacity 0.4s",
              opacity: visible ? 1 : 0,
            }}
          >
            {rotatingTexts[textIndex]}
          </span>
        </p>
      </div>
    </div>
  );
}
