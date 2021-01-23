function validation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    
    if (Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)) % 1 == 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)) % 1 == 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Math.sqrt((x2 - x1) * (x2 - x1) + ((y2 - y1) * (y2 - y1))) % 1 == 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  
}