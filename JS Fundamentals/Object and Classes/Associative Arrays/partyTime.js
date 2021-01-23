function solve(input = []) {
    let guestList = {
        "Regular" : [],
        "VIP" : []
    }
    let codeName = input.shift();
    while(codeName !== "PARTY") {
        if (isNaN(codeName[0])) {
            guestList.Regular.push(codeName);
        } else {
            guestList.VIP.push(codeName);
        }
        codeName = input.shift();
    }
    input.forEach(name => {
        if (guestList.VIP.includes(name)) {
            let index = guestList.VIP.indexOf(name);
            guestList.VIP.splice(index, 1);
        } else {
            let index = guestList.Regular.indexOf(name);
            guestList.Regular.splice(index, 1);
        }
    });    
    console.log(guestList["VIP"].length + guestList["Regular"].length);
    console.log(guestList["VIP"].join("\n"));
    console.log(guestList["Regular"].join("\n"));
}
solve(['7IK9Yo0h',
    '9NoBUajQ', 
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);