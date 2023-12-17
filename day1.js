import input from "./data.js";

function isNumber(char) {
    return !isNaN(char);
}

let total = 0;
for (let code of input) {
    const numbers = code.split("").filter(c => !isNaN(c));
    const numberFromCode = numbers[0] + numbers[numbers.length-1];
    total += parseInt(numberFromCode, 10);
}

console.log(total);