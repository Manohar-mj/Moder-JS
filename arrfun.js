
let arr2=[11,22,33,44,55]
arr2.push(66) //add new number at end
console.log(arr2)

arr2.pop() // remove last number 
console.log(arr2)

arr2.shift() // remove first number
console.log(arr2)

arr2.unshift(11) //add new element at first index
console.log(arr2)


//change elements with index 

const arr3=[12,23,45,67,89]
arr3[0]= 101
console.log(arr3) // like this we can change any index values



//length of the value
console.log(arr3.length) // the length of the array3


// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.

const arr3=[12,23,45,67,89]
delete arr3[0]
console.log(arr3)

