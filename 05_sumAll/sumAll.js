const sumAll = function(start,end) {
    //If start is greater than the end, swap the variables (THANKS STACK OVERFLOW)
    if (start > end) {
        end = [start, start = end][0]
        //Check for negative numbers, return ERROR
    } else if (start < 0 || end < 0) {
        return "ERROR"
        //Check for non-number values at the start or end
    } else if (typeof start != "number" || typeof end != "number") {
        return "ERROR"
    }
    //Store sum into total 
    let total = 0;
    //For every value between the start and the end
    for (let i = start; i <= end; i++) {
        //Add that value to the total
        total += i;
    }
    //Return the total
    return total
};

// Do not edit below this line
module.exports = sumAll;
