function solve(arr = []) {
    return arr.sort((a, b) => a.localeCompare(b)).forEach((volue, index) => {
        console.log(`${index + 1}.${volue}`);
    })
}
console.log(solve(["John", "Bob", "Christina", "Ema"]));