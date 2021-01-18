function solve(input) {
    let totalEggs = Number(input[0]);
    let i = 1;
    let closed = input[i++];
    let flag = false;
    let soledEggs = 0;
    while (closed !== "Close") {
        if (closed === "Buy") {
            let numEggs = Number(input[i++]);
            if (numEggs > totalEggs) {
                flag = true;
                break;
            }
            soledEggs += numEggs;
            totalEggs -= numEggs;
        } else if (closed === "Fill") {
            let numEggs = Number(input[i++]);
            totalEggs += numEggs;
        }
        if (flag) {
            break;
        }
        closed = input[i++];
    }
    if (closed === "Close") {
        console.log("Store is closed!");
        console.log(`${soledEggs} eggs sold.`);
    } else if (flag) {
        console.log("Not enough eggs in store!");
        console.log(`You can buy only ${totalEggs}.`);
    }
}
solve(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"])