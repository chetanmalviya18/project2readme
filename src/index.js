import { generateReadme } from "./generator.js";
import { promptUser } from "./prompts.js";
import fs from "fs/promises";
import path from "path";

async function run() {
  console.log("--- README Generator CLI ---");
  try {
    const answers = await promptUser();

    const readmeContent = generateReadme(answers);

    const outputPath = path.resolve(process.cwd(), "README.md");

    console.log("\nGenerating your README.md...");

    await fs.writeFile(outputPath, readmeContent, "utf8");

    console.log("✔ Successfully generated! Saved to:", outputPath);
  } catch (error) {
    console.error("\n✖ An error occurred:", error.message);
  }
}

run();
