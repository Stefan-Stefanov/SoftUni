function radianceToDegrees(input) {
    let radiance = Number(input);
    let degree = radiance * 180 / Math.PI;
    
    console.log(degree.toFixed(0));

}
radianceToDegrees("3.1416")