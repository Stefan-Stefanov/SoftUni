// function solve(n, array) {
//     array.length = n;
//     console.log(array.reverse().join(" "));
// }
// solve(3, [10, 20, 30, 40])
function solve(n, arr) {
    let revArr = [];
    for (let i = 0; i < n; i++) {
        revArr.push(arr[i]);
    }
    let output = "";
    for (let i = revArr.length -1; i >= 0; i--) {
        output += revArr[i];
        output += " ";
    }
    console.log(output);
}
solve(3, [10, 20, 30, 40]);