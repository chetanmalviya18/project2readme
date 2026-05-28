import fs from "fs/promises";
import path from "path";
import { exec } from "child_process";
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

export async function openFileInEditor(fileName) {
  const openCommand =
    process.platform === "win32"
      ? "start"
      : process.platform === "darwin"
        ? "open"
        : "xdg-open";
  try {
    exec(`${openCommand} ${fileName}`);
    logger.success(`Opening ${fileName}...`);
  } catch (error) {
    logger.error(`Could not open ${fileName}: ${error.message}`);
  }
}
