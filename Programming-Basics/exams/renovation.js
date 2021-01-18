function solve(input) {
    let h = Number(input[0]);
    let w = Number(input[1]);
    let percent = Number(input[2]) / 100;
    let finish = false;
    let totalQuadraticM = Math.ceil(h * w * 4);
    totalQuadraticM -= (totalQuadraticM * percent);
    let i = 3;
    let command = input[i];
    while (command !== "Tired!") {
        let paint = Number(input[i]);
        totalQuadraticM -= paint;
        if (totalQuadraticM <= 0) {
            finish = true;
            break;
        }
        command = input[++i];
    }
    if (finish) {
        if (totalQuadraticM < 0) {
            console.log(`All walls are painted and you have ${Math.abs(totalQuadraticM)} l paint left!`);
        } else {
            console.log("All walls are painted! Great job, Pesho!")
        }
    } else {
        console.log(`${totalQuadraticM} quadratic m left.`)
    }
}

solve(['3', '5', '10', '2', 'Tired!', '4', ]);