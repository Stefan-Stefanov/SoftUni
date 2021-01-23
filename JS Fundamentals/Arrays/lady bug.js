function solve(arr) {
    let sizeOfField = arr[0];
    let ladybugsPositions = arr[1].split(' ').map(Number);
    let ladybugsArray = [];

    for (let i = 0; i < sizeOfField; i++) {
        ladybugsArray.push(0);
    }

    for (let i = 0; i < sizeOfField; i++) {
        let ladybugIndex = ladybugsPositions[i];
        if (ladybugIndex >= 0 && ladybugIndex < sizeOfField) {
            ladybugsArray[ladybugIndex] = 1;
        }
    }

    for (let i = 2; i < arr.length; i++) {
        let [ladybugIndex, command, jumpLength] = arr[i].split(' ');
        ladybugIndex = +ladybugIndex;
        jumpLength = +jumpLength;

        if (ladybugsArray[ladybugIndex] !== 1 || ladybugIndex < 0 || ladybugIndex >= ladybugsArray.length) {
            continue;
        }
        if (jumpLength < 0) {
            jumpLength = Math.abs(jumpLength);
            if (command === 'right') {
                command = 'left';
            } else if (command === 'left') {
                command = 'right';
            }
        }
        ladybugsArray[ladybugIndex] = 0;
        if (command === 'right') {
            let newPosition = ladybugIndex + jumpLength;
            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition + jumpLength;
            }
            if (newPosition <= ladybugsArray.length) {
                ladybugsArray[newPosition] = 1;
            }

        } else {
            let newPosition = ladybugIndex - jumpLength;

            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition - jumpLength;
            }
            if (newPosition >= 0) {
                ladybugsArray[newPosition] = 1;
            }
        }
    }
    console.log(ladybugsArray.join(' '));
}
solve([3, '0 1', '0 right 1', '2 right 1']);

// function solve(array) {
//     let fieldSize = array[0];
//     let bugPosition = array[1].split(" ").map(Number);
//     let bugArray = [];

//     for (let i = 0; i < fieldSize; i++) {
//         bugArray.push(0);
//     }
//     for (let i = 0; i < fieldSize; i++) {
//         let ladybugIndex = bugPosition[i];
//         if (ladybugIndex >= 0 && ladybugIndex < fieldSize) {
//             bugArray[ladybugIndex] = 1;
//         }
//     }
//     for (let i = 2; i < array.length; i++) {
//         let bugMove = array[i].split(" ");
//         let fromIndex = Number(bugMove[0]);
//         let command = bugMove[1];
//         let toIndex = Number(bugMove[2]);
//         if (bugArray[fromIndex] !== 1 || fromIndex < 0 || fromIndex >= bugArray.length) {
//             continue;
//         }
//         if (toIndex < 0) {
//             toIndex = Math.abs(toIndex);
//             if (command === 'right') {
//                 command = 'left';
//             } else if (command === 'left') {
//                 command = 'right';
//             }
//         }
//         for (let i = toIndex; i < bugArray.length; i++) {
//             bugArray[fromIndex] = 0;
//             if (command === "right") {
//                 let newPosition = fromIndex + toIndex;
//                 if (bugArray[newPosition] === 1) {
//                     newPosition += toIndex;
//                 }
//                 if (newPosition <= bugArray.length) {
//                     bugArray[newPosition] = 1;
//                 }
//             } else {
//                 let newPosition = fromIndex - toIndex;
//                 if (bugArray[newPosition] === 1) {
//                     newPosition -= toIndex;
//                 }
//                 if (newPosition >= 0) {
//                     bugArray[newPosition] = 1;
//                 }
//             }
//         }
//     }
//     console.log(bugArray.join(" "));
// }
// solve([3, '0 1', '0 right 1', '2 right 1'])