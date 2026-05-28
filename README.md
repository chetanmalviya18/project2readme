# README Generator CLI

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Node Version](https://img.shields.io/badge/Node.js-%3E%3D_16.0.0-green.svg)

An interactive Command Line Interface (CLI) application built using Node.js to dynamically generate clean, standard, and professional `README.md` files in seconds. 

Choose between a simple **Basic** layout or a comprehensive **Professional** layout, answer a few guided terminal questions, and let the CLI handle the formatting!

---

## 📖 Features

- **Multi-Template Support**: Choose between a lightweight **Basic** structure and a feature-rich, beautiful **Professional** developer layout.
- **Dynamic Terminal Prompts**: Automatically triggers conditional questions using `inquirer` depending on your template selection.
- **Auto-Formatting**: Translates your input into highly readable markdown, formatting raw tech stacks into list items and resolving Git urls automatically.
- **Shields.io License Badges**: Automatically renders dynamic color badges based on your chosen open-source license.
- **Overwrite Safety Guard**: Detects if a `README.md` already exists in your folder and interactively prompts you before modifying anything.

---

## 🛠️ Folder Architecture

The application is structured into decoupled, modular components:

```text
readme-cli/
├── bin/
│   └── index.js             # Executable shebang command entrypoint
├── src/
│   ├── template/
│   │   ├── basic.js         # Basic template structure
│   │   └── professional.js  # Professional detailed structure
│   ├── utils/
│   │   ├── logger.js        # Reusable ANSI terminal styling loggers
│   │   └── fileSystem.js    # Reusable file checks and fs promises
│   ├── index.js             # Entrypoint managing flow lifecycle
│   ├── prompts.js           # CLI inquirer guided questions modules
│   └── generator.js         # Generator routing and array parsing engine
├── package.json             # NPM configuration and dependencies
└── .gitignore               # Ignored local third-party directories
```

---

## 🎨 Templates Compared

### 1. Basic Style
Designed for simple projects, utilities, or scripts. It collects and renders:
- Project Name (Title)
- Description
- Installation Instructions
- Standard Usage Examples
- Author Name
- Chosen License

### 2. Professional Style
Designed for robust applications, web services, or developer-facing projects. It collects the basic options and dynamically queries additional fields:
- Git Repository URL
- Comma-separated **Tech Stack** (auto-formatted into a bulleted array list)
- Comprehensive **Table of Contents** with embedded collapsible details
- Collapsible contributions flow
- Custom **API Reference** markdown block
- Centralized Author contact cards containing your GitHub profile and email

---

## 🚀 Getting Started

### Prerequisites
Ensure [Node.js](https://nodejs.org/) (v16.0.0+) is installed.

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Locally
Test the generator immediately:
```bash
# Using npm scripts
npm start

# Or directly executing node
node src/index.js
```

---

## 🌟 Installing Globally (System CLI)

Convert the project into a native system terminal utility so you can use it anywhere on your computer:

1. Link your package globally from the project root folder:
   ```bash
   npm link
   ```
2. Open **any folder or directory** on your computer in your terminal, and run:
   ```bash
   readme-cli
   ```
3. Your interactive questionnaire will instantly start and write a beautifully formatted `README.md` directly into that folder!

---

## ⚖️ License

Distributed under the [MIT License](LICENSE).
