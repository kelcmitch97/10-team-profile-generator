// Html page 
const pageTemplate = require('./src/page-template');

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

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your Team Managers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the managers employee ID?',
                validate: id => {
                    
                    const validId = /^[0-9.-]*$/.test(id);
                    
                    if (validId) {
                        return true;
                    } else {
                        console.log(' Please enter managers employee ID!');
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
                        console.log(' Please enter managers email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officenumber',
                message: 'Please enter the managers office number?',
            }
        ])
        .then(managerInput => {
            const { name, id, email, officenumber} = managerInput;
            const manager = new Manager(name, id, email, officenumber);

            teamArray.push(manager);
            console.log(manager);
        });
};

const addEmployee = () => {

    console.log(`
    =================
    Add a New Team Member
    ================= 
    `);

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Please choose your employers role',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your Employers name?',
                validate: employeeInput => {
                    if (employeeInput) {
                        return true;
                    } else {
                        console.log(' Please enter your employers name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the employees ID?',
                validate: id => {
                    
                    const validId = /^[0-9.-]*$/.test(id);

                    if (validId) {
                        return true;
                    } else {
                        console.log(' Please enter employees ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the employee email address?',
                validate: email => {
                    const validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);

                    if (validEmail) {
                        return true;
                    } else {
                        console.log(' Please enter employees email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter the Engineers github username?',
                when: (input) => input.role === "Engineer",
                validate: githubInput => {

                    if (githubInput) {
                        return true;
                    } else {
                        console.log(' Please enter your employees github username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the Interns school?',
                when: (input) => input.role === "Intern",
                validate: schoolInput => {

                    if (schoolInput) {
                        return true;
                    } else {
                        console.log(' Please enter your employess school!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee? If not, type "No" to finish building your team!',
                default: false
            }
        ])
        .then(employeeInput => {

            let { name, id, email, role, github, school, confirmAddEmployee } = employeeInput;
            let employee;

            if (role === 'Engineer') {

                employee = new Engineer(name, id, email, github);
                console.log(employee);

            } else if (role === 'Intern') {

                employee = new Intern(name, id, email, school);
                console.log(employee);
            }

            teamArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                console.table(teamArray);
                return teamArray;
                
            }
        });
}

// Write file for HTML page 
const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your Team Profile has now been created! Open the index.html file to see your team page.")
        }
    })
};

addManager()
.then(addEmployee)
.then(teamArray => {
    return pageTemplate(teamArray);
})
.then(generateHTML => {
    return writeFile(generateHTML);
})
.catch(err => {
    console.log(err);
});
