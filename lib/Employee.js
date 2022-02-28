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
};
