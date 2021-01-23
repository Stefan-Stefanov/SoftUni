function chekNums(a, b, c) {
    let result = "";
    if (a >= 0 && b >= 0 && c >= 0) {
        result = "Positive";
    } else if (a === 0 || b === 0 || c === 0) {
        result = "Positive";
    } else if (a < 0 && b < 0 && c < 0) {
        result = "Negative";
    } else if ((a < 0 && b < 0) || (a < 0 && c < 0) || (b < 0 && c < 0)) {
        result = "Positive";
    } else {
        result = "Negative"
    }
    console.log(result);
}