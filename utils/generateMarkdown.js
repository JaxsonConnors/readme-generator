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
    ___
    ${licenseText}
  `;
};

const generateContributing = contributingText => {
  if (!contributingText) {
    return '';
  }

  return `
    ### **Contributing**
    ___
    ${contributingText}
  `;
};

const generateTests = testsText => {
  if (!testsText) {
    return '';
  }

  return `
    ### **Tests**
    ___
    ${testsText}
  `;
};

const generateQuestions = questionsText => {
  if (!questionsText) {
    return '';
  }

  return `
    ### **Questions**
    ___
    ${questionsText}
  `;
};

const generateTableOfContents = () => {
  if (confirmTableOfContents === true) {

    return `
    ### **Table Of Contents**
    ___
    * Installation(#Installation)
    * Usage(#Usage)
    `;
    if (confirmLicense === true) {
      return `* License(#License)`;
    }
  
    if (confirmContributing === true) {
      return `* Contributing(#Contributing)`;
    }
  
    if (confirmTests === true) {
      return `* Tests(#Tests)`;
    }
  
    if (confirmQuestions === true) {
      return `* Questions(#Questions)`;
    }

  } else {
    return '';
  }

};

function generateMarkdown(data) {
  return `# **${data.title}**
  ___

  ### **Description**
  ___
  ${data.description}


  ${generateTableOfContents}


  ### **Installation**
  ___
  ${data.installation}


  ### **Usage**
  ___
  ${data.usage}


  ${generateLicense(license)}


  ${generateContributing(contributing)}


  ${generateTests(tests)}


  ${generateQuestions(questions)}
`;
}

module.exports = generateMarkdown;
