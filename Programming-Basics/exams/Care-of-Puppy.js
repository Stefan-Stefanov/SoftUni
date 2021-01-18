function solve(input) {
    let foodTotal = 0;
    let totalFood = Number(input[0]) * 1000;
    let i = 1;
    let isNotEnough = false;
    while (input[i] !== "Adopted") {
        let food = Number(input[i]);
        foodTotal += food;
        if (foodTotal > totalFood) {
            isNotEnough = true;
        }
        i++;
    }
    if (isNotEnough) {
        console.log(`Food is not enough. You need ${foodTotal - totalFood} grams more.`);
    } else {
        console.log(`Food is enough! Leftovers: ${totalFood - foodTotal} grams.`);
    }
}
solve([
    '2', '999',
    '456', '999',
    '999', '123',
    '456', 'Adopted'
])