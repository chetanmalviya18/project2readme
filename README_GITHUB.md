# README Generator CLI (GitHub Developer Version)

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![NPM Version](https://img.shields.io/badge/npm-v1.3.0-blue.svg)
![Node Version](https://img.shields.io/badge/Node.js-%3E%3D_16.0.0-green.svg)

An interactive, modular, and enterprise-grade Command Line Interface (CLI) application built using Node.js to dynamically compile clean, standard, and beautiful `README.md` files.

This is the developer-facing repository documentation. For end-user instructions, see the [NPM Package Page](https://www.npmjs.com/package/@chetan_malviya/readme-cli).

---

## 📋 Features

- **Multi-Template Support**: Choose between a lightweight **Basic** layout or a comprehensive, visually stunning **Professional** layout.
- **Dynamic Inquirer Prompts**: Leverages conditional questions depending on your selected template style.
- **GitHub API Integration**: Queries `api.github.com` on-the-fly using the native Node.js global `fetch` API to retrieve your public name, bio, and avatar, embedding them directly into an HTML Portfolio card!
- **Table of Contents**: Automatically compiles dynamic, clickable Table of Contents anchors for easy navigation.
- **Interactive File Preview**: Prompts you upon success to instantly launch the newly generated markdown file in your system's default viewer.
- **Universal Emoji Support**: Embellishes headings and details with matching emojis.
- **Safe Overwrite Guards**: Checks for existing files and prompts before modifying them.

---

## 🛠️ Decoupled Folder Architecture

The codebase strictly adheres to **Separation of Concerns**, ensuring that all network operations, file checks, prompts, and templates are fully isolated:

```text
readme-cli/
├── bin/
│   └── index.js             # Shell-executable binary containing the Node.js shebang
├── src/
│   ├── template/
│   │   ├── basic.js         # Basic layout template builder
│   │   └── professional.js  # Professional detailed HTML-card template builder
│   ├── utils/
│   │   ├── logger.js        # Reusable ANSI console styling loggers
│   │   ├── fileSystem.js    # Reusable file checks, fs.writeFile, and editor openers
│   │   └── github.js        # Isolated asynchronous GitHub API user-profile fetches
│   ├── index.js             # High-level clean workflow manager (orchestrator)
│   ├── prompts.js           # CLI inquirer interactive questionnaire modules
│   └── generator.js         # Router and tech stack array parser
├── package.json             # NPM metadata and publishing swap hooks
└── .gitignore               # Ignores local node_modules
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16.0.0+) installed.

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Locally
```bash
# Using npm scripts
npm start

# Or directly executing node
node src/index.js
```

### Step 3: Run Tests
```bash
npm test
```

---

## 🌟 Global Command Linking

Link the package globally during development to test CLI integrations natively:
```bash
npm link
```
Now, you can type `readme-cli` in **any terminal directory** to generate standard readmes on-the-fly!

---

## ⚖️ License

Distributed under the [MIT License](LICENSE).
