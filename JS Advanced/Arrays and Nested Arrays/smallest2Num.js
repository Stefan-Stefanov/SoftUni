function solve(input = []) {    
    let filtered = input.sort((a, b) => a - b);
    filtered.length = 2;
    return filtered.join(" ");
}
console.log(solve([30, 15, 50, 5]));