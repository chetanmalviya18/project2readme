# README Generator CLI (GitHub Developer Version)

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![NPM Version](https://img.shields.io/badge/npm-v2.0.0-blue.svg)
![Node Version](https://img.shields.io/badge/Node.js-%3E%3D_16.0.0-green.svg)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)

An interactive, modular, and enterprise-grade Command Line Interface (CLI) application built using Node.js and TypeScript to dynamically compile clean, standard, and beautiful `README.md` files.

This is the developer-facing repository documentation. For end-user instructions, see the [NPM Package Page](https://www.npmjs.com/package/@chetan_malviya/readme-cli).

---

## 📋 Table of Contents
- [📖 Features](#-features)
- [🛠️ TypeScript Folder Architecture](#%EF%B8%8F-typescript-folder-architecture)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Step 1: Install Dependencies](#step-1-install-dependencies)
  - [Step 2: Run in Development](#step-2-run-in-development)
- [🔧 TypeScript & Build Pipeline](#-typescript--build-pipeline)
  - [Compiler Configuration](#compiler-configuration)
  - [Build Script](#build-script)
- [🌟 Global Command Linking](#-global-command-linking)
- [⚖️ License](#%EF%B8%8F-license)

---

## 📖 Features

- **Multi-Template Support**: Choose between a lightweight **Basic** layout or a comprehensive, visually stunning **Professional** layout.
- **Dynamic Inquirer Prompts**: Leverages conditional questions using `inquirer` depending on your selected template style.
- **GitHub API Integration**: Queries `api.github.com` on-the-fly using the native Node.js global `fetch` API to retrieve your public name, bio, and avatar, embedding them directly into an HTML Portfolio card!
- **Table of Contents**: Automatically compiles dynamic, clickable Table of Contents anchors for easy navigation.
- **Interactive File Preview**: Prompts you upon success to instantly launch the newly generated markdown file in your system's default viewer.
- **Universal Emoji Support**: Embellishes headings and details with matching emojis.
- **Safe Overwrite Guards**: Checks for existing files and prompts before modifying them.
- **Strongly Typed**: 100% written in TypeScript with isolated interfaces and strict compiler safety.

---

## 🛠️ TypeScript Folder Architecture

The codebase strictly adheres to **Separation of Concerns**, ensuring that all network operations, file checks, prompts, and templates are fully isolated and strongly typed:

```text
readme-cli/
├── bin/
│   └── index.js             # Shell-executable binary (imports compiled dist/index.js)
├── dist/                    # [NEW] Emitted JavaScript ESM files & typings (.d.ts)
├── src/
│   ├── types/
│   │   └── index.ts         # [TS] Unified custom interfaces and structural types
│   ├── template/
│   │   ├── basic.ts         # [TS] Basic layout template builder
│   │   └── professional.ts  # [TS] Professional detailed HTML-card template builder
│   ├── utils/
│   │   ├── logger.ts        # [TS] Reusable ANSI console styling loggers
│   │   ├── fileSystem.ts    # [TS] Reusable file checks, fs.writeFile, and editor openers
│   │   └── github.ts        # [TS] Isolated asynchronous GitHub API user-profile fetches
│   ├── index.ts             # [TS] High-level clean workflow manager (orchestrator)
│   ├── prompts.ts           # [TS] CLI inquirer interactive questionnaire modules
│   └── generator.ts         # [TS] Router and tech stack array parser
├── tsconfig.json            # [NEW] TypeScript compiler configurations
├── package.json             # NPM metadata and publishing swap hooks
└── .gitignore               # Ignores local node_modules/ and dist/ build files
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16.0.0+) installed.

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run in Development
You can run the TypeScript source code directly in memory during development (without having to compile first) using the pre-configured `tsx` runner:
```bash
npm start
```
*(Runs `npx tsx src/index.ts` under the hood)*

---

## 🔧 TypeScript & Build Pipeline

### Compiler Configuration
The project uses the standard **`tsconfig.json`** compiler configurations:
- **Target**: `ES2022` for modern JavaScript syntax.
- **Module Resolution**: `NodeNext` to support native Node.js ES Modules.
- **Strict Mode**: Enabled for full type-safety.
- **Declaration Files**: Generates `.d.ts` declaration files automatically upon build.

### Build Script
Before publishing to NPM, the code is compiled into standard JavaScript ES Module outputs in the `dist/` directory.

To trigger the compilation manually:
```bash
npm run build
```

---

## 🌟 Global Command Linking

Link the package globally during development to test CLI integrations natively:
```bash
npm link
```
Now, you can type `readme-cli` in **any terminal directory** on your computer to generate standard readmes on-the-fly!

---

## ⚖️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
