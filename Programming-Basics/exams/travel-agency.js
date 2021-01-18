function solve(city, package, vip, days) {
    days = Number(days);
    negativeDays = false;
    if (days < 1) {
        negativeDays = true;
    }
    if (days > 7) {
        days -= 1;
    }
    let totalSum = 0;
    let flag = false;
    if (city === "Borovets" || city === "Bansko") {
        if (package === "noEquipment") {
            totalSum = days * 80;
            if (vip === "yes") {
                totalSum *= 0.95;
            }
            flag = true;
        } else if (package === "withEquipment") {
            totalSum = days * 100;
            if (vip === "yes") {
                totalSum *= 0.9;
            }
            flag = true;
        } else {
            console.log("Invalid input!");
        }

    } else if (city === "Varna" || city === "Burgas") {
        if (package === "noBreakfast") {
            totalSum = days * 100;
            if (vip === "yes") {
                totalSum *= 0.93;
            }
            flag = true;
        } else if (package === "withBreakfast") {
            totalSum = days * 130;
            if (vip === "yes") {
                totalSum *= 0.88;
            }
            flag = true;
        } else {
            console.log("Invalid input!");
        }
    } else {
        console.log("Invalid input!");
    }

    if (negativeDays) {
        console.log("Days must be positive number!");
    } else if (flag) {
        console.log(`The price is ${totalSum.toFixed(2)}lv! Have a nice time!`);
    }
}
solve("Bansko", "withEquipment", "no", "8");