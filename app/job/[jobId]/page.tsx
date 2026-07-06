import type { Metadata } from "next";
import { fetchJob } from "@/lib/api";
import JobApplyForm from "./JobApplyForm";

export async function generateMetadata(props: PageProps<"/job/[jobId]">): Promise<Metadata> {
  const { jobId } = await props.params;
  const data = await fetchJob(jobId).catch(() => null);
  return { title: data ? `${data.job?.jobTitle} | Synergiz Global` : "Job Details | Synergiz Global" };
}

export default async function JobDetailPage(props: PageProps<"/job/[jobId]">) {
  const { jobId } = await props.params;
  let jobData: { job: Record<string, string | number> } | null = null;
  try {
    jobData = await fetchJob(jobId);
  } catch {
    // backend unavailable
  }

  if (!jobData?.job) {
    return (
      <div style={{ paddingTop: "120px", textAlign: "center", padding: "120px 40px" }}>
        <h2 style={{ color: "#DB4F37", fontSize: "2rem" }}>Job Not Found</h2>
        <p style={{ marginTop: "15px", color: "#666" }}>
          This job posting is not available. The backend may not be running.
        </p>
      </div>
    );
  }

  const job = jobData.job;

  return (
    <div style={{ paddingTop: "90px", maxWidth: "900px", margin: "0 auto", padding: "120px 20px 60px" }}>
      {/* Header */}
      <h1 style={{ color: "#DB4F37", fontSize: "2rem", fontWeight: 800, marginBottom: "20px" }}>
        {String(job.jobTitle)}
      </h1>

      {/* Meta info */}
      <div style={{ display: "flex", gap: "25px", flexWrap: "wrap", marginBottom: "30px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555" }}>
          <span>📋</span>
          <span>{String(job.jobType)}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555" }}>
          <span>📍</span>
          <span>{String(job.location)}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555" }}>
          <span>📅</span>
          <span>Closing: {String(job.date)}</span>
        </div>
      </div>

      {/* Description */}
      <div
        style={{ lineHeight: "1.8", color: "#444", marginBottom: "30px", fontSize: "16px" }}
        dangerouslySetInnerHTML={{ __html: String(job.description ?? "") }}
      />

      {/* Job Features */}
      <div
        style={{
          backgroundColor: "#f8f8f8",
          borderRadius: "8px",
          padding: "25px",
          marginBottom: "40px",
        }}
      >
        <h3 style={{ fontWeight: 700, marginBottom: "15px", color: "#333" }}>Job Details</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {[
              ["Category", job.category],
              ["Min Experience", `${job.experienceMin} years`],
              ["Max Experience", `${job.experienceMax} years`],
              ["Education", job.education],
            ].map(([k, v]) => (
              <tr key={String(k)}>
                <td style={{ padding: "10px", border: "1px solid #ddd", fontWeight: 600, color: "#555", width: "40%" }}>
                  {String(k)}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd", color: "#333" }}>
                  {String(v)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Resume Upload */}
      <JobApplyForm jobId={String(job.jobId)} jobTitle={String(job.jobTitle)} />
    </div>
  );
}
