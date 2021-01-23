function houseParty(input = []) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        let text = input[i].split(" ");
        let name = text[0];
        let command = text[2];
        if (command !== 'not') {
            if (arr.includes(name)) {
                console.log(`${name} is already in the list!`);
                continue;
            }
            arr.push(name);
        } else {
            if (!arr.includes(name)) {
                console.log(`${name} is not in the list!`);
                continue;
            }
            arr = arr.filter(x => x != name);
        }
    }
    console.log(arr.join("\n"));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)
