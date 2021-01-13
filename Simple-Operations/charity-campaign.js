function carityCampaign(campaigndays, shefs, cakes, wafles, panecakes) {
    let cakePerDay = Number(cakes) * 45;
    let waflesPerDay = Number(wafles) * 5.80;
    let panecakesPerDay = Number(panecakes) * 3.2;
    let sumproducts = (cakePerDay + waflesPerDay + panecakesPerDay) * Number(shefs);
    let sumForCampaign = Number(sumproducts) * Number(campaigndays);
    let sumAfterCosts = Number(sumForCampaign) - (Number(sumForCampaign)/ 8);

    console.log(sumAfterCosts);
}
carityCampaign("23", "8", "14", "30", "16")