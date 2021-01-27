function solve(width, height, color) {
    function colorize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
    return {
        width,
        height,
        color: colorize(color),
        calcArea: function (width, height) {
            return this.width * this.height;
        }
    };
}
let rect = solve(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
