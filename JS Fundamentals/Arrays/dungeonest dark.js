function solve(string) {
    let rooms = string.toString().split("|").toString().split(" ").toString().split(",");
    let currentHealth = 100;
    let coins = 0;
    let counter = 1;
    let healedHp = 0;
    let finished = true;
    for (let i = 0; i < rooms.length; i += 2) {
        let item = rooms[i]
        let numItem = Number(rooms[i + 1]);
        switch (item) {
            case "potion":
                if (currentHealth + numItem < 100) {
                    console.log(`You healed for ${numItem} hp.`);
                    currentHealth += numItem;
                } else {
                    healedHp = 100 - currentHealth;
                    console.log(`You healed for ${healedHp} hp.`);
                    currentHealth += numItem;
                }
                if (currentHealth > 100) {
                    currentHealth = 100;
                }
                console.log(`Current health: ${currentHealth} hp.`);
                break;
            case "chest":
                coins += numItem;
                console.log(`You found ${numItem} coins.`);
                break;
            default:
                currentHealth -= numItem;
                if (currentHealth > 0) {
                    console.log(`You slayed ${item}.`);
                } else {
                    finished = false;
                    console.log(`You died! Killed by ${item}.`);
                    console.log(`Best room: ${counter}`);
                    break;
                }
        }
        if (!finished) {
            break;
        }
        counter++;
    }
    if (finished) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${currentHealth}`);
    }
}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])