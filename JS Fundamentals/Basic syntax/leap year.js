function solve (year) {
    year = Number(year);

    if (year % 4 == 0 && year % 100 !== 0 || year % 400 === 0) {
        year = "yes";
    } else {
        year = "no";
    }
    console.log(year);
}
solve("1984");