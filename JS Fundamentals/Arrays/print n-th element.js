function solve(array) {
    let n = Number(array.pop(array.length - 1));
    let newArray = [];
    for (let i = 0; i < array.length; i += n) {
        newArray.push(array[i]);
    }
    console.log(newArray.join(" "));
}
solve(['5', '20', '31', '4', '20', '2'])