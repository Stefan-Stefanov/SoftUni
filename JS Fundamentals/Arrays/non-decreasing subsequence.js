function solve(arr) {
    let subsequenced = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            continue;
        } else {
            subsequenced.push(arr[i]);
        }
    }
    console.log(subsequenced.join(" "));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])