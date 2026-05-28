# @chetan_malviya/readme-cli

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![NPM Version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)
![Node Version](https://img.shields.io/badge/Node.js-%3E%3D_16.0.0-green.svg)

An interactive, guided Command Line Interface (CLI) tool to quickly generate high-quality, professional `README.md` files for your repositories. 

Say goodbye to typing markdown boilerplate from scratch! Answer a few guided prompts, and get a beautiful, structured README in seconds.

---

## 🚀 Installation

You can install this CLI globally on your computer using NPM:

```bash
npm install -g @chetan_malviya/readme-cli
```

---

## 💻 How to Use

Once installed, navigate to the root folder of any project in your terminal and simply run:

```bash
readme-cli
```

The CLI will start an interactive session, guiding you through:
1. Choosing between a **Basic** or **Professional** layout.
2. Collecting project metadata (Name, Description, Installation, Usage, License, and Author).
3. **Dynamic Prompts**: Asking for extra fields (like Git URL, Tech Stack list, and API details) *only* if you selected the **Professional** template!
4. Saving the finished, beautifully styled markdown to your folder as `README.md` (with built-in overwrite safety).

---

## 🎨 Templates Available

### 1. Basic Style
A clean, lightweight format designed for simple utilities or scripts. It includes:
- Standard Title & Description
- Quick Installation & Usage blocks
- Author and License notice

### 2. Professional Style
A robust, feature-rich developer-facing layout. It automatically generates:
- Centered HTML header styles
- Dynamic collapsable **Table of Contents**
- Bulleted **Tech Stack** tags
- Collapsible contributions pipeline
- Custom **API Reference** details
- Unified author contact cards with GitHub profile links

---

## ⚖️ License

Distributed under the MIT License.
