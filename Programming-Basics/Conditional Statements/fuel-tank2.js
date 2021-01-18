function solve(fuel, lFuel, clubCard) {
    lFuel = Number(lFuel);
    let fuelPrice = 0;

    switch (fuel) {
        case "Gasoline":
            fuelPrice = 2.22;
            if (clubCard === "Yes") {
                fuelPrice -= 0.18;
            }
            break;
        case "Diesel":
            fuelPrice = 2.33;
            if (clubCard === "Yes") {
                fuelPrice -= 0.12;
            }
            break;
        case "Gas":
            fuelPrice = 0.93;
            if (clubCard === "Yes") {
                fuelPrice -= 0.08;
            }
            break;
    }
    let sum = lFuel * fuelPrice;

    if (lFuel >= 20 && lFuel <= 25) {
        sum *= 0.92;
    } else if (lFuel > 25) {
        sum *= 0.9;
    }
    console.log(`${sum.toFixed(2)} lv.`);
}
solve("Gasoline", "25", "No");