const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');
const writeFile = require('./utils/generate-site.js');
const Employee = require('./lib/Employee');

// Call Employee class to run 
// From there, use the getRole() method to ask what role this is
// Whatever role is input, then call that class 

new Employee().initializeApp();