function solve(input) {
    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let totalBisc = 0;
    let daysCount = 1;
    let totalDogFood = 0;
    let totalCatFood = 0;
    let totalEatenFood = 0;
    let j = 2;
    for (let i = 1; i <= days; i++) {
        let dogfood = Number(input[j++]);
        totalDogFood += dogfood;
        let catfood = Number(input[j++]);
        totalCatFood += catfood;
        let daylyEaten = 0;
        daylyEaten = dogfood + catfood;
        totalEatenFood = totalDogFood + totalCatFood;
        if (daysCount % 3 === 0) {
            totalBisc += Math.round((daylyEaten * 1.1) - daylyEaten);
        }
        daysCount++;
    }
    console.log(`Total eaten biscuits: ${totalBisc}gr.`);
    console.log(`${(totalEatenFood / totalFood * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(totalDogFood / totalEatenFood * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(totalCatFood / totalEatenFood * 100).toFixed(2)}% eaten from the cat.`);
}
solve([
    '3', '1000',
    '300', '20',
    '100', '30',
    '110', '40'
]


)