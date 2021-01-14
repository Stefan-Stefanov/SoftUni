function solve(budget, season, fisherman) {
    budget = Number(budget);
    fisherman = Number(fisherman);

    let boatPrice = 0;
    let discount = 0;

    if (season == "Spring") {
        boatPrice = 3000;
    } else if (season == "Summer" || season == "Autumn") {
        boatPrice = 4200;
    } else {
        boatPrice = 2600;
    }


    if (fisherman <= 6) {
        discount = boatPrice * 0.90;

    } else if (fisherman >= 7 && fisherman <= 11) {
        discount = boatPrice * 0.85;

    } else {
        discount = boatPrice * 0.75;

    }

    if (fisherman % 2 == 0 && season != "Autumn") {
        discount *= 0.95;
    }



    if (budget >= discount) {
        console.log(`Yes! You have ${Math.abs(budget - discount).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${Math.abs(discount - budget).toFixed(2)} leva.`)
    }
}
solve("2000", "Winter", "13");
