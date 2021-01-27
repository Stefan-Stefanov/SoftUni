function solve(input = []) {
    let obj = {};

    while (input.length) {
        let line = input.shift();
        let [town, product, price] = line.split(" | ");

        if (!obj[product]) {
            obj[product] = { town, price: Number(price) };
        }
        obj[product] = obj[product].price <= Number(price) ? obj[product] : { town, price: Number(price) };
    }
    
    for (const key in obj) {
        console.log(`${key} -> ${obj[key].price} (${obj[key].town})`);
    }
}
console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));