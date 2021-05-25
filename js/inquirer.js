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

const addDepartmentQuestions = {
  type: "input",
  name: "departmentName",
  message: "What is the name of the department?",
};

const addRoleQuestions = [
    {
        type: "input",
        name: "roleTitle",
        message: "What is the title of the role?",
      },
      {
        type: "input",
        name: "roleSalary",
        message: "What is the salary of the role?",
      },
      {
        type: "input",
        name: "roleDepartment",
        message: "What department does the role belong to?",
      }
]

const addEmployeeQuestions = [
    {
        type: "input",
        name: "employeeFirstName",
        message: "What is the first name of the employee?",
      },
      {
        type: "input",
        name: "employeeLastName",
        message: "What is the last name of the employee?",
      },
      {
        type: "input",
        name: "employeeRole",
        message: "What role does the employee have?",
      },
      {
        type: "input",
        name: "employeeManager",
        message: "What manager does the employee have?",
      }
]

function addDepartment() {
  inquirer.prompt(addDepartmentQuestions).then((addDepartmentAnswers) => {
    console.log("Name of the department:", addDepartmentAnswers.departmentName);
  });
}

function addPrompt() {
  console.log("You have chosen to add departments, roles or employees");
  inquirer.prompt(addMenu).then((addMenuAnswers) => {
    if (addMenuAnswers.addMenuChoices === "Add departments") {
      console.log("You have chosen to add departments");
      addDepartment();
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
      mainMenuPrompt();
    } else if (viewMenuAnswers.viewMenuChoices === "View roles") {
      console.log("You have chosen to view roles");
      mainMenuPrompt();
    } else if (viewMenuAnswers.viewMenuChoices === "View employees") {
      console.log("You have chosen to view employees");
      mainMenuPrompt();
    }
  });
}

function updatePrompt() {
  console.log("You have chosen to update employee roles");
  mainMenuPrompt();
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
