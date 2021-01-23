function solve(arr1, arr2) {
    for (const el of arr1) {
        let isCommon = arr2.includes(el);
        if (isCommon) {
            console.log(el);
        }
    }
}
// function solve2(array1, array2) {
//     for (const el of array1) {
//         for (const secondEl of array2) {
//             if (el === secondEl) {
//                 console.log(el);
//                 break;
//             }
//         }
//     }
// }