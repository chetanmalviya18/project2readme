import fs from "fs/promises";
import path from "path";
import { logger } from "./logger.js";

export async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function saveMarkdownFile(fileName, content) {
  const outputPath = path.resolve(process.cwd(), fileName);

  try {
    await fs.writeFile(outputPath, content, "utf8");
    return outputPath;
  } catch (error) {
    logger.error(`Failed to write file to ${outputPath}: ${error.message}`);
    throw error;
  }
}
