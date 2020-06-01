function generateMarkdown(data) {

  return `
  # ${data.title}

  ## Description
    ${data.description}
    
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ## Installation 
  To install necessary dependencies, run the following command:
  
  ${data.installation}

  ## Tests 
  To run tests, run the following command:
  
  ${data.test}

  ## Usage 
  ${data.usage}

  ## Credits 
  ${data.credit}
  
  ## License 
  This project is licensed under ${data.license} license.

  ## Badges
  [![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()

  ## Contribution 
  ${data.needtoknowcontribute}

  ## Questions 
  ${data.question}
  ${data.email}
  `;
}

module.exports = generateMarkdown;

