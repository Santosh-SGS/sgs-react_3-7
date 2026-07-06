import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import ContactStrip from "@/components/ContactStrip";
import ClientLogos from "@/components/ClientLogos";
import DomainSlider from "@/components/DomainSlider";
import ProjectCard from "@/components/ProjectCard";
import GlobalPresence from "@/components/GlobalPresence";
import { fetchHomeData } from "@/lib/api";

export default async function HomePage() {
  let logoList: { attachment: string }[] = [];
  try {
    const data = await fetchHomeData();
    logoList = data.logoList ?? [];
  } catch {
    // backend not running; show empty
  }

  return (
    <>
      <HeroSection />

      {/* Management Consulting Flip Cards */}
      <div style={{ padding: "60px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>Management Consulting</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {flipCards.map((card) => (
            <FlipCard key={card.title} {...card} />
          ))}
        </div>
      </div>

      {/* SynTrack Innovation Section */}
      <div
        style={{
          backgroundImage: "url('/img/syntrack_showcase_code_cropped.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "20px 0",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.75)", padding: "80px 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff" }}>
              Our Innovation SynTrack
            </h2>
          </div>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "1.5rem", fontStyle: "italic", fontWeight: 500, marginBottom: "16px", lineHeight: "1.3" }}>
              Intelligence built into the backbone of infrastructure delivery.
            </p>
            <p style={{ lineHeight: "1.8", fontSize: "15px", marginBottom: "24px" }}>
              SynTrack is our in-house, patented PMIS for complex infrastructure programmes. It
              doesn&apos;t just collect data, it transforms it into real-time programme decisions.
            </p>
            <Link
              href="/syntrack"
              style={{
                display: "inline-block",
                padding: "12px 30px",
                backgroundColor: "#DB4F37",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                borderRadius: "4px",
                fontSize: "15px",
              }}
            >
                Platform Overview
            </Link>
          </div>

          {/* Platform Overview Stats */}
          <div style={{ maxWidth: "900px", margin: "40px auto 0" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                <div style={{ fontSize: "2.2rem", fontWeight: 700, color: "rgb(74, 180, 212)" }}>&lt; 2s</div>
                <h4 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600, margin: "8px 0 4px" }}>
                  AI Search
                </h4>
                <p style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.5" }}>
                  Query every contract, and RFI across an entire programme
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                <div style={{ fontSize: "2.2rem", fontWeight: 700, color: "rgb(74, 180, 212)" }}>98%</div>
                <h4 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600, margin: "8px 0 4px" }}>
                  Analysis Accuracy
                </h4>
                <p style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.5" }}>
                  Pattern recognition across all project data &mdash; bottlenecks before disputes
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                <div style={{ fontSize: "2.2rem", fontWeight: 700, color: "rgb(74, 180, 212)" }}>95%</div>
                <h4 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600, margin: "8px 0 4px" }}>
                  Forecast Accuracy
                </h4>
                <p style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.5" }}>
                  Completion predictions that give programme managers time to act, not react
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                <div style={{ fontSize: "2.2rem", fontWeight: 700, color: "rgb(74, 180, 212)" }}>4+</div>
                <h4 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600, margin: "8px 0 4px" }}>
                  Railway Zones
                </h4>
                <p style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.5" }}>
                  Indian Railway zones running SynTrack as their live PMIS platform
                </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "20px",
              }}
            >
              <div style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                <h4 style={{ color: "rgb(74, 180, 212)", fontSize: "0.95rem", fontWeight: 600, marginBottom: "8px" }}>
                  P6 Delay Analysis
                </h4>
                <p style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.5" }}>
                  EOT delay analysis with Primavera P6, MS Projects.
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                <h4 style={{ color: "rgb(74, 180, 212)", fontSize: "0.95rem", fontWeight: 600, marginBottom: "8px" }}>
                  4D BIM Integration
                </h4>
                <p style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.5" }}>
                  4D &amp; 5D BIM Integration. One-stop solution to automatize project management related activities.
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                <h4 style={{ color: "rgb(74, 180, 212)", fontSize: "0.95rem", fontWeight: 600, marginBottom: "8px" }}>
                  L5/L6 Daily Monitoring
                </h4>
                <p style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.5" }}>
                  L5/L6 level schedule for daily progress tracking alongwith alerts for bottleneck.
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                <h4 style={{ color: "rgb(74, 180, 212)", fontSize: "0.95rem", fontWeight: 600, marginBottom: "8px" }}>
                  Mobile Field App
                </h4>
                <p style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.5" }}>
                  iOS and Android, offline-capable. Real-time progress from site to dashboard &mdash; no lag, no manual re-entry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Solution Capabilities */}
      <div style={{ padding: "60px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>Our Digital Solution Capabilities</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {erpCards.map((card) => (
            <div
              key={card.name}
              style={{
                backgroundColor: "#fff",
                borderBottom: "10px solid #DB4F37",
                padding: "30px 20px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                width: "220px",
                flex: "0 0 auto",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.img}
                alt={card.name}
                width={120}
                height={120}
                style={{ borderRadius: "50%", objectFit: "cover", filter: "grayscale(1)" }}
              />
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#DB4F37",
                  margin: "15px 0 10px",
                  whiteSpace: "pre-line",
                }}
              >
                {card.name}
              </p>
              <p style={{ fontSize: "14px", color: "#555" }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Depth in every domain */}
      <div style={{ background: "var(--grad-deep)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "60px 20px 48px", borderBottom: "1px solid rgba(200,200,205,0.1)" }}>
          <p style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(200,200,205,0.6)", marginBottom: "12px" }}>
            Sector Ecosystem
          </p>
          <h2 style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 700, color: "#F3F3F3", letterSpacing: "-0.02em", lineHeight: 1.1, margin: 0 }}>
            Depth in every domain<br />we deliver.
          </h2>
        </div>
        <DomainSlider />
      </div>

      {/* Stats Counter */}
      <div style={{ background: "#373A40", padding: "16px 0", margin: "4px 0 0", borderTop: "1px solid rgba(200,200,205,0.08)", borderBottom: "1px solid rgba(200,200,205,0.08)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            maxWidth: "100%",
            margin: "0",
          }}
        >
          {stats.map((m, i) => (
            <div
              key={m.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "4px",
                padding: "12px 12px",
                borderRight: i < 3 ? "1px solid rgba(200,200,205,0.12)" : "none",
              }}
            >
              <span style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#DB4F37", lineHeight: 1, letterSpacing: "-0.02em", fontFamily: "var(--font-roboto), Roboto, sans-serif" }}>
                {m.val}
              </span>
              <p style={{ color: "#ffffff", margin: 0, lineHeight: "1.4", fontSize: "12px", fontWeight: 600, fontFamily: "var(--font-roboto), Roboto, sans-serif", letterSpacing: "0.02em", maxWidth: "150px" }}>
                {m.label}
              </p>
              <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: "1.4", fontSize: "11px", fontFamily: "var(--font-roboto), Roboto, sans-serif", maxWidth: "160px" }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Showcase */}
      <div style={{ padding: "0", background: "transparent" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: "1240px", margin: "0 auto 40px", padding: "60px 20px 0" }}>
          <div>
            <p style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(100,100,105,0.7)", marginBottom: "12px" }}>
              Project Portfolio
            </p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, fontFamily: "var(--font-roboto), Roboto, sans-serif", letterSpacing: "-0.02em", lineHeight: 1.14, color: "#000000" }}>
              <span style={{ color: "#DB4F37" }}>85+ projects.</span> 15+ countries.{" "}
              <br />
              Every major infrastructure sector.
            </h2>
          </div>
          <Link
            href="/projects"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px", backgroundColor: "#DB4F37", color: "#fff", fontWeight: 600, fontSize: "14px", whiteSpace: "nowrap", flexShrink: 0, borderRadius: "6px", textDecoration: "none" }}
          >
            View Full Portfolio →
          </Link>
        </div>

        {/* Top: 2 columns — DFC (3,300km) & Hyderabad Metro (72km) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4px", maxWidth: "1240px", margin: "0 auto", padding: "0 20px" }}>
          {[projects[0], projects[1]].map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        {/* Bottom: 4 columns — remaining projects */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px", maxWidth: "1240px", margin: "0 auto", padding: "0 20px", marginTop: "24px" }}>
          {[projects[2], projects[3], projects[4], projects[5]].map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>

      {/* Client Logos */}
      <ClientLogos logos={logoList} />

      {/* About Synergiz */}
      <div style={{ padding: "60px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>About Synergiz</h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap-reverse",
          }}
        >
          <div style={{ flex: "1 1 300px" }}>
            <p style={{ lineHeight: "1.8", fontSize: "16px", color: "#444" }}>
              At Synergiz Global, we are dedicated to being the trusted advisor and partner for
              delivering exemplary infrastructure projects. Our comprehensive services cover the
              entire project life cycle, from concept to close-out. We focus on setting quality
              benchmarks and global standards, particularly in India, with a committed and
              professional workforce. Our aim is to provide cost-effective solutions, fostering
              collaboration and transparency in the industry. By integrating key aspects of project
              execution, we strive to bring order and efficiency to the management of large-scale
              infrastructure projects.
            </p>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/synergizpic.jpg"
              alt="Synergiz"
              style={{ width: "100%", height: "auto", borderRadius: "8px", filter: "grayscale(1)" }}
            />
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <GlobalPresence />

      {/* Certifications */}
      <style>{`
        .cert-card {
          display: block;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none;
          border: 1px solid #58b1d0;
          transition: transform 0.3s ease;
        }
        .cert-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
      <div
        style={{
          padding: "20px 20px 40px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--primary-blue) 50%, transparent)",
          }}
        />
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <p
              style={{
                fontFamily: "var(--font-roboto), Roboto, sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
color: "var(--primary-orange)",
                marginBottom: "12px",
              }}
            >
              Certifications &amp; Credentials
            </p>
            <h2
              style={{
                fontFamily: "var(--font-roboto), Roboto, sans-serif",
                fontSize: "clamp(32px, 4.2vw, 60px)",
                fontWeight: 800,
                color: "#0f0f0f",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                margin: 0,
              }}
            >
              Enterprise credibility.<br />
              <span style={{ color: "#0f0f0f" }}>Independently verified.</span>
            </h2>
          </div>
        </div>

        {/* Cert stats — full width strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            overflow: "hidden",
            marginBottom: "12px",
            marginLeft: "-20px",
            marginRight: "-20px",
            background: "#373A40",
          }}
        >
          {[
            { num: "100%", label: "Client Retention Rate" },
            { num: "ISO", label: "9001 · 14001 Certified" },
            { num: "13+", label: "Years of Delivery" },
            { num: "4+", label: "Patents" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                padding: "20px 24px",
                textAlign: "center",
              }}
            >
                <div
                  style={{
                    fontFamily: "var(--font-roboto), Roboto, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(22px, 2.5vw, 32px)",
                    color: "var(--primary-orange)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-roboto), Roboto, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ background: "#fff", padding: "20px", borderRadius: "4px" }}>
          {/* Certificate cards — 5 columns */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
            {certs.map((cert) => (
              <a
                key={cert.label}
                href={cert.img}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
              >
                <div style={{ height: "2px", background: "linear-gradient(90deg, rgba(88,177,208,0.5), rgba(232,100,26,0.5), rgba(88,177,208,0.5))" }} />
                <div style={{ height: "160px", overflow: "hidden", position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.img}
                    alt={cert.label}
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "12px" }}
                  />
                  <div style={{ position: "absolute", top: "8px", right: "8px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "3px 6px",
                        borderRadius: "3px",
                        background: "rgba(7,20,40,0.9)",
                        border: "1px solid rgba(88,177,208,0.3)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontWeight: 700, fontSize: "7px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#58b1d0" }}>
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "12px", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontWeight: 700, fontSize: "11px", color: "#0f0f0f", marginBottom: "2px" }}>
                    {cert.label}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Contact Us */}
      <ContactForm />

      <ContactStrip />

      {/* Work With Us */}
      <div style={{ position: "relative", padding: "80px 20px 112px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="/img/cta-bg.png"
            alt=""
            aria-hidden="true"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "grayscale(1)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.75)" }} />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 50% 55% at 85% 80%, rgba(74,180,212,0.08) 0%, transparent 65%)" }} />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 40% 40% at 10% 90%, rgba(219,78,55,0.06) 0%, transparent 65%)" }} />
        </div>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", pointerEvents: "none", background: "linear-gradient(90deg, transparent 0%, rgba(74,180,212,0.35) 25%, rgba(74,180,212,0.6) 50%, rgba(74,180,212,0.35) 75%, transparent 100%)" }} />
        <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--primary-orange)", marginBottom: "12px" }}>
              Work With Us
            </p>
            <h2 style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 800, color: "#F3F8FB", letterSpacing: "-0.03em", lineHeight: 1.14, margin: "0 0 20px" }}>
              Your partner for<br />
              complex infrastructure<br />
              projects.
            </h2>
            <p style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", fontSize: "15px", color: "rgba(250,250,250,0.8)", lineHeight: 1.7, marginBottom: "28px" }}>
              Infrastructure project management requires balancing tight timelines, regulatory compliance, and digital integration. Whether you need support with project delivery, claims management, EOT &amp; Claims analysis or PMIS implementation, Synergiz provides the practical support and tools to streamline your workflows.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="/company-profile.pdf"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", backgroundColor: "transparent", color: "#ffffff", fontWeight: 600, fontSize: "14px", borderRadius: "6px", border: "2px solid #DB4E37", textDecoration: "none" }}
            >
              Download Company Profile →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function FlipCard({
  img,
  title,
  desc,
  link,
}: {
  img: string;
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "360px",
        perspective: "1000px",
      }}
      className="group"
    >
      <div
        className="group-hover:[transform:perspective(2000px)_rotateY(180deg)]"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "10px",
          overflow: "hidden",
          backfaceVisibility: "hidden",
          transition: "transform 0.8s",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            background: "rgba(0,0,0,0.75)",
            color: "#fff",
            padding: "15px 10px",
            textAlign: "center",
          }}
        >
          <h4 style={{ fontSize: "16px", fontWeight: 700 }}>{title}</h4>
        </div>
      </div>
      <div
        className="[transform:perspective(600px)_rotateY(180deg)] group-hover:[transform:perspective(2000px)_rotateY(360deg)]"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "10px",
          padding: "20px",
          color: "#f3f3f3",
          backfaceVisibility: "hidden",
          transition: "transform 0.8s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(1) brightness(0.3)",
            zIndex: 0,
          }}
        />
        <p style={{ lineHeight: "1.7", fontSize: "14px", position: "relative", zIndex: 1 }}>{desc}</p>
        <a
          href={link}
          style={{ color: "#DB4F37", textAlign: "right", fontWeight: 600, fontSize: "14px", position: "relative", zIndex: 1 }}
        >
          Read more →
        </a>
      </div>
    </div>
  );
}




const flipCards = [
  {
    img: "/img/flipcard1.jpg",
    title: "Programme Management Services",
    desc: "We help organizations to bridge the gap between organizational strategy and Programme/ Project Management goals. Our approach is to design, plan, organize, monitor, and control based on recognized standard methodology to deliver a specific outcome.",
    link: "/management-consulting#ppm",
  },
  {
    img: "/img/flipcard2.jpg",
    title: "Contract & Procurement Management",
    desc: "We streamline requirements and standards for setting up the Contracts, define key conditions for Contract Administration and Closure.",
    link: "/management-consulting#cm",
  },
  {
    img: "/img/flipcard3.jpg",
    title: "Construction Management",
    desc: "We provide specialized project management techniques to oversee the planning, design, and construction supervision of green field and brown field projects.",
    link: "/management-consulting#samc",
  },
  {
    img: "/img/flipcarddigital.jpg",
    title: "Digital Integrations",
    desc: "We provide one-stop solution to automatize project management related activities, provide intelligent reporting and forecasting solution, and auto-trigger alert system based on real time data.",
    link: "/management-consulting#btm",
  },
];

const erpCards = [
  { img: "/img/datainput.png", name: "Smart Data\nCleansing", desc: "Ensures accurate and clean data using Advance Validation Technique" },
  { img: "/img/dataprocessing.png", name: "Advanced Data\nAnalytics", desc: "Enhanced KPI tracking using our predictive analytics capabilities" },
  { img: "/img/datastorage.png", name: "Process\nAutomatization", desc: "Streamline workflows using Automation to increase productivity" },
  { img: "/img/smartreporting.png", name: "Smart\nReporting", desc: "Schedule report generation to provide valuable Business Intelligence" },
  { img: "/img/mobileapplication.png", name: "Access\nOn-the-Go", desc: "Real-time Progress Tracking & One-Click Task Clearance on our Mobile Application" },
];

const stats = [
  { val: "15%", label: "Resource Optimization", desc: "using cost-saving risk mitigation strategies & automatized reporting" },
  { val: "40%", label: "Data transfer time", desc: "saved with accurate processing" },
  { val: "60%", label: "Team deployed in the", desc: "government projects" },
  { val: "10M+", label: "Beneficiaries are benefited", desc: "with timely delivery of large-scale infrastructure projects" },
];

const projects = [
  {
    img: "https://demo-new-sg.vercel.app/assets/images/domain_railway.png",
    badge: "Railway",
    title: "Dedicated Freight Corridor — Eastern & Western",
    stat: "3,300km",
    statLabel: "Corridor Length",
    subtitle: "Programme Management, Planning & PMIS",
    desc: "End-to-end PMO and PMIS deployment across one of India's most complex multi-package freight corridor programmes — spanning civil, track, electrification, and signalling packages.",
    link: "/projects/railway",
  },
  {
    img: "https://demo-new-sg.vercel.app/assets/images/domain_metro.png",
    badge: "Metro",
    title: "Hyderabad Metro Rail — Full Programme",
    stat: "72km",
    statLabel: "Metro Network",
    subtitle: "Programme Management, EOT & Claims Support",
    desc: "Comprehensive programme management and commercial support across India's largest PPP metro project — managing planning, EOT analysis, and dispute resolution through delivery.",
    link: "/projects/metro",
  },
  {
    img: "https://demo-new-sg.vercel.app/assets/images/domain_airports.png",
    badge: "Airport",
    title: "Delhi IGI Airport — T1, T2 & T3",
    subtitle: "PMC Services, Site Supervision",
    desc: "Project management consultancy and site supervision services across all three terminals of India's busiest airport.",
    link: "/projects/airport",
  },
  {
    img: "https://demo-new-sg.vercel.app/assets/images/Picture1.png",
    badge: "Railway",
    title: "Mumbai–Ahmedabad HSR (MAHSR)",
    subtitle: "Design Support & Project Controls",
    desc: "Design support and project control services for India's first high-speed rail corridor.",
    link: "/projects/railway",
  },
  {
    img: "https://demo-new-sg.vercel.app/assets/images/Gemini_Generated_Image_lw1ui6lw1ui6lw1u.png",
    badge: "Metro",
    title: "Nagpur Metro Rail",
    subtitle: "5D BIM, Project Controls & Risk",
    desc: "5D BIM integration, project controls, and risk management for Nagpur's metro network.",
    link: "/projects/metro",
  },
  {
    img: "https://demo-new-sg.vercel.app/assets/images/Gemini_Generated_Image_73or5o73or5o73or.png",
    badge: "International",
    title: "Taoyuan Airport T3 — Taiwan",
    subtitle: "Design Review & PMC Support",
    desc: "International PMC support and design review services for Taiwan's Taoyuan Airport Terminal 3 expansion.",
    link: "/projects/airport",
  },
];

const certs = [
  { img: "/img/certificate1_1.jpg", label: "CMMI CERTIFICATE L5/1677" },
  { img: "/img/certificate2.jpg", label: "ISO CERTIFICATE 9001:2015" },
  { img: "/img/certificate3.jpg", label: "ISO CERTIFICATE 14001:2015" },
  { img: "/img/certificate4.jpg", label: "ISO CERTIFICATE 45001:2018" },
  { img: "/img/certificate5.jpg", label: "ISO IEC CERTIFICATE 27001:2022" },
];
