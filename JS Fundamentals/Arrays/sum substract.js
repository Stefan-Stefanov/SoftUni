function solve(arr) {
    let oldArrSum = 0;
    for (const el of arr) {
        oldArrSum += el;
    }
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        if (n % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }
    let newArrSum = 0;
    for (const el of arr) {
        newArrSum += el;
    }
    console.log(arr);
    console.log(oldArrSum);
    console.log(newArrSum);
}
solve([5, 15, 23, 56, 35]);