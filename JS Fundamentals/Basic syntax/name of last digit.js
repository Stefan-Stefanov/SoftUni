function solve(input) {
    let n = input.shift()
    let digit = n.split('').reverse();
    
    let firstN = Number(digit[0]);

    if (firstN === 0) {
        console.log("zero");
    } else if (firstN === 1) {
        console.log("one");
    } else if (firstN === 2) {
        console.log("two");
    } else if (firstN === 3) {
        console.log("three");
    } else if (firstN === 4) {
        console.log("four");
    } else if (firstN === 5) {
        console.log("five");
    } else if (firstN === 6) {
        console.log("six");
    } else if (firstN === 7) {
        console.log("seven");
    } else if (firstN === 8) {
        console.log("eight");
    } else if (firstN === 9) {
        console.log("nine");
    }
}
solve(['1234'])