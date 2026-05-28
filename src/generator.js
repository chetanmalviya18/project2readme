export function getLicenseBadge(license) {
  if (license === 'None') return '';

  const formattedLicense = license.replace(' ', '%20').replace('-', '--');
  return `![License: ${license}](https://img.shields.io/badge/License-${formattedLicense}-blue.svg)`;
}

function getLicenseSection(license) {
  if (license === 'None') {
    return 'This project is unlicensed and free to use without restrictions.';
  }
  return `This project is licensed under the **${license}** license.`;
}

export function generateReadme(answers) {
  const badge = getLicenseBadge(answers.license);
  const licenseText = getLicenseSection(answers.license);

  return `# ${answers.title}

${badge ? badge + '\n' : ''}
## Description

${answers.description}

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Author](#author)

---

## Installation

To install dependencies, run:

\`\`\`bash
${answers.installation}
\`\`\`

---

## Usage

To use this application, run:

\`\`\`bash
${answers.usage}
\`\`\`

---

## License

${licenseText}

---

## Author

- **GitHub:** [${answers.github}](https://github.com/${answers.github})
`;
}
