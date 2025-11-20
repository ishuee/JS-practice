//object literals

const Jsuser= {
    name : "isha",
    "fullname":"isha agarwal",
    age : 23,
    location : "kolkata",
    email:"isha@google.com",
    isLoggedIn: false,
}

console.log(Jsuser.email) //isha@google.com
console.log(Jsuser["email"]) //isha@google.com
console.log(Jsuser["fullname"]) //isha agarwal

Jsuser.age=22
//Object.freeze(Jsuser) //cannot make any change sto Jsuer (object) now
Jsuser.age=24
console.log(Jsuser) 
/*{
  name: 'isha',
  fullname: 'isha agarwal',
  age: 22,
  location: 'kolkata',
  email: 'isha@google.com',
  isLoggedIn: false
}
  */

Jsuser.greeting = function(){
    console.log("helloo")
}

Jsuser.greeting2 = function(){
    console.log(`helloo ${this.name}`)
}

console.log(Jsuser.greeting) //undefined
console.log(Jsuser.greeting()) //first unfreeze 
//helloo

console.log(Jsuser.greeting2()) //helloo isha

/////////////////////////////////////////////////////////////////

//singleton objects

const tinderuser = new Object() 

tinderuser.id="123abc"
tinderuser.name="sam"
tinderuser.isLoggedIn= false

console.log(tinderuser) //{ id: '123abc', name: 'sam', isLoggedIn: false }

