import { sortArray } from '../helperFunctions/sortArray';
import { packSweets } from '../helperFunctions/packSweets';
import { checkSweetsDifference } from '../helperFunctions/checkSweetsDifference';
import { handleOrder } from '../helperFunctions/handleOrder'

describe('the sweets array is sorted largest to smallest when', ()=>{
  test('the array is already in order', () => {
    expect(sortArray([5000,2000,1000,500, 250])).toEqual([5000, 2000, 1000, 500, 250]);
  });
  test('the array is not in order and made up of small numbers',()=>{
    expect(sortArray([1,4,8,3,12])).toEqual([12, 8, 4, 3, 1]);
  })
  test('the array is not in order and made up of random numbers',()=>{
    expect(sortArray([10,43,18,563,13562])).toEqual([13562, 563, 43, 18, 10]);
  })
})

describe('an array of sweets leftover is created', ()=>{
  test('when the sweets fit into bags with none remaining early in the sequence',()=>{
    expect(checkSweetsDifference(12000, [5000,2000,1000,500,250])).toEqual([-3000, 0])
  })
  test('when the sweets fit into bags with none remaining later in the sequence',()=>{
    expect(checkSweetsDifference(4500, [600,320,125,90,50])).toEqual([-300, -20, -75, -40, 0])
  })
  test('when there are leftover sweets throughtout the sequence', ()=>{
    expect(checkSweetsDifference(3253, [600,540,539,12,7])).toEqual([-347, -287, -286, -11, -6])
  })
})

describe('sweets are packed correctly into bags and the correct quantity is remaining', ()=>{
  test('when there is a bag to fill and sweets left over', ()=>{
    expect(packSweets(6000, [5000], 0)).toEqual({'bagNumber': 1, 'remainingSweets': 1000})
  })
  test('when there is more than one bag to fill and sweets left over', ()=>{
    expect(packSweets(12000, [5000], 0)).toEqual({'bagNumber':2, 'remainingSweets':2000})
  })
  test('when the is one bag to fill and no sweets left over', ()=>{
    expect(packSweets(5, [5], 0)).toEqual({'bagNumber': 1, 'remainingSweets': 0})
  })
  test('when there is more than one bag to fill and no sweets left over', ()=>{
    expect(packSweets(250, [125], 0)).toEqual({'bagNumber': 2, 'remainingSweets': 0})
  })
  test('when the bag is too small so all sweets are leftover', ()=>{
    expect(packSweets(5000, [6000], 0)).toEqual({'bagNumber': 0, 'remainingSweets': 5000})
  })
})

describe('create an order object',()=>{
  test('TASK EXAMPLE TEST',()=>{
    expect(handleOrder(1, [5000,2000,1000,500,250])).toEqual({250: 1})
  })
  test('TASK EXAMPLE TEST',()=>{
    expect(handleOrder(250, [5000,2000,1000,500,250])).toEqual({250: 1})
  })
  test('TASK EXAMPLE TEST',()=>{
    expect(handleOrder(251, [5000,2000,1000,500,250])).toEqual({500: 1})
  })
  test('TASK EXAMPLE TEST',()=>{
    expect(handleOrder(501, [5000,2000,1000,500,250])).toEqual({250: 1, 500: 1})
  })
  test('TASK EXAMPLE TEST',()=>{
    expect(handleOrder(12001, [5000,2000,1000,500,250])).toEqual({5000: 2, 2000: 1, 250: 1})
  })
  test('where the sweet quantity fits into bags exactly',()=>{
    expect(handleOrder(12000, [5000,2000,1000,500,250])).toEqual({5000:2, 2000:1})
  })
  test('where the sweet quantity doesnt fit into the bag exactly',()=>{
    expect(handleOrder(2438, [5000,2000,1000,500,250])).toEqual({2000:1, 500:1})
  })
})
