function solve(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);

    let cake = w * l;
    let i = 2;
    let cakePices = input[i];

    while (cakePices !== "STOP") {

        cakePices = input[i];
        if (cakePices == "STOP") {
            break;
        }
        cake -= cakePices;

        if (cake < 0) {
            break;
        }
        cakePices = input[i++];

    }
    if (cake <= 0) {
        console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`)
    } else {
        console.log(`${cake} pieces are left.`);
    }
}
solve(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])

