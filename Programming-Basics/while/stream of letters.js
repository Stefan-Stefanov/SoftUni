function solve(input) {
    let i = 0;
    let command = input[i++]
    
    let letter = "";
    let text = "";
    let newWord = "";
    let codeWord = "";

    while (command !== "End") {

        letter = command.charCodeAt(0)

        if ((letter >= 65 && letter <= 90) || (letter >= 97 && letter <= 122)) {
            if (command === "c" && codeWord !== "c") {
                codeWord += command;
            }
            else if (command === "o" && codeWord !== "o") {
                codeWord += command;
            }
            else if (command === "n" && codeWord !== "n") {
                codeWord += command;
            }
            else {
                text += command;
            }
            if (codeWord == "con" || codeWord == "cno" || codeWord == "ocn" || codeWord == "onc" || codeWord == "nco" || codeWord == "noc") {
                text += " ";
                newWord = text;
                codeWord = "";
            }
        } else {
            break;
        }
        command = input[i++];

        if (command === "End") {
            console.log(newWord);
        }
    }
}
solve([
    'H', 'n', 'e', 'l',
    'l', 'o', 'o', 'c',
    't', 'c', 'h', 'o',
    'e', 'r', 'e', 'n',
    'e', 'End'
]);