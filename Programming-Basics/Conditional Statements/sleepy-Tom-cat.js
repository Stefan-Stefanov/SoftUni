function solve(days) {
    days = Number(days);

    let goodSleep = 30000;
    let workDays = (365 - days) * 63;
    let freeDays = days * 127;
    let totalPlay = workDays + freeDays;

    
    if (totalPlay > goodSleep) {
        let totalHr = (totalPlay - goodSleep) / 60;
        let totalMin = (totalPlay - goodSleep) % 60;
        console.log("Tom will run away");
        console.log(`${Math.floor(totalHr)} hours and ${totalMin} minutes more for play`)
    } else {
        let totalHr = (goodSleep - totalPlay) / 60;
        let totalMin = (goodSleep - totalPlay) % 60;
        console.log("Tom sleeps well");
        console.log(`${Math.floor(totalHr)} hours and ${totalMin} minutes less for play`);
    }
}