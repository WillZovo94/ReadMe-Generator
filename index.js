// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a title for the project!'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a description of your product!'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please add installation methods of your product if there are any.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please add usage instructions and examples'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'If you have any credits, please list them here!'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a following license',
        choices: [
            'None', 'Apache License 2.0', 'GNU General Public License v3.0',
            'MIT License', 'BSD 2-Clause License', 'BSD 3-Clause license',
            'Boost Software License 1.0', 'Creative Commons Zero V1.0 Universal',
            'GNU Affero General Public License V3.0',
            'GNU General Public License v2.0', 'Mozilla Public License 2.0', 'The Unlicense'
        ]
    },

    {
        type: 'input',
        name: 'features',
        message: 'What type of features does your project include?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute towards your program if you would like?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
    }
];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err
? console.log(err) : console.log('Successfuly Generated a READ.me File!'));
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
    officialMarkdown = generateMarkdown(answers);
    writeToFile('README-Example.md', officialMarkdown)
})

}

// Function call to initialize app
init();