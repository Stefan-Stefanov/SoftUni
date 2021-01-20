function solve(a, b, c) {
    let array = [a, b ,c];
    array.sort((a, b) => b - a);
    let biggestNum = array[0];
    console.log(biggestNum);
}
solve(-2 ,7 , 3)