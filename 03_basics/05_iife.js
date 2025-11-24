//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`db connected`)
})();

((name)=>{ 
    //unnamed IIFE
    console.log(`DB CONNECTED AGAIN ${name}` ) //DB CONNECTED AGAIN isha
})("isha");

