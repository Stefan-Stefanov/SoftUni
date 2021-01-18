function solve(fruit, size, num) {
    num = Number(num);
    let sum = 0;
    if (size === "big") {
        switch (fruit) {
            case "Watermelon":
                sum = (5 * 28.70) * num;
                break;
            case "Mango":
                sum = (5 * 19.60) * num;
                break;
            case "Pineapple":
                sum = (5 * 24.80) * num;
                break;
            case "Raspberry":
                sum = (5 * 15.20) * num;
                break;
        }
    } else {
        switch (fruit) {
            case "Watermelon":
                sum = (2 * 56) * num;
                break;
            case "Mango":
                sum = (2 * 36.66) * num;
                break;
            case "Pineapple":
                sum = (2 * 42.10) * num;
                break;
            case "Raspberry":
                sum = (2 * 20) * num;
                break;
        }
    }
    if (sum >= 400 && sum <= 1000) {
        sum *= 0.85;
    } else if (sum > 1000) {
        sum *= 0.50;
    }
    console.log(`${sum.toFixed(2)} lv.`)
}

solve("Watermelon", "big", "4");