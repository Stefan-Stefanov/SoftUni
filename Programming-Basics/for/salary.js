function solve(input) {
    let num = Number(input[0]);
    let salary = Number(input[1]);
    for (let i = 2; i < input.length; i++) {
        let page = input[i];
        switch (page) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
        }
        if (salary <= 0) {
            break;
        }
    }
    if (salary <= 0) {
        console.log("You have lost your salary.")
    } else {
        console.log(salary)
    }

}
solve(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
