function solve(input) {
    let wantedHeight = +input[0];
    let index = 1;
    let isTrue = false;
    let counter = 0;

    for (let i = wantedHeight - 30; i <= wantedHeight; i += 5) {
        let failedJumpsCounter = 0;
        while (i <= wantedHeight) {
            let currentJump = +input[index++];
            counter++;
            if (currentJump <= i) {
                failedJumpsCounter++;
            } else if (currentJump > i) {
                if (currentJump > wantedHeight && i === wantedHeight) {
                    console.log(`Tihomir succeeded, he jumped over ${wantedHeight}cm after ${counter} jumps.`);
                    isTrue = true;
                }
                break;
            }
            if (failedJumpsCounter >= 3) {
                console.log(`Tihomir failed at ${i}cm after ${counter} jumps.`);
                isTrue = true;
                break;
            }
        }
        if (isTrue) {
            break;
        }

    }

} 
solve([
    '250', '225', '224',
    '225', '228', '231',
    '235', '234', '235',
    ''
]);
// function solve(input) {
//     let wishHight = Number(input[0]);
//     let startHight = wishHight - 30;
//     let fail = false;
//     let jumps = 1;
//     let i = 1;
//     let nextJump = Number(input[i])
//     while (nextJump !== wishHight) {
//         nextJump = Number(input[i++]);
//         let coutFail = 0;

//         while (nextJump <= startHight) {
//             coutFail++;
//             nextJump = Number(input[i++]);
//             jumps++;
//             if (coutFail === 3) {
//                 break;
//             }
//         }
//         if (nextJump >= wishHight) {
//             break;
//         } else if (coutFail === 3) {
//             fail = true;
//             break;
//         }
//         startHight += 5;
//         jumps++;
//     }
//     if (fail) {
//         console.log(`Tihomir failed at ${startHight}cm after ${jumps - 1} jumps.`);
//     } else {
//         console.log(`Tihomir succeeded, he jumped over ${startHight}cm after ${jumps} jumps.`);
//     }
// }
// solve([
//     '250', '225', '224',
//     '225', '228', '231',
//     '235', '234', '235',
//     ''
// ]); моето  = 60% 
