// windowIndexCalculator.js

function getWindowIdx(noOfPeriods, currentMonth) {
    let windowIdx = -1; // Default value for noofPeriods = 12

    if (noOfPeriods === 1) {
        windowIdx = 0;
    } else if (noOfPeriods === 2) {
        windowIdx = (currentMonth <= 6) ? 0 : 1;
    } else if (noOfPeriods === 4) {
        if (currentMonth <= 3) {
            windowIdx = 0;
        } else if (currentMonth <= 6) {
            windowIdx = 1;
        } else if (currentMonth <= 9) {
            windowIdx = 2;
        } else {
            windowIdx = 3;
        }
    } else if (noOfPeriods === 12) {
        windowIdx = currentMonth - 1;
    } else {
        // Handle invalid noOfPeriods
        return "Invalid noOfPeriods value";
    }

    return windowIdx;
}

module.exports = getWindowIdx;
