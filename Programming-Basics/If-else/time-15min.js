function time (hour, minutes) {
    hour = Number(hour);
    minutes = Number(minutes);

    let hr = hour * 60;
    let totaltime = minutes + hr + 15;
    let min = Math.floor(totaltime % 60);
    let hrs = Math.floor(totaltime / 60);

    if (hrs > 23) {
        hrs = 0;
    } 
    
    if (min < 10) {
        
        console.log(`${hrs}:0${min}`);
    } else {
        console.log(`${hrs}:${min}`);
    }
    
}
time ("23","59");