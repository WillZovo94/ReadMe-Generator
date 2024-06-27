// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return 'No license selected';
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