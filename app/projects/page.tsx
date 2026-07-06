import type { Metadata } from "next";
import ProjectsCatalog, { CatalogProject } from "@/components/ProjectsCatalog";

export const metadata: Metadata = {
  title: "Projects | Synergiz Global",
};

const liveAssetBase = "https://www.synergizglobal.com/sgs/resources/img";

const referenceProjects: CatalogProject[] = [
  {
    id: "ref-high-speed-rail",
    type: "High Speed Rail",
    image: `${liveAssetBase}/highspeedproject.jpeg`,
    name: "Mumbai - Ahmedabad High Speed Rail Project",
    description: "Design support, tender preparation, planning and scheduling, cost estimation, and document control services for DD phase of MAHSR project.",
  },
  {
    id: "ref-rail-nmdc",
    type: "Railway",
    image: `${liveAssetBase}/rail2.jpg`,
    name: "Railway Siding for Integrated NMDC Steel Plant",
    description: "Providing consultancy service for progress monitoring through Microsoft Project and Primavera.",
  },
  {
    id: "ref-rail-edfcc",
    type: "Railway",
    image: `${liveAssetBase}/rail3.jpg`,
    name: "EDFCC 201 & 202",
    description: "Programme management, planning and scheduling, progress monitoring, delay analysis, EOT, and document management.",
  },
  {
    id: "ref-rail-dfcc-lot",
    type: "Railway",
    image: `${liveAssetBase}/rail4.jpg`,
    name: "DFCC LOT 301, 302 & CTP-13",
    description: "Project scheduling, monitoring, and control for contract package EDFCC LOT-301 Ambala and LOT-302 Noida.",
  },
  {
    id: "ref-rail-dfcc-ctp12",
    type: "Railway",
    image: `${liveAssetBase}/rail5.jpg`,
    name: "DFCC CTP-12",
    description: "Project scheduling and updating, monitoring, delay analysis, EOT support, document management system, and mobile app for daily site updates.",
  },
  {
    id: "ref-rail-pmis",
    type: "Railway",
    image: `${liveAssetBase}/rail1.jpg`,
    name: "PMIS Application",
    description: "Development of Project Management Information System for various projects executed by MRVC.",
  },
  {
    id: "ref-rail-hitachi",
    type: "Railway",
    image: `${liveAssetBase}/rail6.jpg`,
    name: "Hitachi DFCC",
    description: "Support for planning and programme requirements, including development of management plans for submission to DFCCI.",
  },
  {
    id: "ref-rail-delay",
    type: "Railway",
    image: `${liveAssetBase}/rail7.jpg`,
    name: "Delay and EOT Analysis",
    description: "Preparation of Delay Analysis report and submission of EOT.",
  },
  {
    id: "ref-air-atc",
    type: "Airport",
    image: `${liveAssetBase}/delhi%20tower.jpg`,
    name: "Air Traffic Control Tower",
    description: "Project planning and supervision services including design review, project controls, QHSE monitoring, change orders, and claims management.",
  },
  {
    id: "ref-air-papa",
    type: "Airport",
    image: `${liveAssetBase}/airway2.jpg`,
    name: "DIAL Taxiway PAPA",
    description: "Project planning and supervision services including design review, project controls, QHSE monitoring, bill certification, and value engineering.",
  },
  {
    id: "ref-air-retail",
    type: "Airport",
    image: `${liveAssetBase}/reatildelhi.jpg`,
    name: "DIAL T1 & T3 Retail Development",
    description: "Project planning and supervision services including design review, project controls, QHSE monitoring, change orders, and claims management.",
  },
  {
    id: "ref-air-t2",
    type: "Airport",
    image: `${liveAssetBase}/airport4.jpg`,
    name: "Refurbishment Works for Terminal-2",
    description: "Project planning and supervision services including design review, project controls, QHSE monitoring, bill certification, and value engineering.",
  },
  {
    id: "ref-air-plaza",
    type: "Airport",
    image: `${liveAssetBase}/airport5.jpg`,
    name: "Plaza Premium",
    description: "Project Supervision and engineering support services for Plaza Premium Lounge at IGI Airport, New Delhi.",
  },
  {
    id: "ref-air-revamp",
    type: "Airport",
    image: `${liveAssetBase}/airport6.jpg`,
    name: "DIAL T1 & T3 Revamp & Modernization",
    description: "Project planning and supervision services including design review, project controls, QHSE monitoring, change orders, and claims management.",
  },
  {
    id: "ref-air-taoyuan",
    type: "Airport",
    image: `${liveAssetBase}/airport7.jpg`,
    name: "Taoyuan International Airport Terminal 3",
    description: "PMO Consultancy Services",
  },
  {
    id: "ref-air-cpd",
    type: "Airport",
    image: `${liveAssetBase}/airport8.jpg`,
    name: "Commercial Property Development",
    description: "Construction management and supervision services for Commercial Property Development (CPD) works execute at Delhi Airport.",
  },
  {
    id: "ref-air-mial",
    type: "Airport",
    image: `${liveAssetBase}/airport9.jpg`,
    name: "MIAL Engineering Support Services",
    description: "BOQ preparation, estimation, rate analysis, cost control, quantity measurement, quality audits, bill verification support.",
  },
  {
    id: "ref-air-kuwait",
    type: "Airport",
    image: `${liveAssetBase}/airport10.jpg`,
    name: "Kuwait International Airport",
    description: "Pre-tender advisory services for the Kuwait Airport bid.",
  },
  {
    id: "ref-air-apde",
    type: "Airport",
    image: `${liveAssetBase}/airport11.jpg`,
    name: "Construction Supervision for APDE",
    description: "Project planning and supervision services including design review, project controls, QHSE monitoring, bill certification and value engineering.",
  },
  {
    id: "ref-air-aclc",
    type: "Airport",
    image: `${liveAssetBase}/airport12.jpg`,
    name: "IGIA ACLC-II Plot",
    description: "Project Management Consultancy (PMC) Services for Land Development & Utilities Provisioning Works at ACLC-II Plot at IGI Airport, New Delhi.",
  },
  {
    id: "ref-air-ame",
    type: "Airport",
    image: `${liveAssetBase}/airport13.jpg`,
    name: "Aircraft Maintenance Engineering (AME)",
    description: "Procurement and document services for application to establish Aircraft Maintenance Engineering Training Institute.",
  },
  {
    id: "ref-air-lounge",
    type: "Airport",
    image: `${liveAssetBase}/airport14.jpg`,
    name: "DIAL T2 Visitors' Lounge",
    description: "Project planning and supervision services including design review, project controls, QHSE monitoring, bill certification and document management.",
  },
  {
    id: "ref-air-airside",
    type: "Airport",
    image: `${liveAssetBase}/airport15.jpeg`,
    name: "IGI Airside Works",
    description: "Project Management Consultancy (PMC) Services for Execution of Improvement works at Airside, IGI Airport, New Delhi.",
  },
  {
    id: "ref-air-docs",
    type: "Airport",
    image: `${liveAssetBase}/airport16.jpg`,
    name: "DIAL Documentation",
    description: "Setting up of project control and document management processes.",
  },
  {
    id: "ref-air-hangars",
    type: "Airport",
    image: `${liveAssetBase}/airport17.jpg`,
    name: "DIAL - Hangars",
    description: "Support in planning & monitoring, procurement plan, documentation preparation for DGCA & CAR compliance for setting up of institute.",
  },
  {
    id: "ref-air-store",
    type: "Airport",
    image: `${liveAssetBase}/airport18.jpg`,
    name: "DIAL Central Store",
    description: "Project planning and supervision services including design review, project controls, QHSE monitoring, bill certification and document management.",
  },
  {
    id: "ref-metro-hyderabad",
    type: "Metro Rail",
    image: `${liveAssetBase}/Hyderabad-Metro-Rail-1.jpg`,
    name: "Hyderabad Metro Rail",
    description: "Programme management, planning and scheduling, progress monitoring, delay analysis, EOT, contracts, and claims management support.",
  },
  {
    id: "ref-metro-nagpur",
    type: "Metro Rail",
    image: `${liveAssetBase}/metro2.jpg`,
    name: "Nagpur Metro Rail",
    description: "Setting up business processes, project management plans, templates for development of 5D BIM & ERP system, project controls, risk management and change management.",
  },
  {
    id: "ref-metro-pune-r1-r2",
    type: "Metro Rail",
    image: `${liveAssetBase}/pune3.jpg`,
    name: "Pune Metro Rail; R1 & R2",
    description: "Preparation of RFIs and RA bills in a 5D BIM platform.",
  },
  {
    id: "ref-metro-pune",
    type: "Metro Rail",
    image: `${liveAssetBase}/metro4.jpg`,
    name: "Pune Metro Rail",
    description: "Programme Management, Planning and Scheduling, Progress Monitoring and measuring Project Schedule.",
  },
  {
    id: "ref-metro-nagpur-ncc",
    type: "Metro Rail",
    image: `${liveAssetBase}/metro5.jpg`,
    name: "Nagpur Metro Rail NCC",
    description: "Project scheduling and monitoring, preparation of RFIs, RA Bills in 5D BIM platform.",
  },
  {
    id: "ref-metro-delhi",
    type: "Metro Rail",
    image: `${liveAssetBase}/metro6.jpg`,
    name: "Delhi MRTS Phase III",
    description: "Planning, setup, and implementation of an improved document management system for GC office.",
  },
  {
    id: "ref-metro-chennai",
    type: "Metro Rail",
    image: `${liveAssetBase}/metro7.jpg`,
    name: "Chennai Metro Rail Project",
    description: "Technical support for justification of variation and change orders.",
  },
  {
    id: "ref-metro-mml7",
    type: "Metro Rail",
    image: `${liveAssetBase}/metro8.jpg`,
    name: "MML7",
    description: "Preparation of EOT Schedule & Delay Analysis Report (DAR) for Mumbai Metro Line 7 Andheri East to Dahisar.",
  },
  {
    id: "ref-metro-nmml1",
    type: "Metro Rail",
    image: `${liveAssetBase}/metro9.jpg`,
    name: "NMML1",
    description: "Preparation of EOT Schedule & Delay Analysis Report (DAR) for Mumbai Metro Line 1.",
  },
  {
    id: "ref-pipeline-artson",
    type: "Pipeline",
    image: `${liveAssetBase}/oil-storage%20arston.jpg`,
    name: "Artson TATA Projects",
    description: "Delay analysis and assistance with preparing an extension of time submission.",
  },
  {
    id: "ref-pipeline-iocl",
    type: "Pipeline",
    image: `${liveAssetBase}/IndianOil.jpg`,
    name: "KGPL & PSHPL Pipeline Projects",
    description: "Project schedule preparation and report generation for Paradip Somnathpur Haldia and Kandla Gorakhpur pipeline projects.",
  },
  {
    id: "ref-power",
    type: "Power",
    image: `${liveAssetBase}/power3.jpeg`,
    name: "Power",
    description: "Review of project schedule, critical activities and monitoring progress against schedule.",
  },
  {
    id: "ref-roadways",
    type: "Roadways",
    image: `${liveAssetBase}/roadways.jpg`,
    name: "TATA Projects",
    description: "Review of project schedule, critical activities and monitoring progress against schedule. Preparation of EOT & Claims statement.",
  },
];

export default async function ProjectsPage() {
  return (
    <>
      <section
        style={{
          marginTop: "90px",
          minHeight: "50vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "var(--grad-deep)",
        }}
      >
        <img
          src={`${liveAssetBase}/topImage.jpg`}
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(55,58,64,0.72) 48%, rgba(55,58,64,0.24) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1240px", margin: "0 auto", padding: "78px 24px", width: "100%" }}>
          <p style={{ color: "#4AB4D4", fontSize: "11px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "18px" }}>
            Projects
          </p>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 800, lineHeight: 1.08, maxWidth: "880px", marginBottom: "20px" }}>
            Projects
          </h1>
          <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "16px", lineHeight: 1.75, maxWidth: "760px" }}>
            Our industrial insights, combined with unique project management solutions, have empowered our clients to maximize their performance and achieve their project vision.
          </p>
        </div>
      </section>

      <ProjectsCatalog projects={referenceProjects} />
    </>
  );
}
