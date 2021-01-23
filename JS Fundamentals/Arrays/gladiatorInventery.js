function gladitorInventory(arr = []) {
    let inventory = arr.shift();
    inventory = inventory.split(` `);
 
    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr[i];
        arr1 = arr1.split(` `);
        let action = arr1[0];
        let equipment = arr1[1];
        switch (action) {
            case `Buy`:
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case `Trash`:
                if (inventory.includes(equipment)) {
                    let deletedItem = inventory.indexOf(equipment);
                    inventory.splice(deletedItem, 1);
                }
                break;
            case `Repair`:
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    let repairedItem = inventory.splice(index, 1);
                    inventory.push(repairedItem.join());
                }
                break;
            case `Upgrade`:
                let upgradeArr = [];
                for (let i = 0; i < equipment.length; i++) {
                    if (equipment[i] == `-`) {
                        equipment = equipment.split(`-`).join(`:`);
                        break;
                    }
                    upgradeArr.push(equipment[i]);
                    
                }               
                upgradeArr = upgradeArr.join(``);
                let upgradeIndex = inventory.indexOf(upgradeArr) + 1;
                if (inventory.includes(upgradeArr)) {
                    inventory.splice(upgradeIndex, 0, equipment)
                }
                break;
        }
    }
    console.log(inventory.join(` `));
}