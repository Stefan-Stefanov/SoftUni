function converter(money) {
    let usd = Number(money);
    let bgn = usd * 1.79549 ;
    
    console.log(bgn);
}
converter("22");
converter("100");
converter("12.5");