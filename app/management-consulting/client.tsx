"use client";

import RevealBlock from "@/components/RevealBlock";

const LEGACY_IMAGE_BASE = "https://www.synergizglobal.com/sgs/resources/img";

const existingImages = {
  hero: `${LEGACY_IMAGE_BASE}/topImage.jpg`,
  programme: `${LEGACY_IMAGE_BASE}/train.jpg`,
  contracts: `${LEGACY_IMAGE_BASE}/3.jpg`,
  construction: `${LEGACY_IMAGE_BASE}/2.jpg`,
  digital: `${LEGACY_IMAGE_BASE}/4.jpg`,
};

const serviceNav = [
  { num: "01", title: "Programme Management Services", anchor: "programme-management" },
  { num: "02", title: "Contract Management & Procurement", anchor: "contract-management" },
  { num: "03", title: "Construction Management", anchor: "construction-management" },
  { num: "04", title: "Digital Integrations", anchor: "digital-integrations" },
];

const services = [
  {
    num: "01",
    id: "programme-management",
    title: "Programme Management Services",
    lead:
      "We help organizations bridge the gap between organizational strategy and Programme / Project Management goals.",
    body:
      "Our approach is to design, plan, organize, monitor, and control based on recognized standard methodology to deliver a specific outcome.",
    img: existingImages.programme,
    light: true,
    detail: "Planning, governance, stakeholder coordination, controls, and quality frameworks.",
    items: [
      "Project Governance Framework",
      "Project Management Processes",
      "Project and task-specific procedures",
      "Stakeholder Management",
      "Interface Management",
      "Document & Design Management",
      "Risk Management Plan",
      "Project Quality Management Plan",
      "Work Breakdown Structure",
      "Project Control Systems",
    ],
  },
  {
    num: "02",
    id: "contract-management",
    title: "Contract Management & Procurement",
    lead:
      "We streamline requirements and standards for setting up contracts and define key conditions for contract administration and closure.",
    body:
      "Identifying deviances, enforcing remedies, change control, preparation of Extension of Time and Cost Claims is part of our integrated contract management approach.",
    img: existingImages.contracts,
    light: false,
    detail: "Contract administration, tender support, claims, reconciliation, and bid evaluation.",
    items: [
      "Contract Administration",
      "Negotiation Support",
      "Claims & Arbitration support",
      "Reconciliation of statements",
      "Quantification of Damages",
      "Draft Bid documents (FIDIC, NEC, BOT models)",
      "Bid Evaluation",
      "Support in Technical Bid Proposal preparation",
    ],
  },
  {
    num: "03",
    id: "construction-management",
    title: "Construction Management",
    lead:
      "We provide specialized project management techniques to oversee planning, design, and construction supervision.",
    body:
      "For greenfield and brownfield projects, construction management helps control a project's time / delivery, cost, and quality.",
    img: existingImages.construction,
    light: true,
    detail: "Site supervision, safety monitoring, quality control, billing, and handover support.",
    items: [
      "Planning, progress review and monitoring",
      "Quantity surveying, verification of Contractor's bills",
      "Safety review and monitoring",
      "Bill audits",
      "Design Review",
      "Review of RFI (Request for Inspection)",
      "Site supervision",
      "Quality control and quality assurance",
      "Contract closure and hand over support",
    ],
  },
  {
    num: "04",
    id: "digital-integrations",
    title: "Digital Integrations",
    lead:
      "We provide a one-stop solution to automatize project management related activities.",
    body:
      "Our digital integration support provides intelligent reporting and forecasting solutions with auto-triggered alert systems based on real-time data.",
    img: existingImages.digital,
    light: false,
    detail: "BIM support, RFI automation, PMIS, e-billing, and construction software integrations.",
    items: [
      "4D & 5D BIM Support",
      "Automation of RFI system",
      "Project Management Information System",
      "E-Billing Solutions",
      "API Integrations between various Construction Software",
    ],
  },
];

function CapabilityGrid({ items }: { items: string[] }) {
  const visibleItems = items.slice(0, 3);
  const hiddenItems = items.slice(3);

  return (
    <>
      <div
        className="mc-capability-grid mc-capability-grid-preview"
        style={{
          display: "grid",
          gap: "1px",
        }}
      >
        {visibleItems.map((item, i) => (
          <RevealBlock key={item} delay={i * 0.05} y={20}>
            <CapabilityCard item={item} />
          </RevealBlock>
        ))}
      </div>

      {hiddenItems.length > 0 && (
        <details className="mc-show-more">
          <summary>
            <span className="mc-show-more-open">Show Less -</span>
            <span className="mc-show-more-closed">Show More +</span>
          </summary>
          <div
            className={`mc-capability-grid${hiddenItems.length === 5 ? " mc-capability-grid-balanced" : ""}`}
            style={{
              display: "grid",
              gap: "1px",
            }}
          >
            {hiddenItems.map((item, i) => (
              <RevealBlock key={item} delay={i * 0.05} y={20}>
                <CapabilityCard item={item} />
              </RevealBlock>
            ))}
          </div>
        </details>
      )}
    </>
  );
}

function CapabilityCard({ item }: { item: string }) {
  return (
    <div
      className="mc-capability-card"
      style={{
        background: "#fff",
        borderLeft: "2px solid #4AB4D4",
        padding: "20px",
        minHeight: "80px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h3 style={{ color: "#000", fontSize: "13px", fontWeight: 800, lineHeight: 1.35 }}>
        {item}
      </h3>
    </div>
  );
}

function ServiceSection({ service }: { service: (typeof services)[number] }) {
  return (
    <section id={service.id}>
      <RevealBlock>
        <div
          style={{
            borderTop: "1px solid rgba(219,78,55,0.14)",
          }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "30px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span
                style={{
                  color: "#DB4E37",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Service {service.num}
              </span>
            </div>
          </div>
        </div>
      </RevealBlock>

      <RevealBlock y={30}>
        <div style={{ height: "310px", overflow: "hidden", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.img} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(100deg, rgba(0,0,0,0.82) 0%, rgba(55,58,64,0.68) 45%, rgba(55,58,64,0.18) 100%)",
            }}
          />
          <div style={{ position: "absolute", inset: "28px 24px auto" }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
              <p
                style={{
                  color: "#fff",
                  fontSize: "clamp(17px, 1.45vw, 22px)",
                  fontStyle: "italic",
                  lineHeight: 1.55,
                  maxWidth: "620px",
                  textShadow: "0 18px 45px rgba(0,0,0,0.55)",
                }}
              >
                {service.lead}
              </p>
            </div>
          </div>
        </div>
      </RevealBlock>

      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "24px 24px 0" }}>
        <h2 style={{ color: "#DB4E37", fontSize: "clamp(22px, 2.2vw, 32px)", fontWeight: 800, lineHeight: 1.15 }}>
          {service.title}
        </h2>
      </div>

      <RevealBlock y={30}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "52px 24px 58px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "64px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                borderLeft: "2px solid #4AB4D4",
                paddingLeft: "16px",
                color: "#000",
                fontSize: "12px",
                lineHeight: 1.7,
              }}
            >
              <span
                style={{
                  color: "#000",
                  display: "block",
                  fontSize: "10px",
                  fontWeight: 800,
                  letterSpacing: "0.07em",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                }}
              >
                Service scope
              </span>
              {service.detail}
            </div>
            <p style={{ color: "#000", fontSize: "15px", lineHeight: 1.85 }}>{service.body}</p>
          </div>

          <CapabilityGrid items={service.items} />
        </div>
      </RevealBlock>
    </section>
  );
}

export default function ManagementConsultingClient() {
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
          color: "#000",
          background: "#fafafa",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={existingImages.hero}
          alt="Management consulting"
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
          <div
            style={{
                  color: "#fff",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            Management Consulting
          </div>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(28px, 3.4vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.08,
              maxWidth: "880px",
              marginBottom: "20px",
            }}
          >
            Management Consulting
          </h1>
           <p style={{ color: "#fff", fontSize: "16px", lineHeight: 1.75, maxWidth: "760px" }}>
            Synergiz Global Services offers a comprehensive suite of services spanning Programme Management, Contract Management, Digital Implementations, and Project Management. With our diverse expertise and unwavering commitment to excellence, we guarantee successful project execution and the achievement of desired outcomes for our clients.
          </p>
        </div>
      </section>

      <nav
        className="mc-service-nav"
        style={{
          position: "sticky",
          top: "90px",
          zIndex: 100,
          background: "#fafafa",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #000",
          overflowX: "auto",
        }}
      >
        <div style={{ maxWidth: "1240px", width: "100%", minWidth: 0, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {serviceNav.map((item) => (
            <a
              key={item.anchor}
              href={`#${item.anchor}`}
              style={{
                color: "#000",
                borderRight: "1px solid #000",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 20px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "#DB4E37", fontSize: "11px", fontWeight: 900 }}>{item.num}</span>
              {item.title}
            </a>
          ))}
        </div>
      </nav>

      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
    </>
  );
}
