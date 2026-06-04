import fs from "fs/promises";
import path from "path";
import { exec } from "child_process";
import { ui } from "./ui.js";

// Checks if a file exists at the given path.
export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Saves a string content to a file in the current working directory.
 * Includes absolute path resolution and error reporting.
 *
 * @param {string} fileName - Name of the output file (e.g. 'README.md').
 * @param {string} content - String contents to write.
 * @returns {Promise<string>} The resolved absolute output path on success.
 */
export async function saveMarkdownFile(
  fileName: string,
  content: string,
): Promise<string> {
  const outputPath = path.resolve(process.cwd(), fileName);

  try {
    await fs.writeFile(outputPath, content, "utf8");
    return outputPath;
  } catch (error: any) {
    ui.error(`Failed to write file to ${outputPath}: ${error.message}`);
    throw error;
  }
}

/**
 * Automatically launches the file in the default OS markdown editor or browser.
 *
 * @param {string} fileName - File name to open.
 */
export async function openFileInEditor(fileName: string): Promise<void> {
  const openCommand =
    process.platform === "win32"
      ? "start"
      : process.platform === "darwin"
        ? "open"
        : "xdg-open";
  try {
    exec(`${openCommand} ${fileName}`);
    ui.success(`Opening ${fileName}...`);
  } catch (error: any) {
    ui.error(`Could not open ${fileName}: ${error.message}`);
  }
}
