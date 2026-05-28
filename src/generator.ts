import { generateBasicReadme } from "./template/basic.js";
import { generateProfessionalReadme } from "./template/professional.js";
import { ReadmeTemplateData, LicenseType } from "./types/index.js";

/**
 * Formats the selected license into a compliant Shields.io badge URL.
 */
function getLicenseBadgeUrl(license: LicenseType): string {
  if (!license || license === "None") return "";

  const formattedLicense = license.replace(" ", "%20").replace("-", "--");
  return `https://img.shields.io/badge/License-${formattedLicense}-blue.svg`;
}

/**
 * Main Markdown layout compiling router.
 * Precomputes licensing badges and formats tech stack list arrays.
 * 
 * @param {any} answers - Gathers interactive answers and dynamic profiles.
 * @returns {string} Emitted markdown file structure.
 */
export function generateReadme(answers: any): string {
  const badgeUrl = getLicenseBadgeUrl(answers.license);
  const badgeMarkdown = badgeUrl
    ? `![License: ${answers.license}](${badgeUrl})`
    : "";

  // Assemble the fully structured dataset matching ReadmeTemplateData
  const data: ReadmeTemplateData = {
    ...answers,
    badge: badgeMarkdown,
    badgeUrl: badgeUrl,
  };

  if (data.template === "Basic") {
    return generateBasicReadme(data);
  }

  if (data.template === "Professional") {
    if (data.techStack && typeof data.techStack === "string") {
      data.techStack = data.techStack
        .split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech !== "");
    }

    return generateProfessionalReadme(data);
  }

  throw new Error(`Unknown template type: ${data.template}`);
}
