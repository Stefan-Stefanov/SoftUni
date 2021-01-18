function solve(priceRoket, numRokets, numSnikers) {
priceRoket = Number(priceRoket);
numRokets = Number(numRokets);
numSnikers = Number(numSnikers);

let sumRokets = priceRoket * numRokets;
let pricePearSnikers = priceRoket / 6;
let sumSnikers = numSnikers * pricePearSnikers;
let priceOther = (sumRokets + sumSnikers) * 0.2;
let totalPrice = sumSnikers + sumRokets + priceOther;

let sumDjokovic = totalPrice / 8;
let sumSponsor = (totalPrice * 7) / 8;

console.log(`Price to be paid by Djokovic ${Math.floor(sumDjokovic)}`);
console.log(`Price to be paid by sponsors ${Math.ceil(sumSponsor)}`);
}
solve("850", "4", "2");