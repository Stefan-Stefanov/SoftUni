function solve(input = []) {
    console.log(input.reduce((x, y) => x + y, 0));
    console.log(input.reduce((x, y) => x + 1/y, 0));
    console.log(input.reduce((x, y) => x + y, ""));    
    // console.log(reduce(input, (acc, c) => acc + c, 0));
    // console.log(reduce(input, (acc, c) => acc + 1/c, 0));
    // console.log(reduce(input, (acc, c) => acc + c, ""));

    // function reduce(arr, operator, value) {
    //     let current = value;

    //     for (let i = 0; i < arr.length; i++) {
    //       current = operator(current, arr[i]);
    //     }
    //     return current
    // }
}
solve([1, 2, 3])