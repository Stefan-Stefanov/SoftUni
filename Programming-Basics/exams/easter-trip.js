function solve(destination, period, nights) {
    nights = Number(nights);
    let nightPrice = 0;

    if (destination === "Germany") {
        switch (period) {
            case "24-27":
                nightPrice = 37;
                break;
            case "21-23":
                nightPrice = 32;
                break;
            case "28-31":
                nightPrice = 43;
                break;
        }
    } else if (destination === "Italy") {
        switch (period) {
            case "24-27":
                nightPrice = 32;
                break;
            case "21-23":
                nightPrice = 28;
                break;
            case "28-31":
                nightPrice = 39;
                break;
        }
    } else if (destination === "France") {
        switch (period) {
            case "24-27":
                nightPrice = 35;
                break;
            case "21-23":
                nightPrice = 30;
                break;
            case "28-31":
                nightPrice = 40;
                break;
        }
    }
    let totalPrice = nights * nightPrice;
    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`)
}
solve("Germany", "24-27", "5")
