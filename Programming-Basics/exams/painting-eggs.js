function solve(size, colore, batch) {
    batch = Number(batch);
    let eggPrice = 0;

    if (size === "Large") {
        switch (colore) {
            case "Red":
                eggPrice = 16;
            break;
            case "Green":
                eggPrice = 12;
                break;
            case "Yellow":
                eggPrice = 9;
                    break;
        }
    } else if (size === "Medium") {
        switch (colore) {
            case "Red":
                eggPrice = 13;
            break;
            case "Green":
                eggPrice = 9;
                break;
            case "Yellow":
                eggPrice = 7;
                    break;
        }
    } else if (size === "Small") {
        switch (colore) {
            case "Red":
                eggPrice = 9;
            break;
            case "Green":
                eggPrice = 8;
                break;
            case "Yellow":
                eggPrice = 5;
                    break;
        }
    }
    let income = batch * eggPrice;
    let costs = income * 0.35;
    let totalIncome = income - costs;
    console.log(`${totalIncome.toFixed(2)} leva.`)
}
solve("Large", "Red", "7")