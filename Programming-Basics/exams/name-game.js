function solve(input) {
    let i = 0;
    let command = input[i];
    let maxScore = 0;
    let winer = "";
    while (command !== "Stop") {
        let player = input[i++];
        let playerScore = 0;
        for (let j = 0; j < player.length; j++) {
            let digit = player.charCodeAt(j);
            let bingoNumber = Number(input[i++]);
            if (digit === bingoNumber) {
                playerScore += 10;
            } else {
                playerScore += 2;
            }
        }
        if (playerScore >= maxScore) {
            maxScore = playerScore;
            winer = player;
        }
        command = input[i];
    }
    console.log(`The winner is ${winer} with ${maxScore} points!`);
}
solve([
    'Ivan', '73', '20',
    '98', '110', 'Ivo',
    '80', '65', '87',
    'Stop'
]);