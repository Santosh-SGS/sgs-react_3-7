import type { Metadata } from "next";
import Link from "next/link";
import { PROJECT_IMAGE_BASE, fetchProjects } from "@/lib/api";
import { Project } from "@/types";

const projectTypes = ["Airport", "Metro Rail", "High Speed Rail", "Railway", "Roadways"];

export async function generateMetadata(props: PageProps<"/projects/[type]">): Promise<Metadata> {
  const { type } = await props.params;
  return { title: `${decodeURIComponent(type).replace(/-/g, " ")} Projects | Synergiz Global` };
}

export default async function ProjectsByTypePage(props: PageProps<"/projects/[type]">) {
  const { type } = await props.params;
  const projectType = decodeURIComponent(type).replace(/-/g, " ");

  let projects: Project[] = [];
  try {
    const data = await fetchProjects(projectType);
    projects = data.projects ?? [];
  } catch {
    // backend unavailable
  }

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
        <h1 style={{ color: "#fff", fontSize: "3rem", fontWeight: 800, position: "relative", zIndex: 1, textAlign: "center" }}>
          Our {projectType} Portfolio
        </h1>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", padding: "25px 20px", flexWrap: "wrap", backgroundColor: "#f5f5f5" }}>
        <Link href="/projects" style={{ padding: "8px 18px", backgroundColor: "#fff", color: "#333", border: "1px solid #DB4F37", borderRadius: "4px", fontWeight: 600, fontSize: "14px" }}>
          All
        </Link>
        {projectTypes.map((t) => (
          <Link
            key={t}
            href={`/projects/${encodeURIComponent(t.replace(/ /g, "-"))}`}
            style={{
              padding: "8px 18px",
              backgroundColor: t === projectType ? "#DB4F37" : "#fff",
              color: t === projectType ? "#fff" : "#333",
              border: "1px solid #DB4F37",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            {t}
          </Link>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "25px", padding: "40px", maxWidth: "1400px", margin: "0 auto" }}>
        {projects.length > 0 ? (
          projects.map((project, idx) => (
            <div
              key={project.projectId}
              style={{
                backgroundColor: idx % 2 === 0 ? "#f5f5f5" : "#1a1a1a",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${PROJECT_IMAGE_BASE}/${project.projectId}/${project.imageName}`}
                alt={project.projectName}
                style={{ width: "100%", height: "220px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <p style={{ color: "#DB4F37", fontWeight: 700, fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
                  {project.projectType}
                </p>
                <h4 style={{ color: idx % 2 === 0 ? "#222" : "#fff", fontWeight: 700, fontSize: "18px", marginBottom: "10px" }}>
                  {project.projectName}
                </h4>
                <p style={{ color: idx % 2 === 0 ? "#555" : "#ccc", fontSize: "14px", lineHeight: "1.6", marginBottom: "12px" }}>
                  {project.description}
                </p>
                <p style={{ color: "#4AB4D4", fontSize: "13px", fontWeight: 600 }}>Client: {project.clientName}</p>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "80px 20px", color: "#888" }}>
            <p>No {projectType} projects found. Connect the Java backend to load data.</p>
          </div>
        )}
      </div>
    </>
  );
}
