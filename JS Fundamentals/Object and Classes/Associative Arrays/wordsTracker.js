function solve(input) {
    let generalWords = input.shift().split(" ");
    let wordOccurrence = {};

    for (let el of generalWords) {
        let filtered = input.filter(x => x === el);
        wordOccurrence[el] = filtered.length;
    }
    Object.entries(wordOccurrence).sort((a, b) => b[1] - a[1])
        .forEach(element => {
            let [word, count] = element;
            console.log(`${word} - ${count}`);
        });
}
solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);