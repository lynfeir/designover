/** Hand-maintained types for the designover (doa-leads) schema. */

export type ProjectType = "website" | "automation" | "both" | "design";

export type SubmissionStatus =
  | "new"
  | "reviewing"
  | "quoted"
  | "won"
  | "archived";

export type ProjectStatus =
  | "discovery"
  | "demo"
  | "in_progress"
  | "review"
  | "launched"
  | "active"
  | "paused";

export type Role = "client" | "admin";

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  company: string | null;
  role: Role;
  created_at: string;
}

export interface IntakeSubmission {
  id: string;
  user_id: string | null;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  project_type: ProjectType | null;
  project_name: string | null;
  description: string | null;
  goals: string | null;
  budget: string | null;
  timeline: string | null;
  pages: string[] | null;
  features: string[];
  status: SubmissionStatus;
  created_at: string;
}

export interface ClientProject {
  id: string;
  client_id: string | null;
  name: string;
  slug: string | null;
  status: ProjectStatus;
  summary: string | null;
  project_type: string | null;
  repo_url: string | null;
  live_url: string | null;
  features: string[];
  progress: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectMilestone {
  id: string;
  project_id: string;
  title: string;
  detail: string | null;
  status: "pending" | "active" | "done";
  position: number;
  created_at: string;
}
