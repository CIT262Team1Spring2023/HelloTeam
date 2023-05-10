const teamNames = [];
teamNames.push("Joshua");
teamNames.push("Brent");
teamNames.push("Austin");
teamNames.push("JJ");

function helloTeam(teamNames){
    for (i in teamNames){
        console.log("Hello "+teamNames[i]);
    };
};
helloTeam(teamNames);