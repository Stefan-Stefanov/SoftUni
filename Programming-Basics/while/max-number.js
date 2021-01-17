function solve(input) {
    let i = 1;
    let command = input[i++];
    let maxNum = Number(input[0])
    while (command !== "Stop") {
        let currentNum = Number(command);
        if (currentNum > maxNum) {
            maxNum = currentNum;

        }
        command = input[i++];
    }
    console.log(maxNum);
}
solve(["100",
    "99",
    "80",
    "70",
    "Stop"])
