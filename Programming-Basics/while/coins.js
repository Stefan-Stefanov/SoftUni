function solve(input) {
    let change = Number(input[0]) * 100;
    change = Math.floor(change);
    let count = 0;

    while (change !== 0) {
        if (change >= 200) {
            count++
            change -= 200;

        } else if (change >= 100) {
            count++
            change -= 100;
        } else if (change >= 50) {
            count++
            change -= 50;
        } else if (change >= 20) {
            count++
            change -= 20;
        } else if (change >= 10) {
            count++
            change -= 10;
        } else if (change >= 5) {
            count++
            change -= 5;
        } else if (change >= 2) {
            count++
            change -= 2;
        } else if (change >= 1) {
            count++
            change -= 1;
        }
    }
    console.log(count)
}
solve(["2.73"])