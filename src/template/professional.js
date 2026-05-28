export const generateProfessionalReadme = (data) => `
<div align="center">
  <h1>${data.title} 🚀</h1>
  <p>${data.description}</p>${data.badgeUrl ? `
  <p>
    <img src="${data.badgeUrl}" alt="License">
  </p>` : ''}
</div>

---

<details>
  <summary>📋 Table of Contents</summary>
  <ol>
    <li><a href="#🔍-about-the-project">About The Project</a></li>
    <li><a href="#⚙️-installation">Installation</a></li>
    <li><a href="#🚀-usage">Usage</a></li>
    ${data.apiDocs ? '<li><a href="#📖-api-reference">API Reference</a></li>' : ""}
    <li><a href="#🤝-contributing">Contributing</a></li>
    <li><a href="#👤-author">Author</a></li>
    <li><a href="#⚖️-license">License</a></li>
  </ol>
</details>

---

## 🔍 About The Project

${data.longDescription || data.description}

### 💻 Built With
${data.techStack ? data.techStack.map((tech) => `* ${tech}`).join("\n") : "* JavaScript"}

---

## ⚙️ Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   \`\`\`bash
   git clone ${data.repoUrl}
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   ${data.installation}
   \`\`\`
3. Set up your environment variables by creating a \`.env\` file.

---

## 🚀 Usage

To run the application:

\`\`\`bash
${data.usage}
\`\`\`

---

${data.apiDocs ? `## 📖 API Reference\n\n${data.apiDocs}\n\n---` : ""}

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

---

## 👤 Author

${data.avatarUrl ? `
<table align="center" style="border: none;">
  <tr style="border: none;">
    <td align="center" style="border: none; padding: 20px;">
      <img src="${data.avatarUrl}" width="100" style="border-radius: 50%;" alt="${data.fullName || data.author}"/>
      <br />
      <h3><b>${data.fullName || data.author}</b></h3>
      <p><i>${data.bio || 'Open Source Contributor'}</i></p>
      ${data.email ? `- 📧 Email: [${data.email}](mailto:${data.email})<br />` : ""}
      - 👤 GitHub: [@${data.github}](https://github.com/${data.github})
    </td>
  </tr>
</table>
` : `
**${data.fullName || data.author}**
${data.email ? `- 📧 Email: [${data.email}](mailto:${data.email})` : ""}
- 👤 GitHub: [@${data.github}](https://github.com/${data.github})
`}

---

## ⚖️ License

Distributed under the **${data.license}** License. See \`LICENSE\` for more information.
`;
