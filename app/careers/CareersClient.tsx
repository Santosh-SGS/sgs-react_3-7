"use client";

import { useState } from "react";
import Link from "next/link";
import { Job } from "@/types";
import { applyIntern, applyExperienced } from "@/lib/api";

type Tab = "jobs" | "internships" | "fresher" | "experienced" | "veterans";

export default function CareersClient({ jobs }: { jobs: Job[] }) {
  const [activeTab, setActiveTab] = useState<Tab>("jobs");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const filtered = jobs.filter((j) => {
    const matchSearch = !search || j.jobTitle.toLowerCase().includes(search.toLowerCase());
    const matchLoc = !location || j.location.toLowerCase().includes(location.toLowerCase());
    return matchSearch && matchLoc;
  });

  async function handleInternSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("loading");
    const fd = new FormData(e.currentTarget);
    const ok = await applyIntern(fd);
    setFormStatus(ok ? "success" : "error");
    setTimeout(() => setFormStatus("idle"), 5000);
  }

  async function handleExpSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("loading");
    const fd = new FormData(e.currentTarget);
    const ok = await applyExperienced(fd);
    setFormStatus(ok ? "success" : "error");
    setTimeout(() => setFormStatus("idle"), 5000);
  }

  const tabStyle = (t: Tab) => ({
    padding: "10px 20px",
    border: "none",
    borderBottom: activeTab === t ? "3px solid #DB4F37" : "3px solid transparent",
    background: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "15px",
    color: activeTab === t ? "#DB4F37" : "#555",
    transition: "color 0.2s",
  });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "15px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "4px",
    color: "#333",
    fontWeight: 600,
    fontSize: "14px",
  };

  const btnStyle: React.CSSProperties = {
    padding: "10px 25px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 600,
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #ddd", marginBottom: "30px", flexWrap: "wrap" }}>
        <button style={tabStyle("jobs")} onClick={() => setActiveTab("jobs")}>Job Openings</button>
        <button style={tabStyle("internships")} id="internships" onClick={() => setActiveTab("internships")}>Internships</button>
        <button style={tabStyle("fresher")} id="fresher" onClick={() => setActiveTab("fresher")}>Entry Level (Fresher)</button>
        <button style={tabStyle("experienced")} id="experienced" onClick={() => setActiveTab("experienced")}>Experienced Professional</button>
        <button style={tabStyle("veterans")} id="veterans" onClick={() => setActiveTab("veterans")}>Veterans</button>
      </div>

      {/* Job Listings Tab */}
      {activeTab === "jobs" && (
        <div>
          {/* Search */}
          <div style={{ display: "flex", gap: "15px", marginBottom: "20px", flexWrap: "wrap" }}>
            <input
              type="text"
              placeholder="Search by keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", flex: 1, minWidth: "200px" }}
            />
            <input
              type="text"
              placeholder="Filter by location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", flex: 1, minWidth: "200px" }}
            />
            <button
              onClick={() => { setSearch(""); setLocation(""); }}
              style={{ padding: "10px 20px", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              Clear
            </button>
          </div>

          {filtered.length > 0 ? (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#333", color: "#fff" }}>
                    <th style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>Sr.</th>
                    <th style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>Position</th>
                    <th style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>Location</th>
                    <th style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>Min Exp.</th>
                    <th style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>Qualification</th>
                    <th style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>Category</th>
                    <th style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>Closing Date</th>
                    <th style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>Apply</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((job, i) => (
                    <tr key={job.jobId} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#f9f9f9" }}>
                      <td style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>{i + 1}</td>
                      <td style={{ padding: "10px", border: "1px solid #ccc" }}>{job.jobTitle}</td>
                      <td style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>{job.location}</td>
                      <td style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>{job.experienceMin} yrs</td>
                      <td style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>{job.education}</td>
                      <td style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>{job.category}</td>
                      <td style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>{job.date}</td>
                      <td style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center" }}>
                        <Link
                          href={`/job/${job.jobId}`}
                          style={{ color: "#DB4F37", fontWeight: 600, fontSize: "14px" }}
                        >
                          Apply →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#888" }}>
              <p>{jobs.length === 0 ? "No job openings available. Connect the backend to load jobs." : "No results match your search."}</p>
            </div>
          )}
        </div>
      )}

      {/* Internships Form */}
      {activeTab === "internships" && (
        <ApplicationForm
          title="Internship Application"
          onSubmit={handleInternSubmit}
          status={formStatus}
          type="intern"
        />
      )}

      {/* Fresher Form */}
      {activeTab === "fresher" && (
        <ApplicationForm
          title="Fresher / Entry Level Application"
          onSubmit={handleExpSubmit}
          status={formStatus}
          type="fresher"
        />
      )}

      {/* Experienced Form */}
      {activeTab === "experienced" && (
        <ApplicationForm
          title="Experienced Professional Application"
          onSubmit={handleExpSubmit}
          status={formStatus}
          type="experienced"
        />
      )}

      {/* Veterans Form */}
      {activeTab === "veterans" && (
        <ApplicationForm
          title="Veterans Application"
          onSubmit={handleExpSubmit}
          status={formStatus}
          type="veteran"
        />
      )}
    </div>
  );
}

function ApplicationForm({
  title,
  onSubmit,
  status,
  type,
}: {
  title: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  status: "idle" | "loading" | "success" | "error";
  type: "intern" | "fresher" | "experienced" | "veteran";
}) {
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "15px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "4px",
    color: "#333",
    fontWeight: 600,
    fontSize: "14px",
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "30px", borderRadius: "8px" }}>
      <h2 style={{ color: "#DB4F37", marginBottom: "25px", fontSize: "1.5rem", fontWeight: 700 }}>{title}</h2>
      <form onSubmit={onSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          <div>
            <label style={labelStyle}>Title</label>
            <select name="title" style={inputStyle} required>
              <option value="">Select</option>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Dr.</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Full Name *</label>
            <input type="text" name="name" required style={inputStyle} placeholder="Your full name" />
          </div>
          <div>
            <label style={labelStyle}>Email *</label>
            <input type="email" name="email" required style={inputStyle} placeholder="your@email.com" />
          </div>
          <div>
            <label style={labelStyle}>Mobile *</label>
            <input type="tel" name="mobile" required style={inputStyle} placeholder="+91 XXXXX XXXXX" />
          </div>
          <div>
            <label style={labelStyle}>Education *</label>
            <input type="text" name="education" required style={inputStyle} placeholder="Highest qualification" />
          </div>
          <div>
            <label style={labelStyle}>Discipline *</label>
            <input type="text" name="discipline" required style={inputStyle} placeholder="e.g. Civil Engineering" />
          </div>
          {(type === "experienced" || type === "veteran") && (
            <div>
              <label style={labelStyle}>Total Experience (years) *</label>
              <input type="number" name="experience" required style={inputStyle} placeholder="Years of experience" min={0} />
            </div>
          )}
          {type === "intern" && (
            <>
              <div>
                <label style={labelStyle}>Graduation Year</label>
                <input type="number" name="graduationYear" style={inputStyle} placeholder="e.g. 2024" />
              </div>
              <div>
                <label style={labelStyle}>CGPA</label>
                <input type="text" name="cgpa" style={inputStyle} placeholder="e.g. 8.5" />
              </div>
            </>
          )}
          {type === "fresher" && (
            <div>
              <label style={labelStyle}>CGPA</label>
              <input type="text" name="cgpa" style={inputStyle} placeholder="e.g. 8.5" />
            </div>
          )}
          <div>
            <label style={labelStyle}>Preferred Location</label>
            <input type="text" name="location" style={inputStyle} placeholder="City preference" />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Resume (PDF/DOC/DOCX) *</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            style={{ ...inputStyle, padding: "6px" }}
          />
        </div>

        <div>
          <label style={labelStyle}>Cover Letter / Message</label>
          <textarea
            name="message"
            rows={4}
            style={{ ...inputStyle, resize: "vertical" }}
            placeholder="Tell us why you'd be a great fit..."
          />
        </div>

        <div style={{ display: "flex", gap: "15px", alignItems: "center", marginTop: "10px" }}>
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "10px 30px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            {status === "loading" ? "Submitting..." : "Submit Application"}
          </button>
          {status === "success" && <p style={{ color: "green" }}>Application submitted successfully!</p>}
          {status === "error" && <p style={{ color: "red" }}>Submission failed. Please try again.</p>}
        </div>
      </form>
    </div>
  );
}
