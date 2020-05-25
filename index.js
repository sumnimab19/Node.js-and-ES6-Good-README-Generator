var inquirer = require("inquirer");
var fs = require('fs');

// const questions = [

// ];

// function writeToFile(fileName, data) {

//   var filename = data.name.toLowerCase().split(' ').join('') + ".json";

//   fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

//     if (err) {
//       return console.log(err);
//     }

//     console.log("Success!");

//   });
// }

function init() {
  

inquirer.prompt([
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

]).then(function(data) {
  writeToFile("README.txt",data);
  
});

}

init();


