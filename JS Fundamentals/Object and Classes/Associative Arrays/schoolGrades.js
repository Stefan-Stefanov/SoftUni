function solve(input) {
    let students = {};

    for (let line of input) {
        let tokens = line.split(" ");
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!students.hasOwnProperty(name)) {
            students[name] = [];
        }
        let existing = students[name];
        for (let grade of grades) {
            existing.push(grade);
        }
    }
    let sorted = Object.entries(students)
        .sort(compareAverage);

    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(", ")}`);
    }
    function compareAverage([nameA, gradesA], [nameB, gradesB]) {
        let avgA = gradesA.reduce((a, b) => a + b, 0) / gradesA.length;
        let avgB = gradesB.reduce((a, b) => a + b, 0) / gradesB.length;
        
        return avgA - avgB;
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);