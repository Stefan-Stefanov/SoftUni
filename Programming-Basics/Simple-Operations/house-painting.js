function solve(x, y, h) {
    x = Number(x);
    y = Number(y);
    h = Number(h);

    let frontBack = ((x * x) * 2) - 2.4;
    let sides = (x * y) * 2;
    let firstFloor = (frontBack + (sides - (2.25 * 2))) / 3.4;

    console.log(firstFloor.toFixed(2));

    let sideSealing = sides;
    let frontSealing = x * h;
    let secondFloor = (sideSealing + frontSealing) / 4.3;

    console.log(secondFloor.toFixed(2));
}