function solve(munths, nights) {
    nights = Number(nights);
    let studio = 50.00;
    let apartment = 65.00;
    let studioRent = 0.00;
    let apartmentRent = 0.00;

    switch (munths) {
        case "May":
        case "October":
            studio = 50.00;
            apartment = 65.00;
            studioRent = studio * nights;
            apartmentRent = apartment * nights;

            if (nights > 14) {
                studioRent *= 0.70;
                apartmentRent *= 0.90;
            } else if (nights > 7) {
                studioRent *= 0.95;
            }
            break;
        case "June":
        case "September":
            studio = 75.20;
            apartment = 68.70;
            studioRent = studio * nights;
            apartmentRent = apartment * nights;

            if (nights > 14) {
                studioRent *= 0.80;
                apartmentRent *= 0.90;
            }
            break;
        case "July":
        case "August":
            studio = 76.00;
            apartment = 77.00;
            studioRent = studio * nights;
            apartmentRent = apartment * nights;
            if (nights > 14) {
                apartmentRent *= 0.90;
            }
            break;
    }
    
    console.log(`Apartment: ${apartmentRent.toFixed(2)} lv.`)
    console.log(`Studio: ${studioRent.toFixed(2)} lv.`);
}
solve ("August" , "20")