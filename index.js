const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "Enter the title of your project",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a description of your project",
            name: "description"
        },
        {
            type: "input",
            message: "Enter installation instructions for your project",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter usage information for your project",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter contribution guidelines for your project",
            name: "contribution"
        },
        {
            type: "input",
            message: "Enter test instructions for your project",
            name: "test"
        },
        {
            type: "list",
            message: "Choose the license that applies to your project",
            choices: ["MIT", "CC", "POP", new inquirer.Separator(), "No license"],
            name: "license"
        },
        {
            type: "input",
            message: "Enter your Github username",
            name: "username"
        },
        {
            type: "input",
            message: "Enter your email address",
            name: "email"
        }
    ]).then(response => {
        console.log(response);
    })

    

