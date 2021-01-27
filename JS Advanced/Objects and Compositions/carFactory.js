function solve(car = {}) {
    let carStorage = {
        getPower(power) {
            if (car.power < 105) {
               return { power: 90, volume: 1800 };
            } else if (car.power < 160) {
                return { power: 120, volume: 2400 };
            } else {
                return { power: 200, volume: 3500 };
            }            
        },
        getCarriage() {
            return {type: car.carriage, color: car.color}
        },
        getWheels() {
            if (Math.floor(car.wheelsize) % 2 === 0) {
                car.wheelsize = Math.floor(car.wheelsize) - 1;
            }
            return Array(4).fill(Math.floor(car.wheelsize), 0, 4);
        }
    }

    return {
        model: car.model,
        engine: carStorage.getPower(),
        carriage: carStorage.getCarriage(),
        wheels: carStorage.getWheels()
    };
}
console.log(solve({
    model: 'VW Golf II',
    power: 104,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 13.5
}));