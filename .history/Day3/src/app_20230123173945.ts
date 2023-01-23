import Customer from "./classes/classes.js"

let customer1 = new Customer("Khalid", "Hossain", 22);

console.log(customer1.firstName);
console.log(customer1.lastName);
customer1.age = 21;
console.log(customer1.age);
// Output
// Khalid
// Hossain
// 21

console.log(
    customer1.info("Laptop", 5)
);


let obj = {
    firstName: "Khalid",
    lastName: "Hossain",
    age: 22,
}

function info(data:object){
    let name = data.firstName + data.lastName;
    let age = data.age;
}

info(obj);