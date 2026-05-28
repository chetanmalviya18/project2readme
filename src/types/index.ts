export type TemplateType = 'Basic' | 'Professional';

export type LicenseType = 'MIT' | 'Apache 2.0' | 'GPL 3.0' | 'BSD 3-Clause' | 'None';

/**
 * Interface structuring the answers returned from the interactive CLI prompts.
 */
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
 * Consolidated data structure passed directly into the README Markdown compilers.
 * Merges prompt answers, GitHub API records, and Shields.io badge mappings.
 */
export interface ReadmeTemplateData extends ReadmeAnswers, GitHubProfile {
  badge: string;
  badgeUrl: string;
}
