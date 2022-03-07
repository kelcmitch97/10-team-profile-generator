const Manager = require('../lib/Manager');

test('creates managers office number', () => {
    const manager = new Manager('name', 'id', 'email@gmail.com', 123134);

    expect(manager.officenumber).toEqual(expect.any(Number));
});

// test('overrides employees role to be manager ', () => {
//     const manager = new Manager('Sally', 10, 'sally@gmail.com');

//     expect(manager.getRole()).toEqual('Manager')
// });

