function suitcase(input) {
    let volume = +input[0];
    let index = 1;
    let lastCounter = 0;
    let command = input[index++];
    let counter = 0;
    let isTrue = false;
    let bagVolume = 0;
    let spaceTaken = 0;
    while (command !== `End`) {
        counter++;
        bagVolume = +command;
        if (counter % 3 === 0) {
            bagVolume *= 1.1;
        }
        spaceTaken += bagVolume;
        if (spaceTaken > volume) {
            isTrue = true;
            break;
        }
        lastCounter++;
        command = input[index++];
    }
    if (command === `End`) {
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log(`No more space!`);
    }
    console.log(`Statistic: ${lastCounter} suitcases loaded.`);
}
solve(['550', '100', '252', '72', 'End']);
