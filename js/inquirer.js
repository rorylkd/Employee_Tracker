const inquirer = require('inquirer');

const mainMenu = [
    {
        type: 'list',
        name: 'mainMenuChoices',
        message: 'What would you like to do?',
        choices: ['Add departments, roles or employees', 'View departments, roles or employees', 'Update employee roles']
    },
]