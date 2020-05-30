var inquirer = require("inquirer");
var fs = require('fs');
var generateMarkdown = require("./utils/generateMarkdown");

const questions = [
      { 
        type: "input",
        name: "name",
        message: "What is your Github username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "url",
        message: "The URL to your project?"
      },
      {
        type: "input",
        name: "project",
        message: "What is your Project's Name?"
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
      },
      {
        type: "checkbox",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
          "MIT", 
          "APACHE 2.0", 
          "GPL 3.0", 
          "BSD 3",
          "None"
        ]
      },
      {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?"
        // (npm i)
      },
      {
        type: "input",
        name: "runtest",
        message: "What command should be run to run tests?"
        // (npm test)
      },
      {
        type: "input",
        name: "needtoknowuse",
        message: "What does the user need to know about using the repo?"
      },
      {
        type: "input",
        name: "needtoknowcontribute",
        message: "What does the user need to know about contributing to the repo?"
      }
];

function writeToFile(fileName, data) {

  let readMe = generateMarkdown(data);
  fs.writeFile(fileName, readMe, err => {
     if (err) {
       throw err;
     }
 });
}

function init() {
 inquirer.prompt(questions)
 .then(data => {
     writeToFile("README.md", data);
 })
 .catch(error => {
     throw error; 
 });
}

init();
