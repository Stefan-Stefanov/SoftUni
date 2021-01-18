function solve(first, second, third) {
     
    let wins = 0;
    let loses = 0;
    let draws = 0;
    if (first[0] > first[2]) {
        wins++;
    } else if (first[0] < first[2]) {
        loses++;
    } else {
        draws++;
    }
    if (second[0] > second[2]) {
        wins++;
    } else if (second[0] < second[2]) {
        loses++;
    } else {
        draws++;
    }
    if (third[0] > third[2]) {
        wins++;
    } else if (third[0] < third[2]) {
        loses++;
    } else {
        draws++;
    }
    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${draws}`);
}
solve("4:2", "0:3", "1:0")