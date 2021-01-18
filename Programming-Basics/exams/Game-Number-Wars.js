function solve(input) {
    let numberWar = false;
    let scorePlayerOne = 0;
    let scorePlayerTwo = 0;
    let namePlayerOne = input[0];
    let namePlayerTwo = input[1];
    let i = 2;
    let command = input[i];

    while (command !== "End of game") {

        let playerOneCard = Number(input[i++]);
        let playerTwoCard = Number(input[i++]);
        if (playerOneCard > playerTwoCard) {
            scorePlayerOne += playerOneCard - playerTwoCard;
        } else if (playerTwoCard > playerOneCard) {
            scorePlayerTwo += playerTwoCard - playerOneCard;
        } else if (playerOneCard === playerTwoCard) {
            numberWar = true;
            break;
        }

        command = input[i];
    }
    if (numberWar) {
        console.log("Number wars!");
        playerOneCard = Number(input[i++]);
        playerTwoCard = Number(input[i++]);
        if (playerOneCard > playerTwoCard) {
            console.log(`${namePlayerOne} is winner with ${scorePlayerOne} points`)
        } else if (playerTwoCard > playerOneCard) {
            console.log(`${namePlayerTwo} is winner with ${scorePlayerTwo} points`)
        }
    } else {
        console.log(`${namePlayerOne} has ${scorePlayerOne} points`);
        console.log(`${namePlayerTwo} has ${scorePlayerTwo} points`);
    }
}
solve(["Aleks", "Georgi", "5", "5", "2", "4", "3", "4", "4", "5", "2"])