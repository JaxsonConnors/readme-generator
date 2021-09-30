// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
  ___
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

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
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 


  ### **Contributing**
  ___
  ${data.contributing}


  ### **Contributors**
  ___
  ${data.contributors}


  ### **Tests**
  ___
  ${data.tests}


  ### **Questions**
  ___
  ${data.github} | ${data.email}
`;
}

module.exports = generateMarkdown;
