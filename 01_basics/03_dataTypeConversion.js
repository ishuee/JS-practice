//TO Number

let age="23"
age= Number(age)
console.log(typeof age)
console.log(typeof age)

let score="33abs"
score=Number(score)
console.log(typeof score) //output will be number
console.log(score) //ouput will be NaN i.e not a number

let dob=null
dob=Number(dob)
console.log(typeof dob) 
console.log(dob) //output will be 0 

let qu=undefined
qu=Number(qu)
console.log(typeof qu) //output will be number
console.log(qu) //output will be NaN

let on=true
on=Number(on)
console.log(typeof on) //output will be number
console.log(on) //output will be 1

/*
"33" =>33
"33abc"=>NaN
null =>0
undefined =>NaN
true=1
*/

//To Boolean 

let loggedin=1
loggedin=Boolean(loggedin)
console.log(typeof loggedin) 
console.log(loggedin) //output will be true

let loggedout=null
loggedout=Boolean(loggedout)
console.log(typeof loggedout) 
console.log(loggedout) //output will be false

/*
1=>true
"" =>false
"isha" =>true
" " =>true
undefined=>false
null=false
*/





