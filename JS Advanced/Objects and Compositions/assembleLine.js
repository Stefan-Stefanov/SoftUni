function assemblyLine() {

    return {
        hasClima: function (car) {
            car.temp = 21,
                car.tempSettings = 21,
                car.adjustTemp = () => {
                    if (car.temp < car.tempSettings) {
                        car.temp++;
                    } else if (car.temp > car.tempSettings) {
                        car.temp--;
                    }
                }
        },
        hasAudio: function (car){
            car.currentTrack = { "name": "", "artist": "" },
                car.nowPlaying = () => {
                    if (car.currentTrack !== null) {
                        console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                    }
                }
        },
        hasParktronic: function (car) {
            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    }
}
const car = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(car);
console.log(car.temp);
car.tempSettings = 18;
car.adjustTemp();
console.log(car.temp);
assemblyLine.hasAudio(car);
car.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
car.nowPlaying();
assemblyLine.hasParktronic(car);
car.checkDistance(0.4);
car.checkDistance(0.2);
console.log(car);
