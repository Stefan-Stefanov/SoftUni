function charInRange(a, b) {
    let firstCode = a.charCodeAt(0);
    let secondCode = b.charCodeAt(0);
    let start = "";
    let end = "";
    let line = "";
    fromFirstToEnd(firstCode, secondCode)    
    return printLine(start, end);
    function fromFirstToEnd(firstCode, secondCode) {
        if (firstCode < secondCode) {
            start = firstCode;
            end = secondCode;
        } else {
            start = secondCode;
            end = firstCode;
        }
    }
    function printLine(start, end) {
        for (let i = start + 1; i < end; i++) {
            line += String.fromCharCode(i) + " ";
        }
        return line;
    }
}
console.log(charInRange("#", ":"));