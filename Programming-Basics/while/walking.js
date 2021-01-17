function solve(input) {

    let goal = 10000;
    let sum = 0;
    let i = 0;
    let command = input[i];
    while (command !== "Going home") {
        command = Number(input[i]);
        sum += command;

        if (sum >= goal) {
            break;
        }
        i++;
        command = input[i];
    }
    if (command == "Going home") {
        i++
        command = Number(input[i]);
        sum += command;

    }
    if (sum >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${sum - goal} steps over the goal!`);

    }
    if (sum < goal) {
        console.log(`${goal - sum} more steps to reach goal.`);

    }
}


solve(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])


