"use strict"; //treat all JS code as newer JS 

//alert("hello") //since we are using node JS and not browser alert cannot be used

console.log(3
    +3) //not preferred since code should be readable

let name="ishaa"
let age=22
let isLoggedIn=true
let state=null

const id=Symbol('123')
const ide=Symbol('123')
console.log(id==ide) //false 

const n=34465634665673n
console.log(typeof n) //bigInt

console.log(typeof null) //output will be object
console.log(typeof undefined) //output will be undefined

//PRIMITIVE DATA TYPES
//number =>2^53
//bigInt
//string =>""
//boolean =>true/false
//null =>standalone value
//undefined =>when we explicitly give value as undefined or do not specify any value to the variable
//symbol =>unique

const objs =["man","apples",1,false] //array can have value of different types 
let myObj={
    name:"isha",
    age:23
} //object
console.log(typeof myObj)
const myFunc=function(){
    console.log("helloo");
} //function

//NON PRIMITIVE DATA TYPES (**data type will be functions for all**)
//Arrays
//objects
//functions

//****************************************************************************************************** */

//STRINGS

let repo=1
console.log(`hello my name is ${name} and my repo count
is ${repo}`)

const game=new String('mario')

console.log(game[0]) //m
console.log(game.__proto__) //{}
console.log(game.length) //5
console.log(game.toUpperCase()) //MARIO
console.log(game.charAt(2)) //r
console.log(game.indexOf('r')) //2