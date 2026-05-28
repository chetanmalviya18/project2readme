export const generateProfessionalReadme = (data) => `
<div align="center">
  <h1>${data.title}</h1>
  <p>${data.description}</p>
  <p>
    <img src="https://img.shields.io/badge/License-${data.license}-blue.svg" alt="License">
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    ${data.apiDocs ? '<li><a href="#api-reference">API Reference</a></li>' : ""}
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#author">Author</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

${data.longDescription || data.description}

### Built With
${data.techStack ? data.techStack.map((tech) => `* ${tech}`).join("\n") : "* JavaScript"}

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone ${data.repoUrl}
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   ${data.installation}
   \`\`\`
3. Set up your environment variables by creating a \`.env\` file.

## Usage

\`\`\`bash
${data.usage}
\`\`\`

${data.apiDocs ? `## API Reference\n\n${data.apiDocs}` : ""}

## Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## Author

**${data.author}**
${data.email ? `- Email: [${data.email}](mailto:${data.email})` : ""}
${data.github ? `- GitHub: [${data.github}](https://github.com/${data.github})` : ""}

## License

Distributed under the ${data.license} License. See \`LICENSE\` for more information.
`;
