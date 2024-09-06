const items = [
    {
        name: 'Bikes',
        price: 200
    },
    {
        name: 'TV',
        price: 100
    },
    {
        name: 'Album',
        price: 20
    },
    {
        name: 'Book',
        price: 400
    },
    {
        name: 'phone',
        price: 500
    },
    {
        name: 'Computer',
        price: 1000
    },
    {
        name: 'KeyBoard',
        price: 150
    }
]

// let filterItems= items.filter((item) => item.price>200);

// filterItems.forEach(item => {
//     console.log("item name :" + item.name+" , item  price: " +item.price)
// }); 

// console.log(items);

// items.push(  {
//     name:'mouse',   //return new length of array
//     price:300}
// )


// let foundItem =items.find((item)=>{
//     return item.name === 'KeyBoard';  // return the value of a element in array
// })

// console.log(foundItem); 


// let hasExpensiveItem=items.some((item)=>{

//     return item.price <0;     // retrun the boolean value if condition is true os false

//     })

// console.log(hasExpensiveItem)

const findTotalPrice = items.reduce((currentPrice, item )=> item.price + currentPrice, 0);

console.log(findTotalPrice);



