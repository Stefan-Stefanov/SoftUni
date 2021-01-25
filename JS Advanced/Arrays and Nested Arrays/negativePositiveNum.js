function solve(input = []) {
    let arr = [];
    input.forEach(el => {
        (el < 0) ? arr.unshift(el) : arr.push(el);
    })
    return arr.join("\n")
}
console.log(solve([7, -2, 8, 9]));