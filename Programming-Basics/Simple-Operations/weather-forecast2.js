function solve(t) {
    t = Number(t);
    let weather = "";
    if (t >= 26 && t <= 35) {
        weather = "Hot";
    } else if (t > 20 && t < 26) {
        weather = "Warm";
    } else if (t >= 15 && t <= 20) {
        weather = "Mild";
    } else if (t >= 12 && t < 15) {
        weather = "Cool";
    } else if (t >= 5 && t < 12) {
        weather = "Cold";
    } else {
        weather = "unknown";
    }
      
    
    console.log(weather);
}
solve("16.5");