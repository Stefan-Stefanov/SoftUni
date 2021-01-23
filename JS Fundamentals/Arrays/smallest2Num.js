function solve(arr) {
    let smallestNum = arr.sort((a, b) => a - b);
    return smallestNum.slice(0, 2).join(" ");
}
console.log(solve([30, 15, 50, 5]));