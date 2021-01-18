function solve(input) {
    let kozunaci = Number(input[0]);
    let totalSugar = 0;
    let maxSugar = 0;
    let sugarCount = 0;
    let totalFlour = 0;
    let maxFlour = 0;
    let flourCount = 0;
    let j = 1;

    for (let i = 1; i <= kozunaci; i++) {
        let sugar = Number(input[j++]);
        if (sugar > maxSugar) {
            maxSugar = sugar;
        }
        totalSugar += sugar;
        if (totalSugar >= 950) {
            sugarCount = Math.ceil(totalSugar / 950);
        } else {
            sugarCount = 1;
        }

        let flour = Number(input[j++]);
        if (flour > maxFlour) {
            maxFlour = flour;
        }
        totalFlour += flour;


        if (totalFlour >= 750) {
            flourCount = Math.ceil(totalFlour / 750);
        } else {
            flourCount = 1;
        }


    }
    console.log(`Sugar: ${sugarCount}`);
    console.log(`Flour: ${flourCount}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams. `);
}
solve([
    '4', '500', '350',
    '560', '430', '600',
    '345', '578', '543',
    ''
]
)