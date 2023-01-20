"use strict";
const myFunc = (name, age) => {
    let isAdult = age >= 18 ? true : false;
    return { name, age, isAdult }; // return object
    // return `${name}, ${age}, ${isAdult}`; // return strings
};
const userInfo = (user, id) => {
    return (`User Info: ${user.name}, ${user.age}, User Id: ${id}`);
};
const user1 = userInfo({ name: "Khalid Hossain", age: 22 }, "193-011-011");
// console.table(user1);
//! function signature 
let customer;
customer = (user, id, productName) => {
    return { user, id, productName };
};
const customer1 = customer({ name: "Khalid Hossain", age: 22 }, 193011011, "Laptop");
console.log(customer1);
function add(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
console.log(add(1, 2, 5));
//? optional parameter
function add2(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
console.log(add2(1, 2, 5));
//? default parameter  
function add3(a, b, c = 0) {
    return a + b + c;
}
console.log(add3(1, 2, 5));
//? rest parameter
function add4(...a) {
    let total = 0;
    console.log(a);
    a.forEach((item) => {
        total += item;
    });
    return total;
}
console.log(add4(1, 2, 5, 6, 7, 8, 9, 10));
//? function callback
function add5(a, b, cb) {
    const result = a + b;
    cb(result);
}
add5(1, 2, (result) => {
    console.log(result);
});
