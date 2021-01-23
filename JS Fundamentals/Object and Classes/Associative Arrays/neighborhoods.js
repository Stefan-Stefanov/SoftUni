function solve(input = []) {
    let streetNames = {};
    let neighborhoodNames = input.shift().split(", ");

    for (let names of neighborhoodNames) {
        streetNames[names] = [];
    }
    for (let i = 0; i < input.length; i++) {
        let [street, tugName] = input[i].split(" - ");
        if (!streetNames.hasOwnProperty(street)) {
            continue;
        }
        let existing = streetNames[street];
        existing.push(tugName);
    }
    let sorted = Object.entries(streetNames)
        .sort((a, b) => b[1].length - a[1].length);
    for (let el of sorted) {
        console.log(`${el[0]}: ${el[1].length}`);
        for (const x of el[1]) {
            console.log(`--${x}`);
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);