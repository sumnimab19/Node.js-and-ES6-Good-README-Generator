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
        name: "title",
        message: "What is your Project Title?"
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
      },
      {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?", 
        default: "npm i"
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to test?",
        default: "npm test"
      },
      {
        type: "input",
        name: "usage",
        message: "What is the usage?"
      },
      {
        type: "input",
        name: "credit",
        message: "Who is/are the collaborators, if any?"
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
        name: "needtoknowcontribute",
        message: "What does the user need to know about contributing to the repo?"
      },
      {
        type: "input",
        name: "question",
        message: "How to reach out to the Author should you have any questions?"
      },
];

function writeToFile(fileName, data) {

  const readMe = generateMarkdown(data);
  fs.writeFile(fileName, readMe, err => {
     if (err) {
       throw err;
     }
     console.log("Success!");
 });
}

function init() {
 inquirer.prompt(questions)
 .then(data => {
     writeToFile("./utils/README.md", data);
 })
 .catch(error => {
     throw error; 
 });
}

init();
