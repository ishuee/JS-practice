//var has global scope 

let a=100
if(true){
    let a=300
}
console.log(a) //100 

function one(){
    const username="isha"

    function two(){
        const website="youtube"
        console.log(username) //isha
    }
   
    two()
}
one()

// +++++++++++++++++++interesting+++++++++++++++++++++

console.log(addone(5)) //6
function addone(num){
    return num+1
}

addTwo(5) //Cannot access 'addTwo' before
const addTwo= function(num){
    return num+2
}
