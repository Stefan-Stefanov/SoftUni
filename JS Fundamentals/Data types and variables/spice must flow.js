function solve(startingYield) {
    let totalExtracted = 0;
    let i = 0;
    while (startingYield >= 100) {
        totalExtracted += startingYield - 26;
        startingYield -= 10;
        i++;
    }
    if (startingYield<100 && i == 0)
    {
        console.log(`${i}`);
        console.log(`${totalExtracted}`);
    }
    else
    {
        totalExtracted -= 26;
        console.log(`${i}`);
        console.log(`${totalExtracted}`);
    }   
}
solve(200);