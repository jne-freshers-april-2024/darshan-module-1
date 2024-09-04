// situation where callbacks are nested withib other callback in the degree where code is difficult to read
// old pattern to handle asychronous function

function getCheese(callback){
    setTimeout(()=>{
        console.log('get cheese');
        callback();
    }, 2000);
}

function getdough(callback){
    setTimeout(() => {
        console.log("get dough");
        callback();
    }, 2000);
}

function getpizza(callback){
    setTimeout(() => {
        console.log("get pizza")
        callback();
    }, 2000);
}

getCheese(()=>{
    getdough(()=>{
        getpizza(()=>{
            console.log("pizza is deliver");
        })
    })
})

//  Callback hell refers to a situation in programming, particularly in JavaScript, where multiple nested callbacks are used, 
//  leading to code that is difficult to read and maintain.