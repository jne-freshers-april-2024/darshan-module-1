// creating array using array constructor

let arr1= new Array();
console.log(arr1);


let arr2 = Array(10);
console.log(arr2)

let arr3=  new Array(11,12,13,14,15);
console.log(arr3);

// creating array in literals ways 
// adding element from last

let arrays=[12,43,54,76,10,90];
console.log(arrays);
console.log("length of array :"+arrays.length)
arrays.push(23)
console.log(arrays);
arrays.pop();
console.log(arrays);
console.log("length of array :"+arrays.length)

//adding element in from starting

arrays.unshift(11);
console.log(arrays);
arrays.shift();
console.log(arrays);
console.log("length of array :"+arrays.length)

// sort array
arrays.sort()
console.log(arrays);
arrays.reverse();
console.log(arrays);