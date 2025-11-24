const chai=()=>{
    let username="isha"
    console.log(this) //{}
    console.log(this.username) //undefined
}
chai()

const addtwo=(n1,n2)=> n1+n2 //return keyword is considered implicitly here
console.log(addtwo(3,4)) //7

const add=(n1,n2)=> { n1+n2} 
console.log(add(3,4)) //undefined

//when we use {} return keyword is necessary

