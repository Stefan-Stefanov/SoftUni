function solve(centurie) {
    let years = Number(centurie) * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let min = hours * 60;

    console.log(`${centurie} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`);
}
solve(1);
solve(5)