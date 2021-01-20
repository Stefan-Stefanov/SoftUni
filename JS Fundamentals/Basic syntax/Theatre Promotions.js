function solve(day, age) {
    age = Number(age);

    if (age >= 0 && age <= 18) {
        switch (day) {
            case "Weekday":
                ticketPrice = "12$";
                break;
            case "Weekend":
                ticketPrice = "15$";
                break;
            case "Holiday":
                ticketPrice = "5$";
                break;
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case "Weekday":
                ticketPrice = "18$";
                break;
            case "Weekend":
                ticketPrice = "20$";
                break;
            case "Holiday":
                ticketPrice = "12$";
                break;
        }
    } else if (age > 64 && age <= 122) {
        switch (day) {
            case "Weekday":
                ticketPrice = "12$";
                break;
            case "Weekend":
                ticketPrice = "15$";
                break;
            case "Holiday":
                ticketPrice = "10$";
                break;
        }
    } else {
        ticketPrice = "Error!"
    }
    console.log(ticketPrice);
}