// Arithmatic  operators (+,-,*,\);

let addNumber = 12 + 14;
console.log(addNumber);

let addString = '12'+'13';
console.log(addString);

let subNumber = 62 - 14;
console.log(subNumber);

let subString = '1'-'1';
console.log(subString);

let a=Infinity + 12;
console.log(a);

let multiplication1 = 62 * 14;
console.log(multiplication1);

let  multiplication2= '2'*'8';
console.log(multiplication2);

 //     operations on object values

let energy={
    valueOf(){
    return 100;
    },
}

let currentEnergy =  energy - 90;
console.log(currentEnergy);
    currentEnergy= energy * 0.5;
    console.log(currentEnergy)

//Remailder operators

let remainder= 5%2
console.log(remainder);

let remainder1= -15% 4;
console.log(remainder1);


// assignment operators

let v1=90; v2=80;

v1 = v1+v2;
console.log(v1);
v1 +=v2;
console.log(v1);

// comparator operator

let val1=12, val2=13;
console.log(val1>val2);
console.log(val1<val2);
console.log(val1==val2);
console.log(val1!=val2);

let apple = {
    valueOf: function () {
      return 10;
    },
  };
  
  let orange = {
    toString: function () {
      return '20';
    },
  };
  console.log(apple >10); 
  console.log(orange == 20);

  // logical Operator

  let eligible=true, requirment=false;
  console.log(eligible && requirment);
  console.log(eligible || requirment);
  