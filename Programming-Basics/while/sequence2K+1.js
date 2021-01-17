function solve(input) {
    let n = Number(input[0]);
    // let k = 1;

    // while (k <= n) {
    //     console.log(k);
    //     k = 2 * k + 1;
    // }
    for (let k = 1; k <= n; k = 2 * k + 1) {
        console.log(k);
    }
}
solve([3])