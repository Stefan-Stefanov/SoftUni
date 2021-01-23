function solve(text, word) {
let filtered = text.split(" ").filter(x => x == word).length;
console.log(filtered);
}
solve("This is a word and it also is a sentence",
"is");