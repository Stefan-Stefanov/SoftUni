function solve(guests, budget) {
    guests = Number(guests);
    budget = Number(budget);
    let kozunaci = Math.ceil(guests / 3);
    let eggs = guests * 2;
    let priceKozunaci = kozunaci * 4;
    let priceEggs = eggs * 0.45;
    let totalSum = priceEggs + priceKozunaci;

    if (totalSum > budget) {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${(totalSum - budget).toFixed(2)} lv. more.`);
    } else {
        console.log(`Lyubo bought ${kozunaci} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${(budget - totalSum).toFixed(2)} lv. left.`)
    }
}
solve("10", "35")