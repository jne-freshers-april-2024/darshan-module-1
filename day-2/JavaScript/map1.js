// let user = new Map();
// user.set(1, 'kunal');
// user.set(2, 'kumar');
// user.set(3, 'Deva');
// user.set(4, 'Vilas');
// console.log(user);


// console.log(typeof(user)); 

// console.log(user instanceof Map);
// console.log(user.entries());  //return all entries in key value pair

// console.log(user.values()) // retrun all values in map

// console.log(user.keys());   // retrun all key in map
// console.log(user.delete(3)); // retrun true if element present in map

// console.log(user.entries());

// user.forEach((value, key) => {
//     console.log(`Key: ${key}, Value: ${value}`);
//   });

// console.log(user.get(9));  //return element is with provided key if key is not present in return undefine       

// console.log(user.size);

let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);

for(let getKeys of userRoles.keys()){
    console.log(getKeys);
}

for(let getValues of userRoles.values()){
    console.log(getValues);
}

