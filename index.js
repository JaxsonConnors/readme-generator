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
      validate: titleInput => {
        if (titleInput) {
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
      message: 'Please enter a detailed description of your application',
      validate: descriptionInput => {
        if (descriptionInput) {
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
      message: 'Please give detailed instructions for installing your application',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter instructions for installing your application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please give detailed instructions for the usage of your application',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter instructions for the usage of your application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'license',
      message: 'Please provide a license for your application',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please provide a license for your application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide guidlines for potential contributors',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please provide guidlines for potential contributors!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide written tests for your application',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please provide written tests for your application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your github username',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please provide your github username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please provide your email!');
          return false;
        }
      }
    },
  ])
// TODO: Create a function to write README file
  .then(function(data) {
    fs.writeFile(`./README.md`, generateMarkdown(data), err => {
      if (err) throw new Error(err);
    
      console.log(`README created! Check out README.md in this directory to see it!`);
  })
  });
};

promptUser();

