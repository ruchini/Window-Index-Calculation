// test_algorithm.js

const getWindowIdx = require('./windowIndexCalculator');

// Loop to test the algorithm for a range of months
for (let m = -5; m <= 15; m++) {
    const noOfPeriods = 4; // possible values -> 1, 2, 4, 12
    const currentMonth = m;
    console.log(`currentMonth=${currentMonth} : noOfPeriods=${noOfPeriods} : window=${getWindowIdx(noOfPeriods, currentMonth)}`);
}
