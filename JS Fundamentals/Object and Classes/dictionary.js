function solve(input = []) {
    let dictionary = [];

    for (let i = 0; i < input.length; i++) {
        let el = (JSON.parse(input[i]));
        let tuple = Object.entries(el);
        let term = tuple[0][0];
        let definition = tuple[0][1];
        dictionary[term] = definition;
    }
    dictionary = Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(element => {
            console.log(`Term: ${element[0]} => Definition: ${element[1]}`);
        });
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);