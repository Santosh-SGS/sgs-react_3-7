import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Synergiz Global",
};

const timeline = [
  { year: "2010s", title: "Foundation", desc: "Synergiz Global was established with a vision to bring world-class infrastructure management consulting to India." },
  { year: "2015", title: "Metro Rail Milestone", desc: "Became the first Programme Consultant to implement 5D BIM and ERP for metro rail in India." },
  { year: "2016", title: "High-Speed Rail", desc: "Provided Planning & Contracts advisory for India's first High-Speed Rail project." },
  { year: "2018", title: "IGI Delhi", desc: "Delivered PMC services for the tallest ATC tower in India at IGI Airport, Delhi." },
  { year: "2020", title: "SynTrack Launch", desc: "Launched SynTrack, our patented project management and progress monitoring software." },
  { year: "2022", title: "ISO Certifications", desc: "Achieved CMMI L5 certification and multiple ISO certifications (9001, 14001, 45001, 27001)." },
  { year: "Today", title: "Continuing Growth", desc: "Serving clients across airports, metro rail, highways, and railways with a growing team of experts." },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="bg-grad-deep"
        style={{
          marginTop: "90px",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 style={{ color: "#DB4F37", fontSize: "3rem", fontWeight: 800, marginBottom: "15px" }}>
            Our Story
          </h1>
          <p style={{ color: "#fff", fontSize: "18px", maxWidth: "600px" }}>
            From inception to industry leadership — the journey of Synergiz Global Services
          </p>
        </div>
      </div>

      {/* Intro */}
      <div style={{ backgroundColor: "#000", padding: "60px 40px", textAlign: "center" }}>
        <p style={{ color: "#ccc", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.9" }}>
          Synergiz Global began with a simple but ambitious goal: to bring world-class infrastructure
          project management to India. Over the years, we have grown into a trusted partner for some
          of the most complex and impactful infrastructure projects in the country — from airports to
          metro rail, high-speed rail to national highways.
        </p>
        <p style={{ color: "#4AB4D4", fontSize: "1.2rem", maxWidth: "800px", margin: "25px auto 0", lineHeight: "1.9" }}>
          Today, Synergiz is synonymous with excellence in infrastructure consulting, backed by a
          passionate team, cutting-edge technology, and a portfolio of industry-first achievements.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ padding: "80px 40px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: "60px", color: "#DB4F37" }}>
          Key Milestones
        </h2>
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "3px",
              backgroundColor: "#4AB4D4",
              transform: "translateX(-50%)",
            }}
          />

          {timeline.map((item, i) => (
            <div
              key={item.year}
              style={{
                display: "flex",
                justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                marginBottom: "40px",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "45%",
                  padding: "20px",
                  backgroundColor: i % 2 === 0 ? "#f8f8f8" : "#1a1a1a",
                  borderRadius: "8px",
                  textAlign: i % 2 === 0 ? "right" : "left",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <span style={{ color: "#DB4F37", fontWeight: 800, fontSize: "20px" }}>{item.year}</span>
                <h4 style={{ fontWeight: 700, color: i % 2 === 0 ? "#333" : "#fff", margin: "6px 0" }}>
                  {item.title}
                </h4>
                <p style={{ color: i % 2 === 0 ? "#555" : "#ccc", fontSize: "14px", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>

              {/* Dot on timeline */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "20px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: "#DB4F37",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
