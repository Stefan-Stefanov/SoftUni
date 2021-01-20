function solve(base, increment) {
    base = Number(base);
    increment = Number(increment);
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let height = 1;

    while (base >= 3) {
        
        let resources = base * base;
        let stone = (base - 2) * (base - 2);
        totalStone += (stone * increment);
        
        if (height % 5 === 0) {
            let lapisLazuli = resources - stone;
            totalLapis += (lapisLazuli * increment);
        } else {
            let marble = resources - stone;
            totalMarble += (marble * increment);
        }
        height++;
        base -= 2;
    }
    totalGold = base * base;
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}
solve("23", "0.5");