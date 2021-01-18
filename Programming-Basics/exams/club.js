function solve(input) {
    let target = Number(input[0]);
    let totalSum = 0;
    let i = 1;
    let command = input[i];

    while (command !== "Party!") {
        let cocktail = input[i++];
        let priceCocktail = cocktail.length;
        let numCocktails = Number(input[i]);
        let currentSum = priceCocktail * numCocktails;

        if (currentSum % 2 === 1) {
            currentSum *= 0.75;
        }
        
        totalSum += currentSum;

        if (totalSum >= target) {
            break;
        }
        command = input[++i];
    }
    if (command === "Party!") {
        if (totalSum < target) {
            console.log(`We need ${(target - totalSum).toFixed(2)} leva more.`);

        } else {
            console.log(`Target acquired.`);
        }
    } else {
        console.log(`Target acquired.`);
    }
    console.log(`Club income - ${totalSum.toFixed(2)} leva.`);
}
solve(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);