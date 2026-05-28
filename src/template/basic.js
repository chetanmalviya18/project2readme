export const generateBasicReadme = (data) => `
# ${data.title}

${data.description}

## Installation

1. Clone the repository and navigate to the directory.
2. Install the required dependencies:
   \`\`\`bash
   ${data.installation}
   \`\`\`

## Usage

To start the application, run:
\`\`\`bash
${data.usage}
\`\`\`

## Author
**${data.author}**

## License
This project is licensed under the ${data.license} License.
`;
