function solve(arr) {
    let n = Number(arr.pop());
    let reducedRotation = n % arr.length;
    for (let i = 0; i < reducedRotation; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(" "));
}
solve(["1", "2", "3", "4", "2"])