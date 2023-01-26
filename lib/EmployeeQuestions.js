const inquirer = require("inquirer");
const fs = require("fs");

const dataEmployee = [
    {
        type: "input",
        message: "What is your team member's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your team member's employee ID?",
        name: "empId",
    },
    {
        type: "input",
        message: "What is your team member's email?",
        name: "email",
    },
    
]

module.exports = dataEmployee