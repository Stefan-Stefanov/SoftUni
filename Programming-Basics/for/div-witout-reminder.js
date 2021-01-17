// function solve(input) {
//     let n = Number(input[0]);
//     let p1Count = 0;
//     let p2Count = 0;
//     let p3Count = 0;

//     for (let i = 0; i < n; i++) {
//         let num = Number(input[i]);

//         if (num % 2 === 0) {
//             p1Count++
//         } else if (num % 3 === 0) {
//             p2Count++
//         } else if (num % 4 === 0) {
//             p3Count++

//         }
//         let p1 = p1Count / n * 100;
//         let p2 = p2Count / n * 100;
//         let p3 = p3Count / n * 100;

//         console.log(`${p1.toFixed(2)}%`);
//         console.log(`${p2.toFixed(2)}%`);
//         console.log(`${p3.toFixed(2)}%`);

//     }
// }
function solve(input) {
    let dividedByTwo = 0;
    let dividedByThree = 0;
    let dividedByFour = 0;
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let a = input.shift();
        if (a % 2 === 0) {
            dividedByTwo++;
        }
         if (a % 3 === 0) {
            dividedByThree++;
        }
         if (a % 4 === 0) {
            dividedByFour++;
        }
 
    }
    let total = n;
    console.log(`${(dividedByTwo / total * 100).toFixed(2)}%`);
    console.log(`${(dividedByThree / total * 100).toFixed(2)}%`);
    console.log(`${(dividedByFour / total * 100).toFixed(2)}%`);
 
}
solve(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"])
