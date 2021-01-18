function solve(priceKgFlour, kgFlour, kgSugar, numEggs, numYeast) {
    priceKgFlour = Number(priceKgFlour);
    kgFlour = Number(kgFlour);
    kgSugar = Number(kgSugar);
    numEggs = Number(numEggs);
    numYeast = Number(numYeast);
    let priceSugar = priceKgFlour * 0.75;
    let priceEggs = priceKgFlour * 1.1;
    let priceYeast = priceSugar * 0.2;
    let sumFlour = priceKgFlour * kgFlour;
    let sumSugar = priceSugar * kgSugar;
    let sumEggs = priceEggs * numEggs;
    let sumYeast = priceYeast * numYeast;
    let totalSum = sumFlour + sumSugar + sumEggs + sumYeast;
    console.log(totalSum.toFixed(2)); 
}
solve("50", "10", "3.5", "6", "1")