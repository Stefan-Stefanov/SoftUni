function solve(x, y, operator) {
    let operations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "/": (x, y) => x / y,
        "*": (x, y) => x * y,
        "**": (x, y) => Math.pow(x, y),
        "%": (x, y) => Math.floor(x % y)
    }
    console.log(operations[operator](x,y));
}
solve(3, 5.5, "*")