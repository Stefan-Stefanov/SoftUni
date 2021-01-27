function solve(arr) {
    let rowSums = [];
    let colSums = [];
    //Намираме сумите на всички редове
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        let sum = row.reduce((result, curr) => (result + curr), 0);
        rowSums.push(sum);
    }
    //Намираме сумите на всички колони
    for (let i = 0; i < arr.length; i++) {
        let newRow = []
        for (let y = 0; y < arr.length; y++) {
            newRow.push(arr[y][i])
        }

        let sum = newRow.reduce((result, curr) => (result + curr), 0);
        colSums.push(sum);
    }
    //Събираме резултатите в един масив и проверяваме дали всички елементи са еднакви
    for (let i = 0; i < rowSums.length; i++) {
        if (rowSums[i] !== colSums[i] || rowSums[0] !== rowSums[i]) {
            return false;
        }
    }
    return true;
    // let rowSums = arr.map((el) => el.reduce((a, b) => a + b), 0);
    //  let colSums = arr[0].map((_, col) => arr.map((row) => row[col])).map(row => row.reduce((a, b) => a + b));
    //  return rowSums.concat(colSums).every((el, i, arr) => el === arr[0]);
}

console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));