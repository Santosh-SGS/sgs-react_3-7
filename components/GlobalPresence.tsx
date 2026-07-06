"use client";

import { useState, useEffect, useRef } from "react";

const W = 1000, H = 500;

function project(lat: number, lng: number) {
  return { x: (lng + 180) / 360 * W, y: (90 - lat) / 180 * H };
}

const HUB = project(22, 78);

const locations = [
  { id: "hub", label: "India Operations", lat: 22, lng: 78, kind: "hub", sector: null, region: "India", project: "Headquarters" },
  { id: "delhi", label: "New Delhi", lat: 28.61, lng: 77.21, kind: "india", sector: "Metro & Railway", region: "India", project: "DMRC, MAHSR, Northern Railway" },
  { id: "mumbai", label: "Mumbai", lat: 19.08, lng: 72.88, kind: "india", sector: "Metro & Airport", region: "India", project: "Mumbai Metro, IGI T1-3 Support" },
  { id: "hyderabad", label: "Hyderabad", lat: 17.39, lng: 78.49, kind: "india", sector: "Metro Rail", region: "India", project: "Hyderabad Metro Rail" },
  { id: "nagpur", label: "Nagpur", lat: 21.15, lng: 79.09, kind: "india", sector: "Metro Rail", region: "India", project: "Nagpur Metro" },
  { id: "dfcc", label: "DFC Corridor", lat: 25.8, lng: 76.5, kind: "india", sector: "Railway", region: "India", project: "Eastern & Western DFC" },
  { id: "taiwan", label: "Taoyuan, Taiwan", lat: 25.03, lng: 121.36, kind: "intl", sector: "Airport", region: "Asia Pacific", project: "Taoyuan International Airport T3" },
  { id: "japan", label: "Tokyo, Japan", lat: 35.68, lng: 139.65, kind: "intl", sector: "Railway", region: "Asia Pacific", project: "JR East — PM Training Programme" },
  { id: "indonesia", label: "Sumatra, Indonesia", lat: -3.79, lng: 102.28, kind: "intl", sector: "Energy", region: "Asia Pacific", project: "Sumsel Power Project" },
  { id: "kuwait", label: "Kuwait City", lat: 29.31, lng: 47.48, kind: "intl", sector: "Airport", region: "Middle East", project: "Kuwait International Airport" },
  { id: "latvia", label: "Riga, Latvia", lat: 56.95, lng: 24.11, kind: "intl", sector: "Airport", region: "Europe", project: "RIGA Airport Expansion" },
  { id: "brazil", label: "Brazil", lat: -14.24, lng: -51.93, kind: "intl", sector: "Energy", region: "South America", project: "230kV & 500kV Transmission" },
  { id: "ethiopia", label: "Adama, Ethiopia", lat: 8.54, lng: 39.27, kind: "intl", sector: "Highway", region: "Africa", project: "Adama Expressway" },
  { id: "angola", label: "Luanda, Angola", lat: -8.84, lng: 13.29, kind: "intl", sector: "Energy", region: "Africa", project: "Ministry of Energy — 400kV Transmission" },
  { id: "eswatini", label: "Eswatini", lat: -26.52, lng: 31.47, kind: "intl", sector: "Energy", region: "Africa", project: "132kV Transmission Lines" },
];

const latLines = [60, 30, 0, -30, -60];
const lngLines = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150];

const sectorColors: Record<string, string> = {
  "Metro & Railway": "#4AB4D4",
  "Metro & Airport": "#4AB4D4",
  "Metro Rail": "#4AB4D4",
  "Railway": "#E8641A",
  "Airport": "#7ECAE0",
  "Energy": "#94C6D8",
  "Highway": "#5BBDD4",
  "default": "#4AB4D4",
};

function midPoint(a: { x: number; y: number }, b: { x: number; y: number }) {
  return { x: (a.x + b.x) / 2, y: Math.min(a.y, b.y) - 40 };
}

export default function GlobalPresence() {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [worldPath, setWorldPath] = useState("");
  const [showCards, setShowCards] = useState(false);

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/world-map-path.json").then(r => r.json()).then(d => setWorldPath(d.path)).catch(() => {});
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { rootMargin: "100px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const intl = locations.filter(l => l.kind === "intl");
  const india = locations.filter(l => l.kind === "india");

  return (
    <section ref={ref} style={{ background: "var(--grad-deep)", padding: "80px 20px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,200,205,0.35) 50%, transparent)" }} />

      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(160,160,165,0.5)", marginBottom: "12px" }}>
            Global Presence
          </p>
          <p style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "clamp(26px, 3vw, 42px)", color: "#ccc", marginTop: "20px", lineHeight: 1.5 }}>
            <span style={{ color: "var(--primary-orange)", fontWeight: 700 }}>85+</span>{" "}
            <span style={{ color: "#ccc" }}>projects.</span>{" "}
            <span style={{ color: "rgba(200,200,205,0.7)", fontWeight: 700 }}>15+</span>{" "}
            <span style={{ color: "#ccc" }}>countries.</span>
          </p>
          <p style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "22px", color: "rgba(200,200,205,0.65)", marginTop: "6px", lineHeight: 1.5 }}>
            Every major infrastructure sector.
          </p>
        </div>

        {/* Map */}
        <div style={{ aspectRatio: `${W}/${H}`, width: "100%", maxWidth: "1000px", margin: "0 auto", position: "relative", borderRadius: "4px", overflow: "hidden", border: "1px solid rgba(200,200,205,0.08)" }}>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%", display: "block", background: "var(--grad-deep)" }}>
            {/* World map - countries */}
            {worldPath && <path d={worldPath} fill="rgba(220,220,225,0.15)" stroke="rgba(200,200,205,0.2)" strokeWidth={0.4} />}

            {/* Graticule */}
            {latLines.map(lat => {
              const y = project(lat, 0).y;
              return <line key={`lat-${lat}`} x1={0} y1={y} x2={W} y2={y} stroke="rgba(200,200,205,0.08)" strokeWidth={0.3} />;
            })}
            {lngLines.map(lng => {
              const x = project(0, lng).x;
              return <line key={`lng-${lng}`} x1={x} y1={0} x2={x} y2={H} stroke="rgba(200,200,205,0.08)" strokeWidth={0.3} />;
            })}

            {/* Equator highlight */}
            <line x1={0} y1={project(0, 0).y} x2={W} y2={project(0, 0).y} stroke="rgba(200,200,205,0.12)" strokeWidth={0.5} strokeDasharray="3 3" />

            {/* Connection lines: hub → intl */}
            {visible && intl.map((loc, i) => {
              const p = project(loc.lat, loc.lng);
              const mid = midPoint(HUB, p);
              const d = `M${HUB.x},${HUB.y} Q${mid.x},${mid.y} ${p.x},${p.y}`;
              return (
                <g key={`line-${loc.id}`}>
                  <path d={d} fill="none" stroke="rgba(200,200,205,0.12)" strokeWidth={1} />
                  <path d={d} fill="none" stroke="rgba(200,200,205,0.45)" strokeWidth={1.5} strokeDasharray="6 4" style={{ animation: `dashDraw 0.6s ease-out ${0.8 + i * 0.08}s forwards` }} />
                </g>
              );
            })}

            {/* Hub glow */}
            {visible && (
              <g>
                <circle cx={HUB.x} cy={HUB.y} r={40} fill="rgba(219,79,55,0.08)" style={{ animation: "pulseGlow 2s ease-in-out infinite" }} />
                <circle cx={HUB.x} cy={HUB.y} r={20} fill="rgba(219,79,55,0.15)" style={{ animation: "pulseGlow 2s ease-in-out 0.5s infinite" }} />
              </g>
            )}

            {/* Hub marker */}
            {visible && (
              <g style={{ animation: "fadeScaleIn 0.4s ease-out 0.4s both" }}>
                <circle cx={HUB.x} cy={HUB.y} r={6} fill="#DB4F37" stroke="#fff" strokeWidth={1.5} />
                <circle cx={HUB.x} cy={HUB.y} r={3} fill="#fff" />
              </g>
            )}

            {/* India markers */}
            {visible && india.map((loc, i) => {
              const p = project(loc.lat, loc.lng);
              return (
                <g key={loc.id} style={{ animation: `fadeScaleIn 0.3s ease-out ${0.5 + i * 0.06}s both` }} onClick={() => setActive(active === loc.id ? null : loc.id)}>
                  <circle cx={p.x} cy={p.y} r={5} fill="#DB4F37" stroke="rgba(219,79,55,0.4)" strokeWidth={2} style={{ cursor: "pointer" }} />
                  {active === loc.id && (
                    <g>
                      <rect x={p.x + 8} y={p.y - 28} width={170} height={56} rx={3} fill="rgba(20,20,25,0.95)" stroke="rgba(200,200,205,0.2)" strokeWidth={0.5} />
                      <text x={p.x + 14} y={p.y - 12} fill="#888" fontSize={8} fontFamily="Roboto, sans-serif" fontWeight={600} style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>{loc.sector}</text>
                      <text x={p.x + 14} y={p.y + 2} fill="#eee" fontSize={11} fontFamily="Roboto, sans-serif" fontWeight={700}>{loc.project}</text>
                      <text x={p.x + 14} y={p.y + 16} fill="rgba(180,180,185,0.7)" fontSize={9} fontFamily="Roboto, sans-serif">{loc.label}</text>
                    </g>
                  )}
                </g>
              );
            })}

            {/* International markers */}
            {visible && intl.map((loc, i) => {
              const p = project(loc.lat, loc.lng);
              return (
                <g key={loc.id} style={{ animation: `fadeScaleIn 0.3s ease-out ${0.8 + i * 0.08}s both` }} onClick={() => setActive(active === loc.id ? null : loc.id)}>
                  <circle cx={p.x} cy={p.y} r={4} fill="#4AB4D4" stroke="rgba(74,180,212,0.4)" strokeWidth={2} style={{ cursor: "pointer" }} />
                  {active === loc.id && (
                    <g>
                      <rect x={p.x - 180} y={p.y - 28} width={170} height={56} rx={3} fill="rgba(20,20,25,0.95)" stroke="rgba(200,200,205,0.2)" strokeWidth={0.5} />
                      <text x={p.x - 174} y={p.y - 12} fill="#888" fontSize={8} fontFamily="Roboto, sans-serif" fontWeight={600} style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>{loc.region} · {loc.sector}</text>
                      <text x={p.x - 174} y={p.y + 2} fill="#eee" fontSize={11} fontFamily="Roboto, sans-serif" fontWeight={700}>{loc.project}</text>
                      <text x={p.x - 174} y={p.y + 16} fill="rgba(180,180,185,0.7)" fontSize={9} fontFamily="Roboto, sans-serif">{loc.label}</text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Show More + toggle */}
        <div style={{ textAlign: "left", marginTop: "28px" }}>
          <a onClick={() => setShowCards(!showCards)} style={{ color: "#58b1d0", fontWeight: 600, fontSize: "14px", textDecoration: "none", cursor: "pointer" }}>
            {showCards ? "Show Less -" : "Show More +"}
          </a>
        </div>

        {/* Location cards */}
        {showCards && <div style={{ marginTop: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ display: "inline-block", padding: "2px 10px", borderRadius: "2px", fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", background: "#333" }}>
              India Hub
            </span>
          <span style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "13px", color: "rgba(160,160,165,0.5)" }}>New Delhi, India</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {locations.filter(l => l.kind !== "hub").map((loc) => {
            const color = loc.kind === "india" ? "#DB4F37" : "#4AB4D4";
            return (
              <div
                key={loc.id}
                className="global-card"
                style={{ cursor: "pointer" }}
                onClick={() => setActive(active === loc.id ? null : loc.id)}
              >
                <div style={{ height: "2px", background: `linear-gradient(90deg, rgba(74,180,212,0.5), ${color}, rgba(74,180,212,0.5))` }} />
                <div style={{ padding: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "2px", fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", background: color }}>
                      {loc.kind === "india" ? "India" : loc.region}
                    </span>
                    {loc.sector && (
                      <span style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(106,142,165,0.7)" }}>
                        {loc.sector}
                      </span>
                    )}
                  </div>
                  <p style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "11px", color: "var(--text-muted)", marginBottom: "3px" }}>{loc.label}</p>
                  <p style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "13px", fontWeight: 600, color: "var(--bg-lighter)" }}>{loc.project}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>}
      </div>

      <style>{`
        .global-card {
          display: block;
          border-radius: 4px;
          overflow: hidden;
          text-decoration: none;
          background: rgba(10,10,15,0.85);
          border: 1px solid rgba(200,200,205,0.1);
          box-shadow: 0 8px 32px rgba(0,0,0,0.45);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .global-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.15); }
        }
        @keyframes fadeScaleIn {
          0% { opacity: 0; transform: scale(0); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes dashDraw {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
