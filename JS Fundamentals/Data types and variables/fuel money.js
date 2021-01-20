function solve(distance, people, price) {
    distance = Number(distance) / 100;
    let neededFuel = distance * 7;
    neededFuel += people * 0.1
    let neededSum = neededFuel * price;

    console.log(`Needed money for that trip is ${neededSum}lv.`);
}
solve(260, 9, 2.49)
solve(90, 14, 2.88)