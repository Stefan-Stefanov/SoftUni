function oddEvenSum(n) {
    let arr = String(n).split("").map(Number);
    return chekAndSum(arr);

    function chekAndSum(arr) {
        let sumOdd = 0;
        let sumEven = 0;
        for (const el of arr) {
            if (el % 2 === 0) {
                sumEven += el;
            } else {
                sumOdd += el;
            }
        }
        return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
    }
}
console.log(oddEvenSum(1000435));