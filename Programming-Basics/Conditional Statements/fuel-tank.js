function solve(fuel, lFuel) {
    lFuel = Number(lFuel);

    switch (fuel) {
        case "Diesel":
            fuel = "diesel";
            if (lFuel >= 25) {
                console.log(`You have enough ${fuel}.`);
            } else {
                console.log(`Fill your tank with ${fuel}!`);
            }
            break;
        case "Gas":
            fuel = "gas";
            if (lFuel >= 25) {
                console.log(`You have enough ${fuel}.`);
            } else {
                console.log(`Fill your tank with ${fuel}!`);
            }
            break;
        case "Gasoline":
            fuel = "gasoline";
            if (lFuel >= 25) {
                console.log(`You have enough ${fuel}.`);
            } else {
                console.log(`Fill your tank with ${fuel}!`);
            }
            break;
        default:
            console.log("Invalid fuel!");
            break;
    }
}
solve("Diesel", "10");