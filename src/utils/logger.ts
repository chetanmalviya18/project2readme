interface Styles {
  reset: string;
  bold: string;
  green: string;
  cyan: string;
  yellow: string;
  red: string;
}

const colors: Styles = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

export const logger = {
  info: (msg: string): void => console.log(`${colors.cyan}${msg}${colors.reset}`),
  success: (msg: string): void => console.log(`\n${colors.bold}${colors.green}✔ ${msg}${colors.reset}`),
  warn: (msg: string): void => console.log(`${colors.yellow}⚠ ${msg}${colors.reset}`),
  error: (msg: string): void => console.error(`${colors.bold}${colors.red}✖ Error: ${msg}${colors.reset}`),
  banner: (title: string): void => {
    console.log('\n' + '='.repeat(50));
    console.log(`${colors.bold}${colors.cyan}${title.padStart(Math.floor((50 + title.length) / 2))}${colors.reset}`);
    console.log('='.repeat(50) + '\n');
  }
};
