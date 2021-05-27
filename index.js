const inquirer = require("./js/inquirer");
const mysql2 = require("mysql2");

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

function addtoDepartmentDB() {
  connection.query("INSERT INTO department SET ?", {
    name: addDepartmentAnswers.departmentName,
  });
}


function addtoEmployeeDB() {}
