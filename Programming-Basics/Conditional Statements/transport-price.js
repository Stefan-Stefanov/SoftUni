function solve(km, trip) {
    km = Number(km);
    let sum = 0;

    if (km >= 100) {
        sum = km * 0.06;
    } else if (km >= 20) {
        sum = km * 0.09;
    } else {
        if (trip === "day") {
            sum = 0.7 + (km * 0.79);
        } else if (trip === "night") {
            sum = 0.7 + (km * 0.90);
        }
    }
    console.log(sum.toFixed(2));
}