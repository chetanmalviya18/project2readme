import { ReadmeTemplateData } from "../types/index.js";

/**
 * Generates a basic README.md string.
 * @param {ReadmeTemplateData} data - The compiled template data.
 * @returns {string} Compiled Markdown string.
 */
export const generateBasicReadme = (data: ReadmeTemplateData): string => `
# ${data.title} 📦

${data.badge ? data.badge + '\n' : ''}${data.description}

---

## 📋 Table of Contents
- [⚙️ Installation](#-installation)
- [🚀 Usage](#-usage)
- [👤 Author](#-author)
- [⚖️ License](#-license)

---

## ⚙️ Installation

To set up this project locally, follow these steps:

1. Clone the repository and navigate to the directory.
2. Install the required dependencies:
   \`\`\`bash
   ${data.installation}
   \`\`\`

---

## 🚀 Usage

To start and run the application:

\`\`\`bash
${data.usage}
\`\`\`

---

## 👤 Author

${data.avatarUrl ? `<img src="${data.avatarUrl}" width="60" style="border-radius: 50%;" alt="${data.fullName || data.author}" />\n\n` : ''}**${data.fullName || data.author}**
- GitHub: [@${data.github}](https://github.com/${data.github})

---

## ⚖️ License

This project is licensed under the **${data.license}** License.
`;
