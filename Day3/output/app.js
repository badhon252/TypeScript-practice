import { Customer } from "./classes/classes.js";
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
// customer1.info();
// console.log(customer1.getEmail());
// Generics
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh"
});
let response1 = {
    status: 200,
    type: "good",
    data: ["Khalid", "Hossain", "Badhon"]
};
// console.log(response1);
var RTyp;
(function (RTyp) {
    RTyp[RTyp["SUCCESS"] = 0] = "SUCCESS";
    RTyp[RTyp["FAILURE"] = 1] = "FAILURE";
    RTyp[RTyp["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RTyp[RTyp["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RTyp || (RTyp = {}));
;
const response = {
    status: 200,
    type: RTyp.SUCCESS,
    data: {
        name: "Khalid Hossain",
        age: 22
    }
};
// console.log(response);
//! TUPLES
let a = ["a", 1, { p: 2 }];
// TUPLES
let b = ["a", 1, { p: 2 }];
// a[0] = 2;
// b[1] = "2";
console.log(a);
