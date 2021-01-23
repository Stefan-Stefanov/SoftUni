function modifyNum(num) {
    let sum = 0;
    let arr = num.toString()
        .split("")
        .map(Number);
    averageSum(arr);
    while (sum <= 5) {
        arr.push(9);
        averageSum(arr);
    }

    return arr.join("");
    function averageSum(arr) {
        sum = arr.reduce((a, b) => a + b);
        sum = sum / (arr.length);
        return sum;
    }
}
console.log(modifyNum(101));