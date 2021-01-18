function solve(budget, video, processor, ram) {
    budget = Number(budget);
    video = Number(video);
    processor = Number(processor);
    ram = Number(ram);

    let sumVideo = 250 * video;
    let sumProcessor = (sumVideo * 0.35) * processor;
    let sumRam = (sumVideo * 0.1) * ram;
    let totalSum = sumVideo + sumProcessor + sumRam;
    if (video > processor) {
        totalSum *= 0.85;
    }
    if (budget >= totalSum) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`)
    }

}
solve("900", "2", "1", "3")