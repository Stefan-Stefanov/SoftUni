function solve(budget, season) {
    budget = Number(budget);
    let carClass = "";
    let car = "";
    let sum = 0;

    if (budget <= 100) {
        carClass = "Economy class";
        if (season === "Summer") {
            car = "Cabrio";
            sum = budget * 0.35;
        } else {
            car = "Jeep";
            sum = budget * 0.65;
        }
    } else if (budget <= 500) {
        carClass = "Compact class";
        if (season === "Summer") {
            car = "Cabrio";
            sum = budget * 0.45;
        } else {
            car = "Jeep";
            sum = budget * 0.8;
        }
    } else {
        carClass = "Luxury class";
        car = "Jeep"
        sum = budget * 0.9;
    }
    console.log(`${carClass}`);
    console.log(`${car} - ${sum.toFixed(2)}`);
}