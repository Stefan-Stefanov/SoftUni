function solve(num, ...params) {
    num = Number(num);
    let operations = {
        "chop": (x) => x / 2,
        "dice": (x) => Math.sqrt(x),
        "spice": (x) => x + 1,
        "bake": (x) => x * 3,
        "fillet": (x) => (x * 0.8).toFixed(1)
    };
   
    for (const el of params) {
        num = operations[el](num)
        console.log(num);
    }
}
console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));