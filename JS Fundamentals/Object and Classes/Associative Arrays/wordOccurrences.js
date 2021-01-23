function solve(input) {
    let wordOccurrence = {};

    for (let word of input) {
        if (!wordOccurrence.hasOwnProperty(word)) {
            wordOccurrence[word] = 0;
        }
        wordOccurrence[word] += 1;

    }
    Object.entries(wordOccurrence).sort((a, b) => b[1] - a[1])
        .forEach(element => {
            let [word, count] = element;
            console.log(`${word} -> ${count} times`);
        });
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);