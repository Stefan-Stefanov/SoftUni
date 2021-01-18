function solve(totalMin, secundsControl, timeLength, secFor100M) {
    totalMin = Number(totalMin);
    secundsControl = Number(secundsControl);
    timeLength = Number(timeLength);
    secFor100M = Number(secFor100M);

    let totalSec = (totalMin * 60) + secundsControl;
    let secTimeLength = (timeLength / 120) * 2.5;
    let totalTime = (timeLength / 100) * secFor100M - secTimeLength;

    if (totalTime <= totalSec) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${totalTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(totalTime - totalSec).toFixed(3)} second slower.`)
    }
}
solve("1", "20", "1546", "12");