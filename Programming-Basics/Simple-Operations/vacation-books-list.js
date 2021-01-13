function vacationBooksList(pages, pagesHr, days) {
    let time = Number(pages) / Number(pagesHr);
    let hrday = Number(time) / Number(days);

    console.log(hrday);

}
vacationBooksList("212","20","2");