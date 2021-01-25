function solve(input = []) {
    let mainDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < input.length; i++) {
        mainDiagonal += input[i][i];
        secondDiagonal += input[i][input.length - i - 1];
    }
    return mainDiagonal + " " + secondDiagonal;
}
console.log(solve([[20, 40],
[10, 60]]
));