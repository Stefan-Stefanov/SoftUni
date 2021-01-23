function solve(string) {
    let array = string.split(" ")
        .map((el) => el = el.toLowerCase());
    let wordOccurrence = new Map();

    for (let el of array) {
        if (!wordOccurrence.has(el)) {
            wordOccurrence.set(el, 0)
        }
        wordOccurrence.set(el, wordOccurrence.get(el) + 1);
    }

    return Array.from(wordOccurrence.keys())
    .filter(x => wordOccurrence.get(x) % 2 === 1)
    .join(" ");
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// ползва се мап защото мап не пренарежда когато има цифри за ключ, а ги реди както ги взима
// function solve(string) {
//     let array = string.split(" ").map((el) => el = el.toLowerCase());
//     let wordOccurrence = [];

//     for (let el of array) {
//         let filtered = array.filter(x => x === el);
//         if (filtered.length % 2 === 1 && !wordOccurrence.includes(el)) {
//             wordOccurrence.push(el)
//         }        
//     }
//     console.log(wordOccurrence.join(" "));
// }