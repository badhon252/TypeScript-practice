import {Customer} from "./classes/classes.js"


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

let customer1 = new Customer("Khalid Hossain", 22, "dev.khalidhossain@gmail.com");
customer1.info();
console.log(customer1.getEmail());


// Generics

const addID = <
T extends {
    name: string;
    age: number;
}
>(obj:T)=>{
    let id = Math.floor(Math.random() * 100);
    return {...obj, id};
};

let user = addID({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh"
})

console.log( user);



// Generic Interface

interface APIResponse<T>{
    status: number;
    type: string;
    data: T;
}

let response1: APIResponse<string[]> = {
    status: 200,
    type: "good",
    data: ["Khalid", "Hossain", "Badhon"]
}

console.log(response1);