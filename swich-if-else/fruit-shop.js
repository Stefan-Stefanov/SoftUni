function solve(arg1, arg2, arg3) {
    let fruit = String(arg1);
    let day = String(arg2);
    let qnty = Number(arg3);
    let sum = 0.0;

    if (day === "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (fruit == "banana") {
            sum = qnty * 2.5
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "apple") {
            sum = qnty * 1.2
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "orange") {
            sum = qnty * 0.85
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "grapefruit") {
            sum = qnty * 1.45
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "kiwi") {
            sum = qnty * 2.7
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "pineapple") {
            sum = qnty * 5.5
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "grapes") {
            sum = qnty * 3.85
            console.log(`${sum.toFixed(2)}`)
        } else {
            console.log("error")
        }
    } else if (day == 'Saturday' || day == 'Sunday') {
        if (fruit == "banana") {
            sum = qnty * 2.7
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "apple") {
            sum = qnty * 1.25
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "orange") {
            sum = qnty * 0.9
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "grapefruit") {
            sum = qnty * 1.6
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "kiwi") {
            sum = qnty * 3
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "pineapple") {
            sum = qnty * 5.6
            console.log(`${sum.toFixed(2)}`)
        } else if (fruit == "grapes") {
            sum = qnty * 4.2
            console.log(`${sum.toFixed(2)}`)
        } else {
            console.log("error")
        }
    } else {
        console.log("error")
    }

}
solve ("tomato","Monday","3")