function solve(neededHr, days, overTimePpl) {
    neededHr = Number(neededHr);
    days = Number(days);
    overTimePpl = Number(overTimePpl);
    let overTimeHr = Math.floor((overTimePpl * days) * 2);
    let dayHr = Math.floor((days * 0.9) * 8);
    let totalHr = overTimeHr + dayHr;

    if (totalHr >= neededHr) {
        console.log(`Yes!${(totalHr - neededHr).toFixed(0)} hours left.`)
    } else {
        console.log(`Not enough time!${(neededHr - totalHr).toFixed(0)} hours needed.`)
    }
}