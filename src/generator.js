import { generateBasicReadme } from "./template/basic.js";
import { generateProfessionalReadme } from "./template/professional.js";

/**
 * Encodes and formats the license name to fit Shields.io URL rules.
 */
function getLicenseBadgeUrl(license) {
  if (!license || license === "None") return "";
  
  // URL encode spaces and escape single dashes with double dashes
  const formattedLicense = license.replace(" ", "%20").replace("-", "--");
  return `https://img.shields.io/badge/License-${formattedLicense}-blue.svg`;
}

export function generateReadme(answers) {
  // Precompute badge properties
  const badgeUrl = getLicenseBadgeUrl(answers.license);
  const badgeMarkdown = badgeUrl ? `![License: ${answers.license}](${badgeUrl})` : "";
  
  // Merge badge properties into the answers object
  const data = {
    ...answers,
    badge: badgeMarkdown,
    badgeUrl: badgeUrl
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
