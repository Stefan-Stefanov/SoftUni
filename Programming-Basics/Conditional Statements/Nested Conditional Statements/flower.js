function solve(numHrizantemi, numRoses, numTulips, season, hollyday) {

    numHrizantemi = Number(numHrizantemi);
    numRoses = Number(numRoses);
    numTulips = Number(numTulips);
    let totalFlowers = numHrizantemi + numRoses + numTulips;
    let priceHrizantemi = 0;
    let priceRoses = 0;
    let priceTulips = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            priceHrizantemi = 2 * numHrizantemi;
            priceRoses = 4.1 * numRoses;
            priceTulips = 2.5 * numTulips;
            break;
        case "Autumn":
        case "Winter":
            priceHrizantemi = 3.75 * numHrizantemi;
            priceRoses = 4.5 * numRoses;
            priceTulips = 4.15 * numTulips;
            break;
    } if (hollyday === "Y") {
        priceTulips *= 1.15;
        priceRoses *= 1.15;
        priceHrizantemi *= 1.15;
    }
    let total = priceHrizantemi + priceRoses + priceTulips;

    if (numTulips > 7 && season === "Spring") {
        total *= 0.95;
    } else if (numRoses >= 10 && season === "Winter") {
        total *= 0.90;
    }
    if (totalFlowers > 20) {
        total *= 0.80
    }
    total += 2;
    console.log(total.toFixed(2))
}