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
const generateLicense = licenseText => {
  if (!licenseText) {
    return '';
  }

  return `
    ### **License**

    ${licenseText}
  `;
};

const generateContributing = contributingText => {
  if (!contributingText) {
    return '';
  }

  return `
    ### **Contributing**

    ${contributingText}
  `;
};

const generateTests = testsText => {
  if (!testsText) {
    return '';
  }

  return `
    ### **Tests**

    ${testsText}
  `;
};

const generateQuestions = questionsText => {
  if (!questionsText) {
    return '';
  }

  return `
    ### **Questions**

    ${questionsText}
  `;
};

const generateTableOfContents = () => {
  if (!questionsText) {
    return '';
  }

  return `
  ### **Table Of Contents**

  * Installation#1
  * Usage#2
  `;
  if (confirmLicense === true) {
    return `* License#3`;
  }

  if (confirmContributing === true) {
    return `* Contributing#4`;
  }

  if (confirmTests === true) {
    return `* Tests#5`;
  }

  if (confirmQuestions === true) {
    return `* Questions#6`;
  }

};

function generateMarkdown(data) {
  return `# **${data.title}**
  ### **Description**

  ${data.description}


  ### **Installation**#1

  ${data.installation}


  ### **Usage**#2

  ${data.usage}


  ${generateLicense(license)}


  ${generateContributing(contributing)}


  ${generateTests(tests)}


  ${generateQuestions(questions)}
`;
}

module.exports = generateMarkdown;
