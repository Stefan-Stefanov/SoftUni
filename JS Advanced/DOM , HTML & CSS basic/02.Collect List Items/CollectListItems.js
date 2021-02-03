function extractText() {
    const lielement = [...document.getElementsByTagName('li')];
    const elementText = lielement.map(el => el.textContent);

    document.getElementById('result').value = elementText.join('\n');
}