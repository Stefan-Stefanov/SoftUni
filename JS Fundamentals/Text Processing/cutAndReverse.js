function solve(str) {
    let firstHalf = str.substring(0, str.length / 2);
    let secondHalf = str.substring(str.length / 2)
    console.log(Array.from(firstHalf).reverse().join(""));
    console.log(Array.from(secondHalf).reverse().join(""));
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')