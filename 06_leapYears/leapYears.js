const leapYears = function(year) {
    //If year is divisible by 400, they ARE leap years
    if (year % 400 === 0) {
        return true
        //If year is divisible by 100, they are NOT leap years
    } else if (year % 100 === 0) {
        return false
        //If year is divisible by 4, they ARE leap years
    } else if (year % 4 === 0) {
        return true
        //If year is negative
    } else if (year < 0) {
        return false
        //If year is not a number
    } else if (typeof year != "number") {
        return false
        //If year is none of the above (ex. 1997)
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
