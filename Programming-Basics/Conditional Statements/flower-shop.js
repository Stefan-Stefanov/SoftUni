function solve(magnol, ziumbul, rose, cactus, present) {
    let priceMagnol = Number(magnol) * 3.25;
    let priceZiumbul = Number(ziumbul) * 4;
    let priceRose = Number(rose) * 3.5;
    let priceCactus = Number(cactus) * 8;
    present = Number(present);
    let sum = (priceCactus + priceRose + priceZiumbul + priceMagnol) * 0.95;

    if (sum >= present) {
        console.log(`She is left with ${Math.floor(sum - present)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(present - sum)} leva.`)
    }
}