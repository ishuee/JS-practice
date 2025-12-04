//forEach loop

const coding=["js","ruby","python","java"]

coding.forEach( function (item) {
    console.log(item) 
} )

coding.forEach( (item)=> {
    console.log(item)
} )

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
}) 
/*
js 0 [ 'js', 'ruby', 'python', 'java' ]
ruby 1 [ 'js', 'ruby', 'python', 'java' ]
python 2 [ 'js', 'ruby', 'python', 'java' ]
java 3 [ 'js', 'ruby', 'python', 'java' ]
 */

const Mycoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

Mycoding.forEach( (item)=> {
    console.log(item.languageName)
/*javascript
python */
})