function solve(input) {
    let catalogue = {};

    while (input.length) {
        let [name, price] = input.shift().split(" : ");
        let firstLetter = name[0];

        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = [];
        }
        catalogue[firstLetter].push({ name: `  ${name}`, price });
        catalogue[firstLetter].sort((a, b) => (a.name).localeCompare(b.name));
    }

    return Object.entries(catalogue)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(el => {
            let letter = el[0];
            console.log(letter);
            for (const key in el[1]) {
                console.log(`${el[1][key].name}: ${el[1][key].price}`);
            }
        });
}
console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));