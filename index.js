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
        fs.appendFile("README.md",
        `# ${response.title} 
![License Badge](https://img.shields.io/badge/license-${response.license}-<green>)        
## Description
${response.description}
        
## Table of Content
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
\`\`\`
${response.installation}
\`\`\`

## Usage
\`\`\`
${response.usage}
\`\`\`

## License
\`\`\`
${response.license}
\`\`\`

## Contributing
\`\`\`
${response.contribution}
\`\`\`

## Tests
\`\`\`
${response.test}
\`\`\`

## Questions

Github: [${response.username}](http://githumb.com/${response.username})
Submit Questions to [${response.email}](${response.email})`
        , "utf8", function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Your README has been created!");
            };
        });
    });

    

