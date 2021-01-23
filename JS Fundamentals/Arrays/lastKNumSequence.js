function solve(n, k) {
    let arr = [1];
    
    for (let i = 1; i < n; i++) {
        let lastK = arr.slice(-k);
        let sum = 0;
        for (let el of lastK) {
            sum += el;
        }
        arr.push(sum);
    }
    return arr.join(" ");
}
console.log(solve(6, 3));
