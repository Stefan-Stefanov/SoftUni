function solve(input) {
    let i = 0;
    let command = input[i];
    let maxScore = 0;
    let bestWord = "";
    let end = true;
    while (command !== "End of words") {
        let word = input[i];
        let totalScore = 0;
        let firstDigit = word[0];
        for (let j = 0; j < word.length; j++) {
            let digit = word.charCodeAt(j);
            totalScore += digit;
        }
        if (firstDigit == 'A' || firstDigit === 'E' || firstDigit === 'I' ||
         firstDigit === 'O' || firstDigit === 'U' || firstDigit === 'Y' || 
         firstDigit == 'a' || firstDigit === 'e' || firstDigit === 'i' ||
         firstDigit === 'o' || firstDigit === 'u' || firstDigit === 'y') {
            totalScore = Math.round(totalScore * word.length);
        } else {
            totalScore = Math.round(totalScore / word.length);
        }
                if (totalScore > maxScore) {
                    maxScore = totalScore;
                    bestWord = word;
                }
            command = input[++i];
        }
        console.log(`The most powerful word is ${bestWord} - ${maxScore}`);
    }

    solve([
        'End of words',
        'Most',
        'Powerful',
        'Word',
        'Is',
        'Experience',
        
    ]);