function solve(array) {
    let sumEven = 0;
    let sumOdd = 0;
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        let n = Number(array[i]);
        if (n % 2 === 0) {
            sumEven += n;
        } else {
            sumOdd += n;
        }
    }
    total = sumEven - sumOdd;
    console.log(total);
}
solve([3,5,7,9])