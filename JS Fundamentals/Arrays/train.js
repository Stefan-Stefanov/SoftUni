function solveTrain(input = []) {
    let wagons = input.shift().split(" ").map(Number);
    let maxPeople = Number(input.shift());
    let people = 0;
    for (let i = 0; i < input.length; i++) {
        let command = input[i].toString().split(" ");
        if (command[0] === "Add") {
            command[1] = Number(command[1]);
            wagons.push(command[1]);
        } else {
            let k = 0;
            while (k < input.length) {
                command[0] = Number(command[0]);
                people = Number(wagons[k]);
                let sum = 0;
                sum = people + command[0];
                if (sum <= maxPeople) {
                    wagons.splice(k, 1, sum);
                    break;
                }
                k++;
            }
        }
    }
    console.log(wagons.join(" "));
}
solveTrain(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);