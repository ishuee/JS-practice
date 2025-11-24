//this refers to current context

const user={
    username:"isha",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`)
        console.log(this)
        /*
        isha welcome to website
{
  username: 'isha',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
        */
    }
}

user.welcomeMessage() 
user.username="sam"
user.welcomeMessage() 
console.log(this) //{}

function chai(){
    console.log(this)
    let username="isha"
    console.log(this.username) //undefined
}

chai()  
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/

