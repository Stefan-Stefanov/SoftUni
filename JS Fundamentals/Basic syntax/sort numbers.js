function solve(a, b, c) {
    let array = [a, b, c];
    array.sort((a, b) => b - a);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    
}
solve(-2, 1, 3);
