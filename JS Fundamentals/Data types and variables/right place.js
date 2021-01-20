function rightPlace(word, char, trueWord) {
    let res = word.replace('_', char);
    
    if (res === trueWord) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');