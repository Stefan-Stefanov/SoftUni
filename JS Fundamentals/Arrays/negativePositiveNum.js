function processNum(arr) {
    let newArr = []
    for (const el of arr) {
        if (el >= 0) {
            newArr.push(el);
        } else {
            newArr.unshift(el)
        }
    }
    return newArr.join("\n");
}
console.log(processNum([7, -2, 8, 9]));