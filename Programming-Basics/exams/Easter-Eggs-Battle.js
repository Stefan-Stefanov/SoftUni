function solve(input) {
    let eggsPlayerOne = Number(input[0]);
    let eggsPlayerTwo = Number(input[1]);
    let i = 2;
    let win = false;
    let winner = input[i++];

    while (winner !== "End of battle") {
        switch (winner) {
            case "one":
                eggsPlayerTwo--;
                break;
            case "two":
                eggsPlayerOne--;
                break;
        }
        if (eggsPlayerOne === 0 || eggsPlayerTwo === 0) {
            win = true;
            break;
        }
        winner = input[i++];
    }
    if (win) {
        if (eggsPlayerOne === 0) {
            console.log(`Player one is out of eggs. Player two has ${eggsPlayerTwo} eggs left.`);
        } else {
            console.log(`Player two is out of eggs. Player one has ${eggsPlayerOne} eggs left.`);
        }
    } else {
        console.log(`Player one has ${eggsPlayerOne} eggs left.`);
        console.log(`Player two has ${eggsPlayerTwo} eggs left.`);
    }
}
solve(["5", "4", "one", "two", "one", "two", "two", "End of battle"])
