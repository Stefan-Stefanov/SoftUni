function solve(input) {
    let addressBook = {};
    for (let line of input) {
        let [name, address] = line.split(":");
        addressBook[name] = address;
    }
    let sortedArr = Object.entries(addressBook)
        .sort((a,b) => a[0].localeCompare(b[0]));
    for (let [name, address] of sortedArr) {
        console.log(`${name} -> ${address}`);
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])