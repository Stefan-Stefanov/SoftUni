function solve(arr = []) {
    let text = arr[0].split(" ");
    let keys = arr[1];
    for (let i = 0; i < text.length; i++) {
        let counter = 0;
        let word = text[i];
        if (word.includes("_")) {
            while (word[counter] == `_`) {
                counter++;
            }

            for (let key of keys) {
                if (counter == key.length) {
                    word = word.replace("_".repeat(counter), key);
                    text.splice(i, 1, word);
                    break;
                }
            }
        }
    }
    console.log(text.join(" "));
}
solve(['Hi, grandma! I\'m so ____, to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)