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

const addMenu = {
  type: "list",
  name: "addMenuChoices",
  message: "What would you like to add?",
  choices: ["Add departments", "Add roles", "Add employees"],
};

const viewMenu = {
    type: "list",
    name: "viewMenuChoices",
    message: "What would you like to view?",
    choices: ["View departments", "View roles", "View employees"],
  };

function addPrompt() {
  console.log("You have chosen to add departments, roles or employees");
  inquirer.prompt(addMenu).then((addMenuAnswers) => {
    if (addMenuAnswers.addMenuChoices === "Add departments") {
      console.log("You have chosen to add departments");
    } else if (addMenuAnswers.addMenuChoices === "Add roles") {
      console.log("You have chosen to add roles");
    } else if (addMenuAnswers.addMenuChoices === "Add employees") {
      console.log("You have chosen to add employees");
    }
  });
}

function viewPrompt() {
  console.log("You have chosen to view departments, roles or employees");
  inquirer.prompt(viewMenu).then((viewMenuAnswers) => {
    if (viewMenuAnswers.viewMenuChoices === "View departments") {
      console.log("You have chosen to view departments");
    } else if (viewMenuAnswers.viewMenuChoices === "View roles") {
      console.log("You have chosen to view roles");
    } else if (viewMenuAnswers.viewMenuChoices === "View employees") {
      console.log("You have chosen to view employees");
    }
  });
}

function updatePrompt() {
  console.log("You have chosen to update employee roles");
}

function mainMenuPrompt() {
  inquirer.prompt(mainMenu).then((mainMenuAnswer) => {
    if (
      mainMenuAnswer.mainMenuChoices === "Add departments, roles or employees"
    ) {
      addPrompt();
    } else if (
      mainMenuAnswer.mainMenuChoices === "View departments, roles or employees"
    ) {
      viewPrompt();
    } else if (mainMenuAnswer.mainMenuChoices === "Update employee roles") {
      updatePrompt();
    } else {
      console.log("Wrong answer");
    }
  });
}

mainMenuPrompt();
