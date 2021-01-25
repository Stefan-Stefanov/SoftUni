function solve(input = []) {
    input.sort((a, b) => a - b);
    let arr = [];
    while (input.length) {
        arr.push(input.shift());
        arr.push(input.pop());
    }
    return arr.filter(x => x != undefined)
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));