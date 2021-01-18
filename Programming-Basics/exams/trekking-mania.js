function solve(input) {
    let numGruops = Number(input[0]);
    let i = 1;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let countPeople = 0;
    for (let j = 0; j < numGruops; j++) {
        let people = Number(input[i++]);
        countPeople += people;
        if (people <= 5) {
            musala += people;
        } else if (people <= 12) {
            monblan += people;
        } else if (people <= 25) {
            kilimandjaro += people;
        } else if (people <= 40) {
            k2 += people;
        } else if (people > 40) {
            everest += people;
        }
    }
    console.log(`${((musala / countPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblan / countPeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimandjaro / countPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2 / countPeople) * 100).toFixed(2)}%`);
    console.log(`${((everest / countPeople) * 100).toFixed(2)}%`);
}
solve([
    '10', '10', '5',
    '1', '100', '12',
    '26', '17', '37',
    '40', '78'
]);