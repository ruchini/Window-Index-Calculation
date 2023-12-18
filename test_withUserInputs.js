// test_withUserInputs.js

const readline = require('readline');
const getWindowIdx = require('./windowIndexCalculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get user input for noOfPeriods and currentMonth
rl.question("Enter the number of periods (possible values: 1, 2, 4, 12): ", (noOfPeriods) => {
    rl.question("Enter the current month (possible values: 1 to 12): ", (currentMonth) => {
        const result = getWindowIdx(parseInt(noOfPeriods), parseInt(currentMonth));
        console.log("Window is:", result);
        rl.close();
    });
});
