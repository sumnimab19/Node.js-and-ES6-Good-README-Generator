function generateMarkdown(data) {

  return `[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]();
  # ${data.project}
  ## ${data.description}
  ## Table of Contents
    * [Installation](#install)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#needtoknowcontribute)
    * [Tests](#runtest)
    * [Questions](#needtoknowuse)
    
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  ${data.license}

  ## Contribution 
  ${data.needtoknowcontribute}

  ## Tests 
  ${data.runtest}

  ## Questions 
  ${data.needtoknowuse}
  
  `;
}

module.exports = generateMarkdown;

