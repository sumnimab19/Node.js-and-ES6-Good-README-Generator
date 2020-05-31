function generateMarkdown(data) {

  return `
  # ${data.title}

  ## Description
    ${data.description}
    
  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credit)
    * [License](#license)
    * [Contributing](#needtoknowcontribute)
    * [Tests](#runtest)
    * [Questions](#question)
    
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Credits 
  ${data.credit}
  
  ## License 
  ${data.license}

  ## Badges
  [![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()

  ## Contribution 
  ${data.needtoknowcontribute}

  ## Tests 
  ${data.test}

  ## Questions 
  ${data.question}
  ${data.email}
  `;
}

module.exports = generateMarkdown;

