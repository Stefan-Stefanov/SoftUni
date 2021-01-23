function manipulator(numbers = [], arr = []) {
    let splitedArr = arr.toString().split(",");

    for (let i = 0; i < arr.length; i++) {
        let strArr = splitedArr[i].split(" ");
        let command = strArr.shift();
        let index = Number(strArr.shift());
        let n = 0;
        switch (command) {
            case "add":
                index = Number(index);
                let secondNum = Number(strArr[0]);
                numbers.splice(index, 0, secondNum);
                break;
            case "addMany":
                let j = 0;
                strArr.reverse();
                while (j < strArr.length) {
                    n = Number(strArr[j]);
                    numbers.splice(index, 0, n);
                    j++
                }
                break;
            case "contains":
                if (numbers.includes(index)) {
                    console.log(numbers.indexOf(index));
                } else {
                    console.log(-1);
                }
                break;
            case "remove":
                numbers.splice(index, 1);
                break;
            case "shift":
                while (index > 0) {
                    numbers.push(numbers.shift());
                    index--;
                }
                break;
            case "sumPairs":
                let newNumbers = [];
                let lastNum = 0;
                let isOdd = false;
                if (numbers % 2 === 1) {
                    lastNum = numbers.pop();
                    isOdd = true;
                }
                for (let j = 0; j < numbers.length; j += 2) {
                    let sum = numbers[j] + numbers[j + 1];
                    newNumbers.push(sum);
                }
                numbers = newNumbers;
                if (isOdd) {
                    newNumbers.push(lastNum);
                }
                break;
            case "print":
                console.log(`[ ${numbers.join(", ")} ]`);
                break;
        }
    }
}
manipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]); 