function solve(age) {
    age = Number(age);

    if (age >= 0 && age <= 2) {
        age = "baby";
    } else if (age > 2 && age <= 13) {
        age = "child";
    } else if (age > 13 && age <= 19) {
        age = "teenager";
    } else if (age > 19 && age <= 65) {
        age = "adult";
    } else if (age >= 66) {
        age = "elder"
    } else {
        age = "out of bounds";
    }
    console.log(age);
}