// Generate mananger 
const managerCard = function(manager) {
    return `
    <div class="card">
        <div class="card-header">
            ${manager.name}
            <i class="uil uil-coffee">Manager</i>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officenumber}</li>
            </ul>
        </div>
    </div>
    `
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
        <link rel="stylesheet" href="./dist/style.css">
    </head>

    <body>
        <header class="hero min-100-vh" id="team-header">
            <h1>My Team</h1>
        <header>


    </body>
    
    `
};

