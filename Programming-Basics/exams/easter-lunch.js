function solve (kozunaci, eggs, kgBisc) {
kozunaci = Number(kozunaci) * 3.2;
eggs = Number(eggs);
let priceEggs = eggs * 4.35
kgBisc = Number(kgBisc) * 5.40;
let eggsPaint = (eggs * 12) * 0.15;
let totalSum = kozunaci + priceEggs + eggsPaint + kgBisc;
console.log((totalSum).toFixed(2)); 

}
solve("3", "2", "3")