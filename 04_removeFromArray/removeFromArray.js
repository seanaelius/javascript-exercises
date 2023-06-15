const removeFromArray = function (array, ...args) {
    //Store original array into a variable
    let originalArray = array;
    //Store arguments that I want to remove into a variable
    //For every item that I want to remove
    for (const removeItem of args) {
        //Look through each item in the original array
        originalArray.forEach((item) => {
            //If the item that I want to remove is in the array
            //Has to be exactly the same with triple equals
            if (item === removeItem) {
                //Splice Item
                originalArray.splice(originalArray.indexOf(item),1)
            }
        })
    }
    //After all items I want to remove are gone, return originalArray
    return originalArray
};

// Do not edit below this line
module.exports = removeFromArray;
