function solve(array) {
    let nums = array.map(Number);
    let firstNum = nums.shift();
    let lastNum = nums.pop();
    let sum = firstNum + lastNum;
    return sum;
}
console.log(solve([20, 30, 40])); 