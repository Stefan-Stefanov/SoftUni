function cityInfo(city) {
    let keys = Object.keys(city);
    for (let el of keys) {
        let value = city[el];
        console.log(`${el} -> ${value}`);
    }
}
let input = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"

}
cityInfo(input);