/*
we can use set object to remove duplicate value from an array and the convert into
back to an array using the spread operator
*/

const arr = [1,2,2,3,3,3]

const uniqueArr = [...new Set(arr)]
console.log(uniqueArr)