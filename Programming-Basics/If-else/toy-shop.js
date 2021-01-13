function solve(travelPrice, puzzels, dolls , bears, minions, trucks) {
    
    puzzels = Number(puzzels);
    dolls = Number(dolls);
    bears = Number(bears) ;
    minions = Number(minions);
    trucks = Number(trucks);
    
    let puzzelsPrice = puzzels * 2.6;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.1;
    let minionsPrice = minions * 8.2;
    let trucksPrice = trucks * 2;

    let totalEarned = puzzelsPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
    let totalCount = puzzels + dolls + bears + minions + trucks;
    
    if (totalCount >= 50) {
        let discount = totalEarned * 0.25;
        totalEarned = totalEarned - discount;
    }
        let rent = totalEarned * 0.1;
        totalEarned = totalEarned - rent;

    if (totalEarned >= travelPrice) {
        let moneyLeft = totalEarned - travelPrice;
        console.log (`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let moneyNeeded = travelPrice - totalEarned;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
    
    
}
solve("40.8", "20", "25", "30", "50", "10")