function solve(input) {
    let name = input[0]
    let i = 1;
    let command = input[i];
    let startPoits = 301;
    let finish = false;
    let shots = 0;
    let nonCounter = 0;
    while (command !== "Retire") {
        let field = input[i++];
        let currentPoits = Number(input[i]);

        switch (field) {
            case "Double":
                currentPoits *= 2;
                break;
            case "Triple":
                currentPoits *= 3;
                break;
        }
        if (currentPoits > startPoits) {
            command = input[++i];
            nonCounter++;
            continue;
        } else {
            startPoits -= currentPoits;
        }

        shots++;

        if (startPoits === 0) {
            finish = true;
            break;
        }
        command = input[++i];
    }
    if (finish) {
        console.log(`${name} won the leg with ${shots} shots.`);
    } else if (command === "Retire") {
        console.log(`${name} retired after ${nonCounter} unsuccessful shots.`)
    }
}
solve(["Michael van Gerwen", "Triple", "20",
    "Triple", "19", "Double", "10", "Single", "3",
    "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"]);