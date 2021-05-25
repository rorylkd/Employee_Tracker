const inquirer = require('inquirer');

const mainMenu = 
    {
        type: 'list',
        name: 'mainMenuChoices',
        message: 'What would you like to do?',
        choices: ['Add departments, roles or employees', 'View departments, roles or employees', 'Update employee roles']
    }

function mainMenuPrompt() {
    inquirer.prompt(mainMenu).then((mainMenuAnswer) =>{
        if (mainMenuAnswer === 'Add departments, roles or employees'){
            console.log('You have chosen to add');
        } else if (mainMenuAnswer === 'View departments, roles or employees') {
            console.log('You have chosen to view');

        } else if (mainMenuAnswer === 'Update employee roles') {
            console.log('You have chosen to update');
        }
    })
}
