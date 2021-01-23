function solve(array, rotationNum) {
    for (let i = 0; i < rotationNum; i++) {
        let num = array.shift();
        array.push(num);
    }
    console.log(array.join(" "));
}
solve([1, 2, 3, 4, 5], 2);