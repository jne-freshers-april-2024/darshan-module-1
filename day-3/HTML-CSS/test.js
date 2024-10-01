let users = [
    {
        id: 1,
        name: 'Abhay'
    },
    {
        id: 2,
        name: 'Darshan'
    },
    {
        id: 3,
        name: 'Rushi'
    }

]


// 1. filter users having id grreater than or equal to 2
// 2. create new user array with out modifying original user array
// every object should have new property called active : true 

// let filterUser = users.filter((id) => id >= 2);
// let filterUser = users.filter((user)=> {
//     if(user.id >= 2) {
//         return user;
//     }
// } )

// let filterUser = users.filter((user) => user.id >= 2)


// console.log(filterUser);

let newUser = users.map((user) => {
    // console.log(user);
    // user.active = true;
    user['active'] = true;
    user.setActive = true;
    return user;
})

console.log(newUser);
