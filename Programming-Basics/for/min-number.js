function solve(input) {
    let j = 0;
n = Number(input[j++]);
    let min = Number.MAX_SAFE_INTEGER;
    let currentNum = Number(input[j++]);
    for (let i = 1; i <= n; i++) {
        if (currentNum < min) {
            min = currentNum;
        }
       currentNum = Number(input[j++]);
    }
    console.log(min);
}
solve(["3",
"-10",
"20",
"-30"])

