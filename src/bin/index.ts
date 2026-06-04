import { Command } from "commander";
import { executeGenerateCommand } from "../commands/generate.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

if (!process.env.GEMINI_API_KEY) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  dotenv.config({ path: path.resolve(__dirname, "../../.env") });
}

const program = new Command();

program
  .name("project2readme")
  .description(
    "An interactive AI-powered command-line interface to generate high-quality, professional README.md files.",
  )
  .version("2.0.1")
  .option(
    "-a, --ai",
    "Enable Gemini AI to optimize and enrich the generated README.md",
  )
  .option(
    "-t, --template <type>",
    "README template style ('Basic' or 'Professional')",
  )
  .option(
    "-l, --license <type>",
    "Project license type ('MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None')",
  )
  .option(
    "-g, --github <username>",
    "Target GitHub username to prefill profile information",
  )
  .option(
    "-k, --key <value>",
    "Provide the Gemini API Key directly via CLI flag"
  )
  .action(async (options) => {
    await executeGenerateCommand(options);
  });

program.parse(process.argv);
