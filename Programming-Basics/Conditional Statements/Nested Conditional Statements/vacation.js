function solve(budget, season) {
    budget = Number(budget);
    let cuntry = "";
    let placeToSleep = "";
    let sum = 0;

    if (budget <= 1000) {
        placeToSleep = "Camp"
        if (season === "Summer") {
            cuntry = "Alaska";
            sum = budget * 0.65;
        } else if (season === "Winter") {
            cuntry = "Morocco";
            sum = budget * 0.45;
        }
    } else if (budget <= 3000) {
        placeToSleep = "Hut"
        if (season === "Summer") {
            cuntry = "Alaska";
            sum = budget * 0.8;
        } else if (season === "Winter") {
            cuntry = "Morocco";
            sum = budget * 0.6;
        }
    } else {
        placeToSleep = "Hotel"
        sum = budget * 0.9;
        if (season === "Summer") {
            cuntry = "Alaska";
        } else if (season === "Winter") {
            cuntry = "Morocco";
        }
    }
    console.log(`${cuntry} - ${placeToSleep} - ${sum.toFixed(2)}`)
}
solve("800", "Summer");