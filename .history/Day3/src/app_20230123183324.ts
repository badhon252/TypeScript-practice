import Customer from "./classes/classes.js"

/* let customer1 = new Customer("Khalid", "Hossain", 22);

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
    console.log({
        name,
        age
    }); 
}

let khalid = {
    firstName: "Khalid",
    lastName: "Hossain",
    age: 22
}

let Badhon = {
    firstName: "Khalid Hossain",
    lastName: " Badhon",
    age: 22
}

info(khalid)
info(Badhon) */

class Customer{
    constructor(
        private _firstName: string,
        private _lastName: string,
        private _age: number
    ){}
    info(){
        console.log(`Customer name is ${this._firstName} ${this._lastName} and I am ${this._age} years old`);
    };
}
