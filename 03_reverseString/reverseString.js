const reverseString = function (string) {
    //Create an array for the list of letters
    let stringArray = string.split("");
    //Reverse array
    let reverseArray = stringArray.reverse();
    //Convert to a string afterwards
    reverse = reverseArray.join("");
    //PROFIT
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
