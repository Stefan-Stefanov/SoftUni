function solve(num) {
    num = Number(num) * 2;
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 1) {
            console.log(i);
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}
solve("5");