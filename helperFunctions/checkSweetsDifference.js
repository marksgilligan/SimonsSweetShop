"use strict";
exports.__esModule = true;
exports.checkSweetsDifference = void 0;
//function that will check which bag to use if one is required to be partially filled
function checkSweetsDifference(sweets, bagsArray) {
    //create empty array for values
    var remainingSweets = [];
    var remainingSweetCount = sweets;
    //loop over bagsArray
    for (var index = 0; index < bagsArray.length; index++) {
        //work out how many bags can be filled fully by dividing into and roudning down
        var bagNumber = Math.floor(remainingSweetCount / bagsArray[index]);
        //work out the excess sweet count if another bag was added ontop
        var excessSweetCount = remainingSweetCount - ((bagNumber + 1) * bagsArray[index]);
        //remove sweets as they're bagged
        remainingSweetCount = remainingSweetCount - (bagNumber * bagsArray[index]);
        //turn the negative excess sweet count number positive and compare with current bag size, if they are even then the bag is the perfect size
        if (Math.abs(excessSweetCount) === bagsArray[index]) {
            //Push 0 to ensure it is the highest number in the array going forwards, this will stop the other functions filling bags after no sweets remain
            remainingSweets.push(0);
            index = bagsArray.length;
        }
        else {
            //push the negative excess sweet count to the array to be used in calculations in where to stop filling bags
            remainingSweets.push(excessSweetCount);
        }
    }
    //return the array
    return remainingSweets;
}
exports.checkSweetsDifference = checkSweetsDifference;
