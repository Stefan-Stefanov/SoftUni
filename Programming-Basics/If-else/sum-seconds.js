function sumSeconds (firstTime, secoundTime, thirdTime) {
    
    firstTime = Number(firstTime);
    secoundTime = Number(secoundTime);
    thirdTime = Number(thirdTime);
    let totalTime = firstTime + secoundTime + thirdTime;
    let minutes = Math.floor(totalTime / 60);
    let secounds = totalTime % 60;

    if (secounds < 10) {
        console.log(`${minutes}:0${secounds}`);

    } else {
        console.log(`${minutes}:${secounds}`);
    }
}
sumSeconds("35" , "45" , "44");