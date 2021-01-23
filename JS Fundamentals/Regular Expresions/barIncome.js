function solve(input) {
    let total = 0;
    let line;

    while ((line = input.shift()) != "end of shift") {
        let pattern = /%(?<name>[A-Z][a-z]+)%[^\|\$%.]*<(?<item>[\w]+)>[^\|\$%.\d]*\|(?<quantity>[0-9]+)\|[^\|\$%.\d]*(?<price>[\d?.]+)\$/g;        
        let match = pattern.exec(line);
        if (match) {
            let sum = Number(match.groups.quantity) * Number(match.groups.price);
            total += sum
            console.log(`${match.groups.name}: ${match.groups.item} - ${sum.toFixed(2)}`);
        }        
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
solve([
    "%InvalidName%<Croissant>|2|10.3$", "%Peter%<Gum>1.3$", "%Maria%<Cola>|1|2.4", "%Valid%<Valid>valid|10|valid20$", "end of shift"])