"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactStrip from "./ContactStrip";

const services = [
  { label: "Programme Management", href: "/management-consulting#ppm" },
  { label: "SynTrack PMIS", href: "/digital-solutions" },
  { label: "Claims & EOT", href: "/management-consulting#cm" },
  { label: "Construction Mgmt", href: "/management-consulting#samc" },
  { label: "Analytics & BIM", href: "/management-consulting#btm" },
];

const sectors = [
  { label: "Railway & Freight", href: "/sectors" },
  { label: "Metro Rail", href: "/sectors" },
  { label: "Airport & Aviation", href: "/sectors" },
  { label: "Highways", href: "/sectors" },
  { label: "Power & Energy", href: "/sectors" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Project Portfolio", href: "/projects" },
  { label: "Insights & Blog", href: "/feed" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/about#contact" },
];

const linkStyle = {
  color: "rgba(250,250,250,0.9)",
  fontSize: "13px",
  lineHeight: 1.35,
  transition: "color 0.2s ease",
};

function FooterLinks({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h2
        style={{
          color: "rgba(250,250,250,0.94)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.09em",
          textTransform: "uppercase",
          marginBottom: "18px",
        }}
      >
        {title}
      </h2>
      <ul style={{ display: "flex", flexDirection: "column", gap: "11px", listStyle: "none" }}>
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} style={linkStyle}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {!isHome && <ContactStrip />}

      <footer
        role="contentinfo"
        style={{
          position: "relative",
          background: "linear-gradient(180deg, #0a0a0a 0%, #040404 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            height: "1px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(160,160,165,0.2) 25%, rgba(200,200,205,0.45) 50%, rgba(160,160,165,0.2) 75%, transparent 100%)",
          }}
        />

        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "72px 24px 0" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: "48px",
              marginBottom: "56px",
            }}
          >
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/synergiz_logo.png"
                alt="Synergiz Global Services"
                style={{ height: "80px", width: "auto", objectFit: "contain", marginBottom: "16px" }}
              />
              <p
                style={{
                  color: "rgba(250,250,250,0.94)",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  maxWidth: "230px",
                }}
              >
                Integrated infrastructure advisory and engineering firm.
              </p>
            </div>

            <FooterLinks title="Services" items={services} />
            <FooterLinks title="Sectors" items={sectors} />
            <FooterLinks title="Company" items={company} />
          </div>

          <div
            style={{
              borderTop: "0.5px solid rgba(250,250,250,0.94)",
              padding: "28px 0",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span style={{ color: "rgba(250,250,250,0.94)", fontSize: "12px" }}>
              &copy; 2026 Synergiz Global Services Private Limited. All rights reserved.
            </span>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <Link href="/feed" style={{ color: "rgba(250,250,250,0.94)", fontSize: "12px" }}>
                Privacy Policy
              </Link>
              <Link href="/" style={{ color: "rgba(250,250,250,0.94)", fontSize: "12px" }}>
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
