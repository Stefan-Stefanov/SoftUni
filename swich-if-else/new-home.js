function solve(flowers, numFlowers, budget) {

    numFlowers = Number(numFlowers);
    budget = Number(budget);
    let total = 0;

    switch (flowers) {
        case "Roses":
            if (numFlowers > 80) {
                total = (numFlowers * 5) * 0.90;
            } else {
                total = numFlowers * 5;
            }
            break;
        case "Dahlias":
            if (numFlowers > 90) {
                total = (numFlowers * 3.80) * 0.85;
            } else {
                total = numFlowers * 3.80;
            }
            break;

        case "Tulips":
            if (numFlowers > 80) {
                total = (numFlowers * 2.80) * 0.85;
            } else {
                total = numFlowers * 2.80;
            }
            break;

        case "Narcissus":
            if (numFlowers < 120) {
                total = (numFlowers * 3) + ((numFlowers * 3)* 0.15);
            } else {
                total = numFlowers * 3;
            }
            break;

        case "Gladiolus":
            if (numFlowers < 80) {
                total = (numFlowers * 2.50) + ((numFlowers * 2.50) * 0.20);
            } else {
                total = numFlowers * 2.50;
            }
            break;


           
    }
    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`)
    }
}
solve("Narcissus", "119", "360")
