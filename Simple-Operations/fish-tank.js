function volume(length , width, height, percent) {
    let fishTankVolume = Number(length) * Number(width) * Number(height);
    let liters = fishTankVolume * 0.001;
    let apercent = Number(percent) * 0.01;
    let finalLiters = liters * (1 - apercent);

    console.log(finalLiters);
}
volume("85","75","47","17");
