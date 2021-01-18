function solve(input) {
    let clients = Number(input[0]);
    let avgBill = 0;
    let i = 1;

    for (let c = 0; c < clients; c++) {
        let currentAmount = 0;
        let countItems = 0;
        let command = input[i++];
        while (command !== "Finish") {
            switch (command) {
                case "basket":
                    currentAmount += 1.5;
                    break;
                case "wreath":
                    currentAmount += 3.80;
                    break;
                case "chocolate bunny":
                    currentAmount += 7;
                    break;
            }
            countItems++;
            command = input[i++];
        }
        if (countItems % 2 === 0) {
            currentAmount *= 0.8;
        }
        
        avgBill += currentAmount;
        console.log(`You purchased ${countItems} items for ${currentAmount.toFixed(2)} leva.`);
    }
    console.log(`Average bill per client is: ${(avgBill / clients).toFixed(2)} leva.`)
}
solve([
    '3',
    'basket',
    'wreath',
    'chocolate bunny',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish'
]
)