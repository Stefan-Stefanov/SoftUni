function solve(input = []) {
    const colors = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }
    const bigCards = {
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }
    let objOfNames = {};

    for (let el of input) {
        let [name, cardList] = el.split(": ");
        cardList = cardList.split(", ");

        if (!objOfNames.hasOwnProperty(name)) {
            objOfNames[name] = [];
        }
        objOfNames[name].push(...cardList);
    }
    Object.keys(objOfNames).forEach(key => {
        let cardArr = new Set(objOfNames[key]);
        let sum = 0;
        Array.from(cardArr).forEach(card => {
            let el = card.split("");
            let color = el.pop();
            let cardNum = el.join("");
            if (isNaN(cardNum)) {
                cardNum = bigCards[cardNum];
            }
            sum += colors[color] * Number(cardNum);
        });
        console.log(`${key}: ${sum}`);
    });
}
solve(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']
);
// for (let el of input) {
//     let [name, cardList] = el.split(": ");
//     cardList = cardList.split(", ");

//     if (!objOfNames.hasOwnProperty(name)) {
//         objOfNames[name] = new Set();
//     }
//     for (let el of cardList) {
//         objOfNames[name].add(el);
//     }        
// }
// for (let el of Object.entries(objOfNames)) {
//     let sum = 0;
//     for(let i of el[1]) {
//         let el = i.split("");
//         let color = el.pop();
//         let cardNum = el.join("");
//         if (isNaN(cardNum)) {
//             cardNum = bigCards[cardNum];
//         }
//         sum += colors[color] * Number(cardNum);
//     }
//     console.log(`${el[0]}: ${sum}`);
// }