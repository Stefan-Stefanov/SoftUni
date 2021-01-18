function solve(pen, markers, cleaner, discount) {
pen = Number(pen) * 5.80;
markers = Number(markers) * 7.20;
cleaner = Number(cleaner) * 1.20; 
discount = Number(discount) / 100;
let total = pen + markers + cleaner
console.log(`${(total - (total * discount)).toFixed(3)}`);
}
solve("2", "3", "2.5", "25")