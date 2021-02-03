function sumTable() {
    const rows = Array.from(document.querySelectorAll('table tr'))
        .slice(1, -1)
        .reduce((sum, row) => {
            return sum + Number(row.lastElementChild.textContent);
        }, 0);

    document.getElementById('sum').textContent = rows
}
    // const rows = document.querySelectorAll('table tr');
    // let sum = 0;
    // for(let i = 1; i < rows.length; i++) {
    //     const cols = rows[i];
    //     sum += Number(cols[cols.length - 1].textContent);
    // }
    // document.getElementById('sum').textContent = sum;