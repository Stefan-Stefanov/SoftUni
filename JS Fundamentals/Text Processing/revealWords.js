function solve(words, text) {
    let arrOfWords = words.split(", ");
    let arrOfText = text.split(" ");
    for (let el of arrOfWords) {
        let wordLength = el.length;
        if (arrOfText.includes("*".repeat(wordLength))) {
            let index = arrOfText.indexOf("*".repeat(wordLength));
            arrOfText.splice(index, 1, el);
        }
    }
    console.log(arrOfText.join(" "));
}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages')