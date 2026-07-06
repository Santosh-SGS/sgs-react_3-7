"use client";

import { useState } from "react";
import { submitContactUs } from "@/lib/api";

const offices = [
  {
    city: "Delhi",
    img: "/img/delhi3.png",
    mapUrl: "https://www.google.com/maps?q=28.54888,77.250797&hl=en",
    address: ["Office No.2, B-6, Ansal Tower 38, Nehru Place,", "New Delhi–110019, India"],
  },
  {
    city: "Hyderabad",
    img: "/img/hyderabadmap.png",
    mapUrl: "https://www.google.com/maps?q=17.43771,78.400704&hl=en",
    address: ["A2, Spaces & More Plot 645, Road No 36,", "Jubilee Hills, Hyderabad-500033, Telangana, India"],
  },
  {
    city: "Bangalore",
    img: "/img/bangaloremap.png",
    mapUrl: "https://www.google.com/maps/place/WeWork+RMZ+Latitude+Commercial/@13.048349,77.592823,17z",
    address: [
      "WeWork Latitude, 10th Floor, RMZ Latitude Commercial,",
      "No. 69/458/69, Bellary Road, Hebbal, Bengaluru, Karnataka 560024",
    ],
  },
  {
    city: "Surat",
    img: "/img/suratmap.png",
    mapUrl: "https://www.google.com/maps/place/Synergiz+Global+Services/@21.1480857,72.7577432,17z",
    address: ["Office No. 701, 7th Floor, Luxuria Trade Hub", "Dumas Rd, Surat-395007, Gujarat, India"],
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const ok = await submitContactUs(form);
      setStatus(ok ? "success" : "error");
      if (ok) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 6000);
  }

  return (
    <div
      className="bg-grad-deep"
      style={{
        margin: "20px 0 0",
      }}
    >
      <div style={{ padding: "60px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff" }}>Contact Us</h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "60px",
            flexWrap: "wrap",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Form */}
          <div style={{ flex: "0 0 320px", minWidth: "280px" }}>
            <p style={{ color: "#59B1D0", fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>
              Get in Touch
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "24px" }}>
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "2px solid #fff",
                    color: "#fff",
                    fontSize: "20px",
                    padding: "10px 4px",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ marginBottom: "24px" }}>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "2px solid #fff",
                    color: "#fff",
                    fontSize: "20px",
                    padding: "10px 4px",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ marginBottom: "24px" }}>
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "2px solid #fff",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "10px 4px",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  backgroundColor: "#DB4F37",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 30px",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                {status === "loading" ? "Sending..." : "SUBMIT"}
              </button>
              {status === "success" && (
                <p style={{ color: "lightgreen", marginTop: "10px" }}>
                  Your details have been submitted successfully!
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "#ff6b6b", marginTop: "10px" }}>
                  Failed to send. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Office Locations */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <p style={{ color: "#59B1D0", fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>
              Office Locations
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {offices.map((office) => (
                <div
                  key={office.city}
                  style={{ display: "flex", alignItems: "flex-start", gap: "15px", flex: "0 0 45%", minWidth: "220px" }}
                >
                  <div style={{ textAlign: "center" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={office.img}
                      alt={office.city}
                      width={60}
                      height={60}
                      style={{ objectFit: "contain" }}
                    />
                    <br />
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#fff", fontSize: "15px", fontWeight: 600 }}
                    >
                      {office.city}
                    </a>
                  </div>
                  <div>
                    {office.address.map((line) => (
                      <p key={line} style={{ color: "#ccc", margin: "2px 0", fontSize: "14px", lineHeight: 1.45 }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
