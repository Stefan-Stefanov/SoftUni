function searchForNum(input = [], commands = []) {
    commands.map(Number)
    let takeElement = commands[0];
    let deleteElement = commands[1];
    let searchElement = commands[2];
    let arr = input.slice(0, takeElement).slice(deleteElement);
    let counter = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[counter] === searchElement) {
            counter++
        }
        i++;
    }
    return `Number ${searchElement} occurs ${counter} times.`
}
searchForNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)