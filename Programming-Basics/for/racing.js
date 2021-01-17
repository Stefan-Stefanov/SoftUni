function solve(fuel, consum, laps) {
    fuel = Number(fuel);
    consum = Number(consum);
    laps = Number(laps);
    let round = 0;
    for (let loss = 1; loss <= laps; loss++) {
        fuel -= consum
        if (loss == 1) {
            consum -= 0.1;
        }
        if (fuel <= 0) {
            break;
        }
        round++
    }
    if (fuel <=0) {
        console.log(`You are out of fuel in round ${round}!`)
    } else {
        console.log("Congrats! You won the race!")
    }
}
solve("70", "6.5", "10");