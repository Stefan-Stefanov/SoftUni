function solve(arr) {
    let k = arr.shift();
    let firstK = arr.slice(0, k).join(" ");
    let lastK = arr.slice(arr.length - k).join(" ");
    
    return `${firstK}\n${lastK}`;
}
console.log(solve([2, 7, 8, 9]));