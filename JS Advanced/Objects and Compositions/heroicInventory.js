function solve(input) {
    let arr = [];
    for (const el of input) {
        let [name, level, items] = el.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];
        arr.push({name, level, items})
    }
    return JSON.stringify(arr);
}
console.log(solve(['Isacc / 25 ',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));