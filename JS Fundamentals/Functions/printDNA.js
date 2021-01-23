function solve(number) {
    let str = "ATCGTTAGGG";
    let counter = 0;

    for (let i = 0; i < number; i++) {
        if (i % 4 == 0) {
            console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`);
        } else if (i % 4 == 1) {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`);
        } else if (i % 4 == 3) {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
        }
        counter += 2;
    }
}
solve(20)
// function printDNA(num) {
//     let arr = `ATCGTTAGGG`;
//     arr = arr.split(``);
//     for (let i = 0; i < num; i++) {
//         let star = 0;
//         if (i % 4 === 0) {
//             star = 2;
//         } else if (i % 4 === 1 || i % 2 === 1) {
//             star = 1;
//         }
//         let index1;
//         let index2;
//         if (i % 5 == 0) {
//             index1 = arr[0];
//             index2 = arr[1];
//         } else if (i % 5 == 1) {
//             index1 = arr[2];
//             index2 = arr[3];
//         } else if (i % 5 == 2) {
//             index1 = arr[4];
//             index2 = arr[5];
//         } else if (i % 5 == 3) {
//             index1 = arr[6];
//             index2 = arr[7];
//         } else if (i % 5 == 4) {
//             index1 = arr[8];
//             index2 = arr[9];
//         }
//         let dash = 0;
//         if (i % 4 === 2) {
//             dash = 4;
//         } else if (i % 4 == 1 || i % 4 == 3) {
//             dash = 2;
//         }
//         console.log(`${`*`.repeat(star)}${arr[arr.indexOf(index1)]}${`-`.repeat(dash)}${arr[arr.indexOf(index2)]}${`*`.repeat(star)}`);
//     }
// }