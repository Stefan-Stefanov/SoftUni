function solve(min, walks, calories) {
    min = Number(min);
    walks = Number(walks);
    calories = Number(calories);
    let totalCalories = walks * (min * 5);
    let neededCalories = calories / 2;
    if (totalCalories >= neededCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`)
    }

}
solve("30", "3", "600")