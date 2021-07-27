"use strict";
exports.__esModule = true;
exports.sortArray = void 0;
//function that sorts arrays largest to smallest and returns that sorted array
function sortArray(bagSizes) {
    bagSizes.sort(function (a, b) {
        return b - a;
    });
    return bagSizes;
}
exports.sortArray = sortArray;
