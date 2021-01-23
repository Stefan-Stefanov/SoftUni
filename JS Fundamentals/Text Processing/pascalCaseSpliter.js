function solve(str) {
    let arr = [];
    let index = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i].toUpperCase() === str[i]) {
           let word = str.substring(index, i);
           arr.push(word);
           index = i;
        }
    }
    arr.push(str.substring(index, str.length));  
    console.log(arr.join(", "));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');