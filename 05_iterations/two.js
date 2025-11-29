//for of
//not useful for objects

const arr=[1,2,3,4,5]

for (const i of arr) {
    console.log(i) //1 2 3 4 5 
}

const greetings="helloo"
for (const greet of greetings) {
     console.log(greet) //h e l l o o
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('JP',"Japan")
map.set('IN',"India") //this entry will not be printed twice

console.log(map) 
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'JP' => 'Japan'
} */

  for (const key of map) {
    console.log(map)
  }
  /*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'JP' => 'Japan'
} */

 for (const [key,value] of map) {
    console.log(key,':', value)
  } 
  /*
  IN : India
USA : United States of America
JP : Japan */

const myObject ={
    'game1':'NFS',
    'gsme2':'SpiderMan'
}

//for (const [key,vlaue] of MyObject) {
    console.log(key,':', value)
}
//this will not be executed as objects cannot be iterated like this