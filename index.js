// Html page 
// const pageTemplate = require('./src/page-template');

// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Team members
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// Array of Team members
const teamArray = [];

// Prompt questions 
const addManager = () => {

    console.log(`
    =================
    Add a New Team
    ================= 
    `);

    if (!teamArray.manager) {
        teamArray.manager = [];
    }
    return inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is your Team Managers name?',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter your managers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the managers employee ID?',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter managers employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the managers email address?',
            validate: email => {
                const validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);

                if (validEmail) {
                    return true;
                } else {
                    console.log('Please enter managers email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'Please enter the managers office number?',
            validate: officenumberInput => {
                if (officenumberInput) {
                    return true;
                } else {
                    console.log('Please enter managers office number!');
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.manager.push(managerInput);
        console.log(teamArray);
    });
};
        

addManager();
