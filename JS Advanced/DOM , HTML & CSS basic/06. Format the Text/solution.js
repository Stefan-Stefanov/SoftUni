function solve() {
  const inputStr = document.getElementById('input').value;
  let result = document.getElementById('output');

  let input = inputStr.split(".")
    .filter(el => el.length > 0);

  for (let i = 0; i < input.length; i += 3) {
    let paragArr = [];
    for (let y = 0; y < 3; y++) {
      if (input[i + y]) {
        paragArr.push(input[i + y]);
      }
    }
    result.innerHTML += `<p>${paragArr.join(". ") + "."}</p>`;
  }
}


// •	Create a new paragraph element which holds no more than 3 sentences from the given input.
// •	Hint: Use interpolation string to create paragraph element. (`<p> {text} </p>`)
// •	If the given input contains less or 3 sentences, you need to create only 1 paragraph, fill it with these sentences and append this paragraph to the div with an id="output". 
// Otherwise, when you have more than 3 sentences, create enough paragraphs to get all sentences from the textarea.
// Just remember to restrict the sentences in each paragraph to 3.
