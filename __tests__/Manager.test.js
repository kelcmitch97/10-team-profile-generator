const Manager = require('../lib/Manager');

test('creates managers office number', () => {
    const manager = new Manager(298374);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets employees role', () => {
    const manager = new Manager('Sally', 10, 'sally@gmail.com');

    expect(manager.getRole()).toEqual('Manager')
});

