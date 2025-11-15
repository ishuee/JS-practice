const accountId=14453
/*
const prevents reassignment, NOT mutation.
When you use const with an array, you can't reassign the variable to a new array, 
but you can modify the contents of the existing array.

const myArray = [1, 2, 3];

// ✅ These work - modifying the array contents
myArray.push(4);           // [1, 2, 3, 4]
myArray[0] = 99;           // [99, 2, 3, 4]
myArray.pop();             // [99, 2, 3]

// ❌ This fails - trying to reassign the variable
myArray = [5, 6, 7];  
*/ 

let accountEmail="isha@google.com"
var acccountPassword="12345"
accountCity="Jaipur"
let accountState

//accountId=2

accountEmail="issuee@gmail.com"
acccountPassword="2121211"
accountCity="kolkata"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope 
*/
console.table([accountEmail,accountId,accountCity,acccountPassword,accountState]);