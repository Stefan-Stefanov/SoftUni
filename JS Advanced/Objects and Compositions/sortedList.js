function solve() {
    let arr = [];
    return {
        size: 0,
        add: function (x) {
            arr.push(x);
            arr = arr.sort((a, b) => a - b);
            this.size++;
        },
        remove: function (index) {
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
                arr = arr.sort((a, b) => a - b);
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index < arr.length) {
                return arr[index];
            }
        }
    }
}
let list = solve();
console.log(list.size);
list.add(5);
list.add(5)
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(-1));
list.remove(1);
console.log(list.get(1));
console.log();
