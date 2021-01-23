function solve(str) {
    // let newStr = str.split("\\").find(el => el.includes("."));
    let startFile = str.lastIndexOf("\\");
    let startIndex = str.lastIndexOf(".");
    let fileName = str.substring(startFile + 1, startIndex)
    let extension = str.substring(startIndex + 1, startIndex + str.length)
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx.bat')