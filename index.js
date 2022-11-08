
const { largeNumber, cut3 } = require('./utilities/uti-1');
const { sum, concat } = require('./utilities/uti-2');


//finding the largest number in an array
const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const largestNumber = largeNumber(arrayNum);
console.log(largestNumber);

//removing the 3rd item in an array
const removeThridItem = cut3(arrayNum);
console.log(removeThridItem); 

//finding the sum of an array
const arrayOne = [1, 2, 3, 4];
const arrayTwo = [5, 5, 3, 4];

const sumArray = sum(arrayOne);
console.log(sumArray);

const concatArray = concat(arrayOne, arrayTwo);
console.log(concatArray);