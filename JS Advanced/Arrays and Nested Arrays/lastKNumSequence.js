function solve(n, k) {
    arr = [1];
    for (let i = 0; i < n - 1; i++) {
        arr.push(arr.slice(-k)
            .reduce((x, y) => x + y));            
    }
    return arr
}
console.log(solve(6, 3));