function solve(people, typeGroup, day) {
    people = Number(people);
    let dayPrice = 0;
    let totalPrice = 0;

    if (typeGroup === "Students") {
        if (day === "Friday") {
            dayPrice = 8.45;
        } else if (day === "Saturday") {
            dayPrice = 9.80;
        } else if (day === "Sunday") {
            dayPrice = 10.46;
        }

        totalPrice = dayPrice * people;
        if (people >= 30) {
            totalPrice *= 0.85;
        }

    } else if (typeGroup === "Business") {
        if (day === "Friday") {
            dayPrice = 10.90;
        } else if (day === "Saturday") {
            dayPrice = 15.60;
        } else if (day === "Sunday") {
            dayPrice = 16;
        }

        if (people >= 100) {
            people -= 10;
        }
        totalPrice = dayPrice * people;

    } else if (typeGroup === "Regular") {
        if (day === "Friday") {
            dayPrice = 15;
        } else if (day === "Saturday") {
            dayPrice = 20;
        } else if (day === "Sunday") {
            dayPrice = 22.50;
        }

        totalPrice = dayPrice * people;
        if (people >= 10 && people <= 20) {
            totalPrice *= 0.95;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
solve(30,
    "Students",
    "Sunday"
)