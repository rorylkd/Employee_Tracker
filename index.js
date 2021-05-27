const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const cTable = require("console.table");

// console.table([{
//     name: 'foo',
//     age: 10
// },
// {name: 'bar',
// age: 20}])
// Checking if this works

const connection = mysql2.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_Tracker_db",
});

connection.connect((err) => {
  console.log("\nConnected as id:" + connection.threadId);
});

function addtoDepartmentDB(answers) {
  connection.query("INSERT INTO department SET ?", {
    name: answers.departmentName,
  });
}

function addtoRoleDB(answers) {
    connection.query("INSERT INTO role SET ?", {
      title: answers.roleTitle,
      salary: answers.roleSalary
    });
  }

function addtoEmployeeDB(answers) {
    connection.query("INSERT INTO employee SET ?", {
        first_name: answers.employeeFirstName,
        last_name: answers.employeeLastName,
      });
}

function viewDepartmentDB() {
    connection.query('SELECT * FROM department', (err, res) =>{
        if (err) {console.error("ERROR", err)} else {
            console.table('\n', res);
        }
    })
}
function viewRoleDB() {
    connection.query('SELECT * FROM role', (err, res) =>{
        if (err) {console.error("ERROR", err)} else {
            console.table('\n', res);
        }
    })
}
function viewEmployeeDB() {
    connection.query('SELECT * FROM employee', (err, res) =>{
        if (err) {console.error("ERROR", err)} else {
            console.table('\n', res);
        }
    })
}

const mainMenu = {
    type: "list",
    name: "mainMenuChoices",
    message: "What would you like to do?",
    choices: [
      "Add departments, roles or employees",
      "View departments, roles or employees",
      "Update employee roles",
      "Exit"
    ],
  };
  
  const addMenu = {
    type: "list",
    name: "addMenuChoices",
    message: "What would you like to add?",
    choices: ["Add department", "Add role", "Add employee"],
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
  
  function exit() {
    console.log("Exiting application");
    connection.end();
  }
  
  function addDepartment() {
    inquirer.prompt(addDepartmentQuestions).then((addDepartmentAnswers) => {
      console.log("Name of the department:", addDepartmentAnswers.departmentName);
      addtoDepartmentDB(addDepartmentAnswers)
      mainMenuPrompt();
    });;
  }
  
  function addRole() {
      inquirer.prompt(addRoleQuestions).then((addRoleAnswers) => {
          console.log("Role answers:", addRoleAnswers);
          addtoRoleDB(addRoleAnswers)
          mainMenuPrompt()
          
      })
  }
  
  function addEmployee() {
      inquirer.prompt(addEmployeeQuestions).then((addEmployeeAnswers) => {
          console.log("Employee answers:", addEmployeeAnswers);
          addtoEmployeeDB(addEmployeeAnswers)
          mainMenuPrompt()
      })
  }
  
  function addPrompt() {
    inquirer.prompt(addMenu).then((addMenuAnswers) => {
      if (addMenuAnswers.addMenuChoices === "Add department") {
        console.log("You have chosen to add a department");
        addDepartment();
      } else if (addMenuAnswers.addMenuChoices === "Add role") {
        console.log("You have chosen to add a role");
        addRole();
      } else if (addMenuAnswers.addMenuChoices === "Add employee") {
        console.log("You have chosen to add an employee");
        addEmployee();
      }
    });
  }
  
  function viewPrompt() {
    console.log("You have chosen to view departments, roles or employees");
    inquirer.prompt(viewMenu).then((viewMenuAnswers) => {
      if (viewMenuAnswers.viewMenuChoices === "View departments") {
        console.log("You have chosen to view departments");
        viewDepartmentDB();
        mainMenuPrompt();
      } else if (viewMenuAnswers.viewMenuChoices === "View roles") {
        console.log("You have chosen to view roles");
        viewRoleDB();
        mainMenuPrompt();
      } else if (viewMenuAnswers.viewMenuChoices === "View employees") {
        console.log("You have chosen to view employees");
        viewEmployeeDB();
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
       exit();
      }
    });
  }
  
  mainMenuPrompt()