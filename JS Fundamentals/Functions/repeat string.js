function concatString(string, times) {
    let result = "";

    for (let i = 0; i < times; i++) {
        result += string;        
    }
    return result;
}
concatString("abc", 3);