function solve(bitcoins, yuans, comision) {
    bitcoins = Math.floor(Number(bitcoins) * 1168);
    yuans = Number(yuans) * 0.15;
    let usdBgn = yuans * 1.76;
    let sumEuro = (bitcoins + usdBgn) / 1.95;
        comision = (Number(comision) / 100) * sumEuro;
    
    console.log((sumEuro - comision).toFixed(2));
}
solve("1", "5", "5");