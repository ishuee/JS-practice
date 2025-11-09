console.log("2" >1)  //true
console.log("02">1)  //true

console.log(null>0)  //false
console.log(null==0) //false
console.log(null>=0) ///true

/*
the reason is that an equality check == and comparsions > < >= <= works differently.
Comparsions convert null to a number treating it as 0 that's why null>=0 is true but null==0 is false
*/

console.log("2"==2) //true
console.log("2"===2) //false
//strict check === i.e. checks value as well as data type