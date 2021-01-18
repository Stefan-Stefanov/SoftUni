function solve(plastic, paint, diluent, workHr) {
    plastic = Number(plastic);
    paint = Number(paint);
    diluent = Number(diluent);
    workHr = Number(workHr);
    
    let pricePlastic = (plastic + 2) * 1.5;
    let pricePaint = (paint * 1.1) * 14.5;
    let priceDiluent = diluent * 5;
    let sum = priceDiluent + pricePaint + pricePlastic + 0.40;
    let totalWorkHr = (sum * 0.30) * workHr; 
    let totalSum = sum + totalWorkHr;

    console.log(`Total expenses: ${totalSum.toFixed(2)} lv.`);

}
solve("10", "11", "4", "8");