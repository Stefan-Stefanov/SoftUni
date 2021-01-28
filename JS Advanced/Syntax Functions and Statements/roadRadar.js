function solve(speed, road) {
    let roadLimit = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20,
    };
    let speedLimit = roadLimit[road];
    
    if (speed > speedLimit) {
        let differenceSpeed = speed - speedLimit;
        let status = "";
        if (differenceSpeed <= 20) {
            status = "speeding";
        } else if (differenceSpeed <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving"
        }
        return `The speed is ${differenceSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    } else {
        return `Driving ${speed} km/h in a ${speedLimit} zone`
    }
}
console.log(solve(120, "interstate"));