function solve(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let sum = 0;
    let output = "";
    

    if (n2 === 0 && (operator === "/" || operator === "%")) {
        output = "Cannot divide" + " " + n1 + " " + "by zero";
    } else if (operator === "/") {
        sum = (n1 / n2).toFixed(2);
        output = n1 + " " + operator + " " + n2 + " = " + sum;
    } else if (operator === "%") {
        sum = n1 % n2;
        output = n1 + " " + operator + " " + n2 + " = " + sum;
    } else {
        if (operator === "+") {
            sum = n1 + n2;
        } else if (operator === "-") {
            sum = n1 - n2;
        } else if (operator === "*") {
            sum = n1 * n2;
        }
        output = n1 + " " + operator + " " + n2 + " = " + sum + " - " + (sum % 2 == 0 ? "even" : "odd")
       
    }

    console.log(output);
}

solve("2", "2", "*");