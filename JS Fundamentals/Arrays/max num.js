function solve(array) {
    let sum = [];
    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            sum.push(array[i]);
        }
    }
    console.log(sum.join(" "));
}

solve([1, 4, 3, 2]);