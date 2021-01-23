function solve(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let n = Number(array[i]);
        if (n % 2 === 0) {
            sum += n;
        }
    }
    console.log(sum);
}
solve(['1','2','3','4','5','6']);