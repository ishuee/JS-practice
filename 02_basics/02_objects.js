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

const regularUser={
  email:"some@gmail.com",
  fullname:{
    name:{
      firstname:"isha",
      lastname:"agarwal"
    }
  }
}

console.log(regularUser.fullname) //{ name: { firstname: 'isha', lastname: 'agarwal' } }
console.log(regularUser.fullname.name.firstname) //isha

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3={obj1,obj2}
console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj4=Object.assign({},obj1,obj2) //{} is the source 
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5={...obj1,...obj2} //spread operator
console.log(obj5) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(Object.keys(tinderuser)) //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderuser)) //[ '123abc', 'sam', false ]
console.log(Object.entries(tinderuser)) 
//[ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderuser.hasOwnProperty('isLoggedIn')) //true

//DE-STRUCTURE

const course={
  name:"js",
  price:"999",
  instructor:"hitesh"
}

const {instructor:inst}=course 
console.log(inst) //hitesh