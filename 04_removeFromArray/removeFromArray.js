const removeFromArray = function (array, ...args) {
    //Store array into a variable
    let originalArray = array;
    //Store arguments into a variable
    let removeItems = args;
    //Look through each item in the original array
    originalArray.forEach((item) => {
        if (item == removeItems) {
            originalArray.splice(originalArray.indexOf(item), 1)
        }
    });
    return originalArray
};

// Do not edit below this line
module.exports = removeFromArray;
