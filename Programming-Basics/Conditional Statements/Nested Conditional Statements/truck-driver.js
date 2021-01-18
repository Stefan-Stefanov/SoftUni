function solve(season, km) {
    km = Number(km);
    let totalIncome = 0;
    if (km <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            totalIncome = (km * 0.75) * 4;
        } else if (season === "Summer") {
            totalIncome = (km * 0.9) * 4;
        } else {
            totalIncome = (km * 1.05) * 4;
        }
    } else if (km <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            totalIncome = (km * 0.95) * 4;
        } else if (season === "Summer") {
            totalIncome = (km * 1.1) * 4;
        } else {
            totalIncome = (km * 1.25) * 4;
        }
    } else {
        totalIncome = (km * 1.45) * 4;
    }
    console.log(`${(totalIncome * 0.9).toFixed(2)}`)
}
