// const wrap = (line, maxLen) => {
//     if (line === "") return "";
//     if (line.length < maxLen) return line;
//     if (!line.includes(" ")) return line;
//     let returnString = "";
//     let remainingString = line;
    
//     while (remainingString.length > maxLen) {
        
//         for (let i = maxLen; i > 0; i--) {
//             if (remainingString.charAt(i) === " ") {

//                 console.log("we made it")
//                 returnString += (remainingString.slice(0, i) + "\n");
//                 remainingString = remainingString.slice(i+1, remainingString.length);
//                 break;
//             };
//         };
//         console.log(remainingString)
//     };
//     returnString += remainingString.trim();
//     return returnString;
// };



function wrap(line, maxLen) {
    if (line.length <= maxLen) {
        return line;
    }

    const indexOfBlank = line.lastIndexOf(" ", maxLen);
    let split;
    let offset;
    if (indexOfBlank > -1) {
        split = indexOfBlank;
        offset = 1;
    } else {
        split = maxLen;
        offset = 0;
    }

    return line.substring(0, split) + "\n" + wrap(line.substring(split + offset), maxLen);
}
module.exports = wrap