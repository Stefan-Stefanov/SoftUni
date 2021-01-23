function calcOrders(products, quantity) {
    let sum = 0;

    switch (products) {
        case "coffee":
            sum = quantity * 1.5;
            break;
        case "water":
            sum = quantity * 1;
            break;
        case "coke":
            sum = quantity * 1.4;
            break;
        case "snacks":
            sum = quantity * 2;
            break;
    }
    console.log(sum.toFixed(2));
}