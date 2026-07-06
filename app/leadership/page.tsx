import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | Synergiz Global",
};

export default function LeadershipPage() {
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
        <h1 style={{ color: "#DB4F37", fontSize: "3rem", fontWeight: 800, position: "relative", zIndex: 1 }}>
          Leadership
        </h1>
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 20px" }}>
        <p style={{ textAlign: "center", color: "#888", fontSize: "16px" }}>
          Leadership profiles are managed dynamically. Connect the backend to display leadership content.
        </p>
      </div>
    </>
  );
}
