function solve(cuntry, sport) {
    let score = 0;
    let score2 = 0;
    let totalScore = 0;
    let percent = 0;
    if (cuntry === "Italy") {
        switch (sport) {
            case "ribbon":
                score =9.2;
                    score2 =9.5;
                    totalScore = score + score2;
                    percent = ((20 - totalScore) / 20) * 100;
                break;
            case "hoop":
                score =9.45;
                    score2 =9.35;
                    totalScore = score + score2;
                    percent = ((20 - totalScore) / 20) * 100;
                break;
                case "rope":
                    score =9.7;
                score2 =9.15;
                totalScore = score + score2;
                percent = ((20 - totalScore) / 20) * 100;
                break;
        }
    } else  if (cuntry === "Bulgaria") {
        switch (sport) {
            case "ribbon":
                score = 9.6;
                    score2 = 9.4;
                    totalScore = score + score2;
                    percent = ((20 - totalScore) / 20) * 100;
                break;
            case "hoop":
                score = 9.55;
                    score2 = 9.75;
                    totalScore = score + score2;
                    percent = ((20 - totalScore) / 20) * 100;
                break;
                case "rope":
                    score = 9.5;
                score2 = 9.4;
                totalScore = score + score2;
                percent = ((20 - totalScore) / 20) * 100;
                break;
        }
    } else  if (cuntry === "Russia") {
        switch (sport) {
            case "ribbon":
                score = 9.1;
                    score2 = 9.4;
                    totalScore = score + score2;
                    percent = ((20 - totalScore) / 20) * 100;
                break;
            case "hoop":
                score =9.3;
                    score2 =9.8;
                    totalScore = score + score2;
                    percent = ((20 - totalScore) / 20) * 100;
                break;
                case "rope":
                    score =9.6;
                score2 =9;
                totalScore = score + score2;
                percent = ((20 - totalScore) / 20) * 100;
                break;
        }
    }
console.log(`The team of ${cuntry} get ${totalScore.toFixed(3)} on ${sport}.`);
console.log(`${percent.toFixed(2)}%`);
}
solve("Bulgaria" , "ribbon");