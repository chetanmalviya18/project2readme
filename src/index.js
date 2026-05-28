import { generateReadme } from "./generator.js";
import { promptUser, promptOverwrite, promptOpenFile } from "./prompts.js";
import { logger } from "./utils/logger.js";
import {
  saveMarkdownFile,
  fileExists,
  openFileInEditor,
} from "./utils/fileSystem.js";
import { fetchGitHubProfile } from "./utils/github.js";

async function run() {
  logger.banner("README Generator CLI");

  try {
    const targetFile = "README.md";

    const exists = await fileExists(targetFile);
    if (exists) {
      const confirmOverwrite = await promptOverwrite(targetFile);
      if (!confirmOverwrite) {
        logger.warn(
          "Operation cancelled. Your existing file remains untouched.",
        );
        return;
      }
      console.log();
    }

    logger.info(
      "Please answer the following questions to construct your README:\n",
    );
    const answers = await promptUser();

    const gitHubProfile = await fetchGitHubProfile(answers.github);

    logger.info("\nCompiling your README template...");
    const readmeContent = generateReadme({
      ...answers,
      ...gitHubProfile,
    });

    logger.info("Writing files...");
    const savedPath = await saveMarkdownFile(targetFile, readmeContent);
    logger.success(`Successfully generated! Saved to: ${savedPath}`);

    console.log();
    const openFile = await promptOpenFile();
    if (openFile) {
      await openFileInEditor(targetFile);
    }
  } catch (error) {
    logger.error(error.message);
  }
}

run();
