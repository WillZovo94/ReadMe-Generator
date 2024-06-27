// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return 'No license selected';
    }

    switch(license) {
      case 'Apache License 2.0': {
        return '[!Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
      }
      case 'GNU General Public License v3.0': {
        '[!GNU General Public License v3.0](https://img.shields.io/badge/License-EPL_1.0-red.svg)'
      }
      case 'MIT License' : {
        return '[!MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)'
      }
      case 'BSD 2-Clause License' : {
        return '[!BSD 2-Clause License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'      
      }
      case 'BSD 3-Clause License' : {
        return '[!BSD 3-Clause License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'      
      }
      case 'Boost Software License 1.0' : {
        return '[!Boost Software License 1.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'      
      }
      case 'Creative Commons Zero V1.0 Universal' : {
        return '[!Creative Commons Zero V1.0 Universal](https://licensebuttons.net/l/zero/1.0/80x15.png)'      
      }
      case 'Eclipse Public License 1.0' : {
        return '[!Eclipse Public LIcense 1.0](https://img.shields.io/badge/License-EPL_1.0-red.svg)'      
      }
      case 'GNU Affero General Public License V3.0' : {
        return '[!GNU Affero General Public License V3.0](https://img.shields.io/badge/License-AGPL_v3-blue.svg)'      
      }
      case 'GNU General Public License V2.0' : {
        return '[!GNU General Public License V2.0](https://img.shields.io/badge/License-GPL_v2-blue.svg)'      
      }
      case 'Mozilla Public License 2.0' : {
        return '[!Mozilla Public License 2.0](https://img.shields.io/badge/License-MIT-yellow.svg)'      
      }
      case 'The Unlicense' : {
        return '[!The Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'      
      }
      default: 
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Description

  ${answers.description}

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## Credit

  ${answers.credit}

  ## License

  ${renderLicenseBadge(answers.license)}

  ${answers.license}

  ## Features

  ${answers.features}

  ## Contribution

  ${answers.contributions}

  ## GitHub

  ${answers.github}

  ## Email

  ${answers.email}
  
  `;
}

module.exports = generateMarkdown;