function solve(num) {
    num = Number(num);

    for (let i = 1; i <= num; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += i + ' ';
        }
        console.log(line);
    }
}
solve(6)