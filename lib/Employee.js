// Employee parent class 
// Need the following properties: name, id, email, office number
// Need the following methods: getName(), getId(), getEmail(), getRole()
const inquirer = require('inquirer');

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        return `Employee's name is ${this.name}.`
    };

    getId() {
        return `Employee's id is ${this.id}.`
    };

    getEmail() {
        return `Employee's email address is ${this.email}.`
    };    

    getRole() {
        return 'Employee'
    };
};

module.exports = Employee;

