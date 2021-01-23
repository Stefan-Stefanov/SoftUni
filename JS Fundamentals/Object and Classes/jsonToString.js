function jsonToString(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };
    let asString = JSON.stringify(person);

    console.log(asString);
}
jsonToString("George", "Jones", "Brown");