function solve(number) {
number = Number(number);
for (let i = 1; i <= 10; i++) {
    let sum = i * number;
    console.log(`${i} * ${number} = ${sum}`)
}
} solve("5")