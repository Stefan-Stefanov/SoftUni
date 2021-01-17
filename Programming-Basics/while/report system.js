function solve(input) {
    let i = 1;
    let totalNeeded = Number(input[0]);
    let command = input[i];
    let totalCash = 0;
    let totalCard = 0;
    let total = 0;
    let countCash = 0;
    let countCard = 0;
    while (command !== "End") {
        if (total >= totalNeeded) {
            let AvgCS = totalCash / countCash;
            let AvgCC = totalCard / countCard;
            console.log(`Average CS: ${AvgCS.toFixed(2)}`);
            console.log(`Average CC: ${AvgCC.toFixed(2)}`);
            break;
        }
        let cash = Number(input[i++]);
        if (cash <= 100) {
            countCash++;
            totalCash += cash;
            total += totalCash;
            console.log("Product sold!");

        } else if (cash > 100) {
            console.log("Error in transaction!");
        }

        let card = Number(input[i++]);
        if (card >= 10) {
            countCard++;
            totalCard += card;
            total += totalCard;
            console.log("Product sold!")

        } else if (card < 10) {
            console.log("Error in transaction!");
        }

        command = input[i];

    }
    if (command === "End") {
        console.log("Failed to collect required money for charity.");
    }
}
solve(['600', '86', '150', '98', '227', "End"]);