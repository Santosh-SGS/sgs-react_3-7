"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export type CatalogProject = {
  id: string;
  name: string;
  type: string;
  description: string;
  clientName?: string;
  image: string;
};

const filters = [
  { label: "ALL", value: "All" },
  { label: "High Speed Rail", value: "High Speed Rail" },
  { label: "Metro Rail", value: "Metro Rail" },
  { label: "Airport", value: "Airport" },
  { label: "Rail", value: "Railway" },
  { label: "Roadways", value: "Roadways" },
  { label: "Pipeline", value: "Pipeline" },
  { label: "Power", value: "Power" },
];

export default function ProjectsCatalog({ projects }: { projects: CatalogProject[] }) {
  const [activeType, setActiveType] = useState("All");
  const [query, setQuery] = useState("");

  const visibleProjects = useMemo(() => {
    const search = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesType = activeType === "All" || project.type === activeType;
      const matchesSearch =
        search.length === 0 ||
        project.name.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.type.toLowerCase().includes(search) ||
        (project.clientName ?? "").toLowerCase().includes(search);

      return matchesType && matchesSearch;
    });
  }, [activeType, projects, query]);

  return (
    <>
      <section style={{ background: "#fafafa", padding: "84px clamp(36px, 8vw, 120px)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <p style={{ color: "#DB4F37", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-roboto), Roboto, sans-serif" }}>
            All Projects
          </p>
          <h2 style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, lineHeight: 1.14, letterSpacing: "-0.02em", color: "#000", marginBottom: "28px" }}>
            Selected portfolio
          </h2>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }} role="group">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveType(filter.value)}
                style={{
                  fontFamily: "var(--font-roboto), Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  padding: "8px 20px",
                  borderRadius: "4px",
                  border: `1px solid ${activeType === filter.value ? "#DB4F37" : "rgba(219,79,55,0.2)"}`,
                  background: "transparent",
                  color: "#DB4F37",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div style={{ marginBottom: "28px" }}>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects"
              aria-label="Search projects"
              style={{
                width: "100%",
                maxWidth: "400px",
                border: "1px solid rgba(12,31,53,0.14)",
                borderRadius: "3px",
                padding: "10px 14px",
                fontSize: "13px",
                color: "#000",
                outline: "none",
                fontFamily: "var(--font-roboto), Roboto, sans-serif",
                background: "#fff",
              }}
            />
          </div>

          <h2 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, lineHeight: 1.14, letterSpacing: "-0.02em", color: "#000", marginBottom: "28px", cursor: "pointer" }}>
            Selected portfolio
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "16px",
            }}
          >
            {visibleProjects.length === 0 ? (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "70px 20px", color: "#6A8EA5", fontFamily: "var(--font-roboto), Roboto, sans-serif" }}>
                No projects match this search.
              </div>
            ) : (
              visibleProjects.map((project) => (
                <article
                  key={project.id}
                  style={{
                    borderRadius: "4px",
                    overflow: "hidden",
                    background: "#ffffff",
                    border: "0.5px solid rgba(12,31,53,0.08)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                    <img
                      src={project.image}
                      alt={project.name}
                      onError={(event) => {
                        event.currentTarget.src = "/img/synergizpic.jpeg";
                      }}
                      style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(12,31,53,0.78) 0%, rgba(12,31,53,0.2) 50%, transparent 100%)",
                      }}
                    />
                    <div style={{ position: "absolute", bottom: "12px", left: "12px", zIndex: 1 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-roboto), Roboto, sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                          letterSpacing: "0.07em",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          borderRadius: "2px",
                          border: "1px solid rgba(219,78,55,0.45)",
                          color: "#DB4E37",
                          background: "rgba(12,31,53,0.6)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: "20px", borderTop: "0.5px solid rgba(12,31,53,0.06)" }}>
                    <h3 style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontWeight: 700, fontSize: "14px", color: "#000", letterSpacing: "-0.01em", lineHeight: 1.35, marginBottom: "6px" }}>
                      {project.name}
                    </h3>
                    <p style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "12px", color: "#000", lineHeight: 1.5, marginBottom: "14px" }}>
                      {project.description}
                    </p>
                    {project.clientName && (
                      <p style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "11px", fontWeight: 700, color: "#DB4E37", marginBottom: "14px" }}>
                        Client: {project.clientName}
                      </p>
                    )}
                    <Link
                      href="/contact"
                      style={{
                        fontFamily: "var(--font-roboto), Roboto, sans-serif",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#DB4E37",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "gap 0.2s ease",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.gap = "10px"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.gap = "6px"; }}
                    >
                      Discuss this project →
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
