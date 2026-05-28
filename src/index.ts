import { generateReadme } from "./generator.js";
import { promptUser, promptOverwrite, promptOpenFile } from "./prompts.js";
import { logger } from "./utils/logger.js";
import { saveMarkdownFile, fileExists, openFileInEditor } from "./utils/fileSystem.js";
import { fetchGitHubProfile } from "./utils/github.js";
import { ReadmeAnswers, GitHubProfile } from "./types/index.js";

/**
 * Main orchestrator of the CLI application.
 * Focuses purely on directing the high-level workflow. All implementation details 
 * (prompts, filesystem operations, and API fetches) are delegated to specialized modules.
 */
async function run(): Promise<void> {
  logger.banner("README Generator CLI");

  try {
    const targetFile = "README.md";

    // 1. Check if README.md already exists
    const exists = await fileExists(targetFile);
    if (exists) {
      const confirmOverwrite = await promptOverwrite(targetFile);
      if (!confirmOverwrite) {
        logger.warn(
          "Operation cancelled. Your existing file remains untouched.",
        );
        return;
      }
      console.log(); // Spacing
    }

    // 2. Gather user inputs interactively
    logger.info(
      "Please answer the following questions to construct your README:\n",
    );
    const answers: ReadmeAnswers = await promptUser();

    // 3. Fetch GitHub Profile data
    const gitHubProfile: GitHubProfile = await fetchGitHubProfile(answers.github);

    // 4. Compile markdown templates
    logger.info("\nCompiling your README template...");
    const readmeContent = generateReadme({
      ...answers,
      ...gitHubProfile
    });

    // 5. Save the generated README.md
    logger.info("Writing files...");
    const savedPath = await saveMarkdownFile(targetFile, readmeContent);
    logger.success(`Successfully generated! Saved to: ${savedPath}`);

    // 6. Interactive Preview: Prompt user to open the file
    console.log(); // Spacing
    const openFile = await promptOpenFile();
    if (openFile) {
      await openFileInEditor(targetFile);
    }
  } catch (error: any) {
    logger.error(error.message);
  }
}

run();
