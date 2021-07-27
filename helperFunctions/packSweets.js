"use strict";
exports.__esModule = true;
exports.packSweets = void 0;
//function to pack whole bags with sweets and deduct that amount from the sweets total
function packSweets(sweets, bagsArray, index) {
    //work out number of full bags that can be filled
    var bagNumber = Math.floor(sweets / bagsArray[index]);
    //calculate remaining sweets after bags have been filled
    var remainingSweets = sweets - (bagNumber * bagsArray[index]);
    //return bag number and remaining sweet counts in object   
    return { bagNumber: bagNumber, remainingSweets: remainingSweets };
}
exports.packSweets = packSweets;
