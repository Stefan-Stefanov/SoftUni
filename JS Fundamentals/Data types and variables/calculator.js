function solve(n1, operator, n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    let sum = 0;
    switch (operator) {
        case "+":
            sum = n1 + n2;
            break;
        case "-":
            sum = n1 - n2;
            break;
        case "*":
            sum = n1 * n2;
            break;
        case "/":
            sum = n1 / n2;
            break;
    }
    console.log(sum.toFixed(2));
}