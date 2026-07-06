export interface Job {
  jobId: number;
  jobTitle: string;
  jobType: string;
  location: string;
  experienceMin: number;
  experienceMax: number;
  education: string;
  category: string;
  date: string;
  description: string;
}

export interface Project {
  projectId: number;
  projectName: string;
  projectType: string;
  description: string;
  clientName: string;
  imageName: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  description: string;
  photo: string;
  link: string;
}

export interface Logo {
  attachment: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
