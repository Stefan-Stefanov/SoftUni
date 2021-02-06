function solve() {
  let text = document.getElementById('text').value
    .toLowerCase()
    .split(" ");
  let convention = document.getElementById('naming-convention').value.toLowerCase();
  let newText = [];

  switch (convention) {
    case "camel case":
      newText.push(text.shift());
      text.forEach(el => {
        let word = el[0].toUpperCase() + el.slice(1);
        newText.push(word);
      });
      break;
    case "pascal case":
      text.forEach(el => {
        let word = el[0].toUpperCase() + el.slice(1);
        newText.push(word);
      });
      break;
      default:
        newText = ["Error!"]
  }
  document.getElementById('result').textContent = newText.join("");
}