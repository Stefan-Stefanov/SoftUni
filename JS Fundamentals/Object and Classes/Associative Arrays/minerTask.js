function solve(input = []) {
    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        let item = input[i];
        let quantity = input[i + 1];
        if (!obj.hasOwnProperty(item)) {
            obj[item] = 0;
        }
        obj[item] += Number(quantity);
    }
    for (let el in obj) {
        console.log(`${el} -> ${obj[el]}`);
    }
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);