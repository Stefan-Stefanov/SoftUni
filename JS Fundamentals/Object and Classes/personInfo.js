function personalInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    return person;
}
console.log(personalInfo("Peter",
    "Pan",
    "20"
));