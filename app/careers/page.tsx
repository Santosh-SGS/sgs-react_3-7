import type { Metadata } from "next";
import { fetchJobs } from "@/lib/api";
import { Job } from "@/types";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Synergiz Global",
};

export default async function CareersPage() {
  let jobs: Job[] = [];
  try {
    const data = await fetchJobs();
    jobs = data.jobs ?? [];
  } catch {
    // backend unavailable
  }

  return (
    <>
      {/* Hero */}
      <div
        className="bg-grad-deep"
        style={{
          marginTop: "90px",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 style={{ color: "#DB4F37", fontSize: "2.5rem", fontWeight: 800, marginBottom: "10px" }}>
            Career
          </h1>
          <p style={{ color: "#fff", fontSize: "16px", maxWidth: "500px" }}>
            Join us in shaping the future of infrastructure. We offer a collaborative environment
            where your expertise drives real change.
          </p>
        </div>
      </div>

      <CareersClient jobs={jobs} />
    </>
  );
}
