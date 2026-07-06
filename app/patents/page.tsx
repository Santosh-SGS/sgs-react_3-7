import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patents & IP | Synergiz Global",
};

export default function PatentsPage() {
  return (
    <>
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
          Patents & Intellectual Property
        </h1>
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ color: "#DB4F37", fontSize: "2rem", fontWeight: 700, marginBottom: "15px" }}>
            Our Innovation
          </h2>
          <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.8", maxWidth: "700px", margin: "0 auto" }}>
            Synergiz Global is committed to innovation in infrastructure project management. Our
            flagship patent — SynTrack — is a testament to our dedication to developing
            cutting-edge digital solutions for the infrastructure sector.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f8f8f8",
            borderRadius: "12px",
            padding: "40px",
            borderLeft: "6px solid #DB4F37",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ fontSize: "50px" }}>🔬</div>
            <div>
              <h3 style={{ fontWeight: 800, color: "#DB4F37", fontSize: "1.5rem", marginBottom: "10px" }}>
                SynTrack
              </h3>
              <p style={{ color: "#666", fontSize: "13px", marginBottom: "15px" }}>
                Patented Project Management & Progress Monitoring Software
              </p>
              <p style={{ color: "#444", lineHeight: "1.8", fontSize: "15px" }}>
                SynTrack is Synergiz Global&apos;s patented software solution designed specifically for
                managing and monitoring large-scale infrastructure projects. It integrates intelligent
                data processing, delay analysis, predictive analytics, and real-time reporting into a
                single, unified platform.
              </p>
              <div style={{ marginTop: "20px" }}>
                <h5 style={{ fontWeight: 700, color: "#333", marginBottom: "10px" }}>Key Innovations:</h5>
                <ul style={{ paddingLeft: "1.2em" }}>
                  {[
                    "Intelligent delay detection and future impact prediction",
                    "Real-time progress monitoring through mobile and web portal",
                    "Automated report generation (InfoVizes)",
                    "5D BIM integration capability",
                    "Cloud-based infrastructure on AWS",
                    "Workflow management and alert system",
                  ].map((item) => (
                    <li key={item} style={{ margin: "6px 0", color: "#333", listStyleType: "square", lineHeight: "1.5" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ marginTop: "20px" }}>
                <a
                  href="/syntrack"
                  style={{
                    display: "inline-block",
                    padding: "10px 25px",
                    backgroundColor: "#DB4F37",
                    color: "#fff",
                    borderRadius: "4px",
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                >
                  Learn more about SynTrack →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
