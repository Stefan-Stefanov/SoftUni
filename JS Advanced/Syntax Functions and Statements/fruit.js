function solve(fruit, weight, price) {
    let fixedWeight = weight / 1000;
    let sum = fixedWeight * price;
    
    return `I need $${sum.toFixed(2)} to buy ${fixedWeight.toFixed(2)} kilograms ${fruit}.`
}
console.log(solve("orange", 2500, 1.8));
console.log(solve("apple", 1563, 2.35));