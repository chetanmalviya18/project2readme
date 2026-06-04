export type TemplateType = "Basic" | "Professional";

export type LicenseType =
  | "MIT"
  | "Apache 2.0"
  | "GPL 3.0"
  | "BSD 3-Clause"
  | "None";

// Interface structuring command-line option flags parsed by Commander.
export interface GenerateCommandOptions {
  ai?: boolean;
  template?: TemplateType;
  license?: LicenseType;
  github?: string;
  key?: string;
}

// Interface structuring user answers returned from interactive prompts.
export interface ReadmeAnswers {
  template: TemplateType;
  title: string;
  description: string;
  installation: string;
  usage: string;
  license: LicenseType;
  author: string;
  repoUrl?: string;
  longDescription?: string;
  techStack?: string | string[];
  email?: string;
  github?: string;
  apiDocs?: string;
}

/**
 * Interface structuring the public user profile data retrieved from the GitHub API.
 */
export interface GitHubProfile {
  avatarUrl: string;
  fullName: string;
  bio: string;
}

/**
 * Interface structuring raw metadata completed or optimized dynamically by the Gemini AI.
 */
export interface AIGeneratedData {
  description?: string;
  longDescription?: string;
  techStack?: string[];
  installation?: string;
  usage?: string;
  apiDocs?: string;
}

/**
 * Consolidated data structure passed directly into the README Markdown compilers.
 * Merges prompts, GitHub API, and AI service generation results.
 */
export interface ReadmeTemplateData extends ReadmeAnswers, GitHubProfile {
  badge: string;
  badgeUrl: string;
}
