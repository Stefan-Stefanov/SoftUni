function solve(input = []) {
    return input.filter((a, i) => i % 2 === 1)
                .map(x => x * 2)
                .reverse()
                .join(" ")
}
console.log(solve([10, 15, 20, 25]));