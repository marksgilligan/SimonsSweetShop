# Simons Sweet Shop Challenge

A **nodejs** typescript server to calculate the correct amount of bags required to package a number of sweets.

Bags quantities and total sweets are decided by the user by editing a config file explained below.

## Installation

Install dependencies 
```
npm i
```
## Usage
### To run
Using nodemon:
``` 
npm run dev 
```
Or:
``` 
node index.js 
```

### To test
```
npx jest
```
### To set up variables

Edit input.values.config 
```
{
    "totalSweetQuantity": 12000,
    "sweetBagSizeArray": [5000, 200, 2000, 1000, 500]
}
```
**totalSweetQuantity**: must be a number

**sweetBagSizeArray**: must an array of numbers

Results are printed in the console or available when visiting the server URL\
Default: ```http://127.0.0.1:3000/```

## Notes 
**Do not directly edit any JavaScript(.js) files**

As a TypeScript nodejs server if any changes are made to the following files they will need to be compiled to work:

index.ts\
checkSweetsDifference.ts\
handleOrder.ts\
packSweets.ts\
sortArray.ts

To compile run in the terminal
```
tsc
```
This has been scripted to ignore node_modules and any testing files in the tests folder and so doesn't require any further commands.

Author: Mark Gilligan