function extract(content) {
    const text = document.getElementById(content).textContent;
    let arr = [];
    const pattern = /\((.+?)\)/gm
    let match = pattern.exec(text);

    while (match != null) {
        arr.push(match[1])
        match = pattern.exec(text)
    }

    return arr.join('; ');
}