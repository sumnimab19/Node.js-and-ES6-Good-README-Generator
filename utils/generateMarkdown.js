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
    * [Contributing](#contribution)
    * [Tests](#test)
    * [Questions](#questions)
    
  ## Installation 
  ${data.installation}

  ## Tests 
  ${data.test}

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

  ## Questions 
  ${data.question}
  ${data.email}
  `;
}

module.exports = generateMarkdown;

