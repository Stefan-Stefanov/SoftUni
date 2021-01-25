function solve(input = []) {
    let counter = 0;
    for (let row = 0; row < input.length - 1; row++) {
        for (let col = 0; col < input[row].length; col++) {
            let current = input[row][col];           
            
            if (current == input[row + 1][col]) {
                counter++;
            }
            if (current == input[row][col + 1]) {
                counter++;
            }
            if (row == input.length - 2 && input[row + 1][col] == input[row + 1][col + 1]) {
                counter++;
            }           
        }
    }
    return counter;
}
console.log(solve([[2, 2, 5, 7, 4],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2'],
]));
console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));