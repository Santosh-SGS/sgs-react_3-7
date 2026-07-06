"use client";

import { useState } from "react";
import { submitResume } from "@/lib/api";

export default function JobApplyForm({
  jobId,
  jobTitle,
}: {
  jobId: string;
  jobTitle: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    fd.append("jobId", jobId);
    fd.append("jobTitle", jobTitle);
    const ok = await submitResume(fd);
    setStatus(ok ? "success" : "error");
    setTimeout(() => setStatus("idle"), 6000);
  }

  return (
    <div style={{ border: "1px solid #ddd", padding: "25px", borderRadius: "8px" }}>
      <h3 style={{ fontWeight: 700, marginBottom: "20px", color: "#DB4F37", fontSize: "1.3rem" }}>
        Apply for this Position
      </h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: 600, color: "#333" }}
          >
            Upload Resume (PDF, DOC, DOCX) *
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
              fontSize: "14px",
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "10px 30px",
              backgroundColor: "#DB4F37",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            {status === "loading" ? "Submitting..." : "Submit Resume"}
          </button>
          {status === "success" && (
            <p style={{ color: "green", fontWeight: 600 }}>Resume submitted successfully!</p>
          )}
          {status === "error" && (
            <p style={{ color: "red", fontWeight: 600 }}>Submission failed. Please try again.</p>
          )}
        </div>
      </form>
    </div>
  );
}
