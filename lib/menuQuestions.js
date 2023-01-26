const inquirer = require("inquirer");
const fs = require("fs");

const menuData = [
    {
        type: "list",
        message: "Is your next team member an Engineer or an Intern?",
        name: "choice",
        choices: ["Engineer", "Intern", "Neither / No more employees"]
    }
];

module.exports = menuData;