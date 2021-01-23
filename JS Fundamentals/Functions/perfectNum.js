function perfectNum(n) {
    let sum = 0;
    sumDeviders(n);
    return chekAndPrin(n, sum);
    
    function sumDeviders(n) {
        for (let i = n / 2; i >= 1; i--) {
            if (n % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
    function chekAndPrin(n, sum) {
        if (n == sum) {
            return "We have a perfect number!"
        } else {
            return "It's not so perfect."
        }
    }
}
console.log(perfectNum(6));