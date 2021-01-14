function solve (budget, season) {
    budget = Number(budget);

    let destination = "";
    let place = "";
if (budget <= 100) {
    destination = "Bulgaria";

    if (season === "summer") {
        budget = budget * 0.3;
        place = "Camp";
        
    } else if (season === "winter") {
        budget = budget * 0.7;
        place = "Hotel";
    }
} else if (budget <= 1000) {
    destination = "Balkans"
    if (season === "summer") {
        budget = budget * 0.4;
        place = "Camp";
        
    } else if (season === "winter") {
        budget = budget * 0.8;
        place = "Hotel";
    }
} else {
    destination = "Europe";
    place = "Hotel";
    budget = budget * 0.90;
}
console.log(`Somewhere in ${destination}`);
console.log(`${place} - ${(budget).toFixed(2)}`);

}
solve ("312", "summer");