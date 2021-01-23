function polindrome(arr = []) {
    for (let i = 0; i < arr.length; i++) {
        let reversetNum = String(arr[i]).split("")
            .reverse()
            .join("");
        reversetNum = Number(reversetNum)
        let num = arr[i];
        trueOrFalse(num, reversetNum);
    }
    function trueOrFalse(num, reversetNum) {
        if (num === reversetNum) {
            console.log("true");
        } else {
            console.log("false");
        }
        return trueOrFalse;
    }
}
polindrome([123, 323, 421, 121]);