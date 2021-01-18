function solve(kvM, grapeKvM, neededWine, workers) {
    kvM = Number(kvM);
    grapeKvM = Number(grapeKvM);
    neededWine = Number(neededWine);
    workers = Number(workers);

    let harvest = kvM * grapeKvM;
    let wine = (harvest * 0.4) / 2.5;
    
    if (wine < neededWine) {
        let absWine = Math.abs(neededWine - wine);
        console.log(`It will be a tough winter! More ${Math.floor(absWine)} liters wine needed.`)
    } else if (wine >= neededWine) {
        let leftWine = Math.ceil(wine - neededWine);
        let winePerson = Math.ceil(leftWine / workers);
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${leftWine} liters left -> ${winePerson} liters per person.`);
    }
}
solve("650", "2", "175", "3");
