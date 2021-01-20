function solve(input) {
    let bitcoins = 0;
    let totalLeva = 0;
    let totalBitcoin = 0;
    let leftLeva = 0;
    let firstDay = 0;
    let day = 1;
    let countbitcoin = 0
    for (let i = 0; i < input.length; i++) {
        let dailyGold = Number(input[i]);

        if (day % 3 === 0) {
            dailyGold *= 0.7;
        }
        totalLeva += (dailyGold * 67.51);

        if (totalLeva >= 11949.16) {
            countbitcoin++;
            totalBitcoin = Math.floor(totalLeva / 11949.16);
            bitcoins += totalBitcoin;
            leftLeva = totalLeva - (totalBitcoin * 11949.16);
            totalLeva = leftLeva;
            if (countbitcoin === 1) {
                firstDay = day;
            }
        }
        day++;
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (countbitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalLeva.toFixed(2)} lv.`);
}
solve([50, 100])