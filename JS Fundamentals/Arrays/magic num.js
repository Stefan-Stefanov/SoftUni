function solve(array, n) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let sum = array[i] + array[j];
            if (sum === n) {
                console.log(`${array[i]} ${array[j]}`);
            }
        }
    }
}
solve([1, 2, 3, 4, 5, 6],
    6
    )