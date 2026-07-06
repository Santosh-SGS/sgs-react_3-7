"use client";

import { useRef } from "react";
import { S3_BASE } from "@/lib/api";

interface Logo {
  attachment: string;
}

const fallbackLogos: Logo[] = [
  { attachment: "CSIA.png" },
  { attachment: "Daewoo.png" },
  { attachment: "DMRC-logo.png" },
  { attachment: "Feedback.png" },
  { attachment: "GMR.png" },
  { attachment: "GVK.png" },
  { attachment: "Highbar.png" },
  { attachment: "Hitachi.png" },
  { attachment: "Interglobe.png" },
  { attachment: "iocl.png" },
  { attachment: "Ircon.png" },
  { attachment: "JIC.png" },
  { attachment: "Koh-Bros.png" },
  { attachment: "LT.png" },
  { attachment: "MRVC.png" },
  { attachment: "NCC.png" },
  { attachment: "NMRCL.png" },
  { attachment: "PB.png" },
  { attachment: "Plaza.png" },
  { attachment: "PWC.png" },
  { attachment: "Rites.png" },
  { attachment: "Tata.png" },
  { attachment: "WSP.png" },
];

export default function ClientLogos({ logos }: { logos: Logo[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleLogos = logos.length > 0 ? logos : fallbackLogos;

  function scroll(direction: "left" | "right") {
    if (!containerRef.current) return;
    const step = containerRef.current.clientWidth * 0.7;
    containerRef.current.scrollBy({ left: direction === "right" ? step : -step, behavior: "smooth" });
  }

  return (
    <div style={{ padding: "40px 20px", position: "relative" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>Our Clients</h2>
      </div>
      <div style={{ position: "relative" }}>
        <div
          ref={containerRef}
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            width: "85%",
            margin: "0 auto",
          }}
        >
          {visibleLogos.map((logo) => (
              <div
                key={logo.attachment}
                style={{ display: "inline-block", margin: "10px 15px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${S3_BASE}/img/home/${logo.attachment}`}
                  alt="Client logo"
                  style={{ maxWidth: "100px", maxHeight: "80px", objectFit: "contain" }}
                />
              </div>
            ))}
        </div>
        <button
          onClick={() => scroll("left")}
          aria-label="Previous"
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/left-arrow (2).png" alt="left" width={25} height={30} />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Next"
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/right-arrows.png" alt="right" width={25} height={30} />
        </button>
      </div>
    </div>
  );
}
