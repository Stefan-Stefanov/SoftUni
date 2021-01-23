function solve(input = []) {
    let obj = {};

    for (let el of input) {
        let [companyName, personId] = el.split(" -> ");
        if (!obj.hasOwnProperty(companyName)) {
            obj[companyName] = new Set();
        }
        obj[companyName].add(personId);
    }
    Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0])).forEach(el => {
        let [company, id] = el;
        console.log(`${company}`);
        for (let i of id) {
            console.log(`-- ${i}`);
        }
    });
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);