function solve(arr = []) {
    return arr.sort(sorting).join("\n")

    function sorting(a, b) {
        return a.length - b.length || a.localeCompare(b)
    }
}
console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));
console.log(solve(['alpha', 
'beta', 
'gamma']
));
console.log(solve(['test', 
'Deny', 
'omen', 
'Default']
));