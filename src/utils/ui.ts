import chalk from "chalk";
import ora, { Ora } from "ora";

// Standardized terminal UI log manager utilizing Chalk and Ora.
export const ui = {
  info: (msg: string): void => console.log(chalk.cyan(msg)),
  success: (msg: string): void =>
    console.log(`\n${chalk.bold.green("✔")} ${chalk.green(msg)}`),
  warn: (msg: string): void => console.log(chalk.yellow(`⚠ ${msg}`)),
  error: (msg: string): void =>
    console.error(
      `\n${chalk.bold.red("✖")} ${chalk.bold.red(`Error: ${msg}`)}`,
    ),

  banner: (title: string): void => {
    const divider = chalk.bold.cyan("=".repeat(50));
    const paddedTitle = chalk.bold.cyan(
      title.padStart(Math.floor((50 + title.length) / 2)),
    );
    console.log(`\n${divider}\n${paddedTitle}\n${divider}\n`);
  },

  /**
   * Spawns a standardized Ora loading spinner.
   *
   * @param {string} msg - The message to display next to the loading spinner.
   * @returns {Ora} The active Ora spinner instance.
   */
  spinner: (msg: string): Ora => {
    return ora({
      text: chalk.cyan(msg),
      color: "cyan",
      spinner: "dots",
    });
  },
};
