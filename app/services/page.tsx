import type { Metadata } from "next";
import { S3_BASE } from "@/lib/api";

export const metadata: Metadata = {
  title: "Our Services | Synergiz Global",
};

const services = [
  {
    id: "ppm",
    reverse: false,
    img: `${S3_BASE}/img/services/Project-Management.jpg`,
    title: "Programme & Project Management",
    desc: "We offer comprehensive Programme & Project Management services encompassing the full project lifecycle from initiation to close-out. Our seasoned professionals deploy proven methodologies to ensure projects are delivered on time, within budget, and to the highest quality standards.",
    list: [
      "Project Governance Framework",
      "Work Breakdown Structure (WBS)",
      "Risk Management Plan",
      "Project Quality Management Plan",
      "Stakeholder Management",
      "Interface Management",
      "Document & Design Management",
      "Procurement & Contracts Management",
      "Project Control Systems",
    ],
  },
  {
    id: "cm",
    reverse: true,
    img: `${S3_BASE}/img/services/bigstock-Building-under-construction-wi-46049473.jpg`,
    title: "Construction Management",
    desc: "Our Construction Management services provide on-site oversight and supervision for complex greenfield and brownfield infrastructure projects. We ensure adherence to design intent, quality benchmarks, safety standards, and schedule milestones.",
    list: [
      "Site supervision and quality assurance",
      "Quantity surveying and billing",
      "RFI and design coordination",
      "Health, Safety & Environment (HSE) management",
      "Progress monitoring and reporting",
      "Sub-contractor management",
    ],
  },
  {
    id: "samc",
    reverse: false,
    img: `${S3_BASE}/img/services/Infrastructure-Management-consultancy-1-1568x1132.jpg`,
    title: "Strategic Advisory & Management Consulting",
    desc: "Synergiz provides strategic advisory services to guide clients through complex decisions in infrastructure planning, procurement, and delivery. Our team brings global best practices and deep sectoral knowledge to each engagement.",
    list: [
      "Market Analysis and feasibility studies",
      "Pre-Bid Advisory Services",
      "Risk Management and mitigation planning",
      "Transaction Advisory",
      "Regulatory and compliance guidance",
      "PPP structuring and support",
    ],
  },
  {
    id: "btm",
    reverse: true,
    img: `${S3_BASE}/img/services/Business-Management.jpg`,
    title: "Business Transformation & Management",
    desc: "We help organisations reimagine their project delivery processes through business transformation initiatives. Our consultants identify inefficiencies, design optimised workflows, and implement measurable improvements.",
    list: [
      "Process improvement and optimization",
      "Organizational restructuring",
      "Change management support",
      "Performance benchmarking",
      "Digital transformation roadmaps",
    ],
  },
  {
    id: "bia",
    reverse: false,
    img: `${S3_BASE}/img/services/Business-INtellignece-analytics.jpeg`,
    title: "Business Intelligence & Analytics",
    desc: "We leverage advanced data analytics and business intelligence tools to provide our clients with actionable insights for better decision-making across their infrastructure programmes.",
    list: [
      "Dashboard creation and reporting",
      "Predictive analytics for project delays",
      "KPI tracking and performance monitoring",
      "Data-driven risk identification",
      "Executive reporting and visualizations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="bg-grad-deep"
        style={{
          marginTop: "90px",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 style={{ color: "#fff", fontSize: "3rem", fontWeight: 800, marginBottom: "10px" }}>
            Our Services
          </h1>
          <p style={{ color: "#ccc", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
            End-to-end infrastructure consulting from concept to close-out
          </p>
        </div>
      </div>

      {/* Service Sections */}
      {services.map((s) => (
        <div
          key={s.id}
          id={s.id}
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: s.reverse ? "row-reverse" : "row",
            minHeight: "420px",
            borderBottom: "1px solid #eee",
          }}
        >
          <div style={{ flex: "0 0 45%", minWidth: "280px", position: "relative", minHeight: "350px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.img}
              alt={s.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }}
            />
          </div>
          <div
            style={{
              flex: 1,
              minWidth: "280px",
              padding: "50px 40px",
              backgroundColor: "#fff",
            }}
          >
            <h3
              style={{
                color: "#DB4F37",
                fontSize: "1.8rem",
                fontWeight: 800,
                marginBottom: "15px",
              }}
            >
              {s.title}
            </h3>
            <p style={{ lineHeight: "1.8", color: "#444", marginBottom: "20px", fontSize: "15px" }}>
              {s.desc}
            </p>
            <ul style={{ paddingLeft: "1.2em" }}>
              {s.list.map((item) => (
                <li
                  key={item}
                  style={{ listStyleType: "square", margin: "6px 0", color: "#333", lineHeight: "1.5" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
