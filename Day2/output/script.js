"use strict";
const myFunc = (name, age) => {
    let isAdult = age >= 18 ? true : false;
    return { name, age, isAdult }; // return object
    // return `${name}, ${age}, ${isAdult}`; // return strings
};
console.log(myFunc("Khalid Hossian", 22));
console.log(myFunc("Jannatul Fardows", 22));
const userInfo = (user, id) => {
    return (`User Info: ${user.name}, ${user.age}, User Id: ${id}`);
};
const user1 = userInfo({ name: "Khalid Hossain", age: 22 }, "193-011-011");
console.table(user1);
