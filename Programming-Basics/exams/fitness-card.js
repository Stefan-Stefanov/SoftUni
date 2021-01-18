function solve(totalSum, sex, age, sport) {
    totalSum = Number(totalSum);
    age = Number(age);
    let price = 0;
    if (sex === "m") {
        switch (sport) {
            case "Gym":
                price = 42;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
            case "Boxing":
                price = 41;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
            case "Yoga":
                price = 45;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
            case "Zumba":
                price = 34;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
            case "Dances":
                price = 51;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
            case "Pilates":
                price = 39;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
        }
    } else {
        switch (sport) {
            case "Gym":
                price = 35;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
            case "Boxing":
                price = 37;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
            case "Yoga":
                price = 42;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
            case "Zumba":
                price = 31;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
            case "Dances":
                price = 53;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
            case "Pilates":
                price = 37;
                if (age <= 19) {
                    price *= 0.80;
                }
                break;
        }
    }
    if (totalSum < price) {
        console.log(`You don't have enough money! You need $${(price - totalSum ).toFixed(2)} more.`)
    } else {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    }
}
solve("0", "f", "20", "Yoga")