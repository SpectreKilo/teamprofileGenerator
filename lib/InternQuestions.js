const inquirer = require("inquirer");
const fs = require("fs");

const dataIntern = [
    {
        type: "input",
        message: "What is your team member's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your team member's employee ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your team member's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your team member's former school?",
        name: "school",
    },
]

module.exports = dataIntern;