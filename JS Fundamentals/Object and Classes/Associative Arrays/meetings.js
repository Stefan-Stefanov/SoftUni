function solve(input) {
    let calendar = {};

    for (let line of input) {
        let [day, name] = line.split(" ");
        if (calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            calendar[day] = name;
        }
    }
    // for(let [day, name] of Object.entries(calendar)) {
    //     console.log(`${day} -> ${name}`);
    // }
    for (let el in calendar) {
        console.log(`${el} -> ${calendar[el]}`);
    }
}
solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])