function solve(income, score, minSalary) {
    income = Number(income);
    score = Number(score);
    minSalary = Number(minSalary);

    let social = 0;
    let excellent = 0;
    let checkExc = false;
    let checkSoc = false;

    if (income < minSalary && score > 4.5) {
        checkSoc = true;
        social = 35 / 100 * minSalary;
        social = Math.floor(social);

    }
    if (score >= 5.5) {
        checkExc = true;
        excellent = score * 25;
        excellent = Math.floor(excellent);
    }
    if (social > excellent && checkSoc) {
        console.log(`You get a Social scholarship ${social} BGN`);
    } else if (excellent >= social && checkExc) {
        console.log(`You get a scholarship for excellent results ${excellent} BGN`);
    } else if (!checkSoc && !checkExc) {
        console.log("You cannot get a scholarship!");
    }
}
solve("400.00", "6.00", "450.00")

