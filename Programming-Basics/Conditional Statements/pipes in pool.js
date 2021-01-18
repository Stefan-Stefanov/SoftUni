function solve(v, p1, p2, hr) {
v = Number(v);
p1 = Number(p1);
p2 = Number(p2);
hr = Number(hr);
let p1L = p1 * hr;
let p2L = p2 * hr;
let totalL = p1L + p2L;
let percentL = (totalL / v) * 100;
let percentP1 = (p1L / totalL) * 100;
let percentP2 = (p2L / totalL) * 100;
if (totalL <= v) {
    console.log(`The pool is ${percentL.toFixed(2)}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`)
} else {
    console.log(`For ${hr} hours the pool overflows with ${totalL - v} liters.`)
}

}
solve("1000", "100", "120", "3");