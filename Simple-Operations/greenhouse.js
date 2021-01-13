function solve(land) {
    let landprice = Number(land) * 7.61;
    let discount = landprice * 0.18;
    let finalprice = landprice - discount;

    console.log('Final price is: = ' + finalprice , 'lv.');
    console.log('The discount is: = ' + discount , 'lv.'); 
}
solve("550");
solve("150");