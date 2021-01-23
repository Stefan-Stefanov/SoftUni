function solve(arr) {
    let destructuring = arr.shift().split(" ").map(Number);

    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum] = arr[i].split(" ");
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case "Add":
                destructuring.push(firstNum);
                break;
            case "Remove":
                destructuring = destructuring.filter(x => x !== firstNum);
                break;
            case "RemoveAt":
                destructuring.splice(firstNum, 1);
                break;
            case "Insert":
                destructuring.splice(secondNum, 0, firstNum);
                break;
        }
    }
    return destructuring.join(" ");
}
console.log(solve(['4 19 2 53 6 43',
    'Remove 2',
    'Add 3',
    'RemoveAt 1',
    'Insert 8 3']));