function solve (year, holidays, weekendsHome) {
    
    holidays = Number(holidays);
    weekendsHome = Number(weekendsHome);

    let weekendsInSofia = 48  - weekendsHome; 
    let playSofia = (3.0 * (weekendsInSofia)) / 4;
    let gamesInSofia = 2.0 * holidays / 3;
    let playTotal = weekendsHome + playSofia + gamesInSofia;

    switch (year) {
        case "leap":
            let play = playTotal * 0.15
        playTotal = Math.floor(play + playTotal);
        break;
    case "normal":
        playTotal = Math.floor(playTotal);
        break;
    }
console.log(playTotal);
}
solve ("leap", "0", "1")