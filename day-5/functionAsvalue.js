
function user1(){
    console.log("Hi Darshan");
}

const user2 = (()=> console.log("Hello mohit"));

setTimeout(user1, 2000);
setTimeout(user2, 3000);

setTimeout(()=>{
    console.log("Hello");
    
},5000)
