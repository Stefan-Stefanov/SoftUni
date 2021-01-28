function solve(num) {    
    let str = num.toString();
    let isTrue = true;
    let sum = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1] && str[i + 1] !== undefined) {
            isTrue = false;
        }
        sum += Number(str[i]);
    }
    return `${isTrue}\n${sum} `;
}
console.log(solve(2222222));