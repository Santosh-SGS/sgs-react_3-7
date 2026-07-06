import type { Metadata } from "next";
import { S3_BASE } from "@/lib/api";

export const metadata: Metadata = {
  title: "SynTrack | Synergiz Global",
};

const features = [
  { icon: "⏱", label: "FAST LOADING TIME" },
  { icon: "🔄", label: "PROJECT INTERFACING" },
  { icon: "🛡", label: "SECURITY PREFERENCES" },
  { icon: "⚠", label: "MONITORING RISKS" },
  { icon: "✅", label: "MONITORING APPROVALS" },
  { icon: "☁", label: "DATABASE IN CLOUD" },
  { icon: "👁", label: "INTUITIVE INTERFACE" },
  { icon: "📊", label: "DELAY ANALYSIS" },
  { icon: "🔀", label: "WORKFLOW MANAGEMENT" },
];

const appFeatures = [
  {
    icon: "🔔",
    title: "Alerts Generation",
    desc: "Notify the responsible person of their daily activities and delays, if any.",
  },
  {
    icon: "🔁",
    title: "Real-Time Progress",
    desc: "Management has access to real-time progress of the project at their fingertips.",
  },
  {
    icon: "📋",
    title: "Input Sheet",
    desc: "Updating activity progress is now easier with our mobile application.",
  },
];

const detailSections = [
  {
    reverse: false,
    img: `${S3_BASE}/img/syntrack/Smart-Reporting-1568x1045.jpg`,
    title: "Smart Reporting",
    desc: "SynTrack comes equipped with a suite of powerful InfoVizes tailored to provide the most insightful view of project data. InfoVizes are customized to suit the reporting needs across different disciplines (schedule, cost, finance etc.) with a focus on reporting variances, recognizing causalities, monitoring interfacing elements and forecasting project progress.",
  },
  {
    reverse: true,
    img: `${S3_BASE}/img/syntrack/Data-Processing.jpg`,
    title: "Data Processing & Storage",
    desc: "Synergiz Global found a solution by developing a tool that can integrate information from different sources, do it at much a lesser cost and do a lot of work i.e., Planning and Scheduling, updating, Quality control, Cost control, document control, etc. All the data for SynTrack can be hosted on AWS Cloud, providing a dedicated environment through which data can be accessed.",
  },
  {
    reverse: false,
    img: `${S3_BASE}/img/syntrack/Data-Input.jpeg`,
    title: "Data Input Portal / App",
    desc: "Contractual obligations of reporting and conformance are all part of SynTrack's initial set up and are fulfilled via its data collection system. Contractors and Consultants can update the system with their progress, baselines, and other communications through an access-controlled data collection system available as a web portal and a mobile app.",
  },
];

export default function SynTrackPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ backgroundColor: "#1a1a1a", padding: "120px 40px 60px", marginTop: "0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${S3_BASE}/img/syntrack/logo3.png`}
            alt="SynTrack"
            style={{ height: "60px", marginBottom: "20px" }}
          />
          <p style={{ color: "#fff", fontSize: "18px", lineHeight: "1.8", fontStyle: "italic" }}>
            SynTrack is a holistic project management and progress tracking software developed by
            Synergiz Global for large scale infrastructure projects. SynTrack embodies Synergiz
            Global&apos;s diverse experience with infra projects in the form of intelligent data
            reading and processing capabilities to flag delays and calculates future implications
            based on real-time progress inputs.
          </p>
          <div style={{ height: "4px", width: "80px", backgroundColor: "#DB4E37", borderRadius: "4px", margin: "30px 0" }} />
          {/* Key Stats */}
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginTop: "30px" }}>
            {[
              { icon: "📊", title: "Smart Reporting", desc: "Automatically generate progress reports on a regular basis to reduce reporting effort." },
              { icon: "📈", title: "Data Processing", desc: "With our predictive analytics, we present to you enhanced metrics for your project." },
              { icon: "🗄", title: "Data Storage", desc: "Maintain an All-in-one database of your project data on SynTrack with cloud access." },
              { icon: "✏", title: "Data Input", desc: "Easily update your project activities through our sophisticated input forms." },
            ].map((s) => (
              <div key={s.title} style={{ flex: "1 1 180px", color: "#fff" }}>
                <div style={{ fontSize: "30px", marginBottom: "8px" }}>{s.icon}</div>
                <h6 style={{ color: "#4AB4D4", fontWeight: 700, marginBottom: "6px" }}>{s.title}</h6>
                <p style={{ fontSize: "14px", color: "#ccc", lineHeight: "1.6" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div style={{ backgroundColor: "#111", padding: "60px 40px" }}>
        <h4 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, textAlign: "center", marginBottom: "40px" }}>
          Features
        </h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {features.map((f) => (
            <div key={f.label} style={{ textAlign: "center", color: "#fff" }}>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>{f.icon}</div>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#ccc" }}>{f.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* App Features + Mobile Image */}
      <div style={{ padding: "60px 40px", backgroundColor: "#fff" }}>
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "center", maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ flex: 1, minWidth: "280px" }}>
            {appFeatures.map((f) => (
              <div
                key={f.title}
                style={{ display: "flex", gap: "15px", marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}
              >
                <span style={{ fontSize: "28px" }}>{f.icon}</span>
                <div>
                  <h6 style={{ fontWeight: 700, marginBottom: "6px", color: "#333" }}>{f.title}</h6>
                  <p style={{ color: "#666", lineHeight: "1.6", fontSize: "15px" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ flex: "0 0 40%", minWidth: "220px", textAlign: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${S3_BASE}/img/syntrack/syntrack-Mobile-1-1024x1024-1.png`}
              alt="SynTrack App"
              style={{ maxHeight: "450px", objectFit: "contain", width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Detail Sections */}
      {detailSections.map((s) => (
        <div
          key={s.title}
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            flexDirection: s.reverse ? "row-reverse" : "row",
            padding: "60px 40px",
            backgroundColor: s.reverse ? "#fff" : "#1a1a1a",
          }}
        >
          <div style={{ flex: "0 0 45%", minWidth: "280px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.img} alt={s.title} style={{ width: "100%", borderRadius: "4px" }} />
          </div>
          <div style={{ flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h4 style={{ color: s.reverse ? "#333" : "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: "15px" }}>
              {s.title}
            </h4>
            <p style={{ color: s.reverse ? "#555" : "#ccc", lineHeight: "1.8", fontSize: "15px" }}>
              {s.desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
