const inquirer = require("inquirer");
const fs = require("fs");

const dataManager = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
    },
]

module.exports = dataManager;