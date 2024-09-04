// create object in Js

// const obj={
//     firstName:"Darshan",
//     lastName: "Gadakh"
// };

// console.log(obj.firstName);
// console.log(obj.lastName);


//  create method in object

// let person={
//     name:"Kumar",
//     age: 43,

//     details: function(){
//         return `${this.name} ${this.age}`;
//     }
// };
// console.log(person.details());


// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// function greet() {
//     console.log('Hello, World!');
// }

// person.greet=greet;

// person.greet();


// Object method shorthand for ES6

let person={
    firstName:'Abhishek',
    lastName:'kumar',
    greet(){
        console.log(`FullName ${this.firstName} ${this.lastName}`);
        
    }
}

person.greet();

// contructor function