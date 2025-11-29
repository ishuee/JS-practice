//for in loops
//not useful for maps

const myObj={
    js:'javascript',
    cpp:'C++',
    rb:'ruby'
}

for (const key in myObj) {
    console.log(key ,':' ,myObj[key])
}
/*js : javascript
cpp : C++
rb : ruby*/

const arr=[1,2,3,4,5,6]
for (const key in arr) {
    console.log(key)
} //it gives indexes for arrays
/*
0
1
2
3
4
5
*/

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('JP',"Japan")
map.set('IN',"India")

for (const key in map) {
   console.log(key) 
} //does not print anything 



