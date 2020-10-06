const fs = require("fs");
const inquirer = require("inquirer");
let licenseNotes;

inquirer
    .prompt([
        {
            type: "input",
            message: "Who is the owner/copyright holder of this project?",
            name: "owner"
        },
        {
            type: "input",
            message: "What year was this project first created?",
            name: "year"
        },
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
            choices: ["MIT", "CC", new inquirer.Separator(), "No license"],
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
        if (response.license === "MIT") {
            licenseNotes = `MIT License

Copyright (c) ${response.year} ${response.owner}
                
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:
                
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
        } else if (response.license === "CC") {
            licenseNotes = `This project is licensed under the Creative Commons Attribution 4.0 license.

For more information about the license [Click Here](https://creativecommons.org/licenses/by/4.0/legalcode)

Copyright (c) ${response.year} ${response.owner}`
        } else {
            licenseNotes = `This project is copyrighted and cannot be used or altered without express permission from the copyright holder.
            
Copyright (c) ${response.year} ${response.owner}`
        }
        fs.appendFile("GOODREADME.md",
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
${licenseNotes}

## Contributing
${response.contribution}

## Tests
${response.test}

## Questions
* Github: [${response.username}](http://githumb.com/${response.username})
* Submit Questions to [${response.email}](${response.email})`
            , "utf8", function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Your README has been created!");
                };
            });
    });

