//array (can contain elements of various types)

const myArr=[0,1,2,3,4,5]
console.log(myArr[0])

//Array methods

myArr.push(6) //arrays in JS are resizable. Push adds element at the end of array
console.log(myArr) 

myArr.pop() //removes last element of array
console.log(myArr)

myArr.unshift(9) //adds element to start of array
console.log(myArr)

myArr.shift() //removes element from start of array
console.log(myArr)

console.log(myArr.includes(9)) //false
//tells whether element is present in array or not. 

const newArr = myArr.join(); //ed to create a new string by concatenating all elements of an array
console.log(newArr) //0,1,2,3,4,5
console.log(typeof newArr) //string

/****IMPORTANT */

console.log(myArr.slice(1,3)) //[ 1, 2 ]
//Extracts a portion of an array and returns a new array containing the extracted elements.
console.log(myArr) //[ 0, 1, 2, 3, 4, 5 ]
console.log(myArr.splice(1,3))  //[ 1, 2, 3 ]
// Modifies the original array by removing, replacing, or adding elements.
console.log(myArr) //[ 0, 4, 5 ]

const newAr=[9,10,11]
console.log(myArr.push(newAr)) //4
console.log(myArr) //[ 0, 4, 5, [ 9, 10, 11 ] ]
console.log(myArr[3][2]) //11
/*Array.prototype.push() method returns an integer representing the new length of the array, not the modified array itself.
 The console.log() function then displays this returned length
 */

const arr1=[11,12,13]
console.log(newAr.concat(arr1)) //[ 9, 10, 11, 11, 12, 13 ]
console.log(newAr) //[ 9, 10, 11 ]
//It does not modify the original strings or arrays but returns a new combined entity.

//push adds elements to existing array and concat creates a new array

const allelements=[...newAr , ...arr1]
console.log(allelements) //[ 9, 10, 11, 11, 12, 13 ]


const another=[1,2,3,[4,5,6],[7,[9,10]]]
const real=another.flat(1)
console.log(real) //[ 1, 2, 3, 4, 5, 6, 7, [ 9, 10 ] ]
const real1=another.flat(Infinity)
console.log(real1) //[1, 2, 3,  4, 5, 6, 7, 9, 10]


console.log(Array.isArray("isha")) //false
console.log(Array.from("isha")) //[ 'i', 's', 'h', 'a' ]
console.log(Array.from({name:"isha"})) //[]
/*
The object {name: "isha"} is a plain JavaScript object. It does not
possess a length property, nor does it implement the @@iterator protocol. 
Therefore, Array.from() cannot extract elements from it, resulting in an empty array.
*/

