import type { Metadata } from "next";
import { fetchAboutUs } from "@/lib/api";
import { TeamMember } from "@/types";

export const metadata: Metadata = {
  title: "About Us | Synergiz Global",
};

const liveAssetBase = "https://www.synergizglobal.com/sgs/resources/img";

const fallbackTeam: TeamMember[] = [
  {
    name: "Rajiv Dhupkar",
    designation: "CEO",
    description: "",
    photo: `${liveAssetBase}/New%20Project%20(26).jpg`,
    link: "https://www.linkedin.com/in/rajiv-dhupkar-59980949/",
  },
  {
    name: "Gopinadh V",
    designation: "Associate Director - Finance",
    description: "",
    photo: `${liveAssetBase}/New%20Project%20(22).jpg`,
    link: "https://www.linkedin.com/in/gopinadh-velivela-b61a5760/",
  },
  {
    name: "Rashmi Lahari",
    designation: "Associate Director - HR",
    description: "",
    photo: `${liveAssetBase}/New%20Project%20(24).jpg`,
    link: "https://www.linkedin.com/in/rashmilaheri/",
  },
  {
    name: "Nihal Swarna",
    designation: "Associate Director - Strategy & Operations",
    description: "",
    photo: `${liveAssetBase}/New%20Project%20(41).jpg`,
    link: "https://www.linkedin.com/in/gopi-nihal-swarna-4baa1657",
  },
  {
    name: "Pratik More",
    designation: "Product Manager - IT",
    description: "",
    photo: `${liveAssetBase}/New%20Project%20(45).jpg`,
    link: "https://www.linkedin.com/in/pratik-more-601562105/",
  },
  {
    name: "H.K Jaggi",
    designation: "",
    description: "",
    photo: "",
    link: "",
  },
  {
    name: "Dr Senthil",
    designation: "",
    description: "",
    photo: "/img/dr-senthil.jpeg",
    link: "",
  },
  {
    name: "Chahtey Ram",
    designation: "Vice President - Technical",
    description: "",
    photo: `${liveAssetBase}/New%20Project%20(43).jpg`,
    link: "https://www.linkedin.com/in/chahatey-ram-39a59a171/",
  },
  {
    name: "Adesh Sharma",
    designation: "Sr. Advisor",
    description: "",
    photo: `${liveAssetBase}/New%20Project%20(44).jpg`,
    link: "https://www.linkedin.com/in/adesh-sharma-830b47223/",
  },
  {
    name: "Sanjay K",
    designation: "Vice President - Contracts & Claims",
    description: "",
    photo: `${liveAssetBase}/New%20Project%20(34).jpg`,
    link: "https://www.linkedin.com/in/sanjay-kangralkar-mciarb-mrics-c-eng-mie-m-ceai-032a8a1/",
  },
  {
    name: "Swaminathan",
    designation: "Vice President - Depot",
    description: "",
    photo: `${liveAssetBase}/New%20Project%20(37).jpg`,
    link: "https://www.linkedin.com/in/swaminathan-kalyanam-350669128/",
  },
  {
    name: "N K Garg",
    designation: "Vice President - Rail",
    description: "",
    photo: `${liveAssetBase}/New%20Project%20(39).jpg`,
    link: "https://www.linkedin.com/in/nkgarg786/",
  },
  {
    name: "Swathi Sagi",
    designation: "Engineering Manager - IT",
    description: "",
    photo: `${liveAssetBase}/New%20Project%20(40).jpg`,
    link: "https://www.linkedin.com/in/swathi-sagi-57bb6826/",
  },
];

const culturePoints = [
  {
    title: "Diversity",
    text: "We bring together people from different regions, disciplines, and experiences so project decisions benefit from wider perspective.",
  },
  {
    title: "Equality",
    text: "We work to create a respectful, inclusive environment where contribution, ownership, and merit are recognized.",
  },
  {
    title: "Opportunity to Flourish",
    text: "From young professionals to senior specialists, our teams are supported through mentoring, learning, and practical project exposure.",
  },
  {
    title: "Innovation Mindset",
    text: "Curiosity, digital thinking, and disciplined execution help our teams solve complex infrastructure delivery challenges.",
  },
];

const gallery = [
  `${liveAssetBase}/IMG_2655.jpeg`,
  `${liveAssetBase}/party1.jpeg`,
  "/img/synergizpic.jpeg",
  `${liveAssetBase}/party4.jpeg`,
  `${liveAssetBase}/party7.jpeg`,
  `${liveAssetBase}/party8.jpeg`,
  `${liveAssetBase}/meetingPic.jpg`,
  `${liveAssetBase}/party13.jpg`,
];

export default async function AboutPage() {
  let teamMembers: TeamMember[] = [];
  try {
    const data = await fetchAboutUs();
    teamMembers = data.aboutUsList ?? [];
  } catch {
    // backend unavailable
  }

  const managementTeam = teamMembers.length > 0 ? teamMembers : fallbackTeam;

  return (
    <>
      <style>{`
        .about-team-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbfc 100%);
          text-align: center;
          padding: 12px;
          border: 1px solid rgba(89,177,208,0.2);
          box-shadow: 0 16px 42px rgba(12,24,38,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .about-team-card:hover {
          transform: translateY(-6px);
          border-color: rgba(219,79,55,0.28);
          box-shadow: 0 26px 60px rgba(12,24,38,0.16);
        }

        .about-team-card:before,
        .about-team-card:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 4px;
          border-color: #59B1D0;
          transition: transform 0.3s ease;
        }

        .about-team-card:before {
          left: 0;
          bottom: 0;
          border-bottom: 4px solid #59B1D0;
          transform: translateX(100%);
        }

        .about-team-card:after {
          left: 0;
          top: 0;
          border-top: 4px solid #59B1D0;
          transform: translateX(-100%);
        }

        .about-team-card:hover:before,
        .about-team-card:hover:after {
          transform: translateX(0);
        }

        .about-team-media {
          position: relative;
          overflow: hidden;
          background: #111;
        }

        .about-team-media img {
          transition: transform 0.5s ease, filter 0.5s ease;
        }

        .about-team-card:hover .about-team-media img {
          transform: scale(1.04);
          filter: grayscale(0.35) contrast(1.04) !important;
        }

        .about-team-media:after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 42%;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,0.55));
          pointer-events: none;
        }

        .about-linkedin-button {
          position: absolute;
          right: 12px;
          bottom: 12px;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #0A66C2;
          color: #fff;
          font: 800 15px/1 var(--font-roboto), Roboto, sans-serif;
          text-decoration: none;
          box-shadow: 0 12px 24px rgba(10,102,194,0.32);
          transform: translateY(4px);
          opacity: 0.94;
          transition: transform 0.2s ease, opacity 0.2s ease, background 0.2s ease;
        }

        .about-linkedin-button:hover {
          transform: translateY(0);
          opacity: 1;
          background: #084c91;
        }

        .about-team-name-link {
          color: #DB4E37;
          text-decoration: none;
        }

        .about-team-name-link:hover {
          text-decoration: underline;
        }

        .about-gallery {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          height: 55vmin;
          min-height: 320px;
          max-height: 560px;
          overflow: hidden;
        }

        .about-gallery img {
          flex: 1;
          min-width: 0;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) brightness(0.75);
          transition: flex 0.45s ease, filter 0.45s ease;
        }

        .about-gallery img:hover {
          flex: 7;
          filter: grayscale(0) brightness(1.08);
        }

        @media (max-width: 900px) {
          .about-hero-grid,
          .about-story-grid {
            grid-template-columns: 1fr !important;
          }

          .about-gallery {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: auto;
            max-height: none;
          }

          .about-gallery img {
            height: 220px;
          }
        }

        @media (max-width: 640px) {
          .about-section {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>

      <section
        style={{
          marginTop: "90px",
          minHeight: "62vh",
          background: "#000",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
        }}
        className="about-hero-grid"
      >
        <div style={{ minHeight: "420px", overflow: "hidden" }}>
          <img
            src="/img/synergizpic.jpeg"
            alt="Synergiz Global team and workplace"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "64px 32px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <div>
            <p style={{ color: "#59B1D0", fontSize: "13px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "14px" }}>
              About Synergiz
            </p>
            <h1 style={{ color: "#DB4F37", fontSize: "clamp(42px, 6vw, 76px)", lineHeight: 1, fontWeight: 800, margin: "0 0 20px" }}>
              Our Story
            </h1>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "18px", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
              Building a stronger infrastructure future through programme management, digital systems, and people who care about delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section" style={{ padding: "72px 40px", maxWidth: "1240px", margin: "0 auto" }}>
        <div className="about-story-grid" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "48px", alignItems: "start" }}>
          <div>
            <p style={{ color: "#59B1D0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px" }}>
              Who We Are
            </p>
            <h2 style={{ color: "#DB4F37", fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.06, fontWeight: 800, margin: 0 }}>
              Infrastructure management with digital discipline.
            </h2>
          </div>
          <div>
            {[
              "Synergiz Global Services Pvt. Ltd. partners with public and private infrastructure organizations to plan, monitor, and deliver complex programmes across airports, metro rail, high-speed rail, railways, and roadways.",
              "Our work combines programme management, construction management, contract and claims support, project controls, and digital implementation. The aim is simple: help clients make better decisions with transparent information and stronger delivery systems.",
              "From SynTrack to BIM-enabled monitoring and PMIS rollouts, our teams use technology to connect site realities with leadership dashboards, improving collaboration between clients, contractors, and consultants.",
              "The foundation remains our people: experienced professionals working with resilience, accountability, and a shared commitment to quality.",
            ].map((paragraph) => (
              <p key={paragraph} style={{ color: "#444", fontSize: "18px", lineHeight: 1.85, margin: "0 0 18px", textAlign: "justify" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#f6fbfd", padding: "58px 20px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <h2 style={{ color: "#DB4F37", textAlign: "center", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, margin: "0 0 34px" }}>
            Our Management Team
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "18px",
            }}
          >
            {managementTeam.map((member) => (
              <article key={`${member.name}-${member.designation}`} className="about-team-card">
                <div className="about-team-media">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      style={{ width: "100%", aspectRatio: "4 / 4.6", objectFit: "cover", filter: "grayscale(1)", display: "block" }}
                    />
                  ) : (
                    <div
                      aria-label={member.name}
                      style={{
                        width: "100%",
                        aspectRatio: "4 / 4.6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, #373A40 0%, #111 100%)",
                        color: "#59B1D0",
                        fontSize: "clamp(42px, 6vw, 72px)",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {member.name
                        .replace(/\./g, "")
                        .split(" ")
                        .filter(Boolean)
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  )}
                  {member.link && (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="about-linkedin-button"
                    >
                      in
                    </a>
                  )}
                </div>
                <h3 style={{ fontSize: "21px", margin: "18px 0 6px", fontWeight: 700 }}>
                  {member.link ? (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="about-team-name-link"
                    >
                      {member.name}
                    </a>
                  ) : (
                    <span style={{ color: "#DB4E37" }}>{member.name}</span>
                  )}
                </h3>
                {member.designation && (
                  <p style={{ color: "#222", fontSize: "15px", lineHeight: 1.45, margin: 0 }}>{member.designation}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" style={{ padding: "72px 40px", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h2 style={{ color: "#DB4F37", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, margin: "0 0 12px" }}>
            Our People And Culture
          </h2>
          <p style={{ color: "#59B1D0", fontSize: "20px", fontWeight: 700, fontStyle: "italic", margin: 0 }}>
            Embracing diversity, equality, and innovation.
          </p>
        </div>
        <p style={{ color: "#444", fontSize: "18px", lineHeight: 1.85, maxWidth: "980px", margin: "0 auto 32px", textAlign: "center" }}>
          Our greatest strength is the team behind the work. We nurture a culture where people can contribute fully, grow through real project challenges, and bring new thinking to infrastructure delivery.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
          {culturePoints.map((point) => (
            <div key={point.title} style={{ borderTop: "4px solid #DB4F37", background: "#373A40", padding: "24px", minHeight: "180px" }}>
              <h3 style={{ color: "#59B1D0", fontSize: "21px", margin: "0 0 12px" }}>{point.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#000", padding: "58px 20px 70px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <h2 style={{ color: "#DB4F37", textAlign: "center", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, margin: "0 0 30px" }}>
            Our Gallery
          </h2>
          <div className="about-gallery">
            {gallery.map((src) => (
              <img key={src} src={src} alt="Synergiz Global gallery" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
