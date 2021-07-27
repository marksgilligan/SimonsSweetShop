//import functions
import { sortArray } from "./sortArray"
import { checkSweetsDifference } from "./checkSweetsDifference"
import { packSweets } from "./packSweets"
    
//function to take in order details and return object detailing the bags to use to pack the order
export function handleOrder(sweets: number, bagsArray: number[]){
    //sort the incoming array from highest to lowest
    const sortedBagsArray: number[] = sortArray(bagsArray)
    //create an array showing the remaining sweets if each bag would be overfilled to be used later when determining if a bag should be part filled to complete the with the least amount of sweet waste
    const sweetsDifferenceArray: number[] = checkSweetsDifference(sweets, sortedBagsArray)
    //get the index of the first posistion the lowest number occurs
    const lowestWastedSweetIndex: number = sweetsDifferenceArray.indexOf(Math.max.apply({}, sweetsDifferenceArray))
    //set sweet count 
    let sweetCount: number = sweets
    //declare the initial object where the results will be stored
    let bagCount: object = {}
    //for loop limited by the lowest sweet wasted index
    for (let index: number = 0; index <= lowestWastedSweetIndex; index++) {
        //loop over each packValue and return how many bags get filled and how many sweets are left over
        const results = packSweets(sweetCount, sortedBagsArray, index)
        if(lowestWastedSweetIndex === index && sweetsDifferenceArray[lowestWastedSweetIndex] !== 0){
            // add an additional bag to the results object of the current bag the loop is on
            bagCount[sortedBagsArray[index]] = results.bagNumber + 1
        } else if (results.bagNumber > 0){
            //add the number of bags to the results object
            bagCount[sortedBagsArray[index]] = results.bagNumber
        }
        //update the sweetcount based on the remaining sweets
        sweetCount = results.remainingSweets
    }
    //return the results object
    return bagCount
}