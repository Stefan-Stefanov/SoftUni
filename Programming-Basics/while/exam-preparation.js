function solve(input) {
    let badScores = Number(input[0]);
    let badCout = 0;
    let lastProblem = "";
    let totalGrades = 0;
    let target = false;
    let i = 1;
    let command = input[i];
    let gradeSum = 0;

    while (command !== "Enough") {
        i++;
        let grade = Number(input[i]);
        gradeSum += grade;
        if (grade <= 4) {
            badCout++;
        }
        if (badCout === badScores) {
            target = true;
            break;
        }
        totalGrades++;
        i++;
        lastProblem = command;
        command = input[i];
    }
    if (target) {
        console.log(`You need a break, ${badCout} poor grades.`);

    } else {
        let avGrade = gradeSum / totalGrades;
        console.log(`Average score: ${avGrade.toFixed(2)}`);
        console.log(`Number of problems: ${totalGrades}`);
        console.log(`Last problem: ${lastProblem}`);

    }
}
solve(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])


