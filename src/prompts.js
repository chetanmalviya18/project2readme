import inquirer from 'inquirer';

export async function promptUser() {
  const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project? 🏷️',
      validate: (input) => {
        if (input.trim() === '') {
          return 'Project name cannot be empty!';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project: 📝',
      validate: (input) => {
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
      name: 'github',
      message: 'Enter your GitHub username: 👤',
      validate: (input) => {
        if (input.trim() === '') {
          return 'GitHub username cannot be empty!';
        }
        return true;
      }
    }
  ];

  return inquirer.prompt(questions);
}

export async function promptOverwrite(targetFile) {
  const { confirmOverwrite } = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirmOverwrite",
      message: `${targetFile} already exists in this folder. Do you want to overwrite it?`,
      default: false,
    },
  ]);
  return confirmOverwrite;
}
