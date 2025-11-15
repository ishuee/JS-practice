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

