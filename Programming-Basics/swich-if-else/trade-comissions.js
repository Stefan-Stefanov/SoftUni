function solve(city, sum) {
    sum = Number(sum);
    if (city == "Sofia" || city == "Varna" || city == "Plovdiv") {

    if (city == "Sofia") {
        if (sum >= 0 && sum <= 500) {
            console.log((sum * 0.05).toFixed(2));
        } else if (sum >= 500 && sum <= 1000) {
            console.log((sum * 0.07).toFixed(2));
        } else if (sum >= 1000 && sum <= 10000) {
            console.log((sum * 0.08).toFixed(2));
        } else if (sum > 10000) {
            console.log((sum * 0.12).toFixed(2));
        } else {
            console.log("error")
        }
    }
    if (city == "Varna") {
        if (sum >= 0 && sum <= 500) {
            console.log((sum * 0.045).toFixed(2));
        } else if (sum >= 500 && sum <= 1000) {
            console.log((sum * 0.075).toFixed(2));
        } else if (sum >= 1000 && sum <= 10000) {
            console.log((sum * 0.1).toFixed(2));
        } else if (sum > 10000) {
            console.log((sum * 0.13).toFixed(2));
        } else {
            console.log("error")
        }
    }
    if (city == "Plovdiv") {
        if (sum >= 0 && sum <= 500) {
            console.log((sum * 0.055).toFixed(2));
        } else if (sum >= 500 && sum <= 1000) {
            console.log((sum * 0.08).toFixed(2));
        } else if (sum >= 1000 && sum <= 10000) {
            console.log((sum * 0.12).toFixed(2));
        } else if (sum > 10000) {
            console.log((sum * 0.145).toFixed(2));
        } else {
            console.log("error")
        }
    }

} else {
    console.log("error");
}
}
solve("Varna", "3874.50")