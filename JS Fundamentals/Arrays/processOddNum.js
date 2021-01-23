function solve(arr) {
    let filtered = arr.filter(isOddIndex);
    let doubled = filtered.map(x => x * 2).reverse();
        return doubled.join(" ");
        
    function isOddIndex(value, index) {
        return (index % 2) === 1;
    }    
}
console.log(solve([10, 15, 20, 25]));