function solve(stageLvl, tickets, numTickets, picture) {
    numTickets = Number(numTickets);
    let priceTicket = 0;
    let picPrice = 40;
    if (stageLvl === "Quarter final") {
        switch (tickets) {
            case "Standard":
                priceTicket = 55.50;
                break;
            case "Premium":
                priceTicket = 105.20;
                break;
            case "VIP":
                priceTicket = 118.90;
                break;
        }
    } else if (stageLvl === "Semi final") {
        switch (tickets) {
            case "Standard":
                priceTicket = 75.88;
                break;
            case "Premium":
                priceTicket = 125.22;
                break;
            case "VIP":
                priceTicket = 300.40;
                break;
        }
    } else if (stageLvl === "Final") {
        switch (tickets) {
            case "Standard":
                priceTicket = 110.10;
                break;
            case "Premium":
                priceTicket = 160.66;
                break;
            case "VIP":
                priceTicket = 400;
                break;
        }
    }
    let totalSum = priceTicket * numTickets;

    if (totalSum > 4000) {
        totalSum *= 0.75;
    } else if (totalSum > 2500) {
        totalSum *= 0.90;
    } 
    if (picture === "Y" && totalSum <= 4000) {
        picPrice *= numTickets;
        totalSum += picPrice;
    }

    console.log(totalSum.toFixed(2));
}
solve("Semi final", "VIP", "9", "Y");