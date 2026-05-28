import { generateBasicReadme } from "./template/basic.js";
import { generateProfessionalReadme } from "./template/professional.js";

export function generateReadme(answers) {
  if (answers.template === "Basic") {
    return generateBasicReadme(answers);
  }

  if (answers.template === "Professional") {
    if (answers.techStack && typeof answers.techStack === "string") {
      answers.techStack = answers.techStack
        .split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech !== "");
    }

    return generateProfessionalReadme(answers);
  }

  throw new Error(`Unknown template type: ${answers.template}`);
}
