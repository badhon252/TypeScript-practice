import Customer from "./classes/classes.js"

let customer1 = new Customer("Khalid", "Hossain", 22);

// console.log(customer1.firstName);
// console.log(customer1.lastName);
// customer1.age = 21;
// console.log(customer1.age);
// Output
// Khalid
// Hossain
// 21

// console.log(
//     customer1.info("Laptop", 5)
// );


interface objectType {
    firstName: string, 
    lastName: string, 
    age: number
}

function info(data: objectType){
    let name = data.firstName + data.lastName;
    let age = data.age;
    return {
        name,
        age
    }
}

clg

console.log(info());