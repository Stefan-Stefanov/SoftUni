function solve(input) {
    let i = 1;
    let command = input[i++];
    let minNum = Number(input[0])
    while (command !== "Stop") {
        let currentNum = Number(command);
        if (currentNum < minNum) {
            minNum = currentNum;

        }
        command = input[i++];
    }
    console.log(minNum);
}
solve(["100",
    "99",
    "80", "100",
    "70",
    "Stop"]);
