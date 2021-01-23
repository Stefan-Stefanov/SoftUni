function solve(arr = []) {
    let accountGames = arr.shift(arr[0]).split(" ");
    let arr2 = arr.toString().split(" ").toString().split(",");
    let i = 0;
    let command = arr2[i++];
    while (command !== "Play!") {
        let game = arr2[i++];
        switch (command) {
            case "Install":
                if (accountGames.includes(game)) {
                    break;
                } else {
                    accountGames.push(game);
                }
                break;
            case "Uninstall":
                if (accountGames.includes(game)) {
                    let isIndex = accountGames.indexOf(game);
                    accountGames.splice(isIndex, 1);
                }
                break;
            case "Expansion":
                let string = game.split("-");
                let expansion = string[0]
                if (accountGames.includes(expansion)) {
                    let isIndex = accountGames.indexOf(expansion);
                    expansion += ":" + string[1];
                    accountGames.splice(isIndex + 1, 0, expansion);
                }
                break;
            case "Update":
                if (accountGames.includes(game)) {
                    let isIndex = accountGames.indexOf(game);
                    accountGames.splice(isIndex, 1);
                    accountGames.push(game);
                }
                break;
        }
        command = arr2[i++];
    }
    console.log(accountGames.join(" "));
}
solve(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);