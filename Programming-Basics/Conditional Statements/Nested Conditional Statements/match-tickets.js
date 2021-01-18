function solve(budget, category, people) {
    budget = Number(budget);
    people = Number(people);
    let ticket = 0;
    if (category === "VIP") {
        ticket = 499.99;
    } else {
        ticket = 249.99;
    }
    let sum = people * ticket;
    let totalBudget = 0;
    if (people < 5) {
        totalBudget = budget * 0.25;
    } else if (people < 10) {
        totalBudget = budget * 0.4;
    } else if (people < 25) {
        totalBudget = budget * 0.50;
    } else if (people < 50) {
        totalBudget = budget * 0.6;
    } else if (people > 50) {
        totalBudget = budget * 0.75;
    }

    if (sum <= totalBudget) {
        let leftMoney = totalBudget - sum;
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`)
    } else {
        let needMoney = sum - totalBudget;
        console.log(`Not enough money! You need ${needMoney.toFixed(2)} leva.`)
    }
}
solve("1000", "Normal", "1")