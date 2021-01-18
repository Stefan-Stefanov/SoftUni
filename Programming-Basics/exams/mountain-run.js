function solve(record, distance, seconds) {
    record = Number(record);
    distance = Number(distance);
    seconds = Number(seconds);

    let distanceSeconds = distance * seconds;
    let delaytime = Math.floor(distance / 50) * 30;
    let totalTime = distanceSeconds + delaytime;

    if (totalTime < record) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}
solve("1377", "389", "3");
