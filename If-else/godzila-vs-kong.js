function solve(budget, people, clothPrice) {
    budget = Number(budget);
    people = Number(people);
    clothPrice = Number(clothPrice);

    let decor = budget * 0.1;
    let budgetCloths = people * clothPrice;

    if (people > 150) {
        budgetCloths = budgetCloths * 0.9;
    }
    let total = decor + budgetCloths;

    if (budget < total) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);
    }
}
solve("9587.88","222","55.68")
