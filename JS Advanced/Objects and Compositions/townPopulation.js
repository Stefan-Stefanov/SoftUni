function solve(input = []) {
    let obj = {};
    for (const el of input) {
        let [townName, population] = el.split(" <-> ");
        population = Number(population);
        if (!obj.hasOwnProperty(townName)) {
            obj[townName] = 0;
        }
        obj[townName] += population;
    }
    for (const [name, population] of Object.entries(obj)) {
       console.log(`${name} : ${population}`);
    }
}
console.log(solve(['Sofia <-> 1200000',
'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
));