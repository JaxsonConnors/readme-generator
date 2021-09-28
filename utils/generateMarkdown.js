// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
  ___

  ### **Description**
  ___
  ${data.description}


  ### **Table Of Contents**
  ___
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)


  ### **Installation**
  ___
  ${data.installation}


  ### **Usage**
  ___
  ${data.usage}


  ### **License**
  ___

  ${data.license}


  ### **Contributing**
  ___

  ${data.contributing}


  ### **Tests**
  ___

  ${data.tests}


  ### **Questions**
  ___
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
