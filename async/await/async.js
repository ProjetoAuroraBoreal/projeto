

async function f(){
    let promisse = new Promose((resolve, reject) =>{
        setTimeout(() => resolve("Finalizou!"), 3000)
    });
    
    let result = await promise; //espera que a promessa termine (*)
    
    console.log(result); //"finalizou"
    }
    f();
    