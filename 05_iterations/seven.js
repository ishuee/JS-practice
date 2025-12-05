//reduce

const myNums=[1,2,3,4]

const myTotal=myNums.reduce( (acc,curr)=> {
    console.log(`acc:${acc} and current:${curr}`)
    return acc+curr
},0 )

console.log(myTotal)
/*
acc:0 and current:1
acc:1 and current:2
acc:3 and current:3
acc:6 and current:4
10
 */

const cart=[
    {
        item:"js course",
        price:2999
    },
    {
        item:"python course",
        price:999
    },
    {
        item:"ios course",
        price:29990
    }
]

const amount=cart.reduce( (acc,item)=>item.price+acc ,0)
console.log(amount) //33988

