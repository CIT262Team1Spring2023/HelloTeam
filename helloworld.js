const teamNames = [];
teamNames.push("Joshua");
teamNames.push("Brent");
teamNames.push("Austin");
teamNames.push("JJ");

function helloTeam(teamNames){
        console.log("Hello "+teamNames);
};

teamNames.forEach(helloTeam);