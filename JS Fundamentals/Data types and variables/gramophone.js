function solve(band, album, song) {
let rotate = (band.length * album.length) * song.length / 5
console.log(`The plate was rotated ${Math.ceil(rotate)} times.`);
}
solve('Black Sabbath', 'Paranoid', 'War Pigs')