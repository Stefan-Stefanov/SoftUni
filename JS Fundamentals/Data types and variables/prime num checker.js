function isPrime(n) {
    n = Number(n);
    let prime = true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime && n > 2) {
        console.log(true);
    } else {
        console.log(false);
    }
}