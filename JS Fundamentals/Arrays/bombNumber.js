function bombNum(battleground, input) {
    let bomb = input[0];
    let power = input[1];

    while (battleground.includes(bomb)) {
        let index = battleground.indexOf(bomb);
        let elementsToRemove = power * 2 + 1;
        let startIndex = index - power;

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        battleground.splice(startIndex, elementsToRemove);

    }
    let print = battleground.reduce((a, b) => a + b, 0);
    console.log(print);
}
bombNum([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)