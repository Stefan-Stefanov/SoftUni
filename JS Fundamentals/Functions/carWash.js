function washCar(array) {
    let sum = 0;
    return sumPercent(array);

    function sumPercent(command) {
        for (const command of array) {
            switch (command) {
                case "soap":
                    sum += 10;
                    break;
                case "water":
                    sum *= 1.2;
                    break;
                case "vacuum cleaner":
                    sum *= 1.25;
                    break;
                case "mud":
                    sum *= 0.9;
                    break;
            }
        }
        return `The car is ${sum.toFixed(2)}% clean.`
    }
}
console.log(washCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));