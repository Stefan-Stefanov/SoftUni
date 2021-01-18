function solve(input) {
    let n = Number(input[0]);
    let countHeart = 0;
    let countFor = 0;
    let countOver = 0;
    let other = 0;
    for (let i = 1; i <= n; i++) {
        let game = input[i];
        switch (game) {
            case "Hearthstone":
                countHeart++;
                break;
            case "Fornite":
                countFor++;
                break;
            case "Overwatch":
                countOver++;
                break;
            default:
                other++;
                break;
        }
    }
     
    console.log(`Hearthstone - ${((countHeart / n) * 100).toFixed(2)}%`);
	console.log(`Fornite - ${((countFor / n) * 100).toFixed(2)}%`);
	console.log(`Overwatch - ${((countOver / n) * 100).toFixed(2)}%`);
	console.log(`Others - ${((other / n) * 100).toFixed(2)}%`);

}
solve(["4", "Hearthstone", "Fornite", "Overwatch", "Counter - Strike"]);