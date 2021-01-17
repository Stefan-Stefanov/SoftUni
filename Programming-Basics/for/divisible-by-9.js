function solve(n1, n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    let sum = 0;

    for (let i = n1; i <= n2; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let j = n1; j <= n2; j++) {
        if (j % 9 === 0) {
            console.log(j);
        }

    }
}

solve("100", "200");
