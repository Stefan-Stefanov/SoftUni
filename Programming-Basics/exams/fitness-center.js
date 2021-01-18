function solve(input) {
    let people = Number(input[0]);
    let countBack = 0;
    let countChest = 0;
    let countLegs = 0;
    let countAbs = 0;
    let countProteinShake = 0;
    let countProteinBar = 0;
    let workout = 0;
    let protein = 0;
    for (let i = 1; i <= people; i++) {
        let count = input[i];
        switch (count) {
            case "Back":
            case "Legs":
            case "Chest":
            case "Abs":
                workout++;
                break;
            case "Protein shake":
            case "Protein bar":
                protein++;
                break;
        } switch (count) {
            case "Back":
                countBack++;
                break;
            case "Chest":
                countChest++;
                break;
            case "Legs":
                countLegs++;
                break;
            case "Abs":
                countAbs++;
                break;
            case "Protein shake":
                countProteinShake++;
                break;
            case "Protein bar":
                countProteinBar++;
                break;
        }
    }
    workout = (workout / people) * 100;
    protein = (protein / people) * 100;
    console.log(`${countBack} - back`);
    console.log(`${countChest} - chest`);
    console.log(`${countLegs} - legs`);
    console.log(`${countAbs} - abs`);
    console.log(`${countProteinShake} - protein shake`);
    console.log(`${countProteinBar} - protein bar`);
    console.log(`${workout.toFixed(2)}% - work out`);
    console.log(`${protein.toFixed(2)}% - protein`);

}
solve([
    '10', 'Back',
    'Chest', 'Legs',
    'Abs', 'Protein shake',
    'Protein bar', 'Protein shake',
    'Protein bar', 'Legs',
    'Abs', ''
])