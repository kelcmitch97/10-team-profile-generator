const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Tim', 9 , 'tim@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    console.table(employee);
});

// test('gets employees name', () => {
//     const employee = new Employee('Tim', 9 , 'tim@gmail.com');

//     expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()))
// });

// test('gets employees id', () => {
//     const employee = new Employee('Tim', 9 , 'tim@gmail.com');

//     expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()))
// });

// test('gets employees email', () => {
//     const employee = new Employee('Tim', 9 , 'tim@gmail.com');

//     expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
// });

// test('gets employees role', () => {
//     const employee = new Employee('Tim', 9 , 'tim@gmail.com');

//     expect(employee.getRole()).toEqual('Employee')
// });



