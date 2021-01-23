function loadingBar(num) {
    let percent = "..........".split("");
    fillPercent(num);
    return printRemaining(num);

    function fillPercent(num) {
        for (let i = 0; i < num / 10; i++) {
            percent.splice(i, 1, "%");
        }
    }
    function printRemaining(num) {
        if (num < 100) {
            return `${num}% [${percent.join("")}]\nStill loading...`;
        } else {
            return `${num}% Complete!\n[${percent.join("")}]`
        }
    }
}
console.log(loadingBar(30));