function solve(input) {
    let arrNames = input.shift().split(", ");
    let command = input.shift();
    let objNames = {};
    arrNames.forEach(el => {
        objNames[el] = 0;
    });
    while (command != "end of race") {
        const regNames = /[A-Za-z]+/g
        let name = command.match(regNames).join("");
        if (objNames.hasOwnProperty(name)) {
            const regScore = /[0-9]+/g
            let score = command.match(regScore)
                .join("")
                .split("")
                .map(Number)
                .reduce((a, b) => a + b, 0);
            objNames[name] += score;
        }

        command = input.shift();
    }
    let finalists = Object.keys(objNames).sort((a, b) => objNames[b] - objNames[a]);
    console.log(`1st place: ${finalists[0]}\n2nd place: ${finalists[1]}\n3rd place: ${finalists[2]}`);
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])