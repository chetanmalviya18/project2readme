import {
  promptUser,
  promptOverwrite,
  promptOpenFile,
} from "../prompts/questions.js";
import { generateReadme } from "../generator.js";
import { fetchGitHubProfile } from "../services/github.js";
import { generateAICore } from "../services/ai.js";
import {
  fileExists,
  saveMarkdownFile,
  openFileInEditor,
} from "../utils/fileSystem.js";
import { ui } from "../utils/ui.js";
import {
  GenerateCommandOptions,
  ReadmeAnswers,
  GitHubProfile,
} from "../types/index.js";

/**
 * Executes the `generate` subcommand action.
 * Orchestrates the full generation pipeline.
 *
 * @param {GenerateCommandOptions} options - CLI command-line options parsed by Commander.
 */
export async function executeGenerateCommand(
  options: GenerateCommandOptions,
): Promise<void> {
  ui.banner("project2readme- README Generator CLI");

  try {
    const targetFile = "README.md";

    // Set the API Key from flag option if provided
    if (options.key) {
      process.env.GEMINI_API_KEY = options.key;
    }

    // 1. Overwrite Safety Check
    const exists = await fileExists(targetFile);
    if (exists) {
      const confirmOverwrite = await promptOverwrite(targetFile);
      if (!confirmOverwrite) {
        ui.warn(
          "Operation cancelled. Your existing README.md remains untouched.",
        );
        return;
      }
      console.log(); // Spacing
    }

    // 2. Interactive questionnaire
    ui.info(
      "Please answer the following questions to construct your README:\n",
    );
    const answers: ReadmeAnswers = await promptUser();

    // Override answers with command line options if provided
    if (options.template) {
      answers.template = options.template;
    }
    if (options.license) {
      answers.license = options.license;
    }
    if (options.github) {
      answers.github = options.github;
    }

    // 3. Optional AI Optimization
    let finalAnswers = { ...answers };
    // If the user enabled AI via flag OR if they want to run it, check
    const runAI = options.ai || false;
    if (runAI) {
      const aiData = await generateAICore(answers);
      finalAnswers = {
        ...finalAnswers,
        description: aiData.description || finalAnswers.description,
        longDescription: aiData.longDescription || finalAnswers.longDescription,
        techStack: aiData.techStack || finalAnswers.techStack,
        installation: aiData.installation || finalAnswers.installation,
        usage: aiData.usage || finalAnswers.usage,
        apiDocs: aiData.apiDocs || finalAnswers.apiDocs,
      };
    }

    // 4. Fetch GitHub Profile info
    const gitHubUsername = finalAnswers.github || options.github;
    let gitHubProfile: GitHubProfile = { avatarUrl: "", fullName: "", bio: "" };
    if (gitHubUsername) {
      gitHubProfile = await fetchGitHubProfile(gitHubUsername);
    }

    // 5. Compile the target Markdown template
    ui.info("\nCompiling your README template...");
    const readmeContent = generateReadme({
      ...finalAnswers,
      ...gitHubProfile,
    });

    // 6. Save compiled README file to disk
    ui.info("Writing files...");
    const savedPath = await saveMarkdownFile(targetFile, readmeContent);
    ui.success(`Successfully generated! Saved to: ${savedPath}`);

    // 7. Interactive Preview option
    console.log(); // Spacing
    const openFile = await promptOpenFile();
    if (openFile) {
      await openFileInEditor(targetFile);
    }
  } catch (error: any) {
    ui.error(
      error.message || "An unexpected error occurred during generation.",
    );
  }
}
