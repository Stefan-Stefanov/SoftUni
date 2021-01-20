function solve(n) {
    n = Number(n);
    
    for (let i = 1; i <= 10; i++) {
        let sum = n * i;
        console.log(`${n} X ${i} = ${sum}`);
    }
}
solve(5)