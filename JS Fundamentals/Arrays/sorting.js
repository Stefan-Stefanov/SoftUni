function sortingBigSmall(input = []) {
    let sortedInput = input.sort((a, b) => b - a);
    let half = Math.ceil(input.length / 2);
    let bigToSmall = sortedInput.splice(0, half);
    let smallToBig = sortedInput.sort((a, b) => a - b).splice(-half);
    let k = 1;
    for (let i = 0; i < smallToBig.length; i++) {
        bigToSmall.splice(k, 0, smallToBig[i]);
        k += 2;
    }
    console.log(bigToSmall.join(" "));
}
sortingBigSmall([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// function sortingNums(arr = []) {
//     arr.sort((a, b) => b - a);
//     let newArr = [];
//     counterFort = 0;
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
        
//         if (i % 2 === 0) {
//             newArr.push(arr[counterFort]);
//             counterFort++;
//         } else {
//             newArr.push(arr[arr.length - 1- counter]);
//             counter++;
//         }
//     }
//     console.log(newArr.join(` `));
// }
// sortingNums([
//     1, 21, 3, 52, 69,
//    63, 31, 2, 18, 94
//  ]
//  );