function solve(input) {
    let i = 0;
    let n = Number(input[i]);
    while (n >= 0) {
        n = Number(input[i++]);
        if (n < 0) {
            console.log("Negative number!")
        } else {
            console.log(`Result: ${(n * 2).toFixed(2)}`);
        }
    }
}
solve(["12", "43.2144", "12.3", "543.23", "-20"]);