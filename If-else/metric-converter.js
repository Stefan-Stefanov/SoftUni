function convert(num, input, output) {
    num = Number(num);
    let total = 0;

    if (input === "mm") {
       total = num / 1000;
    } else if (input === "cm") {
       total = num / 100;
    } else if (input === "m") {
        total = num;
    }
    if (output === "mm") {
        total = total * 1000;
    } else if (output === "cm") {
        total = total * 100;
    }
    console.log (total.toFixed(3));
}
convert ("150", "m", "cm");