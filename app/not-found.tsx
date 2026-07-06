import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: 800, color: "#DB4F37", margin: 0 }}>404</h1>
      <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#333", margin: "15px 0" }}>
        Page Not Found
      </h2>
      <p style={{ color: "#666", fontSize: "16px", maxWidth: "400px", lineHeight: "1.7" }}>
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "30px",
          padding: "12px 30px",
          backgroundColor: "#DB4F37",
          color: "#fff",
          borderRadius: "6px",
          fontWeight: 700,
          fontSize: "16px",
          display: "inline-block",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
