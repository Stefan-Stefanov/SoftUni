function solve(juniors, seniors, condition) {
    juniors = Number(juniors);
    seniors = Number(seniors);
    let sumJ = 0;
    let sumS = 0;
    let totalPpl = juniors + seniors;
    switch (condition) {
        case "trail":
            sumJ = juniors * 5.5;
            sumS = seniors * 7;
            break;
        case "downhill":
            sumJ = juniors * 12.25;
            sumS = seniors * 13.75;
            break;
        case "road":
            sumJ = juniors * 20;
            sumS = seniors * 21.5;
            break;
        case "cross-country":
            sumJ = juniors * 8;
            sumS = seniors * 9.5;
            if (condition === "cross-country" && totalPpl >= 50) {
                sumJ *= 0.75;
                sumS *= 0.75;
            }
            break;
    }
    let outcome = (sumJ + sumS) * 0.95;
    console.log(outcome.toFixed(2));
}