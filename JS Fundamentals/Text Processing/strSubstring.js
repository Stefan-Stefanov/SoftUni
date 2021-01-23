function solve(word, text) {
    let arr = text.split(" ").map(x => x.toUpperCase());
    if (arr.includes(word.toUpperCase())) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
solve('javascripts',
    'JavaScript is the best programming language')