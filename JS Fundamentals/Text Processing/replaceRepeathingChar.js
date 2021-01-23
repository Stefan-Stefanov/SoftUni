function solve(str) {
    // let arr = [];
    // arr.push(str[0]);
    // for (let el of str) {
    //     if (el != arr[arr.length - 1]) {
    //         arr.push(el);
    //     }
    // }
    // console.log(arr.join(""));
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            newStr += str[i];
        }
    }
    console.log(newStr);
}
solve('aaaaabbbbbcdddeeeedssaa')