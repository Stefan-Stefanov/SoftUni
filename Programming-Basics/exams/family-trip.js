function solve(budget, nights, priceNight, plusSum) {
    budget = Number(budget);
    nights = Number(nights);
    priceNight = Number(priceNight);
    plusSum = Number(plusSum);
    let totalPlusSum = (budget * plusSum) / 100;

    if (nights > 7) {
        priceNight *= 0.95;
    }
    let totalSum = (nights * priceNight) + totalPlusSum;
    if (totalSum <= budget) {
        console.log(`Ivanovi will be left with ${(budget - totalSum).toFixed(2)} leva after vacation.`);
    } else if (budget < totalSum) {
        console.log(`${(totalSum - budget).toFixed(2)} leva needed.`)
    }
}
solve("500", "7", "66", "15");