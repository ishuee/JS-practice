//Stack (primitive) 
//Heap (non-primmitive)

let myname="isha"
let anothername=myname
anothername="issuee"

console.log(myname) //isha
console.log(anothername) //issuee
//when we declare a variable in stack we get the copy of the original value

let user1={
    email:"user@google.com",
    upi:"user@ybl"
}

let user2=user1
user2.email="isha@google.com"
console.log(user1.email) //isha@google.com
console.log(user2.email) //isha@google.com
//when we declare a variable in stack i.e non-primitive we get a reference of the original value