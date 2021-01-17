function solve(input) {
let num = Number(input[0]);
    let sum = 0;
let i = 1;
while (sum < num) {
    let nextNum = Number(input[i++]);
    sum += nextNum;
}
console.log(sum);

}
solve(["100",
    "10",
    "20",
    "30",
    "40"])
