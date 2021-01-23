function solve(array1, array2) {
    let sum = 0;
    let isEqual = true;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        } else {
            array1[i] = Number(array1[i]);
            sum += array1[i]
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['10', '20', '30'], ['10', '20', '30'])