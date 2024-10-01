let str="Good\r\nMorning";
// count length of String
console.log(str.length);
console.log(str)

//Concatenating strings
let str1="Hi";
let str2=str1+"Darshan";

console.log(str2);

// Concating using assignment oprators

let className = 'btn';
className += ' btn-primary'
className += ' none';

console.log(className);

//Converting String into other datatype

let num=12;
let s1=num.toString();
console.log(typeof(s1));  // converting number to string
let num2=Number(s1);
console.log(typeof(num2));


let s2="    Darshan     ";
console.log(s2);
let s3=s2.trim();
console.log(s3)


let s4=s3.slice(2,5); // retrun section String
console.log(s4)

let s6=s3.concat("gadakh");  // return string
console.log(s6)
let s5=s3.split("h")
console.log(s5);
