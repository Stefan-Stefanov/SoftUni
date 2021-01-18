function solve(numGuests, priceGuest, budget) {
    numGuests = Number(numGuests);
    priceGuest = Number(priceGuest);
    if (numGuests >= 10 && numGuests <= 15) {
        priceGuest *= 0.85;
        
    } else if (numGuests > 15 && numGuests <= 20) {
        priceGuest *= 0.80;
        
    } else if (numGuests > 20) {
        priceGuest *= 0.75;
        
    }
    budget = Number(budget);
    let priceCake = budget - (budget * 0.90);
    let totalSum = (priceGuest * numGuests) + priceCake;

    if (totalSum > budget) {
        console.log(`No party! ${Math.abs(budget - totalSum).toFixed(2)} leva needed.`);
    } else {
        console.log(`It is party time! ${(budget - totalSum).toFixed(2)} leva left.`)
    }
    
}
solve("18", "30", "450")