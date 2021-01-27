function solve(input) {
    let towns = [];
    let arr = input.map(splitInput)

    for (let colom = 1; colom < arr.length; colom++) {
        let obj = {}
        for (let row = 0; row < arr[0].length; row++) {
            let line = arr[colom][row]
            obj[arr[0][row]] = line;
        }
        towns.push(obj);
    }

    return JSON.stringify(towns);

    function splitInput(arr) {
        return arr.split("|").filter(x => x !== "").map(x => x.trim()).map(inToNum)
    }
    function inToNum(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }
}
console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));