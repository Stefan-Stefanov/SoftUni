function colorize() {
    [...document.querySelectorAll('table tr:nth-child(even)')]
        .forEach(el => el.style.backgroundColor = 'teal')
    // const rows = document.querySelectorAll('table tr');
    // for (let i = 1; i < rows.length; i += 2) {
    //     rows[i].style.backgroundColor = 'teal'
    // }
}
