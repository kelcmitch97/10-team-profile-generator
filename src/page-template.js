// Generate mananger 
const managerCard = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${manager.name}</h2>
                <i class="uil uil-coffee"></i> Manager
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${manager.officenumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

// Generate engineer
const engineerCard = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${engineer.name}</h2>
                <i class="uil uil-constructor"></i> Engineer
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

// Generate Intern
const internCard = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${intern.name}</h2>
                <i class="uil uil-graduation-cap"></i> Intern
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};

generateTeam = (fileContent) => {

    let teamProfileArray = [];

    for (let i = 0; i < fileContent.length; i++) {
        const employee = fileContent[i];
        const role = employee.getRole();

        // Manager
        if (role === 'Manager') {
            const generateManager = managerCard(employee);

            teamProfileArray.push(generateManager);
        }

         // Engineer
         if (role === 'Engineer') {
            const generateEngineer = engineerCard(employee);

            teamProfileArray.push(generateEngineer);
        }

         // Intern
         if (role === 'Intern') {
            const generateIntern = internCard(employee);

            teamProfileArray.push(generateIntern);
        }
    }

        // join team members
        const employeeCards = teamProfileArray.join('');

        // return generated team page
        const generateTeam = generateTeamProfile(employeeCards);
        return generateTeam;
   
};

const generateTeamProfile = function(employeeCards) {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="../style.css">
    </head>

    <body>
        <header>
            <nav class="navbar team-header">
                <span class="navbar-brand mb-0 h1 text-center"><i class="uil uil-users-alt">My Team</i></span>
            </nav>
        <header>
        
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                ${employeeCards}
                </div>
            </div>
        </main>

        
    </body>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
    `;
};

module.exports = generateTeam;

