// const p= new Promise((resolve , reject)=>{
//     let a=10;
//     if(a==10){
//         resolve('Success');
//     }else{
//         reject('Failed');
//     }

// });

// p.then((msg)=>{
//     console.log("condition is true")

// }).catch((error)=>{
//     console.log("condition is false")
// });


/* Promises are a fundamental feature in JavaScript for managing asynchronous operations. They provide a 
cleaner and more powerful way to handle async tasks compared to traditional callback-based approaches */

//Normal callback

// const callback = function (err, success) {
//     if (err) {
//         console.log("Geek is very sad!");
//     }
//     else {
//         console.log("Geek is optimistic, "
//             + "thus becomes successful");
//     }
// }

// const caller = function (status, callback) {
//     if (status === 'Happy')
//         callback(null, true);
//     else {
//         callback(new Error(), false);
//     }
// }

//Converting callback to promises

// const caller = function(status){
//     return new Promise((resolve, reject)=>{
//         if (status === 'Happy'){
//             resolve()
//         }
//         else {
//             reject();
//             }
//     })
// }

// caller("Happy").then((message)=>{
//     console.log("Geek is optimistic, " + "thus becomes successful");
// }).catch((error)=>{
//     console.log("Geeks is very sad: ");
// })

let a=true;
const recordVideo1=new Promise((resolve, reject)=>{
    if(a){
        resolve('Video 1 records');
    }else{
        reject('Video 1 not recoded')
    }
});

const recordVideo2=new Promise((resolve, reject)=>{
    if(a){
        resolve('Video 2 records');
    }else{
        reject('Video 2 not recoded')
    }
});

const recordVideo3=new Promise((resolve, reject)=>{
    if(a){
        resolve('Video 3 records');
    }else{
        reject('Video 3 not recoded')
    }
});

Promise.all([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then((msgs)=>{
    console.log(msgs);
}).catch((error)=>{
    console.log(error);
});

Promise.race([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then((msgs)=>{
    console.log(msgs);
}).catch((error)=>{
    console.log(error);
});