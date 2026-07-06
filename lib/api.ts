const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080/sgs";

export async function fetchHomeData() {
  const res = await fetch(`${API_BASE}/home`, { next: { revalidate: 3600 } });
  if (!res.ok) return { logoList: [] };
  return res.json();
}

export async function fetchProjects(type?: string) {
  const url = type
    ? `${API_BASE}/projects/${encodeURIComponent(type)}`
    : `${API_BASE}/updatedProjects`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return { projects: [], projectType: type ?? "All" };
  return res.json();
}

export async function fetchJobs() {
  const res = await fetch(`${API_BASE}/careers`, { next: { revalidate: 300 } });
  if (!res.ok) return { jobs: [] };
  return res.json();
}

export async function fetchJob(jobId: string) {
  const res = await fetch(`${API_BASE}/job-more/${jobId}`, { next: { revalidate: 300 } });
  if (!res.ok) return null;
  return res.json();
}

export async function fetchAboutUs() {
  const res = await fetch(`${API_BASE}/updatedAboutUs`, { next: { revalidate: 3600 } });
  if (!res.ok) return { aboutUsList: [] };
  return res.json();
}

export async function submitContactUs(data: { name: string; email: string; message: string }) {
  const params = new URLSearchParams(data);
  const res = await fetch(`${API_BASE}/requestContactUs`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
  if (!res.ok) return false;
  const result = await res.text();
  return result === "true";
}

export async function submitResume(formData: FormData) {
  const res = await fetch(`${API_BASE}/submitResume`, {
    method: "POST",
    body: formData,
  });
  return res.ok;
}

export async function applyIntern(formData: FormData) {
  const res = await fetch(`${API_BASE}/apply-intern-position`, {
    method: "POST",
    body: formData,
  });
  return res.ok;
}

export async function applyExperienced(formData: FormData) {
  const res = await fetch(`${API_BASE}/apply-experienced-position`, {
    method: "POST",
    body: formData,
  });
  return res.ok;
}

export const S3_BASE = "https://syntrack-dev.s3.ap-south-1.amazonaws.com/SynergizGlobal";
export const PROJECT_IMAGE_BASE = "https://syntrack-dev.s3.ap-south-1.amazonaws.com/Testing/Synergiz/ProjectImages";
