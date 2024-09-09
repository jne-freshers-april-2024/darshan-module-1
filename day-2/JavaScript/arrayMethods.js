let numberArray=[1,2,3,4,5,6,7,8,9,10];

let evenNumber= numberArray.filter(n=>n%2==0);  // used to filtering elemnt in given array
console.log(evenNumber);


let square=numberArray.map(n=>n*n);
console.log(square);

let sumOfAllElements=numberArray.reduce((a, b)=> a+b);
console.log(sumOfAllElements);