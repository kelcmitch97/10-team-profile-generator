const Manager = require('../lib/Manager');

test('creates managers office number', () => {
    const manager = new Manager(298374);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('overrides employees role to be manager ', () => {
    const manager = new Manager('Sally', 10, 'sally@gmail.com');

    expect(manager.getRole()).toEqual('Manager')
});

