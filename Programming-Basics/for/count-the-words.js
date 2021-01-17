function solve(message) {
    let wordsCount = 1;
    for (let i = 0; i < message.length; i++) {
        let current = message[i];

        if (current === " ") {
            wordsCount++;
        }
    }
    if (wordsCount > 10) {
        console.log(`The message is too long to be send! Has ${wordsCount} words.`);
    } else {
        console.log("The message was send successfully!");
    }
}
solve("This message has exactly eleven words. One more as it's allowed!")