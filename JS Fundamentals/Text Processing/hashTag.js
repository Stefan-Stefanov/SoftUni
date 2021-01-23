function solve(str) {
    let isLetter = false;
    str.split(" ")
        .filter(el => (el[0] == "#") && (el.length > 1))
        .forEach(el => {
            el = el.slice(1);
            for (let i of el) {
                if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90
                    || i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
                    isLetter = true;
                } else {
                    isLetter = false;
                    break;
                }
            }            
            if (isLetter) {
                console.log(el);
            }
        });   
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')