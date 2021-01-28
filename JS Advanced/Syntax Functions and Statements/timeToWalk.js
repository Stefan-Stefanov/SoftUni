function solve(steps, footprint, speedKm) {
    let speedM = speedKm * 1000 / 3600;
    let distance = steps * footprint;
    let restTime = Math.floor(distance / 500) * 60;
    let totalTime = distance/speedM + restTime;

    let hours = Math.floor(totalTime/3600).toFixed(0).padStart(2, "0");
    let min = Math.floor((totalTime/60)).toFixed(0).padStart(2, "0");
    let sec = (totalTime % 60).toFixed(0).padStart(2, "0");

    return `${hours}:${min}:${sec}`
}
console.log(solve(4000, 0.60, 5));