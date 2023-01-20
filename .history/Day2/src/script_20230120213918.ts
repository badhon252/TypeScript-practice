const myFunc = (name:string, age:number):object =>{
    let isAdult = age>=18 ? true:false;
    return {name, age, isAdult}; // return object
    // return `${name}, ${age}, ${isAdult}`; // return strings
}
console.log(
    myFunc("Khalid Hossian", 22)
);
console.log(
    myFunc("Jannatul Fardows", 22)
);

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
console.table(user1);


// function signature 
let Customer : (user:user, id:StringOrNumber, product:string) => any;

Customer = (user, id, productName) =>{
    return(`User Info: ${user.name}, ${user.age}, User Id: ${id}, Product Name: ${productName}`);
}

const customer1 = Customer({name:"Khalid Hossain", age:22}, "193-011-011", "Keybord")
