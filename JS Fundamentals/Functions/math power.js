function pow(a, b) {
    let sum = 1;
    
    for (let i = 0; i < b; i++) {
        sum *= a;
    }
    console.log(sum);
}
pow(3, 4)