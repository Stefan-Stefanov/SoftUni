function sumAndSubtract(x, y, z) {
    let result = sum(x, y);

    function sum(a, b) {
        return a + b;
    }
    return result - z;
}
console.log(sumAndSubtract(23, 6, 10));
// let sum = (a, b) => a + b;
    // return sum(x, y) - z; 