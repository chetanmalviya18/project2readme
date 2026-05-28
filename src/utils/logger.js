// ANSI escape codes for basic console styling without external dependencies
const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

/**
 * Reusable utility functions for styled console outputs.
 */
export const logger = {
  info: (msg) => console.log(`${colors.cyan}${msg}${colors.reset}`),
  success: (msg) => console.log(`\n${colors.bold}${colors.green}✔ ${msg}${colors.reset}`),
  warn: (msg) => console.log(`${colors.yellow}⚠ ${msg}${colors.reset}`),
  error: (msg) => console.error(`${colors.bold}${colors.red}✖ Error: ${msg}${colors.reset}`),
  banner: (title) => {
    console.log('\n' + '='.repeat(50));
    console.log(`${colors.bold}${colors.cyan}${title.padStart(Math.floor((50 + title.length) / 2))}${colors.reset}`);
    console.log('='.repeat(50) + '\n');
  }
};
