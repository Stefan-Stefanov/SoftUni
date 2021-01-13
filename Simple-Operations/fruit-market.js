function budget(priceStrawberries, kgBananas, kgOranges, kgRaspberries, kgStrawberries) {
    let priceRasp = Number(priceStrawberries) / 2;
    let priceOrange = Number(priceRasp) - (Number(priceRasp) * 0.4);
    let priceBananas = Number(priceRasp) - (Number(priceRasp) * 0.8);
    let budgetRasp = kgRaspberries * priceRasp;
    let budgetOrange = kgOranges * priceOrange;
    let budgetBananas = kgBananas * priceBananas;
    let budgetStrawberries = kgStrawberries * priceStrawberries;
    let sumBudget = budgetBananas + budgetOrange + budgetRasp + budgetStrawberries;

    console.log(sumBudget);
}
budget("48", "10", "3.3", "6.5", "1.7");