function solve(input) {
    let i = 0;
    let totalSoap = Number(input[i++]) * 750;
    let command = input[i];
    let couter = 0;
    let neededSoap = 0;
    let finish = false;
    let totalDishes = 0;
    let totalDishes2 = 0;
    while (command !== "End") {
        let dishes = Number(input[i]);
        couter++;
        if (couter % 3 === 0) {
            totalDishes2 += dishes;
            neededSoap = dishes * 15;
        } else {
            neededSoap = dishes * 5;
            totalDishes += dishes;
        }
        totalSoap -= neededSoap;
        if (totalSoap < 0) {
            finish = true;
            break;
        }
        command = input[++i];
    }
    if (finish) {
        console.log(`Not enough detergent, ${Math.abs(totalSoap)} ml. more necessary!`);

    } else {
        console.log("Detergent was enough!");
        console.log(`${totalDishes} dishes and ${totalDishes2} pots were washed.`);
        console.log(`Leftover detergent ${totalSoap} ml.`);
    }
}
solve(['2', '53', '65', '55', 'End']);