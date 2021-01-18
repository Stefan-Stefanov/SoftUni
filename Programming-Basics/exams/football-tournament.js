function solve(input) {
    let team = input[0];
    let totalGames = Number(input[1]);
    let totalScore = 0;
    let countW = 0;
    let countD = 0;
    let countL = 0;
    let i = 2;
    let notPlayed = true;
    for (let g = 1; g <= totalGames; g++) {
        notPlayed = false;
        let game = input[i++];
        switch (game) {
            case "W":
                countW++;
                totalScore += 3;
                break;
            case "D":
                countD++;
                totalScore += 1;
                break;
            case "L":
                countL++;
                break;
        }
    }
    let winRate = (countW / totalGames) * 100;
    if (notPlayed) {
        console.log(`${team} hasn't played any games during this season.`);
    } else {
        console.log(`${team} has won ${totalScore} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${countW}`);
        console.log(`## D: ${countD}`);
        console.log(`## L: ${countL}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }
}
solve([
    'Liverpool', '10',
    'W', 'D',
    'D', 'W',
    'L', 'W',
    'D', 'D',
    'W', 'W'
]);