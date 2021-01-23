function solve(input) {
    let parking = {};

    for (let el of input) {
        let [direction, carNumber] = el.split(", ");

        if (direction === "IN") {
            parking[carNumber] = +carNumber.slice(2, -2);
        } else if (direction === "OUT") {
            delete parking[carNumber];
        }
    }
    if (Object.keys(parking).length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        Object.keys(parking)
            .sort((a, b) => a.localeCompare(b))
            .forEach(el => {
                console.log(el);
            });
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);