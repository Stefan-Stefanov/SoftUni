function solve(record, distance, seconds) {
    record = Number(record);
    distance = Number(distance);
    seconds = Number(seconds);

    let distanceSeconds = distance * seconds;
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = distanceSeconds + delay;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
} 
solve("10464", "1500", "20")
