import input from "./data.js";

const numberMap = {
    "one": "o1e",
    "two": "t2o",
    "three": "t3e",
    "four": "f4r",
    "five": "f5e",
    "six": "s6x",
    "seven": "s7n",
    "eight": "e8t",
    "nine": "n9e",
}

let total = 0;
for (let code of input) {
    Object.keys(numberMap).map(k => code = code.replaceAll(k, numberMap[k]));

    const numbers = code.split("").filter(c => !isNaN(c));
    const numberFromCode = numbers[0] + numbers[numbers.length-1];
    total += parseInt(numberFromCode, 10);
}
console.log("test");
console.log(total);