import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Solutions | Synergiz Global",
};

const architecture = [
  {
    num: "01",
    title: "Central Repository",
    subtitle: "Single source of truth",
    desc:
      "All project data - schedules, RFIs, drawings, reports, billing - consolidated in one place. 100% data consolidation across packages. No more email chains to find information.",
  },
  {
    num: "02",
    title: "AI Intelligence Layer",
    subtitle: "Search. Analyze. Forecast. Alert.",
    desc:
      "Search all project documents in under 2 seconds. Deep pattern analysis with 98% accuracy. Automated summaries. EOT forecasting. Predicts delays before they arrive.",
  },
  {
    num: "03",
    title: "Real-Time Delivery",
    subtitle: "Mobile app. Live dashboards. Automated reports.",
    desc:
      "Mobile app with offline capability. Programme-level dashboards updated in real time from field. Automated reports generated in under 1 minute. No stale data.",
  },
];

const modules = [
  {
    num: "01",
    title: "Planning & Scheduling - Integrated with Primavera P6",
    desc:
      "SynTrack connects directly to your Primavera P6 schedules as a live integration - not a one-time import. Level 5 and Level 6 schedules monitored daily at structure and activity level.",
    items: [
      "WBS-based hierarchy mapped to physical site structure",
      "Live schedule progress vs baseline - updated daily from field data",
      "Automated critical path deviation alerts",
      "Look-ahead scheduling for contractor coordination",
    ],
  },
  {
    num: "02",
    title: "Delay Analysis - Linked to P6 for EOT Forecasting",
    desc:
      "The first PMIS to connect live productivity data directly to delay analysis. When site progress deviates from plan, SynTrack automatically models the EOT impact in real time.",
    items: [
      "P6 integration for continuous schedule impact assessment",
      "Structure-wise productivity tracking with historical trend modelling",
      "Automated delay attribution flags for early commercial warning",
      "EOT forecast reports ready for contract correspondence",
    ],
  },
  {
    num: "03",
    title: "AI Search, Analysis & Summarization",
    desc:
      "SynTrack Intelligence makes an entire programme's contracts, drawings, RFIs, inspection records, and reports searchable, analyzable, and summarizable - in seconds.",
    items: [
      "Search all project documents in under 2 seconds",
      "Deep pattern analysis with 98% accuracy",
      "Generate executive-ready reports in under 1 minute",
      "Conversational chatbot - query PMIS in natural language (in development)",
    ],
  },
  {
    num: "04",
    title: "Digital RFI System - Field Quality Management",
    desc:
      "Replace paper inspection records with a fully digital RFI workflow. Field engineers capture inspection data on mobile, supervisors review on dashboard, full audit trail in SynTrack.",
    items: [
      "Digital inspection records with photo and geo-tag support",
      "RFI lifecycle management - raise, review, close, archive",
      "QA/QC audit reports generated automatically",
      "Safety compliance tracking with real-time dashboard",
    ],
  },
  {
    num: "05",
    title: "4D BIM Integration - Bentley Connected",
    desc:
      "Link your construction schedule to your 3D model. SynTrack integrates with Bentley Systems tools to create a living 4D simulation - allowing teams to visualize sequences and detect clashes.",
    items: [
      "Planner setup and WBS template linked to 3D model",
      "4D simulation to monitor and verify physical progress",
      "BIM standards definition and information management workflows",
      "Physical progress data and RFI records reported back into PMIS",
    ],
  },
  {
    num: "06",
    title: "Mobile Field Application",
    desc:
      "Designed for engineers on site, not for desktops in offices. Works across iOS and Android with offline capability for remote sites.",
    items: [
      "Real-time progress updates from field to dashboard - instant",
      "One-click task clearance for pending activities",
      "Activity progress tracker updated directly by site engineers",
      "Alert notifications for daily activities, delays, and milestone risks",
    ],
  },
];

const differentiators = [
  [
    "Built by infrastructure practitioners",
    "Every module was designed by people who worked on rail, metro, and airport projects with close coordination and feedback coming from top stakeholders in the industry.",
  ],
  [
    "Patented weighted monitoring system",
    "Our weighted progress monitoring methodology is patented - giving you a measurement approach that is technically defensible and contractually robust.",
  ],
  [
    "AI-native, not AI-bolted-on",
    "AI is built into the core data architecture. Search, forecast, and summarize are platform capabilities - not add-on features.",
  ],
  [
    "Deployed at national scale",
    "Running across 7+ Indian Railway zones, multiple metro corridors, and international programmes. Battle-tested at programme scale.",
  ],
];

const stack = [
  {
    name: "Flexible Infrastructure Deployment",
    desc:
      "SynTrack can be deployed on AWS cloud, private cloud, or on-premise physical servers - designed to work within client IT environments including government data centre and enterprise network constraints.",
  },
  {
    name: "Bentley Systems Integration",
    desc:
      "SynTrack works with Bentley Systems tools across infrastructure projects. Integration with ProjectWise, OpenRoads, and OpenBuildings enables 4D BIM-connected programme delivery and live model-schedule alignment.",
  },
  {
    name: "ERP and API Integration",
    desc:
      "Open RESTful API layer enables integration with Primavera P6, SAP, Oracle, and any client ERP or legacy system. No rip-and-replace needed - SynTrack connects to what clients already use.",
  },
  {
    name: "AI and Automation Layer",
    desc:
      "In-house AI engine for document intelligence, delay forecasting, natural language search, and automated report generation across the full programme dataset.",
  },
  {
    name: "Mobile Field App with Offline Mode",
    desc:
      "iOS and Android with full offline capability. Site engineers capture progress, RFIs, and inspections without a connection. All data syncs automatically the moment connectivity is restored - zero manual re-entry.",
  },
  {
    name: "Workflow Automation Engine",
    desc:
      "Configurable workflows automate approval chains, escalation triggers, milestone alerts, and compliance reminders. Built to reduce coordination overhead and enforce programme discipline at scale.",
  },
];

export default function DigitalSolutionsPage() {
  return (
    <>
      <section
        style={{
          marginTop: "90px",
          minHeight: "54vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          color: "#fff",
          background: "#000",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/flipcarddigital.jpg"
          alt="Digital infrastructure platform"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(15,15,15,0.76) 48%, rgba(15,15,15,0.28) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1240px", margin: "0 auto", padding: "78px 24px", width: "100%" }}>
          <p style={{ color: "#DB4E37", fontSize: "11px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "18px" }}>
            Digital Solutions
          </p>
          <h1 style={{ fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: 800, lineHeight: 1.08, maxWidth: "880px", marginBottom: "20px" }}>
            SynTrack - The Infrastructure Intelligence Platform
          </h1>
          <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "16px", lineHeight: 1.75, maxWidth: "760px" }}>
            Our industrial insights, combined with unique project management solutions, have empowered our clients to maximize their performance and achieve their project vision.
          </p>
        </div>
      </section>

      <section style={{ background: "#F3F8FB", borderTop: "1px solid rgba(12,31,53,0.07)", padding: "48px clamp(36px, 8vw, 120px) 80px" }}>
        <div className="digital-content-shell">
          <p style={{ color: "#DB4E37", fontSize: "11px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "14px" }}>
            Platform Architecture
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, lineHeight: 1.12, marginBottom: "48px" }}>
            Three capabilities. One connected system.
          </h2>
          <div className="digital-three-grid" style={{ display: "grid", gap: "1px", background: "rgba(219,78,55,0.18)" }}>
            {architecture.map((item) => (
              <div key={item.num} style={{ background: "#F3F8FB", borderTop: "3px solid #DB4E37", padding: "32px", minHeight: "260px" }}>
                <span style={{ color: "#DB4E37", fontSize: "12px", fontWeight: 800, letterSpacing: "0.08em" }}>{item.num}</span>
                <h3 style={{ fontSize: "17px", fontWeight: 800, margin: "14px 0 6px" }}>{item.title}</h3>
                <p style={{ color: "#DB4E37", fontSize: "11px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
                  {item.subtitle}
                </p>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#EBF2F7", padding: "84px clamp(36px, 8vw, 120px)" }}>
        <div className="digital-content-shell">
          <p style={{ color: "#DB4E37", fontSize: "11px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "14px" }}>
            Platform Modules
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, lineHeight: 1.12, marginBottom: "42px" }}>
            Built module by module from problems we managed ourselves.
          </h2>
          <div>
            {modules.map((module) => (
              <div
                key={module.num}
                className="digital-module-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "260px 1fr",
                  gap: "40px",
                  padding: "42px 0",
                  borderBottom: "1px solid rgba(219,78,55,0.18)",
                }}
              >
                <div>
                  <span style={{ color: "#DB4E37", fontSize: "13px", fontWeight: 800, letterSpacing: "0.08em" }}>{module.num}</span>
                  <h3 style={{ fontSize: "16px", fontWeight: 800, lineHeight: 1.35, marginTop: "10px" }}>{module.title}</h3>
                </div>
                <div>
                  <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>{module.desc}</p>
                  <ul className="digital-module-list" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px 18px" }}>
                    {module.items.map((item) => (
                      <li key={item} style={{ color: "#555", fontSize: "13px", lineHeight: 1.65, listStyle: "none" }}>
                        <span style={{ color: "#DB4E37", marginRight: "8px" }}>-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#F3F8FB", padding: "84px clamp(36px, 8vw, 120px)" }}>
        <div className="digital-content-shell">
          <p style={{ color: "#DB4E37", fontSize: "11px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "14px" }}>
            What Sets SynTrack Apart
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, lineHeight: 1.12, marginBottom: "44px" }}>
            Built differently. Deployed at scale. Still evolving.
          </h2>
          <div className="digital-two-grid" style={{ display: "grid", gap: "1px", background: "rgba(219,78,55,0.18)" }}>
            {differentiators.map(([title, desc]) => (
              <div key={title} style={{ background: "#F3F8FB", borderLeft: "3px solid #DB4E37", padding: "32px", minHeight: "190px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 800, marginBottom: "12px" }}>{title}</h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#EBF2F7", borderTop: "1px solid rgba(12,31,53,0.07)", padding: "76px clamp(36px, 8vw, 120px)" }}>
        <div className="digital-content-shell">
          <p style={{ color: "#DB4E37", fontSize: "11px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "14px" }}>
            Technology Stack
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, lineHeight: 1.12, marginBottom: "18px" }}>
            Built for today. Designed to evolve.
          </h2>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.8, maxWidth: "660px", marginBottom: "42px" }}>
            SynTrack is a living platform, continuously evolving alongside the programmes it serves. Our open integration architecture means clients are never locked into a static stack - and our technology partnerships keep expanding what SynTrack can connect to.
          </p>
          <div className="digital-stack-grid" style={{ display: "grid", gap: "1px", background: "rgba(219,78,55,0.18)" }}>
            {stack.map((item) => (
              <div key={item.name} style={{ background: "#F3F8FB", padding: "32px", minHeight: "210px" }}>
                <h3 style={{ borderLeft: "3px solid #DB4E37", paddingLeft: "12px", fontSize: "14px", fontWeight: 800, marginBottom: "12px" }}>
                  {item.name}
                </h3>
                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.68 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
