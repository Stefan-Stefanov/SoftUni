function solve(input) {
    let travelList = {};

    for (let el = 0; el < input.length; el++) {
        let [country, town, cost] = input[el].split(" > ")
        //     .filter(e => e !== "");
        cost = +cost;
        // town = town[0].toUpperCase() + town.slice(1);
        if (!travelList.hasOwnProperty(country)) {
            travelList[country] = {};
        }
        if (!travelList[country].hasOwnProperty(town)) {
            travelList[country][town] = cost;
        }
        let currentPrice = travelList[country][town];
        if (currentPrice > cost) {
            travelList[country][town] = cost;
        }
    }
    let orderedCountries = Object.keys(travelList)
        .sort((a, b) => a.localeCompare(b));
    let result = "";
    for (let country of orderedCountries) {
        result += country + " -> ";
        let sortedPrices = Object.keys(travelList[country])
            .sort((a, b) => travelCost(a, b, travelList, country));
        for (let town of sortedPrices) {
            result += `${town} -> ${travelList[country][town]} `;
        }
        result += "\n";
    }
    console.log(result);

    function travelCost(town1, town2, travelList, country) {
        let priceOne = travelList[country][town1];
        let priceTwo = travelList[country][town2];

        return priceOne - priceTwo
    }
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);