function solve(input) {
    let book = input[0];
    let i = 1;
    let countBook = 0;
    let searchBook = input[i];
    while (i !== input.length) {
        searchBook = input[i];
        countBook++;
        if (searchBook === book) {
            console.log(`You checked ${countBook - 1} books and found it.`)
        }
        if (searchBook == "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${countBook - 1} books.`);
            break;
        }
        i++;
    }

}
solve(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])



