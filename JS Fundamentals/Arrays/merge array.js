function solve(firstArr, secondArr) {
    let thirdArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            let sum = Number(firstArr[i]) + Number(secondArr[i]);
            thirdArr.push(sum);
        } else {
            thirdArr.push(firstArr[i] + secondArr[i]);
        }
    }
    console.log(thirdArr.join(" - "));
}