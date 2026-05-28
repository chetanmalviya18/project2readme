import inquirer, { QuestionCollection } from 'inquirer';
import { ReadmeAnswers } from './types/index.js';

/**
 * Interactive guided prompts to gather repository metadata.
 * typed with ReadmeAnswers layout schema.
 */
export async function promptUser(): Promise<ReadmeAnswers> {
  const questions: QuestionCollection<ReadmeAnswers> = [
    {
      type: 'list',
      name: 'template',
      message: 'Choose a README template style: 🎨',
      choices: ['Basic', 'Professional'],
      default: 'Basic'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project? 🏷️',
      validate: (input: string) => {
        if (input.trim() === '') {
          return 'Project name cannot be empty!';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project: 📝',
      validate: (input: string) => {
        if (input.trim() === '') {
          return 'Description cannot be empty!';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions: ⚙️',
      default: 'npm install'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions: 🚀',
      default: 'npm start'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project: ⚖️',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
      default: 'MIT'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Enter the Author name: 👤',
      validate: (input: string) => {
        if (input.trim() === '') {
          return 'Author name cannot be empty!';
        }
        return true;
      }
    },
    // --- PROFESSIONAL EXTRAS (Asked conditionally using "when") ---
    {
      type: 'input',
      name: 'repoUrl',
      message: 'Enter Git repository URL: 🔗',
      default: 'https://github.com/username/project',
      when: (answers: ReadmeAnswers) => answers.template === 'Professional',
      validate: (input: string) => {
        if (input.trim() === '') {
          return 'Repository URL is required for professional templates!';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'longDescription',
      message: 'Enter a detailed, long description (optional): 📄',
      when: (answers: ReadmeAnswers) => answers.template === 'Professional'
    },
    {
      type: 'input',
      name: 'techStack',
      message: 'Enter technologies used (comma-separated, optional): 💻\n  (e.g. Node.js, Express.js, PostgreSQL)',
      when: (answers: ReadmeAnswers) => answers.template === 'Professional'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter contact email address (optional): 📧',
      when: (answers: ReadmeAnswers) => answers.template === 'Professional'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter GitHub username (optional): 👤',
      when: (answers: ReadmeAnswers) => answers.template === 'Professional'
    },
    {
      type: 'input',
      name: 'apiDocs',
      message: 'Enter API reference details / markdown tables (optional): 📖',
      when: (answers: ReadmeAnswers) => answers.template === 'Professional'
    }
  ];

  return inquirer.prompt(questions);
}

/**
 * Confirms file overwrite safety.
 */
export async function promptOverwrite(targetFile: string): Promise<boolean> {
  const { confirmOverwrite } = await inquirer.prompt<{ confirmOverwrite: boolean }>([
    {
      type: "confirm",
      name: "confirmOverwrite",
      message: `${targetFile} already exists in this folder. Do you want to overwrite it?`,
      default: false,
    },
  ]);
  return confirmOverwrite;
}

/**
 * Confirms if the generated README should be opened automatically.
 */
export async function promptOpenFile(): Promise<boolean> {
  const { openFile } = await inquirer.prompt<{ openFile: boolean }>([
    {
      type: "confirm",
      name: "openFile",
      message: "Would you like to open the generated README.md file in your default editor?",
      default: true,
    },
  ]);
  return openFile;
}
