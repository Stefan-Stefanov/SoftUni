function solve(input) {
    let pattern = />>(?<item>[A-Za-z]+)<<(?<price>[\d]+([\.[\d]+)?)!(?<quantity>[\d]+)/g
    let total = 0;
    let text = input.join(", ");
    let result = `Bought furniture:\n`
    let match = pattern.exec(text);
    while (match != null) {
        let item = match.groups["item"];
        let price = match.groups["price"];
        let quantity = match.groups["quantity"];
        result += item + `\n`
        total += Number(price) * Number(quantity);
        match = pattern.exec(text);
    }
    result += `Total money spend: ${total.toFixed(2)}`;
    console.log(result);
}
solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])