// Html page 
const pageTemplate = require('./src/page-template');

// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Team members
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
