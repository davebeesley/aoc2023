const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const wordsToNumbers = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
};

const parseNumber = (number) => isNaN(number) ? wordsToNumbers[number] : number;

let runningTotal = 0;

input.forEach((line) => {
    let matches = [];
    let currentLine = line;
    for (let i in line) {
        matchesThisPass = currentLine.match(/one|two|three|four|five|six|seven|eight|nine|[1-9]/g, "");
        if (matchesThisPass && matchesThisPass.length > 0) {
            matches.push(matchesThisPass[0]);
        }
        currentLine = currentLine.slice(1);
    };

    let digit = parseNumber(matches[0]).toString();
    digit += parseNumber(matches.slice(-1)).toString();
    
    runningTotal += parseInt(digit);
});

console.log(runningTotal);