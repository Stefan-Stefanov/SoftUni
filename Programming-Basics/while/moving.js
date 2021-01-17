function solve(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let volume = w * l * h;
    let i = 3;
    let boxes = input[i];

    while (boxes !== "Done") {
        
        boxes = input[i];
        if (boxes == "Done") {
            break;
        }
        volume -= boxes;

        if (volume < 0) {
            break;
        }
        boxes = input[i++];

    }
    if (volume <= 0) {
        console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`)
    } else {
        console.log(`${volume} Cubic meters left.`);
    }
}
solve(["10",
    "1",
    "2",
    "4",
    "6","11" ,
    "Done"])


