const numbers = [2,4,6,8]

const isEven =(number) => number%2 === 0;
console.log(numbers.every(isEven)) //true
console.log(numbers.some(isEven)) //true

const mixedNumbers = [2,4,7,8]
console.log(mixedNumbers.every(isEven)) //false
console.log(mixedNumbers.some(isEven)) //true