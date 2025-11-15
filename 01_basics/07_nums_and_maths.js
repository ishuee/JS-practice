const score=400
console.log(score)

const balance=new Number(100.546) //using this we can use some functions on the variable
console.log(balance)

console.log(balance.toString().length) //output=3
console.log(balance.toFixed(2)) //number of decimals (output=100.55)

const no=123.896
console.log(no.toPrecision(3)) //124
console.log(no.toPrecision(5)) //123.90
//format a number to a specified number of significant digits, returning a string representation.
console.log(typeof no.toPrecision(5)) //string

const amount=100000
console.log(amount.toLocaleString()) //100,000

console.log(Number.MAX_VALUE) //1.7976931348623157e+308
console.log(Number.MIN_VALUE) //5e-324

//+++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++

console.log(Math) //Object [Math] {}
console.log(Math.abs(-3)) //3
console.log(Math.ceil(4.4)) //5
console.log(Math.max(3,6,7,4)) //7
console.log(Math.ceil(Math.random()*6)) //between 1 to 6