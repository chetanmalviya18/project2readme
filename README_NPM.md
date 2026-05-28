# project2readme

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![NPM Version](https://img.shields.io/badge/npm-v2.0.0-blue.svg)
![Node Version](https://img.shields.io/badge/Node.js-%3E%3D_16.0.0-green.svg)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)

An interactive, guided Command Line Interface (CLI) tool built using Node.js and TypeScript to dynamically compile high-quality, professional, and emoji-decorated `README.md` files in seconds.

Say goodbye to typing markdown boilerplate manually! Simply select a style, answer a few guided prompts, and get a beautiful, structured README with automatic dynamic badges and public GitHub profile cards.

---

## 📋 Table of Contents
- [🚀 Installation](#-installation)
- [💻 How to Use](#-how-to-use)
- [✨ Key Features](#-key-features)
- [🎨 Templates Available](#-templates-available)
  - [1. Basic Style](#1-basic-style-)
  - [2. Professional Style](#2-professional-style-)
- [⚖️ License](#%EF%B8%8F-license)

---

## 🚀 Installation

You can install this CLI globally on your system using NPM:

```bash
npm install -g project2readme
```

Or run it instantly without global installation using `npx`:

```bash
npx project2readme
```

---

## 💻 How to Use

Once executed, navigate to the root folder of any project in your terminal and run the command:

```bash
project2readme
```

The CLI will guide you through:
1. Choosing between a **Basic** or **Professional** layout.
2. Collecting project metadata (Name, Description, Installation, Usage, License, and Author).
3. **Dynamic Prompts**: Asking for extra fields (like Git URL, Tech Stack list, and API details) *only* if you selected the **Professional** template!
4. Saving the finished, beautifully styled markdown to your folder as `README.md` (with built-in overwrite safety).
5. **Interactive Preview**: Offering to instantly open the completed file in your default system markdown editor!

---

## ✨ Key Features

- **Multi-Template Support**: Choose between a lightweight **Basic** layout or a comprehensive **Professional** layout.
- **GitHub API Integration**: Queries `api.github.com` natively to fetch your public full name, bio, and avatar on-the-fly, embedding a centered HTML portfolio profile card in the README!
- **Universal Emoji Support**: Heading decorations and detail lists beautifully enhanced with matching emojis.
- **Dynamic Table of Contents**: Anchored clickable links generated automatically for quick navigation.
- **Interactive File Preview**: Offers to instantly launch the newly generated readme file in your system's default markdown reader/editor upon success.
- **Automatic Shields.io Badges**: Renders correct dynamic color badges based on your license choice (with special URL-encoding for spaces and hyphens).
- **Overwrite Safety Guard**: Checks for existing files and prompts before modifying them.
- **Fully Typed Core**: Built on robust, strongly-typed TypeScript modules.

---

## 🎨 Templates Available

### 1. Basic Style 📦
A clean, lightweight format designed for simple utilities or scripts. It includes:
- Emoji Heading Title & Description
- Quick Table of Contents anchors
- Quick Installation & Usage blocks
- Author name alongside a circular GitHub profile avatar
- License notice

### 2. Professional Style 🚀
A robust, feature-rich developer-facing layout. It automatically generates:
- Centered HTML header styles
- Collapsible HTML **Table of Contents**
- Tech Stack lists
- Collapsible contributions pipeline
- Custom **API Reference** details
- Fully styled HTML Author Portfolio table containing your live bio, name, email, and avatar card

---

## ⚖️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
