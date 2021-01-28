function solve(x, y) {
    let smallestNum = Math.min(x, y);
    let largestNum = Math.max(x, y);
    while (smallestNum != 0) {
        let current = smallestNum;
        smallestNum = largestNum % smallestNum;
        largestNum = current;
    }
    return largestNum;
}

console.log(solve(2154, 458));