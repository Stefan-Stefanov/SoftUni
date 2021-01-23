function magicMatrix(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);
    let isTrue = true;
    for (let i = 0; i < matrix.length; i++) {
        let temp1 = 0;
        let temp2 = 0;
        for (let j = 0; j < matrix.length; j++) {
            let digit1 = matrix[i][j];
            let digit2 = matrix[j][i];
            temp1 += digit1;
            temp2 += digit2;            
        }
        if (temp1 != sum || temp2 != sum) {
            isTrue = false;
            break;
        }
    }
    return isTrue;
}
console.log(magicMatrix(
    [[4, 5, 6,],
    [6, 5, 4,],
    [5, 5, 5,]]
));