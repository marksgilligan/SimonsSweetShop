//function to pack whole bags with sweets and deduct that amount from the sweets total
export function packSweets(sweets: number, bagsArray: number[], index: number){
    //work out number of full bags that can be filled
    let bagNumber: number = Math.floor(sweets / bagsArray[index])
    //calculate remaining sweets after bags have been filled
    const remainingSweets: number = sweets - (bagNumber * bagsArray[index]) 
    //return bag number and remaining sweet counts in object   
    return {bagNumber, remainingSweets}
}