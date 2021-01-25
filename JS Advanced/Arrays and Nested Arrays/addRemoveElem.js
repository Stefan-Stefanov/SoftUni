function solve(input = []) {
    let arr = [];
    let num = 1;
    for (const el of input) {
        switch (el) {
            case "add":
                arr.push(num);
                break;
            case "remove":
                arr.pop();
                break;
        }
        num++;
    }
    return arr.length <= 0 ? "Empty" : arr.join("\n")
}
console.log(solve(["add"]
));