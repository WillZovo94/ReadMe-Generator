// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // If there isn't a license, it'll mention that none were selected.
    if (!license) {
        return 'No license selected';
    }

    // A switch to go through the license case by case to find the badges.
    switch(license) {
      case 'Apache License 2.0':
        return '![Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
      case 'GNU General Public License v3.0':
        return '![GNU General Public License v3.0](https://img.shields.io/badge/License-EPL_1.0-red.svg)'
      case 'MIT License' :
        return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)'
      case 'BSD 2-Clause License' :
        return '![BSD 2-Clause License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'      
      case 'BSD 3-Clause license' :
        return '![BSD 3-Clause license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'      
      case 'Boost Software License 1.0' :
        return '![Boost Software License 1.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'      
      case 'Creative Commons Zero V1.0 Universal' :
        return '![Creative Commons Zero V1.0 Universal](https://licensebuttons.net/l/zero/1.0/80x15.png)'         
      case 'GNU Affero General Public License V3.0' :
        return '![GNU Affero General Public License V3.0](https://img.shields.io/badge/License-AGPL_v3-blue.svg)'      
      case 'GNU General Public License v2.0' :
        return '![GNU General Public License v2.0](https://img.shields.io/badge/License-GPL_v2-blue.svg)'      
      case 'Mozilla Public License 2.0' :
        return '![Mozilla Public License 2.0](https://img.shields.io/badge/License-MIT-yellow.svg)'      
      case 'The Unlicense' :
        return '![The Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'      
      default: 
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // a switch that goes case by case with the license to find the document about that particular license.
  switch(license) {
    case 'Apache License 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)'
    case 'GNU General Public License v3.0':
      return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)'
    case 'MIT License' :
      return '[MIT License](https://opensource.org/licenses/MIT)'
    case 'BSD 2-Clause License' :
      return '[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)'      
    case 'BSD 3-Clause license' :
      return '[BSD 3-Clause license](https://opensource.org/licenses/BSD-3-Clause)'      
    case 'Boost Software License 1.0' :
      return '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)'      
    case 'Creative Commons Zero V1.0 Universal' :
      return '[Creative Commons Zero V1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)'           
    case 'GNU Affero General Public License V3.0' :
      return '[GNU Affero General Public License V3.0](https://www.gnu.org/licenses/agpl-3.0)'      
    case 'GNU General Public License v2.0' :
      return '[GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'      
    case 'Mozilla Public License 2.0' :
      return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)'      
    case 'The Unlicense' :
      return '[The Unlicense](http://unlicense.org/)'      
    default: 
      return '';
  }
  }

// TODO: Create a function that returns the license section of README
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Description

  ${answers.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credit](#credit)
  - [License](#license)
  - [Features](#features)
  - [Contributions](#contributions)
  - [Questions](#questions)

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## Credit

  ${answers.credit}

  ## License

  ${answers.license}

  If you want more information on the license, Click Here ${renderLicenseLink(answers.license)}.

  ## Features

  ${answers.features}

  ## Contribution

  ${answers.contribution}

  ## Questions

  If you have any further questions, you can contact me at: ${answers.email}.

  My GitHub :[${answers.github}](https://github.com/${answers.github}).
  
  `;
}

module.exports = generateMarkdown;