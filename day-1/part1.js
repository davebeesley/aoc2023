const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

let runningTotal = 0;

input.forEach((line) => {
    const digitsOnly = line.match(/[0-9]/g, "");

    let digit = digitsOnly[0].toString();
    digit += digitsOnly.slice(-1).toString();
    
    runningTotal += parseInt(digit);
});

console.log(runningTotal);