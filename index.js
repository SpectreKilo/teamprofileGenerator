const ManagerQuestions = require("./lib/ManagerQuestions");
const EngineerQuestions = require("./lib/EngineerQuestions");
const InternQuestions = require("./lib/InternQuestions");
const EmployeeQuestions = require("./lib/EmployeeQuestions");
const Manager = require("./lib/Manager");
const menuQuestions = require("./lib/menuQuestions");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const dataEngineer = require("./lib/EngineerQuestions");
const dataIntern = require("./lib/InternQuestions");
const generateHTML = require("./src/page-template");
const teamMembers = [];

inquirer
    .prompt(ManagerQuestions)
    .then((dataManager) => {
        const manager1 = new Manager(dataManager.name, dataManager.id, dataManager.email, dataManager.officeNumber);
        teamMembers.push(manager1);
        menu();
    });


const menu = () => {
    inquirer.prompt(menuQuestions)
    .then(choice => {console.log(choice)
    if (choice.choice === "Engineer") {
        inquirer.prompt(EngineerQuestions)
        .then(dataEngineer => {
            const engineer1 = new Engineer(dataEngineer.name, dataEngineer.id, dataEngineer.email, dataEngineer.github);
            teamMembers.push(engineer1);
            menu();
        })
    } else
    if (choice.choice === "Intern") {
        inquirer.prompt(InternQuestions)
        .then(dataIntern => {
            const intern1 = new Intern(dataIntern.name, dataIntern.id, dataIntern.email, dataIntern.school)
            teamMembers.push(intern1);
            menu()
        })
    } else {
        var template = generateHTML(teamMembers);
        fs.writeFile("index.html", template, (err) =>
        err? console.log(err) : console.log("response written to file"));
    }
    return;
    })
}