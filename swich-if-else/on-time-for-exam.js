function solve(examHr, examMin, arriveHr, arriveMin) {
    examHr = Number(examHr);
    examMin = Number(examMin);
    arriveHr = Number(arriveHr);
    arriveMin = Number(arriveMin);

    let totalExamMins = (examHr * 60) + examMin;
    let totalArrivalMins = (arriveHr * 60) + arriveMin;
    let time = totalExamMins - totalArrivalMins;


    if (time < 0) {
        console.log("Late");
        time = Math.abs(time);
        if (time < 60) {
            console.log(`${time} minutes after the start`);
        } else {
            let mins = time % 60;
            let hours = Math.floor(time / 60);
            if (mins < 10) {
                console.log(`${hours}:0${mins} hours after the start`);
            } else {
                console.log(`${hours}:${mins} hours after the start`);
            }
        }
    } else if (time <= 30) {
        console.log("On time")
        if (time > 0) {
            console.log(`${time} minutes before the start`)
        }
    } else {
        console.log("Early");
        if (time < 60) {
            console.log(`${time} minutes before the start`);
        }
       
    }
    let hours = Math.floor(time / 60);
    let mins = time % 60;


    if (mins < 10) {
        console.log(`${hours}:0${mins} hours before the start`);

    } else {
        console.log(`${hours}:${mins} hours before the start`);
    }

}

solve("11", "30", "10", "55")
