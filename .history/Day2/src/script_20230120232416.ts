const myFunc = (name:string, age:number):object =>{
    let isAdult = age>=18 ? true:false;
    return {name, age, isAdult}; // return object
    // return `${name}, ${age}, ${isAdult}`; // return strings
}
// console.log(myFunc("Khalid Hossian", 22));

// console.log(myFunc("Jannatul Fardows", 22));

// type alias 
type StringOrNumber = string | number;
type user = {
    name: string,
    age:number
}


const userInfo = (user:user, id:StringOrNumber):string =>{
    return(`User Info: ${user.name}, ${user.age}, User Id: ${id}`);
}
const user1 = userInfo({name:"Khalid Hossain", age:22}, "193-011-011");
// console.table(user1);

//! function signature 
let Customer : (user:user, id:StringOrNumber, product:string) => object;

Customer = (user, id, productName) =>{
    return {user, id, productName};
}

const customer1 = Customer({name:"Khalid Hossain", age:22}, 193011011, "Laptop")
console.log(customer1);


//? function overloading
function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:number, b:number, c:number):number;
function add(a:string, b:string, c:string):string;
function add(a:any, b:any, c?:any):any{
    if(c){
        return a+b+c;
    }
    return a+b;
}

console.log(add(1,2,5));

//? optional parameter
function add2(a:number, b:number, c?:number):number{
    if(c){
        return a+b+c;
    }
    return a+b;
}

console.log(add2(1,2,5));