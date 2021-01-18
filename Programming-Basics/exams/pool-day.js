function solve(people, entryTax, priceBed, priceUmbrella) {
    people = Number(people);
    entryTax = Number(entryTax);
    priceBed = Number(priceBed);
    priceUmbrella = Number(priceUmbrella);
    let totalPriceBed = Math.ceil(people * 0.75) * priceBed;
    let totalPriceUmbrella = Math.ceil(people / 2) * priceUmbrella;
    let totalEntryTax = people * entryTax;
    let sum = totalEntryTax + totalPriceBed + totalPriceUmbrella;
    console.log(`${sum.toFixed(2)} lv.`);

}
solve("21", "5.5", "4.4", "6.2");