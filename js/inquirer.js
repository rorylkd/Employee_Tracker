const inquirer = require("inquirer");

const mainMenu = {
  type: "list",
  name: "mainMenuChoices",
  message: "What would you like to do?",
  choices: [
    "Add departments, roles or employees",
    "View departments, roles or employees",
    "Update employee roles",
  ],
};

function addPrompt() {
  console.log("You have chosen to add departments, roles or employees");
}

function viewPrompt() {
  console.log("You have chosen to view departments, roles or employees");
}

function updatePrompt() {
  console.log("You have chosen to update employee roles");
}

function mainMenuPrompt() {
  inquirer.prompt(mainMenu).then((mainMenuAnswer) => {
    if (mainMenuAnswer.mainMenuChoices === "Add departments, roles or employees") {
      addPrompt();
    } else if (mainMenuAnswer.mainMenuChoices === "View departments, roles or employees") {
      viewPrompt();
    } else if (mainMenuAnswer.mainMenuChoices === "Update employee roles") {
      updatePrompt();
    } else {
      console.log("Wrong answer");
    }
  });
}

mainMenuPrompt();
