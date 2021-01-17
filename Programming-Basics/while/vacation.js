function solve(input) {
    let tripPrice = Number(input[0]);
    let ownMoney = Number(input[1]);
    let i = 2;
    let spendCount = 0
    let days = 0;
    let totalSum = false;

    while (ownMoney < tripPrice) {
        let command = input[i++];
        let money = Number(input[i]);

        if (command === "save") {
            ownMoney += money;
            spendCount = 0;
        } else if (command === "spend") {
            ownMoney -= money;
            spendCount++

            if (ownMoney < 0) {
                ownMoney = 0;
            }
        }
        days++;
        if (spendCount === 5) {
            totalSum = true;
            break;
        }

        i++;
    }
    if (totalSum) {
        console.log(`You can't save the money.\n${days}`)
    } else {
        console.log(`You saved the money for ${days} days.`)
    }
}
solve(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
