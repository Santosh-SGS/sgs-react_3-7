import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our People | Synergiz Global",
};

export default function OurPeoplePage() {
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
          Our People
        </h1>
      </div>

      <div style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ color: "#DB4F37", fontSize: "2rem", fontWeight: 700 }}>The Team Behind Synergiz</h2>
          <p style={{ color: "#666", marginTop: "15px", maxWidth: "700px", margin: "15px auto 0", lineHeight: "1.7" }}>
            Our strength lies in our people — a diverse team of infrastructure professionals,
            engineers, planners, and consultants who bring decades of global experience to every
            project.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {teamValues.map((v) => (
            <div
              key={v.title}
              style={{
                padding: "30px 20px",
                backgroundColor: "#f8f8f8",
                borderRadius: "8px",
                textAlign: "center",
                borderTop: "4px solid #DB4F37",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>{v.icon}</div>
              <h4 style={{ fontWeight: 700, color: "#333", marginBottom: "10px" }}>{v.title}</h4>
              <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6" }}>{v.desc}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundColor: "#f0f8ff",
            borderLeft: "6px solid #4AB4D4",
            padding: "25px 30px",
            borderRadius: "0 8px 8px 0",
            marginTop: "50px",
          }}
        >
          <h3 style={{ color: "#4AB4D4", fontWeight: 700, marginBottom: "10px" }}>
            Join Our Team
          </h3>
          <p style={{ color: "#444", lineHeight: "1.7" }}>
            We are always looking for talented professionals to join our growing team. If you are
            passionate about infrastructure and want to make a real impact, we would love to hear
            from you.{" "}
            <a href="/careers" style={{ color: "#DB4F37", fontWeight: 600 }}>
              View open positions →
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

const teamValues = [
  { icon: "🌍", title: "Global Expertise", desc: "Our team brings international experience from infrastructure programmes across the world." },
  { icon: "🤝", title: "Collaboration", desc: "We work as one team — with each other and with our clients — to achieve shared goals." },
  { icon: "🎓", title: "Continuous Learning", desc: "We invest in our people through training, mentorship, and knowledge-sharing initiatives." },
  { icon: "⚡", title: "Innovation", desc: "We encourage creative problem-solving and embrace technology to deliver better outcomes." },
  { icon: "🏆", title: "Excellence", desc: "We hold ourselves to the highest standards in everything we do, driven by quality and integrity." },
  { icon: "🌱", title: "Diversity", desc: "We celebrate diverse backgrounds, perspectives, and experiences as our greatest strength." },
];
