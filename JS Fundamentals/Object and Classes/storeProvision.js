function solve(currentStock = [], orderedStock = []) {
    let store = {};

    for (let el = 0; el < currentStock.length; el += 2) {
        let product = currentStock[el];
        let quantity = Number(currentStock[el + 1]);
        store[product] = quantity;
    }
    for (let el = 0; el < orderedStock.length; el += 2) {
        let product = orderedStock[el];
        let quantity = Number(orderedStock[el + 1]);
        if (!store.hasOwnProperty(product)) {
            store[product] = quantity;
        } else {
            store[product] += quantity;
        }
    }
    Object.keys(store).forEach( el => {
        console.log(`${el} -> ${store[el]}`);
    });    
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);