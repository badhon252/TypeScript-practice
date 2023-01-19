"use strict";
console.log("Hello typeScript!");
//! typed arrow function
let test = (a = 5, b = 6) => {
    console.log(a * b);
};
test();
let test2 = (a = 5, b = 6) => {
    console.log(a * b);
};
test2(2, 3);
//! I didn't declared the type of the value in this array
const array = [];
array.push(1);
array.push("Hello World!");
array.push(true);
array.push({ name: "John", age: 20 });
array.push(() => { console.log("Hello World!"); });
console.log(array);
//! typed array
const array2 = [];
array2.push(1);
array2.push(2);
console.log(array2);
//Union typed array
const array3 = [];
array3.push(1);
array3.push("Hello World!");
console.log(array3);
//Union typed array
const array4 = [];
array4.push(1);
array4.push("Hello World!");
array4.push(true);
console.log(array4);
//Union typed array
const array5 = [];
array5.push(1);
array5.push("Hello World!");
array5.push(true);
array5.push({ name: "John", age: 20 });
console.log(array5);
//Union typed array
const array6 = [];
array6.push(1);
array6.push("Hello World!");
array6.push(true);
array6.push({ name: "John", age: 20 });
array6.push(() => { console.log("Hello World!"); });
console.log(array6);
//Union typed array
let array7;
array7 = [];
array7.push(1);
array7.push("Hello World!");
array7.push(true);
array7.push({ name: "John", age: 20 });
console.log(array7);
//!typed object
let object1;
object1 = {
    name: "John",
    age: 20
};
object1.name = "Khalid";
object1.age = 22;
// object1.age = true; //? Type 'boolean' is not assignable to type 'number'.
// object1.age = "Hello World!"; //? Type 'string' is not assignable to type 'number'.
// object1.age = {name:"John", age: 20}; //? Type '{ name: string; age: number; }' is not assignable to type 'number'.
console.log("object1", object1);
//typed object
const object2 = Object.assign({}, object1
// isAdult: true //? Type '{ name: string; age: number; isAdult: boolean; }' is not assignable to type '{ name: string; age: number; }'.
//? Object literal may only specify known properties, and 'isAdult' does not exist in type '{ name: string; age: number; }'.
);
console.log("object2", object2);
//typed object
const object3 = Object.assign(Object.assign({}, object1), { isAdult: true });
console.log("object3", object3);
