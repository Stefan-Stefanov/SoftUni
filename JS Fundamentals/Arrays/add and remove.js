function solve(array) {
    let array2 = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        let currentNum = i + 1;
        if (command === "add") {
            array2.push(currentNum);
        } else if (command === "remove") {
            array2.pop(currentNum - 1);
        }
    }
    if (array2.length === 0) {
        console.log("Empty");
    } else {
        console.log(array2.join(" "));
    }    
}
solve(['remove', 'remove', 'remove'])