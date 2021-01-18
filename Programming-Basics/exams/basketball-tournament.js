function solve(input) {
    let i = 0;
    let command = input[i];
    let coutnWin = 0;
    let countLose = 0;
    let totalgames = 0;
    while (command !== "End of tournaments") {
        let tournamentName = input[i++];
        let numGames = Number(input[i++]);
        totalgames += numGames;
        
        for (let g = 1; g <= numGames; g++) {
            let we = Number(input[i++]);
            let they = Number(input[i++]);

            if (we > they) {
                coutnWin++
                console.log(`Game ${g} of tournament ${tournamentName}: win with ${we - they} points.`)
            } else {
                countLose++;
                console.log(`Game ${g} of tournament ${tournamentName}: lost with ${they - we} points.`)
            }
        }

        command = input[i];
        if (command === "End of tournaments") {

            console.log(`${((coutnWin / totalgames) * 100).toFixed(2)}% matches win`);
            console.log(`${((countLose / totalgames) * 100).toFixed(2)}% matches lost`);

        }
    }
}
solve([
    'Dunkers', '2',
    '75', '65',
    '56', '73',
    'Fire Girls', '3',
    '67', '34',
    '83', '98',
    '66', '45',
    'End of tournaments', ''
])