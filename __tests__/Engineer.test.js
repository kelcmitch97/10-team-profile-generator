const Engineer = require('../lib/Engineer');

test('create github username', () => {
    const engineer = new Engineer('name', 'id', 'email@gmail.com', 'Dave123');

    expect(engineer.github).toEqual(expect.any(String));
    console.table(engineer);
});

// test('creates link to github profile', () => {
//     const engineer = new Engineer('dave123');
//     const githubLink = "github.com/dave123"

//     expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString(githubLink)));
// });

// test('overrides employees role to be engineer ', () => {
//     const engineer = new Engineer('Dave', 8, 'dave@gmail.com');

//     expect(engineer.getRole()).toEqual('Engineer')
// });