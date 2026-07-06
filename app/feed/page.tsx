import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Feed | Synergiz Global",
};

export default function FeedPage() {
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
          News & Updates
        </h1>
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 20px" }}>
        <div style={{ textAlign: "center", color: "#888" }}>
          <p style={{ fontSize: "18px", marginBottom: "15px" }}>
            News and updates will be displayed here.
          </p>
          <p style={{ fontSize: "14px" }}>Connect the backend to load dynamic content.</p>
        </div>
      </div>
    </>
  );
}
