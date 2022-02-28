const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Employee = require('../lib/Employee');

test('creates an employee class', () => {
    const employee = new Employee('Tim');

    expect(employee.name).toBe('Tim');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).to
})