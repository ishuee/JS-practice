//if statements

if(2!=="2") console.log("executed") //executed

//if else 

const temp=40
if(temp>35) console.log("high temp")
else console.log("low temp")
//high temp

const user=true
const debit=true
if(user && debit) console.log("allow to buy") //allow to buy

//switch statements

const month=6

switch(month){
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    default:
        console.log("default")
        break;
}

///Nullish Coalescing Operator (??):null undefined

let val1;
val1 = 5 ?? 10
console.log(val1) //5

val1=null ?? 10
console.log(val1) //10

var1= undefined ?? 15
console.log(var1) //15

//Ternary Operator

// condition ? true:false

const price=100

price>80 ?console.log("costly") : console.log("cheap")
//costly

