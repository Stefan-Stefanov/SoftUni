function solve(pSkumria, pCaca, kgPalamud, kgSafrid, kgClams) {
    pSkumria = Number(pSkumria);
    pCaca = Number(pCaca);
    kgPalamud = Number(kgPalamud);
    kgSafrid = Number(kgSafrid);

    let totalClams = Number(kgClams) * 7.5;
    let pPalamud = (pSkumria * 1.6) * kgPalamud;
    let pSafrid = (pCaca * 1.8) * kgSafrid;
let sum = pPalamud + totalClams + pSafrid;

console.log(sum.toFixed(2))

}