// const teamType = ['home', 'away'];
// const teamDetails = ["teamName","colors", "players"];
// const playerDetails = ["number", "shoe", "points", "rebounds", "assists"
//     , "steals", "blocks", "slamDunks"];


   

function gameObject(){
    return {
        'home': {
            "teamName": 'Brooklyn Nets', 
            "colors":['Black', 'White'], 
            "players": {
                'Alan Anderson': {
                    "number": 0,
                    "shoe": 16,
                    "points": 22, 
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1,
                } ,
                'Reggie Evans': {
                    "number": 30,
                    "shoe": 14,
                    "points": 12, 
                    "rebounds": 12,
                    "assists":12 ,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7,
                } ,
                'Brook Lopez': {
                    "number": 1,
                    "shoe": 19,
                    "points": 26, 
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5,
                } ,
                'Mason Plumlee': {
                    "number": 1,
                    "shoe": 19,
                    "points": 26, 
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 9,
                } ,
                'Jason Terry': {
                    "number": 31,
                    "shoe": 15,
                    "points": 19, 
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1,
                } 
            }, 
        },
        'away': {
            "teamName":'Charlotte Hornets', 
            "colors": ['Turquoise', 'Purple'] , 
            "players": {
                'Jeff Adrien': {
                    "number": 4,
                    "shoe": 18,
                    "points": 10, 
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2,
                } ,
                'Bismak Biyombo': {
                    "number": 0,
                    "shoe": 16,
                    "points": 12, 
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10,
                } ,
                'DeSagna Diop': {
                    "number": 2,
                    "shoe": 14,
                    "points": 24, 
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5,
                } ,
                'Ben Gordon': {
                    "number": 8,
                    "shoe": 15,
                    "points": 33, 
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0,
                } ,
                'Brendan Haywood': {
                    "number": 33,
                    "shoe": 15,
                    "points": 6, 
                    "rebounds":12 ,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12,
                } 
            }, 
        }
    }
};

// Build a function, numPointsScored that takes in an argument of a player's name 
// and returns the number of points scored for that player.
// Think about where in the object you will find a player's points. 
// How can you iterate down into that level? Think about the return value of your function.

function numPointsScored(playerName){
    const game = gameObject();
    // debugger
    for (const gameKey in game) { // iterate thru gamekeys (home, away)
        const playersObj = game[gameKey].players
        // debugger
        for (const player in playersObj) {
            // debugger
            if (player === playerName) {
                // debugger
                const playerObj = playersObj[player];
                const finalPoints = playerObj.points;
                //console.log(finalPoints);
                return finalPoints;
            }
        }
    }
};

console.log(numPointsScored('Jeff Adrien'));

// Build a function, shoeSize, that takes in an argument of a player's name 
// and returns the shoe size for that player.
// Think about how you will find the shoe size of the correct player. 
// How can you check and see if a player's name matches the name that 
// has been passed into the function as an argument?

// function shoeSize (playerName) {
//     const gameObj = gameObject();
//     for (gamekey in gameObj) {
//         const playersObj = gameObj[gamekey].players
//         for (player in playersObj){
//             // debugger
//             if (player === playerName) {
//                 // debugger
//                 return playersObj[player].shoe;
//             }
            
//         }
//     }

// }

function homeTeam() {
    const game = gameObject();
    return game.home;
}

function awayTeam() {
    const game = gameObject();
    return game.away;
}

function playerArray() {
    const playersObj = Object.assign({}, homeTeam().players, awayTeam().players);
    const playersArray = Object.entries(playersObj);
    return playersArray;
}

function shoeSize (playerInput) {
    const player = playerArray().find((player) => player[0] === playerInput)
    return player[1].shoe
};

console.log(shoeSize('Ben Gordon'));

// Build a function, teamColors, that takes in an argument of the team name 
// and returns an array of that teams colors.

function teamColors(teamNameParam) {
    const teamArray = [homeTeam(), awayTeam()];
    const correctTeamObj = teamArray.find((team) => team.teamName === teamNameParam);
    return correctTeamObj.colors;
    
}

console.log(teamColors('Charlotte Hornets'));


// Build a function, teamNames, that operates on the game object to return an array of the team names.

function teamNames() {
    return [homeTeam().teamName, awayTeam().teamName];
}

console.log(teamNames());


// Build a function, playerNumbers, that takes in an argument of a team name and 
// returns an array of the jersey number's for that team.

function playerNumbers(teamNameParameter) {
    const teamsArray = [homeTeam(), awayTeam()];
    const matchingTeamObj = teamsArray.find((team) => team.teamName === teamNameParameter);
    const playerArray = Object.values(matchingTeamObj.players);
    const playerNumbers = playerArray.map((player) => player.number);
    return playerNumbers;
}

// function playerNumbers(teamNameParameter) {
//     const teamsArray = [homeTeam(), awayTeam()];
//     const matchingTeamObj = teamsArray.find((team) => team.teamName === teamNameParameter);
//     const playerArray = Object.values(matchingTeamObj.players);
//     const playerNumbers = playerArray.reduce((acc, player) => {
//         acc.push(player.number);
//         return acc;
//     }, []);
//     return playerNumbers;
// }


console.log(playerNumbers('Charlotte Hornets'));

// Build a function, playerStats, that takes in an argument of a player's name
//  and returns a object of that player's stats. 

function playerStats(playerName) {
    const player = playerArray().find((player) => player[0] === playerName);
    return player[1];
}

console.log(playerStats('Brendan Haywood'));




// Build a function, bigShoeRebounds, that will 
// return the number of rebounds associated with the player that has the largest shoe size.

function bigShoeRebounds() {

    // const bigShoePlayer = '';

    // playerArray().reduce((acc, player) => {
    //     if(player[1].shoe > acc) {
    //         acc = player[1].shoe;
    //         bigShoePlayer = player[0];
    //     }
    //     return acc;
    // }, 0)

    const biggestShoePlayer = playerArray().reduce((currBigShoePlayer, player) => {
        if (player[1].shoe > currBigShoePlayer[1].shoe) {
            currBigShoePlayer = player
        }
        return currBigShoePlayer
    })


    /// ------ 

    // const playerArray = playerArray();
    // let currBigShoePlayer = playerArray[0];

    // playerArray.slice(1).forEach((player) => {
    //     if (player[1].shoe > currBigShoePlayer[1].shoe) {
    //         currBigShoePlayer = player
    //     }
    // })



    // return biggestShoePlayer[1].rebounds

}



// Bonus
// Which player has the most points? Call the function mostPointsScored.
// Which team has the most points? Call the function winningTeam.
// Which player has the longest name? Call the function playerWithLongestName.
// Super Bonus
// Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.



// Bryan code

// function getPlayersDictionary(gameObject) {
//     // parse a game object and return an object of players where key is the name and value is the playerObject
//     return { ...gameObject.away.players, ...gameObject.home.players }
// }

// function getPlayerShoeSize(player) {
//     const player = playersDict[playerName]
//     return player?.shoeSize;
// }

// function getPlayer(playerName, playersDict) {
//     const player = playersDict[playerName]
//     return player
// }

// function getShoeSizeFromPlayersDict(playerName) {
//     // get players
//     const playersDict = getPlayersDictionary()
//     const player = getPlayer(playerName, playersDict)
//     const shoeSize = getPlayerShoeSize(player)
//     return shoeSize
// }






















