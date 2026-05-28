import { generateReadme } from "./generator.js";
import { promptUser, promptOverwrite } from "./prompts.js";
import { logger } from "./utils/logger.js";
import { saveMarkdownFile, fileExists } from "./utils/fileSystem.js";

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

    logger.info("\nCompiling your README template...");
    const readmeContent = generateReadme(answers);

    logger.info("Writing files...");
    const savedPath = await saveMarkdownFile(targetFile, readmeContent);

    logger.success(`Successfully generated! Saved to: ${savedPath}`);
  } catch (error) {
    logger.error(error.message);
  }
}

run();
