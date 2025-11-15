//DATES (type is object)

let mydate=new Date() //object/instance of date
console.log(mydate.toDateString()) //Sat Nov 15 2025
console.log(mydate.toString()) //Sat Nov 15 2025 11:42:26 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toISOString()) //2025-11-15T11:42:26.747Z
console.log(mydate.toLocaleDateString()) //11/15/2025
console.log(mydate.toLocaleTimeString()) //11:42:26 AM

let myCreatedDate =new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

let myTimeStamp=Date.now() //a standard JavaScript method that returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (the Unix Epoch). This value is a timestamp representing the current time.
console.log(myTimeStamp)
console.log(myCreatedDate.getTime()) // returns the number of milliseconds since the Unix Epoch (January 1, 1970, 00:00:00 UTC)

