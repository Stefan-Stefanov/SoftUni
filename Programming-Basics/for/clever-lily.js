function solve ([age, priceP, toyPrise]) {
    age = Number(age);
    toyPrise = Number(toyPrise);
    priceP = Number(priceP);
    let savings = 0;
let moneyCount = 0;
let toyCount = 0;
    for (let years = 1; years <= age; years++) {
        if (years % 2 == 0) {
            moneyCount++
            savings += moneyCount * 10;
        } else {
toyCount++;
        }
    }
    savings -= moneyCount;
    let totalMoney = savings + toyCount * toyPrise;
    if (totalMoney >= priceP) {
        let leftMoney = totalMoney - priceP
        console.log(`Yes! ${leftMoney.toFixed(2)}`);
    } else {
        let moneyNeed = priceP - totalMoney;
        console.log(`No! ${moneyNeed.toFixed(2)}`);
    }
}