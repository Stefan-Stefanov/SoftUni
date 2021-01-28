function solve(n, m) {    
    let y = Number(m);
    let sum = 0;
    for (let x = Number(n); x <= y; x++) {
        sum += x;
    }
    console.log(sum);
}
solve("-8", "20")