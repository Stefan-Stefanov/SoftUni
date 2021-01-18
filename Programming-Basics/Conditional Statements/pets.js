function solve(days, kgFood, kgDogFood, kgCatFood, grTurtleFood) {
    days = Number(days);
    kgFood = Number(kgFood);
    kgDogFood = Number(kgDogFood);
    kgCatFood = Number(kgCatFood);
    let kgTurtleFood = Number(grTurtleFood) / 1000;
    let daylyFood = kgDogFood + kgCatFood + kgTurtleFood;
    let totalFood = daylyFood * days;

    if (totalFood <= kgFood) {
        console.log(`${Math.floor(kgFood - totalFood)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(totalFood - kgFood)} more kilos of food are needed.`)
    }
}