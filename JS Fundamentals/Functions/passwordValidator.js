function passValidator(pass) {
    let result = [];
    if (chekLength(pass) === true && chekIfHaveChar(pass) === true && chekForTwoDigits(pass) === true) {
        return "Password is valid";
    } else {
        if (chekLength(pass) !== true) {
            result.push(chekLength(pass));
        }
        if (chekIfHaveChar(pass) !== true) {
            result.push(chekIfHaveChar(pass));
        }
        if (chekForTwoDigits(pass) !== true) {
            result.push(chekForTwoDigits(pass));
        }
        return result.join("\n");
    }
    function chekLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return "Password must be between 6 and 10 characters"
        }
    }
    function chekIfHaveChar(pass) {
        let isValid = false;
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt(0);
            if (code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57) {
                isValid = true;
            } else {                
                break;
            }
        }
        return isValid ? true : "Password must consist only of letters and digits"
    }
    function chekForTwoDigits(pass) {
        let digitCounter = 0;
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt(0);
            if (code >= 48 && code <= 57) {
                digitCounter++;
            }
        }
        return digitCounter >= 2 ? true : "Password must have at least 2 digits";
    }
}
console.log(passValidator("logIn"));

