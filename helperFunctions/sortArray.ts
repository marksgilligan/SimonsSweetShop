//function that sorts arrays largest to smallest and returns that sorted array
export function sortArray(bagSizes: number[]){
    bagSizes.sort((a: number, b: number)=>{
        return b - a
    })
    return bagSizes
}

