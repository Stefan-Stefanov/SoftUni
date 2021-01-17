function solve(input) {
    let i = 0;
    let text = input[i++];
    
    while (text !== "Stop") {
        console.log(text);
        text = input[i++];
    }
    // let i = 0;
    // while (i <= input.length) {

    //     if (input[i] === "Stop") {
    //         break;
    //     }
    //     console.log(input[i]);
    //     i++
    // }
}
solve(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);