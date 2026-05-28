# README Generator CLI

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Node Version](https://img.shields.io/badge/Node.js-%3E%3D_16.0.0-green.svg)

An interactive, user-friendly Command Line Interface (CLI) application designed to dynamically generate high-quality, professional `README.md` files for your repositories. 

Say goodbye to writing boilerplate markdown from scratch. With this tool, you can construct a clean, standard, and beautiful README in seconds by answering a few simple terminal prompts!

---

## 📖 What It Is & What It's For

When building software projects, a clear and well-structured README is vital for explaining how your application works, how it's installed, and who built it. However, setting up these files manually can be repetitive and time-consuming.

This project is a **developer productivity utility** that:
- Prompts you for critical project metadata (Project Name, Description, Installation instructions, Usage guidelines, Licensing, and Author profiles).
- Formats your input into an elegant Markdown template featuring automatic dynamic **Shields.io License Badges**, pre-set syntax-highlighted code blocks, and standard Table of Contents anchors.
- Includes a built-in safety guard to check if a `README.md` already exists in your folder and interactively prompts you before overwriting it.

---

## 🛠️ How It Was Built (Architecture)

This application was constructed from the ground up using **Node.js** with modern **ES Modules (`type: "module"`)** and is designed with clean, decoupled, and reusable architectural patterns:

```text
readme-cli/
├── bin/
│   └── index.js             # Shell-executable binary wrapper containing the Node.js shebang
├── src/
│   ├── utils/
│   │   ├── logger.js        # Lightweight, zero-dependency ANSI console styling engine
│   │   └── fileSystem.js    # Reusable fs/promises path and file-saving helpers
│   ├── index.js             # Main orchestrator managing application lifecycle and safety checks
│   ├── prompts.js           # CLI inquirer terminal questionnaire configurations
│   └── generator.js         # Dedicated Markdown text-compilation template literal engine
├── package.json             # NPM project configurations and package bindings
└── .gitignore               # Ignores third-party dependencies (node_modules/)
```

### Key Technical Features:
1. **Interactive Questions (`src/prompts.js`)**: Leverages the industry-standard `inquirer` library to support terminal validations (preventing empty inputs), scrollable lists, and default prompt answers.
2. **Modular Utilities (`src/utils/`)**: Separates low-level operations (like saving files and printing colored logs) from the core workflow orchestration.
3. **Decoupled Orchestrator (`src/index.js`)**: Coordinates the prompt data-flow and generator inputs using clean ES import/export modules.
4. **Shell Executable Integration (`bin/index.js`)**: Employs the `#!/usr/bin/env node` shebang, allowing standard terminal shells to run it as a standalone native program.

---

## 🚀 Getting Started

Follow these steps to run, play with, or install this tool globally on your system.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v16.0.0 or higher recommended).

### Step 1: Install Dependencies
Open your terminal in the project directory and run:
```bash
npm install
```

### Step 2: Run Locally
You can test the program immediately using either of these commands:
```bash
# Using NPM scripts
npm start

# Executing the index file directly
node src/index.js
```

---

## 🌟 Installing Globally (Command Line Integration)

You can turn this project into a native global terminal utility! This lets you run it in **any folder** on your computer.

1. In your terminal inside the project directory, link your package globally:
   ```bash
   npm link
   ```
2. Now, open any folder or project on your computer in your terminal, and simply type:
   ```bash
   readme-cli
   ```
3. The generator will instantly boot up, ask you for project details, and save a beautiful `README.md` to that folder!

---

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).
