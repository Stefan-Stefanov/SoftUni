function solve(drink, sugar, numDrinks) {
    numDrinks = Number(numDrinks);
    let totalSum = 0;
    if (drink === "Espresso") {
        switch (sugar) {
            case "Without":
                totalSum = numDrinks * 0.90;
                totalSum *= 0.65
                break;
            case "Normal":
                totalSum = numDrinks;
                break;
            case "Extra":
                totalSum = numDrinks * 1.2;
                break;
        }
    } else if (drink === "Cappuccino") {
        switch (sugar) {
            case "Without":
                totalSum = numDrinks;
                totalSum *= 0.65
                break;
            case "Normal":
                totalSum = numDrinks * 1.2;
                break;
            case "Extra":
                totalSum = numDrinks * 1.6;
                break;
        }
    } else if (drink === "Tea") {
        switch (sugar) {
            case "Without":
                totalSum = numDrinks * 0.5;
                totalSum *= 0.65
                break;
            case "Normal":
                totalSum = numDrinks * 0.6;
                break;
            case "Extra":
                totalSum = numDrinks * 0.7;
                break;
        }
    }
    if (drink === "Espresso" && numDrinks >= 5) {
        totalSum = totalSum * 0.75;
    }
    if (totalSum > 15) {
        totalSum *= 0.80;
    }
    console.log(`You bought ${numDrinks} cups of ${drink} for ${totalSum.toFixed(2)} lv.`)
}
solve("Cappuccino", "Extra", "10")