function solve(input = []) {
    let arr = input.toString()
        .split(",")
        .map(Number)
    return Math.max(...arr);
}
console.log(solve([[20, 50, 10],
[8, 33, 145]]));