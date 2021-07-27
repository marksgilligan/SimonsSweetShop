"use strict";
exports.__esModule = true;
exports.handleOrder = void 0;
//import functions
var sortArray_1 = require("./sortArray");
var checkSweetsDifference_1 = require("./checkSweetsDifference");
var packSweets_1 = require("./packSweets");
//function to take in order details and return object detailing the bags to use to pack the order
function handleOrder(sweets, bagsArray) {
    //sort the incoming array from highest to lowest
    var sortedBagsArray = sortArray_1.sortArray(bagsArray);
    //create an array showing the remaining sweets if each bag would be overfilled to be used later when determining if a bag should be part filled to complete the with the least amount of sweet waste
    var sweetsDifferenceArray = checkSweetsDifference_1.checkSweetsDifference(sweets, sortedBagsArray);
    //get the index of the first posistion the lowest number occurs
    var lowestWastedSweetIndex = sweetsDifferenceArray.indexOf(Math.max.apply({}, sweetsDifferenceArray));
    //set sweet count 
    var sweetCount = sweets;
    //declare the initial object where the results will be stored
    var bagCount = {};
    //for loop limited by the lowest sweet wasted index
    for (var index = 0; index <= lowestWastedSweetIndex; index++) {
        //loop over each packValue and return how many bags get filled and how many sweets are left over
        var results = packSweets_1.packSweets(sweetCount, sortedBagsArray, index);
        if (lowestWastedSweetIndex === index && sweetsDifferenceArray[lowestWastedSweetIndex] !== 0) {
            // add an additional bag to the results object of the current bag the loop is on
            bagCount[sortedBagsArray[index]] = results.bagNumber + 1;
        }
        else if (results.bagNumber > 0) {
            //add the number of bags to the results object
            bagCount[sortedBagsArray[index]] = results.bagNumber;
        }
        //update the sweetcount based on the remaining sweets
        sweetCount = results.remainingSweets;
    }
    //return the results object
    return bagCount;
}
exports.handleOrder = handleOrder;
