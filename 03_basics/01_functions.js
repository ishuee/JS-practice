function add(n1,n2){
    console.log(n1+n2)
}

const result=add(3,"4") //34
console.log("result:",result) //result: undefined

function adding(n1,n2){
    let result=n1+n2
    return result
}

const results=adding(3,"4") 
console.log("result:",results) //result: 34

function loginUsermessage(username){
    return `${username} just logged in`
}

loginUsermessage("isha") //prints nothing
console.log(loginUsermessage("isha")) //isha just logged in
console.log(loginUsermessage("")) // just logged in
console.log(loginUsermessage()) //undefined just logged in

function logUsermessage(username="sam"){
    return `${username} just logged in`
}
//sam is the default name

function calculateCartPrice(v1,v2,...n1 ){
    return n1
}

console.log(calculateCartPrice(200,400,500)) //[ 500 ]
console.log(calculateCartPrice(200,400,500,1000)) //[ 500, 1000 ]

const user={
    username:"isha",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user) //username is isha and price is 199

const myNewArray=[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray)) //500