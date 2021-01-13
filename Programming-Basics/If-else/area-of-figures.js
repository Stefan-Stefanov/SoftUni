function solve(first, second, third) {
    let type = first;
    let area;

    if (type === "square") {
        let a = Number(second);
        area = a * a;

    } else if (type === "rectangle") {
        let a = Number(second);
        let b = Number(third);
        area = a * b;
    } else if (type === "circle") {
        let r = Number(second);
        area = r * r * Math.PI;
    } else {
        let a = Number(second);
        let hA = Number(third);
        area = (a * hA) / 2;
    }
    console.log(area.toFixed(3));
}
solve("square", "5")