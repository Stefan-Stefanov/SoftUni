function solve(season, group, numkids, nights) {
    numkids = Number(numkids);
    nights = Number(nights);
    let sport = "";
    let hotelPrice = 0;

    if (season === "Winter") {
        if (group === "boys") {
            hotelPrice = numkids * 9.6;
            sport = "Judo"
        } else if (group === "girls") {
            hotelPrice = numkids * 9.6;
            sport = "Gymnastics"
        } else {
            hotelPrice = numkids * 10;
            sport = "Ski"
        }
    } else if (season === "Spring") {
        if (group === "boys") {
            hotelPrice = numkids * 7.2;
            sport = "Tennis"
        } else if (group === "girls") {
            hotelPrice = numkids * 7.2;
            sport = "Athletics"
        } else {
            hotelPrice = numkids * 9.5;
            sport = "Cycling";
        }
    } else if (season === "Summer") {
        if (group === "boys") {
            hotelPrice = numkids * 15;
            sport = "Football"
        } else if (group === "girls") {
            hotelPrice = numkids * 15;
            sport = "Volleyball"
        } else {
            hotelPrice = numkids * 20;
            sport = "Swimming"
        }
    }
    let sum = hotelPrice * nights;
    if (numkids >= 50) {
        sum *= 0.5;
    } else if (numkids >= 20) {
        sum *= 0.85;
    } else if (numkids >= 10) {
        sum *= 0.95;
    }
    console.log(`${sport} ${sum.toFixed(2)} lv.`)
}