function factorialDevision(x, y) {
    let fact = 1;
    let devider = 1;
    solveFactorial(x);
    solveDevision(y);
    let sum = (a, b) => (a / b).toFixed(2);
    return sum(fact, devider);
    function solveFactorial(x) {
        for (let i = 1; i <= x; i++) {
            fact *= i;
        }
        return fact
    }
    function solveDevision(y) {
        for (let i = 1; i <= y; i++) {
            devider *= i;
        }
        return devider;
    }
}
console.log(factorialDevision(5, 2));