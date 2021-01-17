function solve(n) {
    
    let sum = 0;
    for (let tekst = 0; tekst < n.length; tekst++) {
        let currentNum = Number(n[tekst]);

     sum += currentNum;
}
console.log(`The sum of the digits is:${sum}`);
}
solve("1234");