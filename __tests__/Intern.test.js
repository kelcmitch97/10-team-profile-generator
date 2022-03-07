const Intern = require('../lib/Intern');

test('creates interns school', () => {
    const intern = new Intern('name', 'id', 'email@gmail.com', 'Memorial University');

    expect(intern.school).toEqual(expect.any(String));
    console.table(intern);
});

// test('gets interns school', () => {
//     const intern = new Intern("Memorial University");

//     expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
// });

// test('overrides employees role to be intern ', () => {
//     const intern = new Intern('Kelcie', 7, 'kelcie@gmail.com');

//     expect(intern.getRole()).toEqual('Intern')
// });

