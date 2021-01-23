function distinctArr(input = []) {
    let arr = [];
    for (const el of input) {
        if (!arr.includes(el)) {
            arr.push(el);
        }
    }
    console.log(arr.join(" "));
}
distinctArr([1, 2, 3, 4, 3])