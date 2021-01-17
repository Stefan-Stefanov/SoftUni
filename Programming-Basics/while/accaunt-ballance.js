function solve(input) {
    let sum = 0;
    let i = 0;
    let command = input[i++];

    while (command !== "NoMoreMoney") {
        let currentAmount = Number(command);

        if (currentAmount < 0) {
            console.log("Invalid operation!");
            break;
        }
        sum += currentAmount;
        console.log(`Increase: ${currentAmount.toFixed(2)}`);
        command = input[i++];
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

