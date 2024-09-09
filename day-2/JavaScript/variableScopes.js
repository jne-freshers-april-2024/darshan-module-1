// global Scope is accessible through


// var message = 'Hi';       // scope is global 

// function say() { 
//     var message = 'Hello';  // block scopes 
//     console.log(message);
// }

// console.log(message);

// block  Scope is accessible with in the { } 

function say(message) {
    if(!message) {
        let greeting = 'Hello'; // block scope
        console.log(greeting);
    }
    // console.log(greeting); // ReferenceError
}

say();