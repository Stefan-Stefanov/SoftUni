function birthday(budget) {
    let rent = Number(budget);
    let cakeprice = Number(budget) * 0.2;
    let drinks = Number(cakeprice) - (Number(cakeprice) * 0.45);
    let animation = Number(budget) / 3;
    
    console.log(rent + cakeprice + drinks + animation);
}
birthday("2250");