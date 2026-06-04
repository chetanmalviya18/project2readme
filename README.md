# project2readme 🚀

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![NPM Version](https://img.shields.io/badge/npm-v2.0.1-blue.svg)
![Node Version](https://img.shields.io/badge/Node.js-%3E%3D_18.0.0-green.svg)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)

An interactive, production-grade, and **AI-powered Command Line Interface (CLI)** built with Node.js and TypeScript. It utilizes the official Google Gemini SDK (`@google/genai`) to dynamically optimize and compile clean, structured, and beautiful `README.md` files.

---

## 📋 Table of Contents
- [📖 Features](#-features)
- [🛠️ Scalable AI-Powered Architecture](#%EF%B8%8F-scalable-ai-powered-architecture)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the CLI](#running-the-cli)
  - [Setting up Gemini AI](#setting-up-gemini-ai)
- [⚙️ CLI Flags & Options](#%EF%B8%8F-cli-flags--options)
- [🔧 TypeScript & Build Pipeline](#-typescript--build-pipeline)
  - [Clean Rebuild](#clean-rebuild)
- [🌟 Global Linking](#-global-linking)
- [⚖️ License](#%EF%B8%8F-license)

---

## 📖 Features

- **🧠 Google Gemini 2.5 Flash Integration**: Powered by the brand-new `@google/genai` client, it intelligently generates polished descriptions, step-by-step installation guides, advanced usage instructions, and comprehensive markdown API docs in JSON format.
- **🎨 Multi-Template Support**: Choose between a lightweight **Basic** layout or a comprehensive, visually stunning **Professional** layout.
- **🛠️ Commander Subcommands & Flags**: Easily configure options directly from your terminal shell to bypass or override interactive questionnaire defaults.
- **🌐 GitHub API Profile Retrieval**: Automatically queries public GitHub profiles using Node's native `fetch` to retrieve avatars, names, and bios, formatting them into an HTML profile card.
- **💡 Safe Overwrite Guards**: Gracefully checks for existing `README.md` files and prompts before modifying or overwriting your work.
- **📋 Table of Contents**: Automatically compiles dynamic, clickable Table of Contents anchors for effortless navigation.
- **⚡ Interactive Live Preview**: Prompts upon success to automatically open the generated markdown file in your system's default viewer.
- **🔒 Strongly Typed & ESM Native**: Fully typed codebase utilizing Node's modern ES Modules (`type: "module"`) and `NodeNext` module resolution.

---

## 🛠️ Scalable AI-Powered Architecture

The codebase strictly adheres to **Separation of Concerns**, ensuring that CLI orchestration, templates, network services, prompts, and filesystem operations are fully modularized:

```text
project2readme/
├── bin/
│   └── index.js             # Shell-executable binary (imports compiled dist/bin/index.js)
├── dist/                    # Clean compiled JavaScript ESM outputs and typings (.d.ts)
├── src/
│   ├── bin/                 # CLI entrypoint and orchestrator bootstrapper
│   │   └── index.ts         # Initializer for Commander.js, parses options/arguments
│   ├── commands/            # CLI Command handlers
│   │   └── generate.ts      # Orchestrates questionnaire flow, services, and file creation
│   ├── services/            # Decoupled Network API communication clients
│   │   ├── ai.ts            # Official Google Gen AI SDK connector (Gemini 2.5 Flash)
│   │   └── github.ts        # Pure fetch integration with GitHub API
│   ├── prompts/             # Inquirer interactive questions
│   │   └── questions.ts     # Inquirer schemas, validations, and overwriting prompts
│   ├── templates/           # Reusable functional Markdown layout compilers
│   │   ├── basic.ts         # Lightweight README template
│   │   └── professional.ts  # HTML-enhanced professional README template
│   ├── types/               # TypeScript strong type layer
│   │   └── index.ts         # Central types, CLI interfaces, and payload shapes
│   └── utils/               # Operating System interfaces
│       ├── fileSystem.ts    # Safe file checks, writeFile, and native file editor launchers
│       └── ui.ts            # Chalk CLI coloring and Ora loading spinner abstractions
├── tsconfig.json            # Strict TypeScript compiler configurations
├── package.json             # NPM package scripts and dependencies
└── .gitignore               # Ignores local node_modules/ and dist/ build folders
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.0.0+) installed on your machine.

### Installation
Clone the repository locally and install the required production-grade dependencies:
```bash
npm install
```

### Running the CLI
To run the CLI during development directly using `tsx` (TypeScript Execute without compilation):
```bash
npm start
```
*(Runs `npx tsx src/bin/index.ts` under the hood)*

### Setting up Gemini AI
To leverage the AI-powered expansion features, obtain a Gemini API Key from Google AI Studio and configure it as an environment variable in your terminal session:

**On Windows (PowerShell):**
```powershell
$env:GEMINI_API_KEY="your_api_key_here"
```

**On Linux / macOS (bash/zsh):**
```bash
export GEMINI_API_KEY="your_api_key_here"
```

Run the generator with the `--ai` flag to trigger professional AI writing optimizations:
```bash
npm start -- --ai
```

---

## ⚙️ CLI Flags & Options

You can customize the generation behavior using CLI options. These flags can prefill values or override interactive defaults:

| Short Flag | Long Flag | Description | Expected Value |
| :--- | :--- | :--- | :--- |
| `-a` | `--ai` | Triggers Google Gemini to expand and optimize the README | None (Boolean) |
| `-t` | `--template` | Pre-fills the README style choice | `Basic` \| `Professional` |
| `-l` | `--license` | Pre-fills the licensing style choice | `MIT` \| `Apache 2.0` \| `GPL 3.0` \| `BSD 3-Clause` \| `None` |
| `-g` | `--github` | Pre-fills the target GitHub profile query username | Username (e.g. `octocat`) |
| `-k` | `--key` | Direct custom Gemini API key string | Key string (e.g. `AIzaSy...`) |

### Example Usage:
```bash
# Generate a Professional template using Gemini AI by passing the API key directly via flag
npm start -- --ai --template Professional --github octocat --key AIzaSyYourActualAPIKeyHere
```

---

## 🔧 TypeScript & Build Pipeline

### Clean Rebuild
Before publishing to NPM, TypeScript compiles the code to standard ECMAScript modules within the `dist/` directory.

To clean previous compiler states and perform a clean rebuild:
```bash
# Cleans and recompiles
npm run build
```

---

## 🌟 Global Linking

You can link the project globally to test integration in other workspace directories:
```bash
npm link
```
Once linked, run the CLI globally from **any directory**:
```bash
project2readme --ai
```

---

## ⚖️ License

Distributed under the **MIT** License. See the [LICENSE](LICENSE) file for more information.
