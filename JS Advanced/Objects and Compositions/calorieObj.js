function solve(input) {
    let obj = {};

    for (let i = 0; i < input.length - 1; i+=2) {
        let food = input[i];
        let calorie = Number(input[i+1]);        
        obj[food] = calorie;
    }
    
    return obj
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));