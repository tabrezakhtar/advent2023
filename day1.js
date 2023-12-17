import input from "./data.js";

function isNumber(char) {
    return !isNaN(char);
}

let total = 0;
for (let code of input) {
    let joinedNumber = "";
    for (let x = 0; x < code.length; x++) {
        if (isNumber(code[x])) {
            joinedNumber += code[x];
            break;
        }
    }

    for (let x = code.length-1; x >= 0; x--) {
        if (isNumber(code[x])) {
            joinedNumber += code[x];
            break;
        }
    }

    total += parseInt(joinedNumber, 10);
}

console.log(total);