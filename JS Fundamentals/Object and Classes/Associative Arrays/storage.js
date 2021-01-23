function solve(input) {
    let storage = new Map();

    for (let line of input) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity);
        if (storage.has(product)) {
            storage.set(product, quantity);
        } else {
            quantity += map.get(product);
            map.set(product, currentQuantity + quantity);
        }
    }
    for (let [product, quantity] of map) {
        console.log(`${product} -> ${quantity}`);
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);