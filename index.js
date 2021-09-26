// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your application?',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your application title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a detailed description of your application',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter a description for your application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please give a detailed description for installing your application',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter a description for your application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please give a detailed description for using your application',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter a description for using your application!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Would you like to add licences to your README?',
      default: true
    },
    {
      type: 'input',
      name: 'license',
      message: 'Pleae provide licenses',
      when: ({ confirmLicense }) => confirmLicense
    },
    {
      type: 'confirm',
      name: 'confirmContributing',
      message: 'Would you like to allow other developers to contribute to your application?',
      default: true
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Pleae give a detailed list of guidelines for potential contributors to follow',
      when: ({ confirmContributing }) => confirmContributing
    },
    {
      type: 'confirm',
      name: 'confirmTests',
      message: 'Would you like to provide written tests for your application?',
      default: true
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Pleae provide written tests for your application',
      when: ({ confirmTests }) => confirmTests
    },
    {
      type: 'confirm',
      name: 'confirmQuestions',
      message: 'Would you like to provide contact information for questions?',
      default: true
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Pleae provide contact information for questions',
      when: ({ confirmQuestions }) => confirmQuestions
    },
    {
      type: 'confirm',
      name: 'confirmTableOfContents',
      message: 'Would you like to impliment a table of contents?',
      default: true
    }
  ])
// TODO: Create a function to write README file
fs.writeFile('./READEME.md', data, err => {
    if (err) throw new Error(err);

    console.log('README created! Check out index.html in this directory to see it!');
  });
};
/*
// TODO: Create a function to initialize app
function init() {
  fs.readFile("./README.md", "utf8", function(error, log) {

    if (error) {
      return console.log(error);
    }
    
    console.log(log);
    
    })
};

// Function call to initialize app
init();
*/