function depositcalculator(deposit, month, percent) {
    let sum = Number(deposit) * (Number(percent) * 0.01);
    let contract = sum / 12; 
    let output = Number(deposit) + (Number(month) * contract);

    console.log(output);
}
depositcalculator("200", "3", "5.7");
