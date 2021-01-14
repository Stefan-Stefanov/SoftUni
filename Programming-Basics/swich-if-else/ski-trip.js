function solve(days, room, grade) {
    days = Number(days);

    let price = 0;
    let nights = days - 1;
    switch (room) {
        case "room for one person":
            price = 18 * nights;
            break;
        case "apartment":
            price = 25 * nights;
            if (days < 10) {
                price = price * 0.7;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.65;
            } else {
                price = price / 2;
            }
            break;
        case "president apartment":
            price = 35 * nights;
            if (days < 10) {
                price = price * 0.9;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.85;
            } else {
                price = price * 0.80;
            }
            break;
    }
    if (grade === "positive") {
        price = price * 1.25;
    } else {
        price = price * 0.90;
    }
    console.log(price.toFixed(2));
}
solve("14", "apartment", "positive")