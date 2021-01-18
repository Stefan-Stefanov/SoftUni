function solve(x1, y1, x2, y2, x, y) {
    x1 = Number(x1);
    x2 = Number(x2);
    y1 = Number(y1);
    y2 = Number(y2);
    x = Number(x);
    y = Number(y);

    let firstCondition = false
    let secondCondition = false
    if (x == x1 || x == x2) {
        if (y >= y1 && y <= y2) {
        firstCondition = true;
        }
    } else if (y == y1 || y == y2) {
        if (x >= x1 && x <= x2) {
        secondCondition = true;
        }
    }

    if (firstCondition || secondCondition) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}