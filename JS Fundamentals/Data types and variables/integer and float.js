function solve(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    let totalSum = Math.trunc(sum);

    if (sum == totalSum) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
solve(9 , 100 , 1.1)