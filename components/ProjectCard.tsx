"use client";

import { useState } from "react";
import Link from "next/link";

interface ProjectCardProps {
  img: string;
  badge: string;
  stat?: string;
  statLabel?: string;
  title: string;
  subtitle: string;
  desc?: string;
  link: string;
}

export default function ProjectCard({ img, badge, stat, statLabel, title, subtitle, desc, link }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const large = !!stat && !!statLabel;
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "4px",
        cursor: "pointer",
        height: large ? "clamp(380px, 50vh, 520px)" : "200px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(100%)",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.7s cubic-bezier(.16,1,.3,1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
        }}
      />
      {hovered && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "2px",
            width: "100%",
            backgroundColor: "#DB4F37",
          }}
        />
      )}
      {/* Tag */}
      <div style={{ position: "absolute", top: large ? 20 : 16, left: large ? 20 : 16 }}>
        <span
          style={{
            display: "inline-block",
            fontFamily: "var(--font-roboto), Roboto, sans-serif",
            fontSize: large ? "10px" : "9px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: large ? "4px 10px" : "2px 8px",
            borderRadius: "2px",
            background: badge === "Airport" ? "#DB4F37" : "#58b1d0",
            color: "#fff",
            border: badge !== "Airport" ? "1px solid rgba(74,180,212,0.4)" : "none",
          }}
        >
          {badge}
        </span>
      </div>
      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: large ? "28px" : "16px",
        }}
      >
        {large && stat && (
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "12px" }}>
            <span
              style={{
                fontFamily: "var(--font-roboto), Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 3vw, 44px)",
                lineHeight: 0.9,
                color: "#DB4F37",
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: "3px",
                background: "rgba(6,13,28,0.62)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 10px 28px rgba(0,0,0,0.32)",
                textShadow: "0 3px 16px rgba(6,13,28,0.7)",
              }}
            >
              {stat}
            </span>
            <span
              style={{
                fontFamily: "var(--font-roboto), Roboto, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 8px",
                borderRadius: "2px",
                color: "rgba(255,255,255,0.9)",
                background: "rgba(6,13,28,0.6)",
                border: "1px solid rgba(255,255,255,0.14)",
                textShadow: "0 1px 8px rgba(0,0,0,0.45)",
              }}
            >
              {statLabel}
            </span>
          </div>
        )}
        <h3
          style={{
            fontFamily: "var(--font-roboto), Roboto, sans-serif",
            fontWeight: 700,
            fontSize: large ? "clamp(18px, 2vw, 26px)" : "13px",
            color: "#F3F8FB",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            margin: "0 0 4px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            display: "inline-block",
            fontSize: large ? "12px" : "11px",
            color: "#ffffff",
            marginBottom: large ? "12px" : 0,
            padding: "2px 8px",
            borderRadius: "2px",
            background: "#0f0f0f",
            textShadow: "0 1px 8px rgba(0,0,0,0.5)",
          }}
        >
          {subtitle}
        </p>
        {large && desc && (
          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.65,
              marginBottom: "16px",
              maxWidth: "360px",
              color: "rgba(210,228,238,0.6)",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {desc}
          </p>
        )}
        {large && (
          <Link
            href={link}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              fontWeight: 500,
              color: "#DB4F37",
              textDecoration: "none",
              transition: "gap 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.gap = "12px"; }}
            onMouseLeave={(e) => { e.currentTarget.style.gap = "6px"; }}
          >
            View case study →
          </Link>
        )}
      </div>
    </div>
  );
}
