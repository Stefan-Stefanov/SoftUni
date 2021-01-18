function solve(input) {
    let tournamets = Number(input[0]);
    let startingPoints = Number(input[1]);
    let poits = 0;
    let j = 2;
    let couterWin = 0;
    for (let i = 0; i <= tournamets; i++) {
        let score = input[j++];

        switch (score) {
            case "W":
                poits += 2000;
                couterWin++;
                break;
            case "F":
                poits += 1200;
                break;
            case "SF":
                poits += 720;
                break;
        }
    }
    let totalpoits = startingPoints + poits;
    let avgPoits = Math.floor(poits / tournamets);
    let percentWin = (couterWin / tournamets) * 100;

    console.log(`Final points: ${totalpoits}`);
    console.log(`Average points: ${avgPoits}`);
    console.log(`${percentWin.toFixed(2)}%`);

}
solve(['5', '1400', 'F',
    'SF', 'W', 'W',
    'SF',])