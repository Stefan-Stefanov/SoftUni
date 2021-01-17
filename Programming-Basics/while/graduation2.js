function solve(input) {
    let i = 0;
    let student = input[i++];
    let failed = 0;
    let graduate = 1;
let total = 0;

let grades = Number(input[i++]);
    while (graduate <= 12) {

if (grades < 4) {
    failed++;

    if (failed === 2) {
        break;
    }
    
} else {
    total += grades;
    graduate++
}
grades = Number(input[i++]);
    }
if (failed < 2) {
    let avgGrade = (total / 12).toFixed(2);
    console.log(`${student} graduated. Average grade: ${avgGrade}`);
} else {
    console.log(`${student} has been excluded at ${graduate} grade`);
}
}